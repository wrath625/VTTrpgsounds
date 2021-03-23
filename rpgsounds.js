import { RPGSoundsSettings } from "./scripts/settings.js";

let playedIDs = []

Hooks.once("init", () => {
    // Extracted from https://github.com/leapfrogtechnology/just-handlebars-helpers/
    Handlebars.registerHelper('concat', function (...params) {
        // Ignore the object appended by handlebars.
        if (typeof params[params.length - 1] === 'object') {
            params.pop();
        }

        return params.join('');
    });


});

Hooks.once('ready', function() {
    // Init here otherwise DND5E school names don't resolve properly..
    RPGSoundsSettings.init();
    RPGSoundsSettings.configureFallback(game.settings.get('rpgsounds', 'fallbacksEnabled'));
    

    Hooks.on("renderChatMessage", (message, html, data) => {
        if (game.user._data._id != message.user._data._id) {
            return
        }
        if (playedIDs.includes(message.data._id)) return
        playedIDs.push(message.data._id)
        let rollType = determineRollType(message)
        if (rollType) {
            let actor = game.actors.get(message.data.speaker.actor)
            let user = message.user
            let ownedItem = actor.items.entries.find(entry => entry.name === message.data.flavor.split("-")[0].trim())
            let itemName = ownedItem._data.name
            let override = getOverride(itemName)
            let soundFiles, damageType = null
            let spellSchool = ownedItem.labels.school
            let spellComponents = ownedItem.labels.components
            let weaponType = ownedItem._data.data.weaponType //simpleR simple M martialR martialM etc
            let weaponCategory = determineItem(ownedItem._data.name)
            let voice = "male"
            let settings = game.settings.get('rpgsounds', 'fallbackSettings')
            let enableFallbacks = game.settings.get('rpgsounds', 'fallbacksEnabled')

            if (spellSchool) spellSchool = spellSchool.toLowerCase()
            if (weaponType) weaponType = weaponType.toLowerCase()

            if (ownedItem._data.data.damage && ownedItem._data.data.damage.parts.length > 0) {
                damageType = damageType = ownedItem._data.data.damage.parts[0][1] // parts = ['3d10', 'necrotic'] or ["1d4 + @mod + 2 + @item.level", "healing"]
            }
            if (damageType) damageType = damageType.toLowerCase()

            // See if there is a voice preset
            for (var character in settings.characters) {
                if (actor.settings.name === settings.characters[character].target)
                    voice = settings.characters[character].preset
            }

            switch(rollType) {
                case "itemUse":
                    if (enableFallbacks) {
                        if (spellSchool) {
                            // If spell has a verbal component
                            if (spellComponents && spellComponents.includes("V")) {
                                if (settings.categories.spellSchools[spellSchool][voice])
                                    soundFiles = settings.categories.spellSchools[spellSchool][voice]
                            } else {
                                if (settings.categories.spellSchools[spellSchool].nonvocal)
                                    soundFiles = settings.categories.spellSchools[spellSchool].nonvocal
                            }
                        }
                    
                        if (weaponType) {
                            if (weaponCategory in settings.categories.weaponTypes) {
                                if (settings.categories.weaponTypes[weaponType]) {
                                    if (settings.categories.weaponTypes[weaponType].itemUse) 
                                        soundFiles = settings.categories.weaponTypes[weaponType].itemUse
                                }
                            }
                        }
                    }

                    // Use a custom sound definition defined in overrides
                    if (override != null && settings.overrides[override].itemUse) {
                        soundFiles = settings.overrides[override].itemUse
                    }
                    break;
                case "attackRoll":
                    if (enableFallbacks) {
                        if (spellSchool && damageType) {
                                if (settings.categories.damageTypes[damageType].attackRoll)
                            soundFiles = settings.categories.damageTypes[damageType].attackRoll
                        }

                        if (weaponType) {
                            if (weaponCategory in settings.categories.weaponTypes) {
                                if (settings.categories.weaponTypes[weaponCategory].attackRoll)
                                    soundFiles = settings.categories.weaponTypes[weaponCategory].attackRoll
                            } else {
                                if (settings.categories.weaponTypes[weaponType].attackRoll) {
                                    soundFiles = settings.categories.weaponTypes[weaponType].attackRoll
                                }
                            }
                        }
                    }
                    // Use a custom sound definition defined in overrides
                    if (override != null && settings.overrides[override].attackRoll) {
                        soundFiles = settings.overrides[override].attackRoll
                    }
                    break;
                case "damageRoll":
                    if (enableFallbacks) {
                        if (spellSchool && damageType) {
                            if (settings.categories.damageTypes[damageType].damageRoll)
                                soundFiles = settings.categories.damageTypes[damageType].damageRoll
                        }

                        if (weaponType) {
                            if (settings.categories.damageTypes[damageType].damageRoll)
                                soundFiles = settings.categories.damageTypes[damageType].damageRoll
                        }
                    }

                    // Use a custom sound definition defined in overrides
                    if (override != null && settings.overrides[override].damageRoll) {
                        soundFiles = settings.overrides[override].damageRoll
                    }
                    break;
                case "healing":
                    if (enableFallbacks) {
                        if (settings.categories.damageTypes.healing.healing)
                            soundFiles = settings.categories.damageTypes.healing.healing
                    }

                    // Use a custom sound definition defined in overrides
                    if (override != null && settings.overrides[override].healing) {
                        soundFiles = settings.overrides[override].healing
                    }
                    break;
            }

            let tokens = actor.getActiveTokens()
            let target = tokens[0]
            let targets = [...user.targets]

            let listeners = null
            if (game.user.characters) {
                listeners = game.user.character.getActiveTokens()
            }
            
            // Change the target location for damage/healing sounds
            if (targets.length > 0) {
                if (rollType === "damageRoll" || rollType === "healing") {
                    target = targets[0]
                }
            }

            // Only calc distance if there is a listener token otherwise volume will default to 1
            let distance = 0
            if (listeners) {
                distance = getDistance(listeners[0].x, listeners[0].y, target.x, target.y)/100
            }
            
            let max_volume = game.settings.get("core", "globalAmbientVolume")
            let max_distance = game.settings.get("rpgsounds", "maxDistance")
            let volume = max_volume - max_volume/max_distance * distance

            if (soundFiles && soundFiles.length > 0) play(soundFiles, volume)
        }
    });
    
});

function determineRollType(message) {
    let flavor = message.data.flavor
    switch (flavor) {
        case undefined:
            return null
        case String(flavor.match(/^.*Attack Roll.*/)):
            return "attackRoll"
        case String(flavor.match(/^.*Damage Roll.*/)):
            return "damageRoll"
        case String(flavor.match(/^.*Healing.*/)):
            return "healing"
        default:
            return "itemUse"
    }
}

function getOverride(itemName) {
    if (itemName) {
        let data = game.settings.get('rpgsounds', 'fallbackSettings')
        for (var override in data.overrides) {
            if (itemName === data.overrides[override].target)
                return override
        }
    }
    return null
}

function determineItem(name) {
    switch (name) {
        case String(name.match(/^.*Hammer.*/)):
        case String(name.match(/^.*hammer.*/)):
            return "hammer"
        case String(name.match(/^.*Club.*/)):
        case String(name.match(/^.*club.*/)):
            return "club"
        case String(name.match(/^.*Flail.*/)):
        case String(name.match(/^.*flail.*/)):
            return "flail"
        case String(name.match(/^.*Mace.*/)):
        case String(name.match(/^.*mace.*/)):
            return "mace"
        case String(name.match(/^.*Maul.*/)):
        case String(name.match(/^.*maul.*/)):
            return "maul"
        case String(name.match(/^.*Morningstar.*/)):
        case String(name.match(/^.*morningstar.*/)):
            return "morningstar"
        case String(name.match(/^.*Staff.*/)):
        case String(name.match(/^.*staff.*/)):
            return "staff"
        case String(name.match(/^.*Rapier.*/)):
        case String(name.match(/^.*rapier.*/)):
            return "rapier"
        case String(name.match(/^.*Axe.*/)):
        case String(name.match(/^.*axe.*/)):
            return "axe"
        case String(name.match(/^.*Sword.*/)):
        case String(name.match(/^.*sword.*/)):
            return "sword"
        case String(name.match(/^.*Scimitar.*/)):
        case String(name.match(/^.*scimitar.*/)):
            return "scimitar"
        case String(name.match(/^.*Whip.*/)):
        case String(name.match(/^.*whip.*/)):
            return "whip"
        case String(name.match(/^.*Sicle.*/)):
        case String(name.match(/^.*sicle.*/)):
            return "sicle"
        case String(name.match(/^.*Glaive.*/)):
        case String(name.match(/^.*glaive.*/)):
            return "glaive"
        case String(name.match(/^.*Halberd.*/)):
        case String(name.match(/^.*halberd.*/)):
            return "halberd"
        case String(name.match(/^.*Dagger.*/)):
        case String(name.match(/^.*dagger.*/)):
            return "dagger"
        case String(name.match(/^.*Crossbow.*/)):
        case String(name.match(/^.*crossbow.*/)):
            return "crossbow"
        case String(name.match(/^.*Bow.*/)):
        case String(name.match(/^.*bow.*/)):
            return "bow"
        case String(name.match(/^.*Sling.*/)):
        case String(name.match(/^.*sling.*/)):
            return "sling"
        case String(name.match(/^.*Dart.*/)):
        case String(name.match(/^.*dart.*/)):
            return "dart"
        case String(name.match(/^.*Blowgun.*/)):
        case String(name.match(/^.*blowgun.*/)):
            return "blowgun"
        case String(name.match(/^.*Javelin.*/)):
        case String(name.match(/^.*javelin.*/)):
            return "javelin"
        case String(name.match(/^.*Lance.*/)):
        case String(name.match(/^.*lance.*/)):
            return "lance"
        case String(name.match(/^.*Spear.*/)):
        case String(name.match(/^.*spear.*/)):
            return "spear"
        case String(name.match(/^.*Pike.*/)):
        case String(name.match(/^.*pike.*/)):
            return "pike"
        case String(name.match(/^.*Pick.*/)):
        case String(name.match(/^.*pick.*/)):
            return "pike"
        case String(name.match(/^.*Trident.*/)):
        case String(name.match(/^.*trident.*/)):
            return "trident"
        default:
            return null
    }
}

function play(sounds, volume = null) {
    let sound = random_sound(sounds)
    volume = (volume || game.settings.get("core", "globalInterfaceVolume"));
    AudioHelper.play({src: sound, volume: volume, autoplay: true, loop: false}, true);
    
}

function random_sound(sounds) {
    return sounds[Math.floor(Math.random()*sounds.length)];
}

function getDistance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.sqrt( a*a + b*b );
}

