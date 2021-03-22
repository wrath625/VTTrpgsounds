export class SettingsDND5E {
	static get defaultConfiguration() {
		const defaultConfig = {
			categories: {
                damageTypes: {},
                spellSchools: {},
                weaponTypes: {},
            },
			overrides: {
				0: {
					target: 'Sacred Flame',
                    damageRoll: [
                        "modules/rpgsounds/sounds/spell/nwn/sff_strkholy.ogg"
                    ]
				},
                1: {
					target: 'Ray of Frost',
                    attackRoll: [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngcold01.ogg"
                    ],
                    damageRoll: [
                        "modules/rpgsounds/sounds/spell/nwn/sim_pulscold.ogg"
                    ]
				},
                2: {
					target: 'Fire Bolt',
                    attackRoll: [
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdlos10.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdlos20.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdlos30.ogg"
                    ]
				},
				3: {
                    target: "Raise Dead",
					itemUse: [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_necr_lm.ogg"
                    ],
                    healing: [
                        "modules/rpgsounds/sounds/spell/nwn/sim_healdead.ogg"
                    ]
				},
                4: {
                    target: "Revivify",
					itemUse: [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_necr_lm.ogg"
                    ],
                    healing: [
                        "modules/rpgsounds/sounds/spell/nwn/sim_healdead.ogg"
                    ]
				},
                5: {
                    target: "Reincarnate",
					itemUse: [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_necr_hm.ogg"
                    ],
                    healing: [
                        "modules/rpgsounds/sounds/spell/nwn/sim_healdead.ogg"
                    ]
				},
                6: {
                    target: "Ressurection",
					itemUse: [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_necr_hm.ogg"
                    ],
                    healing: [
                        "modules/rpgsounds/sounds/spell/nwn/sim_healdead.ogg"
                    ]
				},
                7: {
                    target: "Toll the Dead",
                    attackRoll: [
                        "modules/rpgsounds/sounds/spell/nwn/as_cv_bell2.ogg"
                    ]
                },
                8: {
                    target: "Fireball",
                    damageRoll: [
                        "modules/rpgsounds/sounds/spell/nwn/sco_mebalfire01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_exp2flame.ogg"
                    ]
                },
                9: {
                    target: "Channel Divinity (Cleric)",
                    itemUse: [
                        "modules/rpgsounds/sounds/spell/nwn/sim_healcond.ogg"
                    ]
                },
                9: {
                    target: "Channel Divinity (Paladin)",
                    itemUse: [
                        "modules/rpgsounds/sounds/spell/nwn/sim_healcond.ogg"
                    ]
                }
			},
		};

		Object.keys(CONFIG.DND5E.damageTypes).forEach((dmgType) => {			
            const config = { attackRoll: [], damageRoll: [] }
            switch (dmgType.toLowerCase()) {
                case 'acid':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngacid01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanacid03.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mebalacid01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/bg1/CAS_P02.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_pulswater.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_dustexp.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_explacid.ogg"
                    ]
                    break;
                case 'cold':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngcold01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehancold03.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/bg1/CAS_P01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_pulscold.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_explfrost.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_exp2frost.ogg"
                    ]
                    break;
                case 'fire':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngfire01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdlos20.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdlos30.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanfire01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanfire03.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_megrdfire01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mebalfire01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_lgupfire01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/bg1/CAS_M07.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_strkfire.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_pulsfire.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_explflame.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_exp2flame.ogg"
                    ]
                    break;
                case 'force':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngodd1.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdlos10.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_megrdodd01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_lgsprodd01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/bg1/CAS_P03.ogg",
                        "modules/rpgsounds/sounds/spell/bg1/CAS_M08.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_pulswind.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehedodd01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_explsonic.ogg",
                        "modules/rpgsounds/sounds/spell/bg1/EFF_P22C.ogg"
                    ]
                    break;
                case 'lightning':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/bg1/CAS_P08.ogg",
                        "modules/rpgsounds/sounds/spell/bg1/CAS_M02.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngelec01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanelec01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanelec02.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanelec03.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mebalelec01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_lgupelec01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sff_electricexp.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_explight.ogg",
                        "modules/rpgsounds/sounds/spell/bg1/EFF_M27.ogg"
                    ]
                    break;
                case 'necrotic':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngevil01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdevil10.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdevil20.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdevil30.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sca_outneg.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanevil01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanevil02.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanevil03.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_lgupevil01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/bg1/CAS_M03.ogg",
                        "modules/rpgsounds/sounds/spell/bg1/CAS_P07.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_pulsneg.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_negative.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehedevil01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_destruct_low.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_destruct.ogg",
                        "modules/rpgsounds/sounds/spell/bg1/EFF_P18.ogg"
                    ]
                    break;
                case 'poison':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngnatr01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_poison01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_disease.ogg"
                    ]
                    break;
                case 'psychic':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngmind01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sca_outmind01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanmind01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanmind02.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanmind03.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_lgupmind01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_lgsprmind01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sce_negative.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_pulse.ogg"
                    ]
                    break;
                case 'radiant':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdholy10.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdholy20.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_expdholy30.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sca_outholy01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanholy01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehanholy02.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_lgupholy01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_strkholy.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_pulsholy.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sff_strkholy.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehedholy01.ogg"
                    ]
                    break;
                case 'thunder':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/spell/nwn/sim_shwngsonc01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sca_outsonic.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_lgupsonc01.ogg"
                    ]
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/spell/bg1/CAS_M04.ogg",
                        "modules/rpgsounds/sounds/spell/bg1/EFF_M21.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sco_mehedsonc01.ogg",
                        "modules/rpgsounds/sounds/spell/nwn/sim_exp2light.ogg"
                    ]
                    break;
                case 'piercing':
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01A1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01B1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01C1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01D.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01D1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_01E.ogg",
                    ]
                    break;
                case 'slashing':
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_02A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_02A1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_02B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_02B1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_02C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_02C1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_02D.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_02D1.ogg",
                    ]
                    break;
                case 'bludgeoning': 
                    config.damageRoll = [
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_03A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_03A1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_03B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_03B1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_03C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_03C1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_03D.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_03D1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_04A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_04A1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_04B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_04B1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_04C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_04C1.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_04D.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/damage/HIT_04D1.ogg",
                    ]
                default:
                    break;
            }
            defaultConfig.categories.damageTypes[dmgType.toLowerCase()] = config;
            // Add extra static
            
            defaultConfig.categories.damageTypes['healing'] = {
                "attackRoll": ["modules/rpgsounds/sounds/spell/nwn/sim_shwngheal01.ogg", "modules/rpgsounds/sounds/spell/nwn/sff_expdholy10.ogg", "modules/rpgsounds/sounds/spell/nwn/sff_expdholy20.ogg", "modules/rpgsounds/sounds/spell/nwn/sff_expdholy30.ogg", "modules/rpgsounds/sounds/spell/nwn/sff_expddholy10.ogg", "modules/rpgsounds/sounds/spell/nwn/sff_expddholy20.ogg", "modules/rpgsounds/sounds/spell/nwn/sff_expddholy30.ogg", "modules/rpgsounds/sounds/spell/nwn/sco_mehanheal02.ogg", "modules/rpgsounds/sounds/spell/nwn/sco_mehanheal03.ogg"],
                "healing": ["modules/rpgsounds/sounds/spell/nwn/sim_heal01.ogg", "modules/rpgsounds/sounds/spell/nwn/sim_heal02.ogg", "modules/rpgsounds/sounds/spell/nwn/sim_heal03.ogg", "modules/rpgsounds/sounds/spell/nwn/sim_heal04.ogg", "modules/rpgsounds/sounds/spell/nwn/sim_heal05.ogg", "modules/rpgsounds/sounds/spell/nwn/sim_holheal02.ogg", "modules/rpgsounds/sounds/spell/nwn/sim_holheal04.ogg", "modules/rpgsounds/sounds/spell/nwn/sim_holheal06.ogg"],
            }
        });

        Object.values(CONFIG.DND5E.spellSchools).forEach((spellSchool) => {
            const config = { male: [], female: [], nonvocal: [] }

            switch (spellSchool.toLowerCase()) {
                case 'abjuration':
                    config.male = [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_conj_hm.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_conj_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM02.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP02.ogg",
                    ]
                    config.female = [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_conj_hf.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_conj_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FM02.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FP02.ogg",
                    ]
                    config.nonvocal = [
                        "modules/rpgsounds/sounds/chant/bg1/CHA_SM02.ogg"
                    ]
                    break;
                case 'conjuration':
                    config.male = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_conj_hm.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_conj_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM03.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP03.ogg",
                    ]
                    config.female = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_conj_hf.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_conj_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FM03.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FP03.ogg",
                    ]
                    config.nonvocal = [
                        "modules/rpgsounds/sounds/chant/bg1/CHA_SM03.ogg"
                    ]
                    break;
                case 'divination':
                    config.male = [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_illu_hm.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_illu_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM04.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP04.ogg",
                    ]
                    config.female = [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_illu_hf.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_illu_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FM04.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FP04.ogg",
                    ]
                    config.nonvocal = [
                        "modules/rpgsounds/sounds/chant/bg1/CHA_SM04.ogg"
                    ]
                    break;
                case 'enchantment':
                    config.male = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_ench_hm.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_ench_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM05.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP05.ogg",
                    ]
                    config.female = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_ench_hf.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_ench_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FM05.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FP05.ogg",
                    ]
                    config.nonvocal = [
                        "modules/rpgsounds/sounds/chant/bg1/CHA_SM05.ogg"
                    ]
                    break;
                case 'evocation':
                    config.male = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_evoc_hm.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_evoc_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_evoc_hm.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_evoc_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM06.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP06.ogg",
                    ]
                    config.female = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_evoc_hf.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_evoc_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_evoc_hf.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_evoc_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FM06.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FP06.ogg",
                    ]
                    config.nonvocal = [
                        "modules/rpgsounds/sounds/chant/bg1/CHA_SM06.ogg"
                    ]
                    break;
                case 'illusion':
                    config.male = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_illu_hm.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_illu_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM01.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP01.ogg",
                    ]
                    config.female = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_illu_hf.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_illu_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM01.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP01.ogg",
                    ]
                    config.nonvocal = [
                        "modules/rpgsounds/sounds/chant/bg1/CHA_SM01.ogg"
                    ]
                    break;
                case 'necromancy':
                    config.male = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_necr_hm.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_necr_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_necr_hm.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_necr_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM07.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP07.ogg",
                    ]
                    config.female = [
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_necr_hf.ogg",
                        "modules/rpgsounds/sounds/chant/nwn/vs_chant_necr_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_necr_hf.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_necr_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FM07.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FP07.ogg",
                    ]
                    config.nonvocal = [
                        "modules/rpgsounds/sounds/chant/bg1/CHA_SM07.ogg"
                    ]
                    break;
                case 'transmutation':
                    config.male = [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_ench_hm.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_ench_lm.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MM08.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_MP08.ogg",
                    ]
                    config.female = [
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_ench_hf.ogg",
                        "modules/rpgsounds/sounds/chant/bg2/vs_chant_ench_lf.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FM08.ogg",
                        "modules/rpgsounds/sounds/chant/bg1/CHA_FP08.ogg",
                    ]
                    config.nonvocal = [
                        "modules/rpgsounds/sounds/chant/bg1/CHA_SM08.ogg"
                    ]
                    break;
                default:
                    break;
            }
            defaultConfig.categories.spellSchools[spellSchool.toLowerCase()] = config;
        });

        Object.keys(CONFIG.DND5E.weaponTypes).forEach((weaponType) => {
            const config = { attackRoll: [] }
            switch (weaponType.toLowerCase()) {
                case 'simplem':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04D.ogg",
                    ]
                    break;
                case 'simpler':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_01.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_01A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_01B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_01C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_01D.ogg",
                    ]
                    break;
                case 'martialm':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04D.ogg",
                    ]
                    break;
                case 'martialr':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_04D.ogg",
                    ]
                    break;
                case 'natural':
                    config.attackRoll = [
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06A.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06B.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06C.ogg",
                        "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06D.ogg",
                    ]
                    break;
                case 'improvised':
                    config.attackRoll = []
                    break;
                case 'siege':
                    config.attackRoll = []
                    break;
                default:
                    break;
            }
            defaultConfig.categories.weaponTypes[weaponType.toLowerCase()] = config;

            defaultConfig.categories.weaponTypes.crossbow = { attackRoll: [
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_03.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_03A.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_03B.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_03C.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_03D.ogg",
            ]},
            defaultConfig.categories.weaponTypes.bow = { attackRoll: [
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_02.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_02A.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_02B.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_02C.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_02D.ogg",
            ]},
            defaultConfig.categories.weaponTypes.sling = { attackRoll: [
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06A.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06B.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06C.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_06D.ogg",
            ]},
            defaultConfig.categories.weaponTypes.whip = { attackRoll: [
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_05.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_05A.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_05B.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_05C.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_05D.ogg",
            ]},
            defaultConfig.categories.weaponTypes.flail = { attackRoll: [
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_07.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_07A.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_07B.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_07C.ogg",
                "modules/rpgsounds/sounds/weapon/bg1/attack/SWI_07D.ogg",
            ]}
        });

		return defaultConfig;
	}

	constructor() {
		this._enabled = false;
	}

	configure(enabled = false) {
		if (game.system.id !== "dnd5e") return;


		this._enabled = enabled;
	}
}

export const dnd5eTemplates = new SettingsDND5E();