import { SettingsDND5E, dnd5eTemplates } from "./dnd5e.js";

export class RPGSoundsSettings extends FormApplication {
    static init() {
        const menuFallbackSettings = {
            key: 'fallbackSettings',
            config: {
                name: "Automatic Sound Effects",
                label: "Sound Effects & Overrides",
                hint: "On game systems that are supported, automatic sound effects can be played based on detected item use and action.",
                type: RPGSoundsSettings,
                restricted: true,
            },
        };

        const settingFallbackSettings = {
            key: 'fallbackSettings',
            config: {
                name: "Automatic Sound Effects",
                hint: "On game systems that are supported, automatic sound effects can be played based on detected item use and action.",
                scope: 'world',
                config: false,
                default: {},
                type: Object,
            },
        };

        let hasFallbacks = false;
        switch (game.system.id) {
            case 'dnd5e':
                hasFallbacks = true;
                game.settings.registerMenu('rpgsounds', menuFallbackSettings.key, menuFallbackSettings.config);
                game.settings.register(
                    'rpgsounds',
                    settingFallbackSettings.key,
                    mergeObject(settingFallbackSettings.config,
                    {
                        default: SettingsDND5E.defaultConfiguration
                    }, 
                    true, true),
                );
                // game.settings.set('rpgsounds',settingFallbackSettings.key, SettingsDND5E.defaultConfiguration) // This will force defaults on load
                break;
            default:
                break;
        }

        game.settings.register('rpgsounds', 'fallbacksEnabled', {
            name: "Enable Item Sound Fallbacks",
            hint: "Disabling this option will disable all non-override sounds.",
            scope: "world",
            config: hasFallbacks,
            default: hasFallbacks,
            type: Boolean,
            onChange: (value) => RPGSoundsSettings.configureFallback(value),
        });

        game.settings.register("rpgsounds", "maxDistance", {
            name: "Max Sound Distance",
            hint: "The maximum distance a sound can be perceived from one token to another.",
            scope: "world",
            config: true,
            default: 12,
            type: Number
        });

        loadTemplates([
            'modules/rpgsounds/templates/settings/settings.html',
            'modules/rpgsounds/templates/settings/dnd5e/categories.html',
            'modules/rpgsounds/templates/settings/dnd5e/overrides.html',
            'modules/rpgsounds/templates/settings/dnd5e/characters.html',
        ]);
    }

    static configureFallback(enabled = false) {
        switch (game.system.id) {
            case 'dnd5e':
                dnd5eTemplates.configure(enabled);
                break;
            default:
                break;
        }
    }

    /** @override */
    static get defaultOptions() {
        return {
            ...super.defaultOptions,
            template: 'modules/rpgsounds/templates/settings/settings.html',
            height: 'auto',
            title: "RPG Sounds Settings",
            width: 600,
            classes: ['rpgsounds', 'settings'],
            tabs: [
                {
                    navSelector: '.tabs',
                    contentSelector: 'form',
                    initial: 'name',
                },
            ],
            submitOnClose: false,
        };
    }

    constructor(object = {}, options) {
        super(object, options);
    }

    getSettingsData() {
        let settingsData = {
            'fallbackEnable': game.settings.get('rpgsounds', 'fallbacksEnabled'),
        }
        switch (game.system.id) {
            case 'dnd5e':
                settingsData['fallbackSettings'] = game.settings.get('rpgsounds', 'fallbackSettings');
                break;
            default:
                break;
        }
        return settingsData;
    }

    /** @override */
    getData() {
        let data = super.getData();
        data.hasFallbacks = false;
        switch (game.system.id) {
            case 'dnd5e':
                data.hasFallbacks = true
                data.dmgTypes = CONFIG.DND5E.damageTypes;
                data.spellSchools = CONFIG.DND5E.spellSchools;
                break;
            default:
                break;
        }
        data.presets = [{ name: "male"}, {name: "female"}, {name: "nonvocal"}]
        data.system = { id: game.system.id, title: game.system.data.title };
        data.settings = this.getSettingsData();
        data.submitText = "Save";
        return data;
    }

    /** @override */
    async _updateObject(_, formData) {
        const data = expandObject(formData);
        for (let [key, value] of Object.entries(data)) {
            if (key == 'fallbackSettings' && value.overrides || value.characters) {
                const compacted = {};
                Object.values(value.overrides).forEach((val, idx) => compacted[idx] = val);
                value.overrides = compacted;
            }
            await game.settings.set('rpgsounds', key, value);
        }
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
        html.find('button.add-override').click(this._onAddOverride.bind(this));
        html.find('button.remove-override').click(this._onRemove.bind(this));
        html.find('button.add-character').click(this._onAddCharacter.bind(this));
        html.find('button.remove-character').click(this._onRemove.bind(this));
        html.find('button.add-sound').click(this._onAddSound.bind(this));
        html.find('button.remove-sound').click(this._onRemove.bind(this));
        html.find('button.add-override-sound').click(this._onAddOverrideSound.bind(this));
    }

    async _onAddOverride(event) {
        event.preventDefault();
        await this._onSubmit(event, { preventClose: true });
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.override-entry');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`fallbackSettings.overrides.${idx}.target`] = '';
        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _onRemove(event) {
        event.preventDefault();
        let idx = event.currentTarget.dataset.idx;
        const el = event.currentTarget.closest(`div[data-idx="${idx}"]`);
        if (!el) {
            return true;
        }
        el.remove();
        await this._onSubmit(event, { preventClose: true });
        this.render();
    }

    async _onAddCharacter(event) {
        event.preventDefault();
        await this._onSubmit(event, { preventClose: true });
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.character-entry');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`fallbackSettings.characters.${idx}.target`] = '';
        updateData[`fallbackSettings.characters.${idx}.preset`] = 'male';
        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _onAddSound(event) {
        event.preventDefault();
        await this._onSubmit(event, { preventClose: true });

        const fallback = event.currentTarget.dataset.fallback
        const damageType = event.currentTarget.dataset.parentIdx
        const rollType = event.currentTarget.dataset.idx

        let data = game.settings.get('rpgsounds', 'fallbackSettings')

        let updateData = {}

        let list = []
        if (data.categories[fallback][damageType][rollType] != null) {
            list = [...data.categories[fallback][damageType][rollType]]
        }

        updateData[`fallbackSettings.categories.${fallback}.${damageType}.${rollType}`] = [...list, ''];
        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _onAddOverrideSound(event) {
        event.preventDefault();
        await this._onSubmit(event, { preventClose: true });

        const rollType = event.currentTarget.dataset.rollType
        const idx = event.currentTarget.dataset.idx

        let data = game.settings.get('rpgsounds', 'fallbackSettings')

        let updateData = {}
        
        let list = []
        if (data.overrides[idx][rollType] != null) {
            list = [...data.overrides[idx][rollType]]
        }

        updateData[`fallbackSettings.overrides.${idx}.${rollType}`] = [...list, ''];
        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }
}