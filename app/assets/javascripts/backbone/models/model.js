console.log("this is models");

var Note = Backbone.Model.extend({
  urlRoot: "/twitch/playlist", 


  initialize: function(){
    // alert("Welcome to this world");
    },

});

var Match = Backbone.Model.extend({
	urlRoot: "/chin", 


	initialize: function(){
    // alert("Welcome to this world");
  	},

});

var Player_Note = Backbone.Model.extend({
  urlRoot: "/background", 


  initialize: function(){
    console.log(this.attributes);
    _.each(this.attributes,function(player,note){
      console.log(player['start_time']);
    });
    },

});

  items = [{"id": 1,
  "name": "Blink Dagger", 
  "img_url": "/assets/item_pics/blink_lg.png"},
  {"id": 2,
  "name": "Blades of Attack",
  "img_url": "/assets/item_pics/blades_of_attack_lg.png"},
  {"id": 3,
  "name": "Broadsword",
  "img_url": "/assets/item_pics/broadsword_lg.png"},
  {"id": 4,
  "name": "Chainmail",
  "img_url": "/assets/item_pics/chainmail_lg.png"},
  {"id": 5,
  "name": "Claymore",
  "img_url": "/assets/item_pics/claymore_lg.png"},
  {"id": 6,
  "name": "Helm of Iron Will",
  "img_url": "/assets/item_pics/helm_of_iron_will_lg.png"},
  {"id": 7,
  "name": "Javelin",
  "img_url": "/assets/item_pics/javelin_lg.png"},
  {"id": 8,
  "name": "Mithril Hammer",
  "img_url": "/assets/item_pics/mithril_hammer_lg.png"},
  {"id": 9,
  "name": "Platemail",
  "img_url": "/assets/item_pics/platemail_lg.png"},
  {"id": 10,
  "name": "Quarterstaff",
  "img_url": "/assets/item_pics/quarterstaff_lg.png"},
  {"id": 11,
  "name": "Quelling Blade",
  "img_url": "/assets/item_pics/quelling_blade_lg.png"},
  {"id": 12,
  "name": "Ring of Protection",
  "img_url": "/assets/item_pics/ring_of_protection_lg.png"},
  {"id": 182,
  "name": "Stout Shield",
  "img_url": "/assets/item_pics/stout_shield_lg.png"},
  {"id": 247,
  "name": "Moon Shard",
  "img_url": "/assets/item_pics/moon_shard_lg.png"},
  {"id": 13,
  "name": "Gauntlets of Strength",
  "img_url": "/assets/item_pics/gauntlets_lg.png"},
  {"id": 14,
  "name": "Slippers of Agility",
  "img_url": "/assets/item_pics/slippers_lg.png"},
  {"id": 15,
  "name": "Mantle of Intelligence",
  "img_url": "/assets/item_pics/mantle_lg.png"},
  {"id": 16,
  "name": "Iron Branch",
  "img_url": "/assets/item_pics/branches_lg.png"},
  {"id": 17,
  "name": "Belt of Strength",
  "img_url": "/assets/item_pics/belt_of_strength_lg.png"},
  {"id": 18,
  "name": "Band of Elvenskin",
  "img_url": "/assets/item_pics/boots_of_elves_lg.png"},
  {"id": 19,
  "name": "Robe of the Magi",
  "img_url": "/assets/item_pics/robe_lg.png"},
  {"id": 20,
  "name": "Circlet",
  "img_url": "/assets/item_pics/circlet_lg.png"},
  {"id": 21,
  "name": "Ogre Club",
  "img_url": "/assets/item_pics/ogre_axe_lg.png"},
  {"id": 22,
  "name": "Blade of Alacrity",
  "img_url": "/assets/item_pics/blade_of_alacrity_lg.png"},
  {"id": 23,
  "name": "Staff of Wizardry",
  "img_url": "/assets/item_pics/staff_of_wizardry_lg.png"},
  {"id": 24,
  "name": "Ultimate Orb",
  "img_url": "/assets/item_pics/ultimate_orb_lg.png"},
  {"id": 25,
  "name": "Gloves of Haste",
  "img_url": "/assets/item_pics/gloves_lg.png"},
  {"id": 26,
  "name": "Morbid Mask",
  "img_url": "/assets/item_pics/lifesteal_lg.png"},
  {"id": 27,
  "name": "Ring of Regen",
  "img_url": "/assets/item_pics/ring_of_regen_lg.png"},
  {"id": 28,
  "name": "Sage's Mask",
  "img_url": "/assets/item_pics/sobi_mask_lg.png"},
  {"id": 29,
  "name": "Boots of Speed",
  "img_url": "/assets/item_pics/boots_lg.png"},
  {"id": 1003,
  "name": "DOTA_Tooltip_Ability_item_mystery_missile",
  "img_url": "/assets/item_pics/mystery_missile_lg.png"},
  {"id": 30,
  "name": "Gem of True Sight",
  "img_url": "/assets/item_pics/gem_lg.png"},
  {"id": 31,
  "name": "Cloak",
  "img_url": "/assets/item_pics/cloak_lg.png"},
  {"id": 32,
  "name": "Talisman of Evasion",
  "img_url": "/assets/item_pics/talisman_of_evasion_lg.png"},
  {"id": 33,
  "name": "Cheese",
  "img_url": "/assets/item_pics/cheese_lg.png"},
  {"id": 34,
  "name": "Magic Stick",
  "img_url": "/assets/item_pics/magic_stick_lg.png"},
  {"id": 36,
  "name": "Magic Wand",
  "img_url": "/assets/item_pics/magic_wand_lg.png"},
  {"id": 37,
  "name": "Ghost Scepter",
  "img_url": "/assets/item_pics/ghost_lg.png"},
  {"id": 38,
  "name": "Clarity",
  "img_url": "/assets/item_pics/clarity_lg.png"},
  {"id": 216,
  "name": "Enchanted Mango",
  "img_url": "/assets/item_pics/enchanted_mango_lg.png"},
  {"id": 39,
  "name": "Healing Salve",
  "img_url": "/assets/item_pics/flask_lg.png"},
  {"id": 40,
  "name": "Dust of Appearance",
  "img_url": "/assets/item_pics/dust_lg.png"},
  {"id": 41,
  "name": "Bottle",
  "img_url": "/assets/item_pics/bottle_lg.png"},
  {"id": 42,
  "name": "Observer Ward",
  "img_url": "/assets/item_pics/ward_observer_lg.png"},
  {"id": 43,
  "name": "Sentry Ward",
  "img_url": "/assets/item_pics/ward_sentry_lg.png"},
  {"id": 218,
  "name": "Варды",
  "img_url": "/assets/item_pics/ward_dispenser_lg.png"},
  {"id": 44,
  "name": "Tango",
  "img_url": "/assets/item_pics/tango_lg.png"},
  {"id": 241,
  "name": "Tango (не свой)",
  "img_url": "/assets/item_pics/tango_single_lg.png"},
  {"id": 45,
  "name": "Animal Courier",
  "img_url": "/assets/item_pics/courier_lg.png"},
  {"id": 46,
  "name": "Town Portal Scroll",
  "img_url": "/assets/item_pics/tpscroll_lg.png"},
  {"id": 48,
  "name": "Boots of Travel",
  "img_url": "/assets/item_pics/travel_boots_lg.png"},
  {"id": 220,
  "name": "Boots of Travel",
  "img_url": "/assets/item_pics/travel_boots_2_lg.png"},
  {"id": 50,
  "name": "Phase Boots",
  "img_url": "/assets/item_pics/phase_boots_lg.png"},
  {"id": 51,
  "name": "Demon Edge",
  "img_url": "/assets/item_pics/demon_edge_lg.png"},
  {"id": 52,
  "name": "Eaglesong",
  "img_url": "/assets/item_pics/eagle_lg.png"},
  {"id": 53,
  "name": "Reaver",
  "img_url": "/assets/item_pics/reaver_lg.png"},
  {"id": 54,
  "name": "Sacred Relic",
  "img_url": "/assets/item_pics/relic_lg.png"},
  {"id": 55,
  "name": "Hyperstone",
  "img_url": "/assets/item_pics/hyperstone_lg.png"},
  {"id": 1004,
  "name": "DOTA_Tooltip_Ability_item_mystery_toss",
  "img_url": "/assets/item_pics/mystery_toss_lg.png"},
  {"id": 56,
  "name": "Ring of Health",
  "img_url": "/assets/item_pics/ring_of_health_lg.png"},
  {"id": 57,
  "name": "Void Stone",
  "img_url": "/assets/item_pics/void_stone_lg.png"},
  {"id": 58,
  "name": "Mystic Staff",
  "img_url": "/assets/item_pics/mystic_staff_lg.png"},
  {"id": 59,
  "name": "Energy Booster",
  "img_url": "/assets/item_pics/energy_booster_lg.png"},
  {"id": 60,
  "name": "Point Booster",
  "img_url": "/assets/item_pics/point_booster_lg.png"},
  {"id": 61,
  "name": "Vitality Booster",
  "img_url": "/assets/item_pics/vitality_booster_lg.png"},
  {"id": 63,
  "name": "Power Treads",
  "img_url": "/assets/item_pics/power_treads_lg.png"},
  {"id": 65,
  "name": "Hand of Midas",
  "img_url": "/assets/item_pics/hand_of_midas_lg.png"},
  {"id": 67,
  "name": "Oblivion Staff",
  "img_url": "/assets/item_pics/oblivion_staff_lg.png"},
  {"id": 69,
  "name": "Perseverance",
  "img_url": "/assets/item_pics/pers_lg.png"},
  {"id": 71,
  "name": "Poor Man's Shield",
  "img_url": "/assets/item_pics/poor_mans_shield_lg.png"},
  {"id": 73,
  "name": "Bracer",
  "img_url": "/assets/item_pics/bracer_lg.png"},
  {"id": 75,
  "name": "Wraith Band",
  "img_url": "/assets/item_pics/wraith_band_lg.png"},
  {"id": 77,
  "name": "Null Talisman",
  "img_url": "/assets/item_pics/null_talisman_lg.png"},
  {"id": 79,
  "name": "Mekansm",
  "img_url": "/assets/item_pics/mekansm_lg.png"},
  {"id": 81,
  "name": "Vladmir's Offering",
  "img_url": "/assets/item_pics/vladmir_lg.png"},
  {"id": 84,
  "name": "Flying Courier",
  "img_url": "/assets/item_pics/flying_courier_lg.png"},
  {"id": 86,
  "name": "Buckler",
  "img_url": "/assets/item_pics/buckler_lg.png"},
  {"id": 88,
  "name": "Ring of Basilius",
  "img_url": "/assets/item_pics/ring_of_basilius_lg.png"},
  {"id": 90,
  "name": "Pipe of Insight",
  "img_url": "/assets/item_pics/pipe_lg.png"},
  {"id": 92,
  "name": "Urn of Shadows",
  "img_url": "/assets/item_pics/urn_of_shadows_lg.png"},
  {"id": 94,
  "name": "Headdress",
  "img_url": "/assets/item_pics/headdress_lg.png"},
  {"id": 96,
  "name": "Scythe of Vyse",
  "img_url": "/assets/item_pics/sheepstick_lg.png"},
  {"id": 98,
  "name": "Orchid Malevolence",
  "img_url": "/assets/item_pics/orchid_lg.png"},
  {"id": 100,
  "name": "Eul's Scepter of Divinity",
  "img_url": "/assets/item_pics/cyclone_lg.png"},
  {"id": 102,
  "name": "Force Staff",
  "img_url": "/assets/item_pics/force_staff_lg.png"},
  {"id": 104,
  "name": "Dagon",
  "img_url": "/assets/item_pics/dagon_lg.png"},
  {"id": 201,
  "name": "Dagon",
  "img_url": "/assets/item_pics/dagon_2_lg.png"},
  {"id": 202,
  "name": "Dagon",
  "img_url": "/assets/item_pics/dagon_3_lg.png"},
  {"id": 203,
  "name": "Dagon",
  "img_url": "/assets/item_pics/dagon_4_lg.png"},
  {"id": 204,
  "name": "Dagon",
  "img_url": "/assets/item_pics/dagon_5_lg.png"},
  {"id": 106,
  "name": "Necronomicon",
  "img_url": "/assets/item_pics/necronomicon_lg.png"},
  {"id": 193,
  "name": "Necronomicon",
  "img_url": "/assets/item_pics/necronomicon_2_lg.png"},
  {"id": 194,
  "name": "Necronomicon",
  "img_url": "/assets/item_pics/necronomicon_3_lg.png"},
  {"id": 108,
  "name": "Aghanim's Scepter",
  "img_url": "/assets/item_pics/ultimate_scepter_lg.png"},
  {"id": 110,
  "name": "Refresher Orb",
  "img_url": "/assets/item_pics/refresher_lg.png"},
  {"id": 112,
  "name": "Assault Cuirass",
  "img_url": "/assets/item_pics/assault_lg.png"},
  {"id": 114,
  "name": "Heart of Tarrasque",
  "img_url": "/assets/item_pics/heart_lg.png"},
  {"id": 116,
  "name": "Black King Bar",
  "img_url": "/assets/item_pics/black_king_bar_lg.png"},
  {"id": 117,
  "name": "Aegis of the Immortal",
  "img_url": "/assets/item_pics/aegis_lg.png"},
  {"id": 119,
  "name": "Shiva's Guard",
  "img_url": "/assets/item_pics/shivas_guard_lg.png"},
  {"id": 121,
  "name": "Bloodstone",
  "img_url": "/assets/item_pics/bloodstone_lg.png"},
  {"id": 123,
  "name": "Linken's Sphere",
  "img_url": "/assets/item_pics/sphere_lg.png"},
  {"id": 226,
  "name": "Lotus Orb",
  "img_url": "/assets/item_pics/lotus_orb_lg.png"},
  {"id": 125,
  "name": "Vanguard",
  "img_url": "/assets/item_pics/vanguard_lg.png"},
  {"id": 242,
  "name": "Crimson Guard",
  "img_url": "/assets/item_pics/crimson_guard_lg.png"},
  {"id": 127,
  "name": "Blade Mail",
  "img_url": "/assets/item_pics/blade_mail_lg.png"},
  {"id": 129,
  "name": "Soul Booster",
  "img_url": "/assets/item_pics/soul_booster_lg.png"},
  {"id": 131,
  "name": "Hood of Defiance",
  "img_url": "/assets/item_pics/hood_of_defiance_lg.png"},
  {"id": 133,
  "name": "Divine Rapier",
  "img_url": "/assets/item_pics/rapier_lg.png"},
  {"id": 135,
  "name": "Monkey King Bar",
  "img_url": "/assets/item_pics/monkey_king_bar_lg.png"},
  {"id": 137,
  "name": "Radiance",
  "img_url": "/assets/item_pics/radiance_lg.png"},
  {"id": 139,
  "name": "Butterfly",
  "img_url": "/assets/item_pics/butterfly_lg.png"},
  {"id": 141,
  "name": "Daedalus",
  "img_url": "/assets/item_pics/greater_crit_lg.png"},
  {"id": 143,
  "name": "Skull Basher",
  "img_url": "/assets/item_pics/basher_lg.png"},
  {"id": 145,
  "name": "Battle Fury",
  "img_url": "/assets/item_pics/bfury_lg.png"},
  {"id": 147,
  "name": "Manta Style",
  "img_url": "/assets/item_pics/manta_lg.png"},
  {"id": 149,
  "name": "Crystalys",
  "img_url": "/assets/item_pics/lesser_crit_lg.png"},
  {"id": 151,
  "name": "Armlet of Mordiggian",
  "img_url": "/assets/item_pics/armlet_lg.png"},
  {"id": 152,
  "name": "Shadow Blade",
  "img_url": "/assets/item_pics/invis_sword_lg.png"},
  {"id": 249,
  "name": "Silver Edge",
  "img_url": "/assets/item_pics/silver_edge_lg.png"},
  {"id": 154,
  "name": "Sange and Yasha",
  "img_url": "/assets/item_pics/sange_and_yasha_lg.png"},
  {"id": 156,
  "name": "Satanic",
  "img_url": "/assets/item_pics/satanic_lg.png"},
  {"id": 158,
  "name": "Mjollnir",
  "img_url": "/assets/item_pics/mjollnir_lg.png"},
  {"id": 160,
  "name": "Eye of Skadi",
  "img_url": "/assets/item_pics/skadi_lg.png"},
  {"id": 162,
  "name": "Sange",
  "img_url": "/assets/item_pics/sange_lg.png"},
  {"id": 164,
  "name": "Helm of the Dominator",
  "img_url": "/assets/item_pics/helm_of_the_dominator_lg.png"},
  {"id": 166,
  "name": "Maelstrom",
  "img_url": "/assets/item_pics/maelstrom_lg.png"},
  {"id": 168,
  "name": "Desolator",
  "img_url": "/assets/item_pics/desolator_lg.png"},
  {"id": 170,
  "name": "Yasha",
  "img_url": "/assets/item_pics/yasha_lg.png"},
  {"id": 172,
  "name": "Mask of Madness",
  "img_url": "/assets/item_pics/mask_of_madness_lg.png"},
  {"id": 174,
  "name": "Diffusal Blade",
  "img_url": "/assets/item_pics/diffusal_blade_lg.png"},
  {"id": 196,
  "name": "Diffusal Blade",
  "img_url": "/assets/item_pics/diffusal_blade_2_lg.png"},
  {"id": 176,
  "name": "Ethereal Blade",
  "img_url": "/assets/item_pics/ethereal_blade_lg.png"},
  {"id": 178,
  "name": "Soul Ring",
  "img_url": "/assets/item_pics/soul_ring_lg.png"},
  {"id": 180,
  "name": "Arcane Boots",
  "img_url": "/assets/item_pics/arcane_boots_lg.png"},
  {"id": 235,
  "name": "Octarine Core",
  "img_url": "/assets/item_pics/octarine_core_lg.png"},
  {"id": 181,
  "name": "Orb of Venom",
  "img_url": "/assets/item_pics/orb_of_venom_lg.png"},
  {"id": 185,
  "name": "Drum of Endurance",
  "img_url": "/assets/item_pics/ancient_janggo_lg.png"},
  {"id": 187,
  "name": "Medallion of Courage",
  "img_url": "/assets/item_pics/medallion_of_courage_lg.png"},
  {"id": 229,
  "name": "Solar Crest",
  "img_url": "/assets/item_pics/solar_crest_lg.png"},
  {"id": 188,
  "name": "Smoke of Deceit",
  "img_url": "/assets/item_pics/smoke_of_deceit_lg.png"},
  {"id": 190,
  "name": "Veil of Discord",
  "img_url": "/assets/item_pics/veil_of_discord_lg.png"},
  {"id": 231,
  "name": "Guardian Greaves",
  "img_url": "/assets/item_pics/guardian_greaves_lg.png"},
  {"id": 206,
  "name": "Rod of Atos",
  "img_url": "/assets/item_pics/rod_of_atos_lg.png"},
  {"id": 208,
  "name": "Abyssal Blade",
  "img_url": "/assets/item_pics/abyssal_blade_lg.png"},
  {"id": 210,
  "name": "Heaven's Halberd",
  "img_url": "/assets/item_pics/heavens_halberd_lg.png"},
  {"id": 212,
  "name": "Ring of Aquila",
  "img_url": "/assets/item_pics/ring_of_aquila_lg.png"},
  {"id": 214,
  "name": "Tranquil Boots",
  "img_url": "/assets/item_pics/tranquil_boots_lg.png"},
  {"id": 215,
  "name": "Shadow Amulet",
  "img_url": "/assets/item_pics/shadow_amulet_lg.png"},
  {"id": 254,
  "name": "Glimmer Cape",
  "img_url": "/assets/item_pics/glimmer_cape_lg.png"},
  {"id": 1000,
  "name": "Грявольская тянучка",
  "img_url": "/assets/item_pics/halloween_candy_corn_lg.png"},
  {"id": 1001,
  "name": "DOTA_Tooltip_Ability_item_mystery_hook",
  "img_url": "/assets/item_pics/mystery_hook_lg.png"},
  {"id": 1002,
  "name": "DOTA_Tooltip_Ability_item_mystery_arrow",
  "img_url": "/assets/item_pics/mystery_arrow_lg.png"},
  {"id": 1005,
  "name": "DOTA_Tooltip_Ability_item_mystery_vacuum",
  "img_url": "/assets/item_pics/mystery_vacuum_lg.png"},
  {"id": 1006,
  "name": "DOTA_Tooltip_Ability_item_halloween_rapier",
  "img_url": "/assets/item_pics/halloween_rapier_lg.png"},
  {"id": 1007,
  "name": "Greevil Whistle",
  "img_url": "/assets/item_pics/greevil_whistle_lg.png"},
  {"id": 1008,
  "name": "Greevil Whistle",
  "img_url": "/assets/item_pics/greevil_whistle_toggle_lg.png"},
  {"id": 1009,
  "name": "A Gift!",
  "img_url": "/assets/item_pics/present_lg.png"},
  {"id": 1010,
  "name": "Xmas Stocking",
  "img_url": "/assets/item_pics/winter_stocking_lg.png"},
  {"id": 1011,
  "name": "Speed Skates",
  "img_url": "/assets/item_pics/winter_skates_lg.png"},
  {"id": 1012,
  "name": "Fruit-bit Cake",
  "img_url": "/assets/item_pics/winter_cake_lg.png"},
  {"id": 1013,
  "name": "Wizard Cookie",
  "img_url": "/assets/item_pics/winter_cookie_lg.png"},
  {"id": 1014,
  "name": "Cocoa with Marshmallows",
  "img_url": "/assets/item_pics/winter_coco_lg.png"},
  {"id": 1015,
  "name": "Clove Studded Ham",
  "img_url": "/assets/item_pics/winter_ham_lg.png"},
  {"id": 1016,
  "name": "Kringle",
  "img_url": "/assets/item_pics/winter_kringle_lg.png"},
  {"id": 1017,
  "name": "Snow Mushroom",
  "img_url": "/assets/item_pics/winter_mushroom_lg.png"},
  {"id": 1018,
  "name": "Greevil Treat",
  "img_url": "/assets/item_pics/winter_greevil_treat_lg.png"},
  {"id": 1019,
  "name": "Greevil Chow",
  "img_url": "/assets/item_pics/winter_greevil_garbage_lg.png"},
  {"id": 1020,
  "name": "Greevil Blink Bone",
  "img_url": "/assets/item_pics/winter_greevil_chewy_lg.png"}];



  var heros = [{ "id": 1, "img_url": "/assets/hero_pics/antimage.png"},
  { "id": 2, "img_url": "/assets/hero_pics/axe.png"},
  { "id": 3, "img_url": "/assets/hero_pics/bane.png"},
  { "id": 4, "img_url": "/assets/hero_pics/bloodseeker.png"},
  { "id": 5, "img_url": "/assets/hero_pics/crystal_maiden.png"},
  { "id": 6, "img_url": "/assets/hero_pics/drow_ranger.png"},
  { "id": 7, "img_url": "/assets/hero_pics/earthshaker.png"},
  { "id": 8, "img_url": "/assets/hero_pics/juggernaut.png"},
  { "id": 9, "img_url": "/assets/hero_pics/mirana.png"},
  { "id": 11, "img_url": "/assets/hero_pics/nevermore.png"},
  { "id": 10, "img_url": "/assets/hero_pics/morphling.png"},
  { "id": 12, "img_url": "/assets/hero_pics/phantom_lancer.png"},
  { "id": 13, "img_url": "/assets/hero_pics/puck.png"},
  { "id": 14, "img_url": "/assets/hero_pics/pudge.png"},
  { "id": 15, "img_url": "/assets/hero_pics/razor.png"},
  { "id": 16, "img_url": "/assets/hero_pics/sand_king.png"},
  { "id": 17, "img_url": "/assets/hero_pics/storm_spirit.png"},
  { "id": 18, "img_url": "/assets/hero_pics/sven.png"},
  { "id": 19, "img_url": "/assets/hero_pics/tiny.png"},
  { "id": 20, "img_url": "/assets/hero_pics/vengefulspirit.png"},
  { "id": 21, "img_url": "/assets/hero_pics/windrunner.png"},
  { "id": 22, "img_url": "/assets/hero_pics/zuus.png"},
  { "id": 23, "img_url": "/assets/hero_pics/kunkka.png"},
  { "id": 25, "img_url": "/assets/hero_pics/lina.png"},
  { "id": 31, "img_url": "/assets/hero_pics/lich.png"},
  { "id": 26, "img_url": "/assets/hero_pics/lion.png"},
  { "id": 27, "img_url": "/assets/hero_pics/shadow_shaman.png"},
  { "id": 28, "img_url": "/assets/hero_pics/slardar.png"},
  { "id": 29, "img_url": "/assets/hero_pics/tidehunter.png"},
  { "id": 30, "img_url": "/assets/hero_pics/witch_doctor.png"},
  { "id": 32, "img_url": "/assets/hero_pics/riki.png"},
  { "id": 33, "img_url": "/assets/hero_pics/enigma.png"},
  { "id": 34, "img_url": "/assets/hero_pics/tinker.png"},
  { "id": 35, "img_url": "/assets/hero_pics/sniper.png"},
  { "id": 36, "img_url": "/assets/hero_pics/necrolyte.png"},
  { "id": 37, "img_url": "/assets/hero_pics/warlock.png"},
  { "id": 38, "img_url": "/assets/hero_pics/beastmaster.png"},
  { "id": 39, "img_url": "/assets/hero_pics/queenofpain.png"},
  { "id": 40, "img_url": "/assets/hero_pics/venomancer.png"},
  { "id": 41, "img_url": "/assets/hero_pics/faceless_void.png"},
  { "id": 42, "img_url": "/assets/hero_pics/skeleton_king.png"},
  { "id": 43, "img_url": "/assets/hero_pics/death_prophet.png"},
  { "id": 44, "img_url": "/assets/hero_pics/phantom_assassin.png"},
  { "id": 45, "img_url": "/assets/hero_pics/pugna.png"},
  { "id": 46, "img_url": "/assets/hero_pics/templar_assassin.png"},
  { "id": 47, "img_url": "/assets/hero_pics/viper.png"},
  { "id": 48, "img_url": "/assets/hero_pics/luna.png"},
  { "id": 49, "img_url": "/assets/hero_pics/dragon_knight.png"},
  { "id": 50, "img_url": "/assets/hero_pics/dazzle.png"},
  { "id": 51, "img_url": "/assets/hero_pics/rattletrap.png"},
  { "id": 52, "img_url": "/assets/hero_pics/leshrac.png"},
  { "id": 53, "img_url": "/assets/hero_pics/furion.png"},
  { "id": 54, "img_url": "/assets/hero_pics/life_stealer.png"},
  { "id": 55, "img_url": "/assets/hero_pics/dark_seer.png"},
  { "id": 56, "img_url": "/assets/hero_pics/clinkz.png"},
  { "id": 57, "img_url": "/assets/hero_pics/omniknight.png"},
  { "id": 58, "img_url": "/assets/hero_pics/enchantress.png"},
  { "id": 59, "img_url": "/assets/hero_pics/huskar.png"},
  { "id": 60, "img_url": "/assets/hero_pics/night_stalker.png"},
  { "id": 61, "img_url": "/assets/hero_pics/broodmother.png"},
  { "id": 62, "img_url": "/assets/hero_pics/bounty_hunter.png"},
  { "id": 63, "img_url": "/assets/hero_pics/weaver.png"},
  { "id": 64, "img_url": "/assets/hero_pics/jakiro.png"},
  { "id": 65, "img_url": "/assets/hero_pics/batrider.png"},
  { "id": 66, "img_url": "/assets/hero_pics/chen.png"},
  { "id": 67, "img_url": "/assets/hero_pics/spectre.png"},
  { "id": 69, "img_url": "/assets/hero_pics/doom_bringer.png"},
  { "id": 68, "img_url": "/assets/hero_pics/ancient_apparition.png"},
  { "id": 70, "img_url": "/assets/hero_pics/ursa.png"},
  { "id": 71, "img_url": "/assets/hero_pics/spirit_breaker.png"},
  { "id": 72, "img_url": "/assets/hero_pics/gyrocopter.png"},
  { "id": 73, "img_url": "/assets/hero_pics/alchemist.png"},
  { "id": 74, "img_url": "/assets/hero_pics/invoker.png"},
  { "id": 75, "img_url": "/assets/hero_pics/silencer.png"},
  { "id": 76, "img_url": "/assets/hero_pics/obsidian_destroyer.png"},
  { "id": 77, "img_url": "/assets/hero_pics/lycan.png"},
  { "id": 78, "img_url": "/assets/hero_pics/brewmaster.png"},
  { "id": 79, "img_url": "/assets/hero_pics/shadow_demon.png"},
  { "id": 80, "img_url": "/assets/hero_pics/lone_druid.png"},
  { "id": 81, "img_url": "/assets/hero_pics/chaos_knight.png"},
  { "id": 82, "img_url": "/assets/hero_pics/meepo.png"},
  { "id": 83, "img_url": "/assets/hero_pics/treant.png"},
  { "id": 84, "img_url": "/assets/hero_pics/ogre_magi.png"},
  { "id": 85, "img_url": "/assets/hero_pics/undying.png"},
  { "id": 86, "img_url": "/assets/hero_pics/rubick.png"},
  { "id": 87, "img_url": "/assets/hero_pics/disruptor.png"},
  { "id": 88, "img_url": "/assets/hero_pics/nyx_assassin.png"},
  { "id": 89, "img_url": "/assets/hero_pics/naga_siren.png"},
  { "id": 90, "img_url": "/assets/hero_pics/keeper_of_the_light.png"},
  { "id": 91, "img_url": "/assets/hero_pics/wisp.png"},
  { "id": 92, "img_url": "/assets/hero_pics/visage.png"},
  { "id": 93, "img_url": "/assets/hero_pics/slark.png"},
  { "id": 94, "img_url": "/assets/hero_pics/medusa.png"},
  { "id": 95, "img_url": "/assets/hero_pics/troll_warlord.png"},
  { "id": 96, "img_url": "/assets/hero_pics/centaur.png"},
  { "id": 97, "img_url": "/assets/hero_pics/magnataur.png"},
  { "id": 98, "img_url": "/assets/hero_pics/shredder.png"},
  { "id": 99, "img_url": "/assets/hero_pics/bristleback.png"},
  { "id": 100, "img_url": "/assets/hero_pics/tusk.png"},
  { "id": 101, "img_url": "/assets/hero_pics/skywrath_mage.png"},
  { "id": 102, "img_url": "/assets/hero_pics/abaddon.png"},
  { "id": 103, "img_url": "/assets/hero_pics/elder_titan.png"},
  { "id": 104, "img_url": "/assets/hero_pics/legion_commander.png"},
  { "id": 106, "img_url": "/assets/hero_pics/ember_spirit.png"},
  { "id": 107, "img_url": "/assets/hero_pics/earth_spirit.png"},
  { "id": 109, "img_url": "/assets/hero_pics/terrorblade.png"},
  { "id": 110, "img_url": "/assets/hero_pics/phoenix.png"},
  { "id": 111, "img_url": "/assets/hero_pics/oracle.png"},
  { "id": 105, "img_url": "/assets/hero_pics/techies.png"},
  { "id": 112, "img_url": "/assets/hero_pics/winter_wyvern.png"}];

