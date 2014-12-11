// Get the list from the source of the http://www.hearthhead.com/cards page. Then put it in a js beautifier
// Also get the uncollectible list from the source after filtering the cards for uncollectible type

/* Start of collectible card list */
var hearthstoneCards = [{
    "id": 306,
    "image": "EX1_613",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "health": 2,
    "attack": 2,
    "faction": 3,
    "classs": 4,
    "elite": 1,
    "collectible": 1,
    "name": "Edwin VanCleef",
    "description": "Combo: Gain +2\/+2 for each card played earlier this turn.",
    popularity: 1561
}, {
    "id": 391,
    "image": "EX1_133",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 4,
    "quality": 3,
    "cost": 3,
    "attack": 2,
    "durability": 2,
    "collectible": 1,
    "name": "Perdition's Blade",
    "description": "Battlecry: Deal 1 damage. Combo: Deal 2 instead.",
    popularity: 1302
}, {
    "id": 999,
    "image": "NEW1_018",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 3,
    "race": 23,
    "collectible": 1,
    "name": "Bloodsail Raider",
    "description": "Battlecry: Gain Attack equal to the Attack of your weapon.",
    popularity: 2599
}, {
    "id": 749,
    "image": "EX1_012",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 5,
    "cost": 2,
    "attack": 1,
    "health": 1,
    "elite": 1,
    "collectible": 1,
    "name": "Bloodmage Thalnos",
    "description": "Spell Damage +1. Deathrattle: Draw a card.",
    popularity: 7430
}, {
    "id": 179,
    "image": "CS2_231",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 0,
    "health": 1,
    "attack": 1,
    "faction": 3,
    "collectible": 1,
    "name": "Wisp",
    popularity: 609
}, {
    "id": 635,
    "image": "CS2_179",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 0,
    "cost": 4,
    "attack": 3,
    "health": 5,
    "collectible": 1,
    "name": "Sen'jin Shieldmasta",
    "description": "Taunt",
    popularity: 9965
}, {
    "id": 830,
    "image": "EX1_244",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 0,
    "collectible": 1,
    "name": "Totemic Might",
    "description": "Give your Totems +2 Health.",
    popularity: 317
}, {
    "id": 523,
    "image": "EX1_025",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 4,
    "attack": 2,
    "health": 4,
    "collectible": 1,
    "name": "Dragonling Mechanic",
    "description": "Battlecry: Summon a 2\/1 Mechanical Dragonling.",
    popularity: 1409
}, {
    "id": 700,
    "image": "EX1_396",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 4,
    "attack": 1,
    "health": 7,
    "collectible": 1,
    "name": "Mogu'shan Warden",
    "description": "Taunt",
    popularity: 1803
}, {
    "id": 443,
    "image": "NEW1_017",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "collectible": 1,
    "race": 20,
    "name": "Hungry Crab",
    "description": "Battlecry: Destroy a Murloc and gain +2\/+2.",
    popularity: 496
}, {
    "id": 1091,
    "image": "EX1_533",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Misdirection",
    "description": "Secret: When a character attacks your hero, instead he attacks another random character.",
    popularity: 1263
}, {
    "id": 1133,
    "image": "EX1_522",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 4,
    "quality": 4,
    "cost": 2,
    "attack": 1,
    "health": 1,
    "collectible": 1,
    "name": "Patient Assassin",
    "description": "Stealth. Destroy any minion damaged by this minion.",
    popularity: 295
}, {
    "id": 1029,
    "image": "NEW1_026",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 3,
    "health": 5,
    "collectible": 1,
    "name": "Violet Teacher",
    "description": "Whenever you cast a spell, summon a 1\/1 Violet Apprentice.",
    popularity: 2051
}, {
    "id": 538,
    "image": "EX1_398",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 1,
    "quality": 1,
    "cost": 4,
    "attack": 3,
    "health": 3,
    "collectible": 1,
    "name": "Arathi Weaponsmith",
    "description": "Battlecry: Equip a 2\/2 weapon.",
    popularity: 2025
}, {
    "id": 1659,
    "image": "EX1_007",
    "collectible": 1,
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 1,
    "health": 3,
    "name": "Acolyte of Pain",
    "description": "Whenever this minion takes damage, draw a card.",
    popularity: 6492
}, {
    "id": 841,
    "image": "CS1_112",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 1,
    "cost": 5,
    "collectible": 1,
    "name": "Holy Nova",
    "description": "Deal 2 damage to all enemies. Restore 2 Health to all friendly characters.",
    popularity: 5363
}, {
    "id": 1026,
    "image": "NEW1_036",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 1,
    "collectible": 1,
    "name": "Commanding Shout",
    "description": "Your minions can't be reduced below 1 Health this turn. Draw a card.",
    popularity: 690
}, {
    "id": 774,
    "image": "EX1_258",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 3,
    "health": 4,
    "collectible": 1,
    "attack": 2,
    "name": "Unbound Elemental",
    "description": "Whenever you play a card with Overload, gain +1\/+1.",
    popularity: 2466
}, {
    "id": 70,
    "image": "CS2_087",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 2,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Blessing of Might",
    "description": "Give a minion +3 Attack.",
    popularity: 1877
}, {
    "id": 943,
    "image": "CS2_092",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 2,
    "quality": 1,
    "cost": 4,
    "collectible": 1,
    "name": "Blessing of Kings",
    "description": "Give a minion +4\/+4. (+4 Attack\/+4 Health)",
    popularity: 3134
}, {
    "id": 77,
    "image": "CS2_022",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 0,
    "cost": 4,
    "collectible": 1,
    "name": "Polymorph",
    "description": "Transform a minion into a 1\/1 Sheep.",
    popularity: 4589
}, {
    "id": 348,
    "image": "EX1_046",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 4,
    "attack": 4,
    "health": 4,
    "collectible": 1,
    "name": "Dark Iron Dwarf",
    "description": "Battlecry: Give a minion +2 Attack this turn.",
    popularity: 5272
}, {
    "id": 344,
    "image": "CS2_103",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 0,
    "cost": 3,
    "collectible": 1,
    "name": "Charge",
    "description": "Give a friendly minion +2 Attack and Charge.",
    popularity: 769
}, {
    "id": 1371,
    "image": "NEW1_041",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 3,
    "health": 5,
    "race": 20,
    "name": "Stampeding Kodo",
    "description": "Battlecry: Destroy a random enemy minion with 2 or less Attack.",
    popularity: 2972
}, {
    "id": 854,
    "image": "EX1_360",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "classs": 2,
    "faction": 3,
    "collectible": 1,
    "name": "Humility",
    "description": "Change a minion's Attack to 1.",
    popularity: 1221
}, {
    "id": 526,
    "image": "NEW1_038",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 8,
    "attack": 7,
    "health": 7,
    "elite": 1,
    "collectible": 1,
    "name": "Gruul",
    "description": "At the end of each turn, gain +1\/+1 .",
    popularity: 643
}, {
    "id": 213,
    "image": "CS2_009",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 0,
    "cost": 2,
    "collectible": 1,
    "name": "Mark of the Wild",
    "description": "Give a minion Taunt and +2\/+2. (+2 Attack\/+2 Health)",
    popularity: 2341
}, {
    "id": 994,
    "image": "EX1_010",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "name": "Worgen Infiltrator",
    "description": "Stealth",
    popularity: 1812
}, {
    "id": 662,
    "image": "CS2_024",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "cost": 2,
    "collectible": 1,
    "name": "Frostbolt",
    "description": "Deal 3 damage to a character and Freeze it.",
    popularity: 5958
}, {
    "id": 1008,
    "image": "EX1_565",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 0,
    "health": 3,
    "faction": 3,
    "classs": 7,
    "race": 21,
    "collectible": 1,
    "name": "Flametongue Totem",
    "description": "Adjacent minions have +2 Attack.",
    popularity: 4209
}, {
    "id": 345,
    "image": "CS2_076",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 0,
    "cost": 5,
    "collectible": 1,
    "name": "Assassinate",
    "description": "Destroy an enemy minion.",
    popularity: 1897
}, {
    "id": 157,
    "image": "CS2_162",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 6,
    "attack": 6,
    "health": 5,
    "collectible": 1,
    "name": "Lord of the Arena",
    "description": "Taunt",
    popularity: 2285
}, {
    "id": 1109,
    "image": "CS2_181",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 3,
    "cost": 3,
    "attack": 4,
    "health": 7,
    "collectible": 1,
    "name": "Injured Blademaster",
    "description": "Battlecry: Deal 4 damage to HIMSELF.",
    popularity: 2946
}, {
    "id": 1100,
    "image": "EX1_309",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 3,
    "cost": 6,
    "collectible": 1,
    "name": "Siphon Soul",
    "description": "Destroy a minion. Restore 3 Health to your hero.",
    popularity: 2347
}, {
    "id": 594,
    "image": "EX1_354",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 2,
    "quality": 4,
    "cost": 8,
    "collectible": 1,
    "name": "Lay on Hands",
    "description": "Restore 8 Health. Draw 3 cards.",
    popularity: 2049
}, {
    "id": 34,
    "image": "EX1_023",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 4,
    "attack": 3,
    "health": 3,
    "collectible": 1,
    "name": "Silvermoon Guardian",
    "description": "Divine Shield",
    popularity: 1387
}, {
    "id": 1099,
    "image": "CS2_003",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Mind Vision",
    "description": "Put a copy of a random card in your opponent's hand into your hand.",
    popularity: 1264
}, {
    "id": 1687,
    "image": "CS2_201",
    "collectible": 1,
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "attack": 9,
    "health": 5,
    "race": 20,
    "name": "Core Hound",
    popularity: 983
}, {
    "id": 510,
    "image": "EX1_508",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 14,
    "quality": 1,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "collectible": 1,
    "name": "Grimscale Oracle",
    "description": "ALL other Murlocs have +1 Attack.",
    popularity: 1585
}, {
    "id": 629,
    "image": "EX1_259",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 3,
    "cost": 3,
    "collectible": 1,
    "name": "Lightning Storm",
    "description": "Deal 2-3 damage to all enemy minions. Overload: (2)",
    popularity: 4047
}, {
    "id": 797,
    "image": "EX1_341",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 5,
    "quality": 3,
    "cost": 2,
    "health": 5,
    "attack": 0,
    "collectible": 1,
    "name": "Lightwell",
    "description": "At the start of your turn, restore 3 Health to a damaged friendly character.",
    popularity: 1436
}, {
    "id": 453,
    "image": "EX1_103",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 14,
    "quality": 3,
    "cost": 3,
    "attack": 2,
    "health": 3,
    "collectible": 1,
    "name": "Coldlight Seer",
    "description": "Battlecry: Give ALL other Murlocs +2 Health.",
    popularity: 1344
}, {
    "id": 810,
    "image": "EX1_411",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 1,
    "quality": 4,
    "cost": 7,
    "attack": 7,
    "durability": 1,
    "collectible": 1,
    "name": "Gorehowl",
    "description": "Attacking a minion costs 1 Attack instead of 1 Durability.",
    popularity: 1744
}, {
    "id": 818,
    "image": "CS2_053",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 4,
    "cost": 3,
    "collectible": 1,
    "name": "Far Sight",
    "description": "Draw a card. That card costs (3) less.",
    popularity: 256
}, {
    "id": 90,
    "image": "CS2_182",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 4,
    "attack": 4,
    "health": 5,
    "collectible": 1,
    "name": "Chillwind Yeti",
    popularity: 8021
}, {
    "id": 467,
    "image": "CS2_008",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "collectible": 1,
    "cost": 0,
    "name": "Moonfire",
    "description": "Deal 1 damage.",
    popularity: 628
}, {
    "id": 1064,
    "image": "CS2_233",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 4,
    "collectible": 1,
    "name": "Blade Flurry",
    "description": "Destroy your weapon and deal its damage to all enemies.",
    popularity: 2590
}, {
    "id": 1366,
    "image": "EX1_626",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "classs": 5,
    "name": "Mass Dispel",
    "description": "Silence all enemy minions. Draw a card.",
    popularity: 802
}, {
    "id": 801,
    "image": "EX1_059",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "collectible": 1,
    "name": "Crazed Alchemist",
    "description": "Battlecry: Swap the Attack and Health of a minion.",
    popularity: 1246
}, {
    "id": 220,
    "image": "EX1_334",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 3,
    "cost": 4,
    "collectible": 1,
    "name": "Shadow Madness",
    "description": "Gain control of an enemy minion with 3 or less Attack until end of turn.",
    popularity: 1794
}, {
    "id": 756,
    "image": "EX1_619",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 2,
    "collectible": 1,
    "name": "Equality",
    "description": "Change the Health of ALL minions to 1.",
    popularity: 3431
}, {
    "id": 1658,
    "image": "EX1_006",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 0,
    "health": 3,
    "race": 17,
    "name": "Alarm-o-Bot",
    "description": "At the start of your turn, swap this minion with a random one in your hand.",
    popularity: 564
}, {
    "id": 437,
    "image": "NEW1_031",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "collectible": 1,
    "classs": 3,
    "name": "Animal Companion",
    "description": "Summon a random Beast Companion.",
    popularity: 4267
}, {
    "id": 1634,
    "image": "EX1_004",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "name": "Young Priestess",
    "description": "At the end of your turn, give another random friendly minion +1 Health.",
    popularity: 2424
}, {
    "id": 932,
    "image": "EX1_095",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 6,
    "attack": 4,
    "health": 4,
    "collectible": 1,
    "name": "Gadgetzan Auctioneer",
    "description": "Whenever you cast a spell, draw a card.",
    popularity: 4620
}, {
    "id": 86,
    "image": "NEW1_007",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 5,
    "classs": 11,
    "collectible": 1,
    "name": "Starfall",
    "description": "Choose One - Deal 5 damage to a minion; or 2 damage to all enemy minions.",
    popularity: 2312
}, {
    "id": 430,
    "image": "EX1_275",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "cost": 4,
    "collectible": 1,
    "name": "Cone of Cold",
    "description": "Freeze a minion and the minions next to it, and deal 1 damage to them.",
    popularity: 2148
}, {
    "id": 767,
    "image": "EX1_245",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Earth Shock",
    "description": "Silence a minion, then deal 1 damage to it.",
    popularity: 3632
}, {
    "id": 890,
    "image": "EX1_383",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 8,
    "attack": 6,
    "health": 6,
    "faction": 3,
    "classs": 2,
    "elite": 1,
    "collectible": 1,
    "name": "Tirion Fordring",
    "description": "Divine Shield. Taunt. Deathrattle: Equip a 5\/3 Ashbringer.",
    popularity: 2463
}, {
    "id": 1182,
    "image": "CS2_125",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "collectible": 1,
    "race": 20,
    "name": "Ironfur Grizzly",
    "description": "Taunt",
    popularity: 4069
}, {
    "id": 708,
    "image": "EX1_137",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 3,
    "cost": 3,
    "collectible": 1,
    "name": "Headcrack",
    "description": "Deal 2 damage to the enemy hero. Combo: Return this to your hand next turn.",
    popularity: 711
}, {
    "id": 877,
    "image": "DS1_185",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 3,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Arcane Shot",
    "description": "Deal 2 damage.",
    popularity: 2286
}, {
    "id": 1221,
    "image": "EX1_304",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "classs": 9,
    "attack": 3,
    "health": 3,
    "race": 15,
    "name": "Void Terror",
    "description": "Battlecry: Destroy the minions on either side of this minion and gain their Attack and Health.",
    popularity: 1188
}, {
    "id": 1092,
    "image": "EX1_302",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Mortal Coil",
    "description": "Deal 1 damage to a minion. If that kills it, draw a card.",
    popularity: 3631
}, {
    "id": 785,
    "image": "CS2_108",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Execute",
    "description": "Destroy a damaged enemy minion.",
    popularity: 3282
}, {
    "id": 1171,
    "image": "CS2_046",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 5,
    "collectible": 1,
    "name": "Bloodlust",
    "description": "Give your minions +3 Attack this turn.",
    popularity: 2357
}, {
    "id": 287,
    "image": "NEW1_005",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 5,
    "health": 3,
    "classs": 4,
    "collectible": 1,
    "name": "Kidnapper",
    "description": "Combo: Return a minion to its owner's hand.",
    popularity: 177
}, {
    "id": 736,
    "image": "EX1_062",
    "set": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 14,
    "quality": 5,
    "cost": 4,
    "attack": 2,
    "health": 4,
    "elite": 1,
    "collectible": 1,
    "name": "Old Murk-Eye",
    "description": "Charge. Has +1 Attack for each other Murloc on the battlefield.",
    popularity: 1357
}, {
    "id": 1796,
    "image": "FP1_014",
    "collectible": 1,
    "set": 12,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 7,
    "health": 4,
    "elite": 1,
    "name": "Stalagg",
    "description": "Deathrattle: If Feugen also died this game, summon Thaddius.",
    popularity: 878
}, {
    "id": 180,
    "image": "CS2_072",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 0,
    "cost": 0,
    "collectible": 1,
    "name": "Backstab",
    "description": "Deal 2 damage to an undamaged minion.",
    popularity: 4139
}, {
    "id": 1063,
    "image": "EX1_507",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 14,
    "quality": 4,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "collectible": 1,
    "name": "Murloc Warleader",
    "description": "ALL other Murlocs have +2\/+1.",
    popularity: 1367
}, {
    "id": 365,
    "image": "EX1_144",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 1,
    "cost": 0,
    "faction": 3,
    "classs": 4,
    "collectible": 1,
    "name": "Shadowstep",
    "description": "Return a friendly minion to your hand. It costs (2) less.",
    popularity: 2269
}, {
    "id": 404,
    "image": "CS2_038",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 3,
    "cost": 2,
    "collectible": 1,
    "name": "Ancestral Spirit",
    "description": "Give a minion \"Deathrattle: Resummon this minion.\"",
    popularity: 977
}, {
    "id": 763,
    "image": "EX1_093",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 4,
    "attack": 2,
    "health": 3,
    "collectible": 1,
    "name": "Defender of Argus",
    "description": "Battlecry: Give adjacent minions +1\/+1 and Taunt.",
    popularity: 14891
}, {
    "id": 421,
    "image": "CS2_080",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 4,
    "quality": 1,
    "cost": 5,
    "attack": 3,
    "durability": 4,
    "collectible": 1,
    "name": "Assassin's Blade",
    popularity: 1927
}, {
    "id": 1657,
    "image": "EX1_005",
    "collectible": 1,
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 4,
    "health": 2,
    "name": "Big Game Hunter",
    "description": "Battlecry: Destroy a minion with an Attack of 7 or more.",
    popularity: 4663
}, {
    "id": 1167,
    "image": "EX1_382",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "faction": 3,
    "classs": 2,
    "collectible": 1,
    "name": "Aldor Peacekeeper",
    "description": "Battlecry: Change an enemy minion's Attack to 1.",
    popularity: 3382
}, {
    "id": 457,
    "image": "CS2_028",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 3,
    "cost": 6,
    "collectible": 1,
    "name": "Blizzard",
    "description": "Deal 2 damage to all enemy minions and Freeze them.",
    popularity: 3095
}, {
    "id": 1243,
    "image": "EX1_538",
    "collectible": 1,
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "classs": 3,
    "name": "Unleash the Hounds",
    "description": "For each enemy minion, summon a 1\/1 Hound with Charge.",
    popularity: 3866
}, {
    "id": 461,
    "image": "EX1_581",
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 4,
    "collectible": 1,
    "name": "Sap",
    "description": "Return an enemy minion to your opponent's hand.",
    popularity: 2465
}, {
    "id": 308,
    "image": "CS2_147",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "health": 4,
    "attack": 2,
    "faction": 2,
    "collectible": 1,
    "name": "Gnomish Inventor",
    "description": "Battlecry: Draw a card.",
    popularity: 3526
}, {
    "id": 8,
    "image": "CS1_113",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 1,
    "cost": 10,
    "collectible": 1,
    "name": "Mind Control",
    "description": "Take control of an enemy minion.",
    popularity: 3472
}, {
    "id": 134,
    "image": "CS2_161",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "attack": 7,
    "health": 5,
    "faction": 2,
    "collectible": 1,
    "name": "Ravenholdt Assassin",
    "description": "Stealth",
    popularity: 922
}, {
    "id": 172,
    "image": "CS2_031",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "collectible": 1,
    "cost": 1,
    "name": "Ice Lance",
    "description": "Freeze a character. If it was already Frozen, deal 4 damage instead.",
    popularity: 2296
}, {
    "id": 906,
    "image": "EX1_066",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 2,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "name": "Acidic Swamp Ooze",
    "description": "Battlecry: Destroy your opponent's weapon.",
    popularity: 7986
}, {
    "id": 1522,
    "image": "EX1_355",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 5,
    "classs": 2,
    "name": "Blessed Champion",
    "description": "Double a minion's Attack.",
    popularity: 647
}, {
    "id": 1261,
    "image": "EX1_534",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 3,
    "collectible": 1,
    "quality": 3,
    "cost": 6,
    "attack": 6,
    "health": 5,
    "race": 20,
    "name": "Savannah Highmane",
    "description": "Deathrattle: Summon two 2\/2 Hyenas.",
    popularity: 2852
}, {
    "id": 985,
    "image": "EX1_162",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "collectible": 1,
    "race": 20,
    "name": "Dire Wolf Alpha",
    "description": "Adjacent minions have +1 Attack.",
    popularity: 4670
}, {
    "id": 1373,
    "image": "EX1_363",
    "collectible": 1,
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "classs": 2,
    "name": "Blessing of Wisdom",
    "description": "Choose a minion. Whenever it attacks, draw a card.",
    popularity: 1132
}, {
    "id": 242,
    "image": "CS2_188",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "name": "Abusive Sergeant",
    "description": "Battlecry: Give a minion +2 Attack this turn.",
    popularity: 4694
}, {
    "id": 1721,
    "image": "EX1_016",
    "collectible": 1,
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 5,
    "health": 5,
    "elite": 1,
    "name": "Sylvanas Windrunner",
    "description": "Deathrattle: Take control of a random enemy minion.",
    popularity: 5768
}, {
    "id": 285,
    "image": "EX1_603",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "health": 2,
    "attack": 2,
    "faction": 3,
    "classs": 1,
    "collectible": 1,
    "name": "Cruel Taskmaster",
    "description": "Battlecry: Deal 1 damage to a minion and give it +2 Attack.",
    popularity: 2974
}, {
    "id": 505,
    "image": "EX1_238",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Lightning Bolt",
    "description": "Deal 3 damage. Overload: (1)",
    popularity: 3734
}, {
    "id": 601,
    "image": "EX1_166",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 11,
    "quality": 3,
    "cost": 4,
    "attack": 2,
    "health": 4,
    "collectible": 1,
    "name": "Keeper of the Grove",
    "description": "Choose One - Deal 2 damage; or Silence a minion.",
    popularity: 4386
}, {
    "id": 292,
    "image": "DS1_183",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 3,
    "quality": 0,
    "cost": 4,
    "collectible": 1,
    "name": "Multi-Shot",
    "description": "Deal 3 damage to two random enemy minions.",
    popularity: 2040
}, {
    "id": 37,
    "image": "EX1_076",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "collectible": 1,
    "name": "Pint-Sized Summoner",
    "description": "The first minion you play each turn costs (1) less.",
    popularity: 925
}, {
    "id": 754,
    "image": "EX1_048",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 4,
    "attack": 4,
    "health": 3,
    "collectible": 1,
    "name": "Spellbreaker",
    "description": "Battlecry: Silence a minion.",
    popularity: 5737
}, {
    "id": 459,
    "image": "CS2_074",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Deadly Poison",
    "description": "Give your weapon +2 Attack.",
    popularity: 3858
}, {
    "id": 667,
    "image": "EX1_129",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 1,
    "cost": 3,
    "collectible": 1,
    "name": "Fan of Knives",
    "description": "Deal 1 damage to all enemy minions. Draw a card.",
    popularity: 2566
}, {
    "id": 866,
    "image": "EX1_405",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 1,
    "attack": 0,
    "health": 4,
    "collectible": 1,
    "name": "Shieldbearer",
    "description": "Taunt",
    popularity: 2567
}, {
    "id": 860,
    "image": "EX1_317",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 1,
    "cost": 3,
    "collectible": 1,
    "name": "Sense Demons",
    "description": "Put 2 random Demons from your deck into your hand.",
    popularity: 677
}, {
    "id": 1023,
    "image": "EX1_606",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "faction": 3,
    "classs": 1,
    "collectible": 1,
    "name": "Shield Block",
    "description": "Gain 5 Armor. Draw a card.",
    popularity: 2534
}, {
    "id": 920,
    "image": "NEW1_008",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "attack": 5,
    "health": 5,
    "classs": 11,
    "collectible": 1,
    "name": "Ancient of Lore",
    "description": "Choose One - Draw 2 cards; or Restore 5 Health.",
    popularity: 3357
}, {
    "id": 1370,
    "image": "CS2_119",
    "collectible": 1,
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 2,
    "health": 7,
    "race": 20,
    "name": "Oasis Snapjaw",
    popularity: 1204
}, {
    "id": 41,
    "image": "CS2_121",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "collectible": 1,
    "name": "Frostwolf Grunt",
    "description": "Taunt",
    popularity: 1371
}, {
    "id": 1014,
    "image": "NEW1_020",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "name": "Wild Pyromancer",
    "description": "After you cast a spell, deal 1 damage to ALL minions.",
    popularity: 4446
}, {
    "id": 257,
    "image": "CS2_196",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 3,
    "attack": 2,
    "health": 3,
    "collectible": 1,
    "name": "Razorfen Hunter",
    "description": "Battlecry: Summon a 1\/1 Boar.",
    popularity: 2071
}, {
    "id": 859,
    "image": "EX1_312",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 4,
    "cost": 8,
    "collectible": 1,
    "name": "Twisting Nether",
    "description": "Destroy all minions.",
    popularity: 463
}, {
    "id": 436,
    "image": "EX1_563",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 9,
    "attack": 4,
    "health": 12,
    "faction": 3,
    "elite": 1,
    "collectible": 1,
    "race": 24,
    "name": "Malygos",
    "description": "Spell Damage +5",
    popularity: 1434
}, {
    "id": 855,
    "image": "NEW1_029",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 4,
    "health": 4,
    "elite": 1,
    "collectible": 1,
    "name": "Millhouse Manastorm",
    "description": "Battlecry: Enemy spells cost (0) next turn.",
    popularity: 368
}, {
    "id": 376,
    "image": "CS1_129",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Inner Fire",
    "description": "Change a minion's Attack to be equal to its Health.",
    popularity: 1811
}, {
    "id": 381,
    "image": "EX1_158",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 4,
    "collectible": 1,
    "name": "Soul of the Forest",
    "description": "Give your minions \"Deathrattle: Summon a 2\/2 Treant.\"",
    popularity: 775
}, {
    "id": 997,
    "image": "NEW1_025",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "race": 23,
    "collectible": 1,
    "name": "Bloodsail Corsair",
    "description": "Battlecry: Remove 1 Durability from your opponent's weapon.",
    popularity: 632
}, {
    "id": 570,
    "image": "EX1_083",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 5,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "elite": 1,
    "collectible": 1,
    "name": "Tinkmaster Overspark",
    "description": "Battlecry: Transform another random minion into a 5\/5 Devilsaur or a 1\/1 Squirrel.",
    popularity: 1937
}, {
    "id": 192,
    "image": "EX1_295",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 4,
    "cost": 3,
    "collectible": 1,
    "name": "Ice Block",
    "description": "Secret: When your hero takes fatal damage, prevent it and become Immune this turn.",
    popularity: 1706
}, {
    "id": 75,
    "image": "EX1_407",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 4,
    "cost": 5,
    "collectible": 1,
    "name": "Brawl",
    "description": "Destroy all minions except one. (chosen randomly)",
    popularity: 1547
}, {
    "id": 196,
    "image": "NEW1_004",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 6,
    "classs": 4,
    "collectible": 1,
    "name": "Vanish",
    "description": "Return all minions to their owner's hand.",
    popularity: 387
}, {
    "id": 1693,
    "image": "EX1_014",
    "collectible": 1,
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 5,
    "health": 5,
    "elite": 1,
    "race": 20,
    "name": "King Mukla",
    "description": "Battlecry: Give your opponent 2 Bananas.",
    popularity: 1136
}, {
    "id": 847,
    "image": "CS2_097",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 2,
    "quality": 1,
    "cost": 4,
    "attack": 4,
    "durability": 2,
    "collectible": 1,
    "name": "Truesilver Champion",
    "description": "Whenever your hero attacks, restore 2 Health to it.",
    popularity: 4946
}, {
    "id": 912,
    "image": "EX1_558",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 5,
    "health": 4,
    "faction": 3,
    "elite": 1,
    "collectible": 1,
    "name": "Harrison Jones",
    "description": "Battlecry: Destroy your opponent's weapon and draw cards equal to its Durability.",
    popularity: 1239
}, {
    "id": 712,
    "image": "CS2_186",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 7,
    "attack": 7,
    "health": 7,
    "collectible": 1,
    "name": "War Golem",
    popularity: 733
}, {
    "id": 1009,
    "image": "EX1_084",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 0,
    "cost": 3,
    "attack": 2,
    "health": 3,
    "classs": 1,
    "collectible": 1,
    "name": "Warsong Commander",
    "description": "Whenever you summon a minion with 3 or less Attack, give it Charge.",
    popularity: 1859
}, {
    "id": 405,
    "image": "NEW1_012",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 3,
    "classs": 8,
    "collectible": 1,
    "name": "Mana Wyrm",
    "description": "Whenever you cast a spell, gain +1 Attack.",
    popularity: 3899
}, {
    "id": 481,
    "image": "EX1_578",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "faction": 3,
    "classs": 11,
    "collectible": 1,
    "name": "Savagery",
    "description": "Deal damage equal to your hero's Attack to a minion.",
    popularity: 222
}, {
    "id": 61,
    "image": "CS2_221",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 5,
    "attack": 4,
    "health": 6,
    "collectible": 1,
    "name": "Spiteful Smith",
    "description": "Enrage: Your weapon has +2 Attack.",
    popularity: 1443
}, {
    "id": 608,
    "image": "EX1_019",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 3,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "name": "Shattered Sun Cleric",
    "description": "Battlecry: Give a friendly minion +1\/+1.",
    popularity: 8565
}, {
    "id": 462,
    "image": "EX1_132",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "faction": 3,
    "classs": 2,
    "collectible": 1,
    "name": "Eye for an Eye",
    "description": "Secret: When your hero takes damage, deal that much damage to the enemy hero.",
    popularity: 376
}, {
    "id": 825,
    "image": "EX1_284",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 5,
    "health": 4,
    "attack": 4,
    "race": 24,
    "collectible": 1,
    "name": "Azure Drake",
    "description": "Spell Damage +1. Battlecry: Draw a card.",
    popularity: 12596
}, {
    "id": 993,
    "image": "EX1_105",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 4,
    "cost": 12,
    "attack": 8,
    "health": 8,
    "collectible": 1,
    "name": "Mountain Giant",
    "description": "Costs (1) less for each other card in your hand.",
    popularity: 1945
}, {
    "id": 28,
    "image": "NEW1_011",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "collectible": 1,
    "cost": 4,
    "attack": 4,
    "health": 3,
    "classs": 1,
    "name": "Kor'kron Elite",
    "description": "Charge",
    popularity: 2359
}, {
    "id": 921,
    "image": "EX1_017",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 3,
    "attack": 4,
    "health": 2,
    "collectible": 1,
    "race": 20,
    "name": "Jungle Panther",
    "description": "Stealth",
    popularity: 1900
}, {
    "id": 336,
    "image": "EX1_249",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 5,
    "cost": 7,
    "attack": 7,
    "health": 5,
    "elite": 1,
    "collectible": 1,
    "name": "Baron Geddon",
    "description": "At the end of your turn, deal 2 damage to ALL other characters.",
    popularity: 1120
}, {
    "id": 783,
    "image": "EX1_313",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 9,
    "race": 15,
    "quality": 4,
    "cost": 4,
    "health": 6,
    "attack": 5,
    "collectible": 1,
    "name": "Pit Lord",
    "description": "Battlecry: Deal 5 damage to your hero.",
    popularity: 399
}, {
    "id": 401,
    "image": "CS2_106",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 1,
    "quality": 0,
    "cost": 2,
    "attack": 3,
    "durability": 2,
    "collectible": 1,
    "name": "Fiery War Axe",
    popularity: 4065
}, {
    "id": 545,
    "image": "DS1_233",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 0,
    "cost": 2,
    "collectible": 1,
    "name": "Mind Blast",
    "description": "Deal 5 damage to the enemy hero.",
    popularity: 1474
}, {
    "id": 606,
    "image": "DS1_175",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 3,
    "quality": 0,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "race": 20,
    "collectible": 1,
    "name": "Timber Wolf",
    "description": "Your other Beasts have +1 Attack.",
    popularity: 3376
}, {
    "id": 456,
    "image": "NEW1_024",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 5,
    "health": 4,
    "race": 23,
    "elite": 1,
    "collectible": 1,
    "name": "Captain Greenskin",
    "description": "Battlecry: Give your weapon +1\/+1.",
    popularity: 881
}, {
    "id": 389,
    "image": "CS2_189",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "collectible": 1,
    "name": "Elven Archer",
    "description": "Battlecry: Deal 1 damage.",
    popularity: 2887
}, {
    "id": 351,
    "image": "NEW1_037",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 1,
    "health": 3,
    "collectible": 1,
    "name": "Master Swordsmith",
    "description": "At the end of your turn, give another random friendly minion +1 Attack.",
    popularity: 1186
}, {
    "id": 338,
    "image": "EX1_414",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 1,
    "quality": 5,
    "cost": 8,
    "attack": 4,
    "health": 9,
    "elite": 1,
    "collectible": 1,
    "name": "Grommash Hellscream",
    "description": "Charge Enrage: +6 Attack",
    popularity: 1976
}, {
    "id": 211,
    "image": "EX1_586",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 10,
    "health": 8,
    "attack": 8,
    "faction": 3,
    "collectible": 1,
    "name": "Sea Giant",
    "description": "Costs (1) less for each other minion on the battlefield.",
    popularity: 1276
}, {
    "id": 631,
    "image": "EX1_310",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 9,
    "race": 15,
    "quality": 3,
    "cost": 5,
    "attack": 5,
    "health": 7,
    "collectible": 1,
    "name": "Doomguard",
    "description": "Charge. Battlecry: Discard two random cards.",
    popularity: 2237
}, {
    "id": 32,
    "image": "NEW1_010",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 8,
    "attack": 3,
    "health": 5,
    "classs": 7,
    "elite": 1,
    "collectible": 1,
    "name": "Al'Akir the Windlord",
    "description": "Windfury, Charge, Divine Shield, Taunt",
    popularity: 1217
}, {
    "id": 654,
    "image": "EX1_604",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "health": 4,
    "attack": 2,
    "faction": 3,
    "classs": 1,
    "collectible": 1,
    "name": "Frothing Berserker",
    "description": "Whenever a minion takes damage, gain +1 Attack.",
    popularity: 2529
}, {
    "id": 503,
    "image": "EX1_160",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 2,
    "collectible": 1,
    "name": "Power of the Wild",
    "description": "Choose One - Give your minions +1\/+1; or Summon a 3\/2 Panther.",
    popularity: 2118
}, {
    "id": 950,
    "image": "CS2_062",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 0,
    "cost": 4,
    "collectible": 1,
    "name": "Hellfire",
    "description": "Deal 3 damage to ALL characters.",
    popularity: 2650
}, {
    "id": 525,
    "image": "CS2_155",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 6,
    "attack": 4,
    "health": 7,
    "collectible": 1,
    "name": "Archmage",
    "description": "Spell Damage +1",
    popularity: 1484
}, {
    "id": 445,
    "image": "CS2_213",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 0,
    "cost": 6,
    "attack": 5,
    "health": 2,
    "collectible": 1,
    "name": "Reckless Rocketeer",
    "description": "Charge",
    popularity: 1328
}, {
    "id": 613,
    "image": "CS2_004",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Power Word: Shield",
    "description": "Give a minion +2 Health. Draw a card.",
    popularity: 5150
}, {
    "id": 555,
    "image": "CS2_023",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 0,
    "cost": 3,
    "collectible": 1,
    "name": "Arcane Intellect",
    "description": "Draw 2 cards.",
    popularity: 4563
}, {
    "id": 95,
    "image": "EX1_164",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 3,
    "cost": 5,
    "collectible": 1,
    "name": "Nourish",
    "description": "Choose One - Gain 2 Mana Crystals; or Draw 3 cards.",
    popularity: 1587
}, {
    "id": 1688,
    "image": "EX1_009",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "race": 20,
    "name": "Angry Chicken",
    "description": "Enrage: +5 Attack.",
    popularity: 543
}, {
    "id": 145,
    "image": "EX1_345",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 4,
    "cost": 4,
    "collectible": 1,
    "name": "Mindgames",
    "description": "Put a copy of a random minion from your opponent's deck into the battlefield.",
    popularity: 571
}, {
    "id": 559,
    "image": "EX1_116",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 5,
    "cost": 5,
    "attack": 6,
    "health": 2,
    "elite": 1,
    "collectible": 1,
    "name": "Leeroy Jenkins",
    "description": "Charge. Battlecry: Summon two 1\/1 Whelps for your opponent.",
    popularity: 6797
}, {
    "id": 768,
    "image": "EX1_399",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 5,
    "attack": 2,
    "health": 7,
    "collectible": 1,
    "name": "Gurubashi Berserker",
    "description": "Whenever this minion takes damage, gain +3 Attack.",
    popularity: 3188
}, {
    "id": 178,
    "image": "EX1_587",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "health": 3,
    "attack": 3,
    "faction": 3,
    "classs": 7,
    "collectible": 1,
    "name": "Windspeaker",
    "description": "Battlecry: Give a friendly minion Windfury.",
    popularity: 1149
}, {
    "id": 493,
    "image": "EX1_571",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 6,
    "faction": 3,
    "classs": 11,
    "collectible": 1,
    "name": "Force of Nature",
    "description": "Summon three 2\/2 Treants with Charge that die at the end of the turn.",
    popularity: 2409
}, {
    "id": 886,
    "image": "EX1_335",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 5,
    "quality": 1,
    "cost": 4,
    "collectible": 1,
    "attack": 0,
    "health": 5,
    "name": "Lightspawn",
    "description": "This minion's Attack is always equal to its Health.",
    popularity: 1709
}, {
    "id": 512,
    "image": "EX1_283",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 6,
    "health": 5,
    "attack": 5,
    "collectible": 1,
    "name": "Frost Elemental",
    "description": "Battlecry: Freeze a character.",
    popularity: 1331
}, {
    "id": 30,
    "image": "EX1_339",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 1,
    "cost": 3,
    "collectible": 1,
    "name": "Thoughtsteal",
    "description": "Copy 2 cards from your opponent's deck and put them into your hand.",
    popularity: 3239
}, {
    "id": 1281,
    "image": "EX1_531",
    "collectible": 1,
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "classs": 3,
    "race": 20,
    "name": "Scavenging Hyena",
    "description": "Whenever a friendly Beast dies, gain +2\/+1.",
    popularity: 2506
}, {
    "id": 1117,
    "image": "EX1_134",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 4,
    "quality": 3,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "collectible": 1,
    "name": "SI:7 Agent",
    "description": "Combo: Deal 2 damage.",
    popularity: 3481
}, {
    "id": 9,
    "image": "EX1_350",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 5,
    "quality": 5,
    "cost": 7,
    "attack": 7,
    "health": 7,
    "elite": 1,
    "collectible": 1,
    "name": "Prophet Velen",
    "description": "Double the damage and healing of your spells and Hero Power.",
    popularity: 1094
}, {
    "id": 974,
    "image": "EX1_308",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Soulfire",
    "description": "Deal 4 damage. Discard a random card.",
    popularity: 4854
}, {
    "id": 995,
    "image": "CS2_197",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 4,
    "attack": 4,
    "health": 4,
    "collectible": 1,
    "name": "Ogre Magi",
    "description": "Spell Damage +1",
    popularity: 2045
}, {
    "id": 475,
    "image": "EX1_509",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 14,
    "quality": 3,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "collectible": 1,
    "name": "Murloc Tidecaller",
    "description": "Whenever a Murloc is summoned, gain +1 Attack.",
    popularity: 1518
}, {
    "id": 748,
    "image": "EX1_612",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "health": 3,
    "attack": 4,
    "faction": 3,
    "classs": 8,
    "collectible": 1,
    "name": "Kirin Tor Mage",
    "description": "Battlecry: The next Secret you play this turn costs (0).",
    popularity: 1310
}, {
    "id": 765,
    "image": "EX1_021",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 3,
    "attack": 2,
    "health": 3,
    "collectible": 1,
    "name": "Thrallmar Farseer",
    "description": "Windfury",
    popularity: 754
}, {
    "id": 496,
    "image": "CS2_226",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 5,
    "attack": 4,
    "health": 4,
    "collectible": 1,
    "name": "Frostwolf Warlord",
    "description": "Battlecry: Gain +1\/+1 for each other friendly minion on the battlefield.",
    popularity: 2579
}, {
    "id": 614,
    "image": "EX1_608",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "health": 2,
    "attack": 3,
    "faction": 3,
    "classs": 8,
    "collectible": 1,
    "name": "Sorcerer's Apprentice",
    "description": "Your spells cost (1) less.",
    popularity: 3035
}, {
    "id": 1365,
    "image": "EX1_624",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 6,
    "classs": 5,
    "name": "Holy Fire",
    "description": "Deal 5 damage. Restore 5 Health to your hero.",
    popularity: 2995
}, {
    "id": 715,
    "image": "EX1_616",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "health": 2,
    "attack": 2,
    "faction": 3,
    "collectible": 1,
    "name": "Mana Wraith",
    "description": "ALL minions cost (1) more.",
    popularity: 350
}, {
    "id": 757,
    "image": "EX1_008",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "health": 1,
    "attack": 1,
    "faction": 2,
    "collectible": 1,
    "name": "Argent Squire",
    "description": "Divine Shield",
    popularity: 7299
}, {
    "id": 605,
    "image": "EX1_045",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 2,
    "attack": 4,
    "health": 5,
    "collectible": 1,
    "name": "Ancient Watcher",
    "description": "Can't Attack.",
    popularity: 2797
}, {
    "id": 284,
    "image": "EX1_015",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 0,
    "cost": 2,
    "attack": 1,
    "health": 1,
    "collectible": 1,
    "name": "Novice Engineer",
    "description": "Battlecry: Draw a card.",
    popularity: 6361
}, {
    "id": 648,
    "image": "CS2_171",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 20,
    "quality": 0,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "collectible": 1,
    "name": "Stonetusk Boar",
    "description": "Charge",
    popularity: 2114
}, {
    "id": 149,
    "image": "CS2_041",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 0,
    "cost": 0,
    "collectible": 1,
    "name": "Ancestral Healing",
    "description": "Restore a minion to full Health and give it Taunt.",
    popularity: 700
}, {
    "id": 990,
    "image": "EX1_128",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Conceal",
    "description": "Give your minions Stealth until your next turn.",
    popularity: 1669
}, {
    "id": 304,
    "image": "CS2_112",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 1,
    "quality": 1,
    "cost": 5,
    "attack": 5,
    "durability": 2,
    "collectible": 1,
    "name": "Arcanite Reaper",
    popularity: 2453
}, {
    "id": 1155,
    "image": "EX1_412",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 3,
    "health": 3,
    "attack": 3,
    "collectible": 1,
    "name": "Raging Worgen",
    "description": "Enrage: Windfury and +1 Attack",
    popularity: 3483
}, {
    "id": 1651,
    "image": "CS2_117",
    "collectible": 1,
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "name": "Earthen Ring Farseer",
    "description": "Battlecry: Restore 3 Health.",
    popularity: 6706
}, {
    "id": 363,
    "image": "EX1_562",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 9,
    "attack": 8,
    "health": 8,
    "faction": 3,
    "race": 24,
    "elite": 1,
    "collectible": 1,
    "name": "Onyxia",
    "description": "Battlecry: Summon 1\/1 Whelps until your side of the battlefield is full.",
    popularity: 729
}, {
    "id": 12,
    "image": "EX1_055",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 2,
    "attack": 1,
    "health": 3,
    "collectible": 1,
    "name": "Mana Addict",
    "description": "Whenever you cast a spell, gain +2 Attack this turn.",
    popularity: 811
}, {
    "id": 573,
    "image": "EX1_278",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 1,
    "cost": 2,
    "collectible": 1,
    "name": "Shiv",
    "description": "Deal 1 damage. Draw a card.",
    popularity: 2372
}, {
    "id": 755,
    "image": "EX1_590",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "faction": 3,
    "attack": 3,
    "health": 3,
    "collectible": 1,
    "name": "Blood Knight",
    "description": "Battlecry: All minions lose Divine Shield. Gain +3\/+3 for each Shield lost.",
    popularity: 1877
}, {
    "id": 279,
    "image": "CS1_130",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Holy Smite",
    "description": "Deal 2 damage.",
    popularity: 3387
}, {
    "id": 435,
    "image": "EX1_365",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 5,
    "classs": 2,
    "faction": 3,
    "collectible": 1,
    "name": "Holy Wrath",
    "description": "Draw a card and deal damage equal to its cost.",
    popularity: 353
}, {
    "id": 339,
    "image": "CS2_141",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 3,
    "attack": 2,
    "health": 2,
    "collectible": 1,
    "name": "Ironforge Rifleman",
    "description": "Battlecry: Deal 1 damage.",
    popularity: 819
}, {
    "id": 739,
    "image": "CS2_173",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 14,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "name": "Bluegill Warrior",
    "description": "Charge",
    popularity: 3401
}, {
    "id": 400,
    "image": "EX1_392",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 1,
    "cost": 2,
    "collectible": 1,
    "name": "Battle Rage",
    "description": "Draw a card for each damaged friendly character.",
    popularity: 1033
}, {
    "id": 670,
    "image": "EX1_593",
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "health": 4,
    "attack": 4,
    "faction": 3,
    "collectible": 1,
    "name": "Nightblade",
    "description": "Battlecry: Deal 3 damage to the enemy hero.",
    popularity: 1354
}, {
    "id": 415,
    "image": "EX1_049",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 2,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "name": "Youthful Brewmaster",
    "description": "Battlecry: Return a friendly minion from the battlefield to your hand.",
    popularity: 2386
}, {
    "id": 1656,
    "image": "EX1_002",
    "collectible": 1,
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 4,
    "health": 5,
    "elite": 1,
    "name": "The Black Knight",
    "description": "Battlecry: Destroy an enemy minion with Taunt.",
    popularity: 4603
}, {
    "id": 1142,
    "image": "EX1_596",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 9,
    "collectible": 1,
    "name": "Demonfire",
    "description": "Deal 2 damage to a minion. If it\u2019s a friendly Demon, give it +2\/+2 instead.",
    popularity: 1497
}, {
    "id": 140,
    "image": "EX1_136",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 2,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Redemption",
    "description": "Secret: When one of your minions dies, return it to life with 1 Health.",
    popularity: 1099
}, {
    "id": 777,
    "image": "EX1_323",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "cost": 9,
    "classs": 9,
    "race": 15,
    "attack": 3,
    "health": 15,
    "elite": 1,
    "collectible": 1,
    "name": "Lord Jaraxxus",
    "description": "Battlecry: Destroy your hero and replace it with Lord Jaraxxus.",
    popularity: 1738
}, {
    "id": 268,
    "image": "CS2_073",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Cold Blood",
    "description": "Give a minion +2 Attack. Combo: +4 Attack instead.",
    popularity: 2696
}, {
    "id": 1655,
    "image": "EX1_001",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "name": "Lightwarden",
    "description": "Whenever a character is healed, gain +2 Attack.",
    popularity: 1070
}, {
    "id": 791,
    "image": "EX1_044",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 3,
    "attack": 2,
    "health": 2,
    "collectible": 1,
    "name": "Questing Adventurer",
    "description": "Whenever you play a card, gain +1\/+1.",
    popularity: 2160
}, {
    "id": 672,
    "image": "CS2_142",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "collectible": 1,
    "name": "Kobold Geomancer",
    "description": "Spell Damage +1",
    popularity: 3169
}, {
    "id": 36,
    "image": "EX1_573",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 9,
    "attack": 5,
    "health": 8,
    "faction": 3,
    "classs": 11,
    "elite": 1,
    "collectible": 1,
    "name": "Cenarius",
    "description": "Choose One - Give your other minions +2\/+2; or Summon two 2\/2 Treants with Taunt.",
    popularity: 1540
}, {
    "id": 45,
    "image": "EX1_390",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 3,
    "attack": 2,
    "health": 3,
    "collectible": 1,
    "name": "Tauren Warrior",
    "description": "Taunt. Enrage: +3 Attack",
    popularity: 1516
}, {
    "id": 585,
    "image": "EX1_610",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Explosive Trap",
    "description": "Secret: When your hero is attacked, deal 2 damage to all enemies.",
    popularity: 3375
}, {
    "id": 640,
    "image": "NEW1_040",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 4,
    "health": 4,
    "elite": 1,
    "collectible": 1,
    "name": "Hogger",
    "description": "At the end of your turn, summon a 2\/2 Gnoll with Taunt.",
    popularity: 1423
}, {
    "id": 811,
    "image": "EX1_595",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "health": 2,
    "attack": 4,
    "faction": 3,
    "collectible": 1,
    "name": "Cult Master",
    "description": "Whenever one of your other minions dies, draw a card.",
    popularity: 2368
}, {
    "id": 1124,
    "image": "CS2_013",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 0,
    "cost": 2,
    "collectible": 1,
    "name": "Wild Growth",
    "description": "Gain an empty Mana Crystal.",
    popularity: 2262
}, {
    "id": 630,
    "image": "CS2_077",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 1,
    "cost": 7,
    "collectible": 1,
    "name": "Sprint",
    "description": "Draw 4 cards.",
    popularity: 953
}, {
    "id": 887,
    "image": "NEW1_014",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 4,
    "health": 4,
    "collectible": 1,
    "classs": 4,
    "name": "Master of Disguise",
    "description": "Battlecry: Give a friendly minion Stealth.",
    popularity: 376
}, {
    "id": 692,
    "image": "EX1_165",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 5,
    "attack": 4,
    "health": 4,
    "collectible": 1,
    "name": "Druid of the Claw",
    "description": "Choose One - Charge; or +2 Health and Taunt.",
    popularity: 4597
}, {
    "id": 237,
    "image": "EX1_591",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "health": 5,
    "attack": 3,
    "faction": 3,
    "classs": 5,
    "collectible": 1,
    "name": "Auchenai Soulpriest",
    "description": "Your cards and powers that restore Health now deal damage instead.",
    popularity: 2627
}, {
    "id": 903,
    "image": "EX1_549",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Bestial Wrath",
    "description": "Give a friendly Beast +2 Attack and Immune this turn.",
    popularity: 444
}, {
    "id": 239,
    "image": "CS2_045",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Rockbiter Weapon",
    "description": "Give a friendly character +3 Attack this turn.",
    popularity: 3971
}, {
    "id": 1241,
    "image": "CS2_237",
    "collectible": 1,
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 3,
    "health": 2,
    "classs": 3,
    "race": 20,
    "name": "Starving Buzzard",
    "description": "Whenever you summon a Beast, draw a card.",
    popularity: 3643
}, {
    "id": 1084,
    "image": "CS2_027",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Mirror Image",
    "description": "Summon two 0\/2 minions with Taunt.",
    popularity: 3676
}, {
    "id": 982,
    "image": "CS2_063",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Corruption",
    "description": "Choose an enemy minion. At the start of your turn, destroy it.",
    popularity: 608
}, {
    "id": 1158,
    "image": "EX1_145",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 4,
    "cost": 0,
    "collectible": 1,
    "name": "Preparation",
    "description": "The next spell you cast this turn costs (3) less.",
    popularity: 1652
}, {
    "id": 420,
    "image": "EX1_110",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 5,
    "cost": 6,
    "attack": 4,
    "health": 5,
    "elite": 1,
    "collectible": 1,
    "name": "Cairne Bloodhoof",
    "description": "Deathrattle: Summon a 4\/5 Baine Bloodhoof.",
    popularity: 5458
}, {
    "id": 804,
    "image": "EX1_408",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 3,
    "cost": 4,
    "collectible": 1,
    "name": "Mortal Strike",
    "description": "Deal 4 damage. If you have 12 or less Health, deal 6 instead.",
    popularity: 1010
}, {
    "id": 896,
    "image": "EX1_544",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Flare",
    "description": "All minions lose Stealth. Destroy all enemy Secrets. Draw a card.",
    popularity: 1899
}, {
    "id": 69,
    "image": "CS2_151",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 5,
    "attack": 4,
    "health": 4,
    "collectible": 1,
    "name": "Silver Hand Knight",
    "description": "Battlecry: Summon a 2\/2 Squire.",
    popularity: 2726
}, {
    "id": 1068,
    "image": "CS2_088",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 2,
    "quality": 1,
    "cost": 7,
    "health": 6,
    "attack": 5,
    "collectible": 1,
    "name": "Guardian of Kings",
    "description": "Battlecry: Restore 6 Health to your hero.",
    popularity: 3083
}, {
    "id": 186,
    "image": "EX1_057",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 4,
    "attack": 5,
    "health": 4,
    "collectible": 1,
    "name": "Ancient Brewmaster",
    "description": "Battlecry: Return a friendly minion from the battlefield to your hand.",
    popularity: 1361
}, {
    "id": 641,
    "image": "CS2_169",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "collectible": 1,
    "race": 20,
    "name": "Young Dragonhawk",
    "description": "Windfury",
    popularity: 895
}, {
    "id": 971,
    "image": "CS2_037",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Frost Shock",
    "description": "Deal 1 damage to an enemy character and Freeze it.",
    popularity: 506
}, {
    "id": 773,
    "image": "CS2_007",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 0,
    "cost": 3,
    "collectible": 1,
    "name": "Healing Touch",
    "description": "Restore 8 Health.",
    popularity: 1545
}, {
    "id": 1122,
    "image": "CS2_227",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 5,
    "attack": 7,
    "health": 6,
    "collectible": 1,
    "name": "Venture Co. Mercenary",
    "description": "Your minions cost (3) more.",
    popularity: 1718
}, {
    "id": 163,
    "image": "NEW1_003",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 0,
    "classs": 9,
    "collectible": 1,
    "name": "Sacrificial Pact",
    "description": "Destroy a Demon. Restore 5 Health to your hero.",
    popularity: 492
}, {
    "id": 23,
    "image": "EX1_320",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 4,
    "cost": 5,
    "collectible": 1,
    "name": "Bane of Doom",
    "description": "Deal 2 damage to a character. If that kills it, summon a random Demon.",
    popularity: 468
}, {
    "id": 440,
    "image": "EX1_097",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 5,
    "attack": 4,
    "health": 4,
    "collectible": 1,
    "name": "Abomination",
    "description": "Taunt. Deathrattle: Deal 2 damage to ALL characters.",
    popularity: 1931
}, {
    "id": 397,
    "image": "tt_004",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 3,
    "faction": 3,
    "collectible": 1,
    "name": "Flesheating Ghoul",
    "description": "Whenever a minion dies, gain +1 Attack.",
    popularity: 1761
}, {
    "id": 251,
    "image": "EX1_096",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "name": "Loot Hoarder",
    "description": "Deathrattle: Draw a card.",
    popularity: 8230
}, {
    "id": 282,
    "image": "EX1_126",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 4,
    "collectible": 1,
    "name": "Betrayal",
    "description": "Force an enemy minion to deal its damage to the minions next to it.",
    popularity: 714
}, {
    "id": 962,
    "image": "EX1_577",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 9,
    "health": 7,
    "faction": 3,
    "elite": 1,
    "collectible": 1,
    "race": 20,
    "name": "The Beast",
    "description": "Deathrattle: Summon a 3\/3 Finkle Einhorn for your opponent.",
    popularity: 585
}, {
    "id": 1090,
    "image": "EX1_319",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 9,
    "race": 15,
    "quality": 1,
    "cost": 1,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "name": "Flame Imp",
    "description": "Battlecry: Deal 3 damage to your hero.",
    popularity: 3267
}, {
    "id": 519,
    "image": "EX1_611",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Freezing Trap",
    "description": "Secret: When an enemy minion attacks, return it to its owner's hand and it costs (2) more.",
    popularity: 1974
}, {
    "id": 724,
    "image": "CS2_146",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "race": 23,
    "name": "Southsea Deckhand",
    "description": "Has Charge while you have a weapon equipped.",
    popularity: 1318
}, {
    "id": 216,
    "image": "CS2_172",
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "health": 2,
    "attack": 3,
    "faction": 1,
    "collectible": 1,
    "race": 20,
    "name": "Bloodfen Raptor",
    popularity: 2161
}, {
    "id": 940,
    "image": "CS2_114",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 1,
    "cost": 2,
    "collectible": 1,
    "name": "Cleave",
    "description": "Deal 2 damage to two random enemy minions.",
    popularity: 1677
}, {
    "id": 602,
    "image": "CS1_069",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 5,
    "attack": 3,
    "health": 6,
    "collectible": 1,
    "name": "Fen Creeper",
    "description": "Taunt",
    popularity: 1802
}, {
    "id": 823,
    "image": "EX1_173",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 6,
    "collectible": 1,
    "name": "Starfire",
    "description": "Deal 5 damage. Draw a card.",
    popularity: 1728
}, {
    "id": 922,
    "image": "CS1_042",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "collectible": 1,
    "name": "Goldshire Footman",
    "description": "Taunt",
    popularity: 1661
}, {
    "id": 374,
    "image": "EX1_298",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 5,
    "cost": 8,
    "attack": 8,
    "health": 8,
    "elite": 1,
    "collectible": 1,
    "name": "Ragnaros the Firelord",
    "description": "Can't Attack. At the end of your turn, deal 8 damage to a random enemy.",
    popularity: 7988
}, {
    "id": 1108,
    "image": "CS2_104",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 1,
    "cost": 2,
    "collectible": 1,
    "name": "Rampage",
    "description": "Give a damaged minion +3\/+3.",
    popularity: 975
}, {
    "id": 530,
    "image": "NEW1_016",
    "set": 4,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 1,
    "health": 1,
    "collectible": 1,
    "race": 20,
    "name": "Captain's Parrot",
    "description": "Battlecry: Put a random Pirate from your deck into your hand.",
    popularity: 328
}, {
    "id": 567,
    "image": "EX1_033",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 6,
    "attack": 4,
    "health": 5,
    "collectible": 1,
    "name": "Windfury Harpy",
    "description": "Windfury",
    popularity: 833
}, {
    "id": 68,
    "image": "EX1_028",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "cost": 5,
    "attack": 5,
    "health": 5,
    "collectible": 1,
    "race": 20,
    "quality": 1,
    "name": "Stranglethorn Tiger",
    "description": "Stealth",
    popularity: 2205
}, {
    "id": 1362,
    "image": "EX1_621",
    "collectible": 1,
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 0,
    "classs": 5,
    "name": "Circle of Healing",
    "description": "Restore 4 Health to ALL minions.",
    popularity: 2615
}, {
    "id": 455,
    "image": "EX1_554",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Snake Trap",
    "description": "Secret: When one of your minions is attacked, summon three 1\/1 Snakes.",
    popularity: 1264
}, {
    "id": 272,
    "image": "EX1_091",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 4,
    "cost": 6,
    "attack": 4,
    "health": 5,
    "classs": 5,
    "collectible": 1,
    "name": "Cabal Shadow Priest",
    "description": "Battlecry: Take control of an enemy minion that has 2 or less Attack.",
    popularity: 1968
}, {
    "id": 511,
    "image": "EX1_409",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 3,
    "cost": 1,
    "collectible": 1,
    "name": "Upgrade!",
    "description": "If you have a weapon, give it +1\/+1. Otherwise equip a 1\/3 weapon.",
    popularity: 900
}, {
    "id": 546,
    "image": "EX1_410",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 4,
    "cost": 1,
    "collectible": 1,
    "name": "Shield Slam",
    "description": "Deal 1 damage to a minion for each Armor you have.",
    popularity: 1552
}, {
    "id": 51,
    "image": "CS2_039",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 0,
    "cost": 2,
    "collectible": 1,
    "name": "Windfury",
    "description": "Give a minion Windfury.",
    popularity: 1183
}, {
    "id": 1147,
    "image": "EX1_557",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 0,
    "health": 4,
    "faction": 3,
    "elite": 1,
    "collectible": 1,
    "name": "Nat Pagle",
    "description": "At the start of your turn, you have a 50% chance to draw an extra card.",
    popularity: 2517
}, {
    "id": 1003,
    "image": "DS1_070",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 0,
    "cost": 4,
    "attack": 4,
    "health": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Houndmaster",
    "description": "Battlecry: Give a friendly Beast +2\/+2 and Taunt.",
    popularity: 3097
}, {
    "id": 395,
    "image": "CS2_033",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "cost": 4,
    "attack": 3,
    "health": 6,
    "collectible": 1,
    "name": "Water Elemental",
    "description": "Freeze any character damaged by this minion.",
    popularity: 3517
}, {
    "id": 1662,
    "image": "EX1_536",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 3,
    "durability": 2,
    "classs": 3,
    "name": "Eaglehorn Bow",
    "description": "Whenever a friendly Secret is revealed, gain +1 Durability.",
    popularity: 2716
}, {
    "id": 1080,
    "image": "EX1_559",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "attack": 5,
    "health": 7,
    "faction": 3,
    "classs": 8,
    "elite": 1,
    "collectible": 1,
    "name": "Archmage Antonidas",
    "description": "Whenever you cast a spell, add a 'Fireball' spell to your hand.",
    popularity: 1542
}, {
    "id": 296,
    "image": "EX1_539",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Kill Command",
    "description": "Deal 3 damage. If you have a Beast, deal 5 damage instead.",
    popularity: 4156
}, {
    "id": 513,
    "image": "EX1_575",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "faction": 3,
    "classs": 7,
    "collectible": 1,
    "attack": 0,
    "health": 3,
    "race": 21,
    "name": "Mana Tide Totem",
    "description": "At the end of your turn, draw a card.",
    popularity: 2867
}, {
    "id": 919,
    "image": "CS2_061",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 0,
    "cost": 3,
    "collectible": 1,
    "name": "Drain Life",
    "description": "Deal 2 damage. Restore 2 Health to your hero.",
    popularity: 1309
}, {
    "id": 138,
    "image": "NEW1_021",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 0,
    "health": 7,
    "collectible": 1,
    "name": "Doomsayer",
    "description": "At the start of your turn, destroy ALL minions.",
    popularity: 1275
}, {
    "id": 582,
    "image": "DS1_055",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 5,
    "attack": 4,
    "health": 5,
    "collectible": 1,
    "name": "Darkscale Healer",
    "description": "Battlecry: Restore 2 Health to all friendly characters.",
    popularity: 2366
}, {
    "id": 1368,
    "image": "EX1_625",
    "collectible": 1,
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "classs": 5,
    "name": "Shadowform",
    "description": "Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.",
    popularity: 586
}, {
    "id": 587,
    "image": "CS2_026",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "cost": 3,
    "collectible": 1,
    "name": "Frost Nova",
    "description": "Freeze all enemy minions.",
    popularity: 2038
}, {
    "id": 195,
    "image": "EX1_294",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "cost": 3,
    "collectible": 1,
    "name": "Mirror Entity",
    "description": "Secret: When your opponent plays a minion, summon a copy of it.",
    popularity: 1787
}, {
    "id": 113,
    "image": "EX1_287",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 3,
    "cost": 3,
    "collectible": 1,
    "name": "Counterspell",
    "description": "Secret: When your opponent casts a spell, Counter it.",
    popularity: 1556
}, {
    "id": 1653,
    "image": "CS2_118",
    "collectible": 1,
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 5,
    "health": 1,
    "name": "Magma Rager",
    popularity: 278
}, {
    "id": 289,
    "image": "CS2_124",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 0,
    "cost": 3,
    "attack": 3,
    "health": 1,
    "collectible": 1,
    "name": "Wolfrider",
    "description": "Charge",
    popularity: 3176
}, {
    "id": 858,
    "image": "EX1_112",
    "set": 11,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "health": 6,
    "attack": 6,
    "faction": 2,
    "elite": 1,
    "collectible": 1,
    "name": "Gelbin Mekkatorque",
    "description": "Battlecry: Summon an AWESOME invention.",
    popularity: 541
}, {
    "id": 22,
    "image": "EX1_607",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 0,
    "faction": 3,
    "classs": 1,
    "collectible": 1,
    "name": "Inner Rage",
    "description": "Deal 1 damage to a minion and give it +2 Attack.",
    popularity: 1750
}, {
    "id": 1007,
    "image": "CS2_105",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 0,
    "cost": 2,
    "collectible": 1,
    "name": "Heroic Strike",
    "description": "Give your hero +4 Attack this turn.",
    popularity: 1411
}, {
    "id": 352,
    "image": "EX1_567",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 5,
    "attack": 2,
    "durability": 8,
    "faction": 3,
    "classs": 7,
    "collectible": 1,
    "name": "Doomhammer",
    "description": "Windfury, Overload: (2)",
    popularity: 1533
}, {
    "id": 1047,
    "image": "DS1_184",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 3,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Tracking",
    "description": "Look at the top three cards of your deck. Draw one and discard the others.",
    popularity: 2246
}, {
    "id": 315,
    "image": "CS2_029",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 0,
    "cost": 4,
    "collectible": 1,
    "name": "Fireball",
    "description": "Deal 6 damage.",
    popularity: 6086
}, {
    "id": 1140,
    "image": "CS2_187",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 5,
    "attack": 5,
    "health": 4,
    "collectible": 1,
    "name": "Booty Bay Bodyguard",
    "description": "Taunt",
    popularity: 1467
}, {
    "id": 642,
    "image": "EX1_020",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 3,
    "attack": 3,
    "health": 1,
    "collectible": 1,
    "name": "Scarlet Crusader",
    "description": "Divine Shield",
    popularity: 3214
}, {
    "id": 132,
    "image": "EX1_011",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 0,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "name": "Voodoo Doctor",
    "description": "Battlecry: Restore 2 Health.",
    popularity: 2031
}, {
    "id": 914,
    "image": "CS2_057",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 0,
    "cost": 3,
    "collectible": 1,
    "name": "Shadow Bolt",
    "description": "Deal 4 damage to a minion.",
    popularity: 2049
}, {
    "id": 1737,
    "image": "EX1_274",
    "collectible": 1,
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 3,
    "health": 3,
    "classs": 8,
    "elite": 0,
    "name": "Ethereal Arcanist",
    "description": "If you control a Secret at the end of your turn, gain +2\/+2.",
    popularity: 887
}, {
    "id": 592,
    "image": "EX1_306",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 9,
    "race": 15,
    "quality": 0,
    "cost": 2,
    "attack": 4,
    "health": 3,
    "collectible": 1,
    "name": "Succubus",
    "description": "Battlecry: Discard a random card.",
    popularity: 621
}, {
    "id": 1098,
    "image": "EX1_170",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 3,
    "health": 3,
    "collectible": 1,
    "race": 20,
    "attack": 2,
    "name": "Emperor Cobra",
    "description": "Destroy any minion damaged by this minion.",
    popularity: 1637
}, {
    "id": 1093,
    "image": "EX1_617",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Deadly Shot",
    "description": "Destroy a random enemy minion.",
    popularity: 2493
}, {
    "id": 1050,
    "image": "CS2_005",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Claw",
    "description": "Give your hero +2 Attack this turn and 2 Armor.",
    popularity: 2477
}, {
    "id": 394,
    "image": "EX1_537",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 5,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Explosive Shot",
    "description": "Deal 5 damage to a minion and 2 damage to adjacent ones.",
    popularity: 1491
}, {
    "id": 1174,
    "image": "EX1_384",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 6,
    "classs": 2,
    "faction": 3,
    "collectible": 1,
    "name": "Avenging Wrath",
    "description": "Deal 8 damage randomly split among enemy characters.",
    popularity: 2383
}, {
    "id": 1022,
    "image": "EX1_362",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "health": 2,
    "attack": 2,
    "faction": 3,
    "classs": 2,
    "collectible": 1,
    "name": "Argent Protector",
    "description": "Battlecry: Give a friendly minion Divine Shield.",
    popularity: 3408
}, {
    "id": 517,
    "image": "EX1_301",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 9,
    "race": 15,
    "quality": 3,
    "cost": 3,
    "attack": 3,
    "health": 5,
    "collectible": 1,
    "name": "Felguard",
    "description": "Taunt. Battlecry: Destroy one of your Mana Crystals.",
    popularity: 462
}, {
    "id": 1650,
    "image": "CS2_235",
    "collectible": 1,
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 3,
    "classs": 5,
    "name": "Northshire Cleric",
    "description": "Whenever a minion is healed, draw a card.",
    popularity: 4995
}, {
    "id": 658,
    "image": "EX1_029",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "name": "Leper Gnome",
    "description": "Deathrattle: Deal 2 damage to the enemy hero.",
    popularity: 7217
}, {
    "id": 189,
    "image": "CS2_042",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 6,
    "attack": 6,
    "health": 5,
    "collectible": 1,
    "name": "Fire Elemental",
    "description": "Battlecry: Deal 3 damage.",
    popularity: 4003
}, {
    "id": 814,
    "image": "EX1_609",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "classs": 3,
    "collectible": 1,
    "name": "Snipe",
    "description": "Secret: When your opponent plays a minion, deal 4 damage to it.",
    popularity: 1164
}, {
    "id": 680,
    "image": "NEW1_027",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "race": 23,
    "collectible": 1,
    "name": "Southsea Captain",
    "description": "Your other Pirates have +1\/+1.",
    popularity: 461
}, {
    "id": 577,
    "image": "EX1_570",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "faction": 3,
    "classs": 11,
    "collectible": 1,
    "name": "Bite",
    "description": "Give your hero +4 Attack this turn and 4 Armor.",
    popularity: 605
}, {
    "id": 201,
    "image": "EX1_131",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 4,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "collectible": 1,
    "name": "Defias Ringleader",
    "description": "Combo: Summon a 2\/1 Defias Bandit.",
    popularity: 2107
}, {
    "id": 778,
    "image": "EX1_556",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 3,
    "faction": 3,
    "collectible": 1,
    "race": 17,
    "name": "Harvest Golem",
    "description": "Deathrattle: Summon a 2\/1 Damaged Golem.",
    popularity: 12735
}, {
    "id": 1144,
    "image": "EX1_543",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 9,
    "attack": 8,
    "health": 8,
    "faction": 3,
    "classs": 3,
    "race": 20,
    "elite": 1,
    "collectible": 1,
    "name": "King Krush",
    "description": "Charge",
    popularity: 812
}, {
    "id": 1135,
    "image": "EX1_100",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 5,
    "cost": 2,
    "attack": 0,
    "health": 4,
    "elite": 1,
    "collectible": 1,
    "name": "Lorewalker Cho",
    "description": "Whenever a player casts a spell, put a copy into the other player\u2019s hand.",
    popularity: 609
}, {
    "id": 141,
    "image": "CS2_084",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 3,
    "quality": 1,
    "cost": 0,
    "collectible": 1,
    "name": "Hunter's Mark",
    "description": "Change a minion's Health to 1.",
    popularity: 3149
}, {
    "id": 175,
    "image": "EX1_582",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "health": 4,
    "attack": 1,
    "faction": 3,
    "collectible": 1,
    "name": "Dalaran Mage",
    "description": "Spell Damage +1",
    popularity: 1409
}, {
    "id": 1037,
    "image": "EX1_043",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 4,
    "attack": 4,
    "health": 1,
    "race": 24,
    "collectible": 1,
    "name": "Twilight Drake",
    "description": "Battlecry: Gain +1 Health for each card in your hand.",
    popularity: 2873
}, {
    "id": 1016,
    "image": "EX1_050",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 3,
    "attack": 2,
    "health": 2,
    "race": 14,
    "collectible": 1,
    "name": "Coldlight Oracle",
    "description": "Battlecry: Each player draws 2 cards.",
    popularity: 2052
}, {
    "id": 1372,
    "image": "EX1_620",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 20,
    "attack": 8,
    "health": 8,
    "collectible": 1,
    "name": "Molten Giant",
    "description": "Costs (1) less for each damage your hero has taken.",
    popularity: 2962
}, {
    "id": 147,
    "image": "EX1_303",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 3,
    "cost": 4,
    "collectible": 1,
    "name": "Shadowflame",
    "description": "Destroy a friendly minion and deal its Attack damage to all enemy minions.",
    popularity: 2288
}, {
    "id": 281,
    "image": "EX1_067",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 6,
    "attack": 4,
    "health": 2,
    "collectible": 1,
    "name": "Argent Commander",
    "description": "Charge, Divine Shield",
    popularity: 9128
}, {
    "id": 564,
    "image": "EX1_277",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Arcane Missiles",
    "description": "Deal 3 damage randomly split among enemy characters.",
    popularity: 3662
}, {
    "id": 1035,
    "image": "EX1_178",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 11,
    "quality": 4,
    "cost": 7,
    "attack": 5,
    "health": 5,
    "collectible": 1,
    "name": "Ancient of War",
    "description": "Choose One - +5 Attack; or +5 Health and Taunt.",
    popularity: 1855
}, {
    "id": 753,
    "image": "CS2_222",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 7,
    "attack": 6,
    "health": 6,
    "collectible": 1,
    "name": "Stormwind Champion",
    "description": "Your other minions have +1\/+1.",
    popularity: 4092
}, {
    "id": 64,
    "image": "CS2_012",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 4,
    "collectible": 1,
    "name": "Swipe",
    "description": "Deal 4 damage to an enemy and 1 damage to all other enemies.",
    popularity: 5331
}, {
    "id": 766,
    "image": "EX1_246",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 0,
    "cost": 3,
    "collectible": 1,
    "name": "Hex",
    "description": "Transform a minion into a 0\/1 Frog with Taunt.",
    popularity: 4619
}, {
    "id": 1186,
    "image": "EX1_572",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 9,
    "attack": 4,
    "health": 12,
    "faction": 3,
    "elite": 1,
    "collectible": 1,
    "race": 24,
    "name": "Ysera",
    "description": "At the end of your turn, draw a Dream Card.",
    popularity: 3819
}, {
    "id": 466,
    "image": "EX1_089",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 3,
    "attack": 4,
    "health": 2,
    "collectible": 1,
    "name": "Arcane Golem",
    "description": "Charge. Battlecry: Give your opponent a Mana Crystal.",
    popularity: 2304
}, {
    "id": 469,
    "image": "CS2_059",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "health": 1,
    "attack": 0,
    "faction": 3,
    "classs": 9,
    "race": 15,
    "collectible": 1,
    "name": "Blood Imp",
    "description": "Stealth. At the end of your turn, give another random friendly minion +1 Health.",
    popularity: 1892
}, {
    "id": 1087,
    "image": "EX1_279",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 10,
    "classs": 8,
    "faction": 3,
    "collectible": 1,
    "description": "Deal 10 damage.",
    "name": "Pyroblast",
    popularity: 2628
}, {
    "id": 191,
    "image": "CS2_168",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 0,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "race": 14,
    "name": "Murloc Raider",
    popularity: 1471
}, {
    "id": 366,
    "image": "tt_010",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "faction": 3,
    "classs": 8,
    "collectible": 1,
    "name": "Spellbender",
    "description": "Secret: When an enemy casts a spell on a minion, summon a 1\/3 as the new target.",
    popularity: 651
}, {
    "id": 609,
    "image": "NEW1_023",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "race": 24,
    "name": "Faerie Dragon",
    "description": "Can't be targeted by spells or Hero Powers.",
    popularity: 5422
}, {
    "id": 710,
    "image": "CS2_075",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 4,
    "quality": 0,
    "cost": 1,
    "collectible": 1,
    "name": "Sinister Strike",
    "description": "Deal 3 damage to the enemy hero.",
    popularity: 1075
}, {
    "id": 846,
    "image": "EX1_316",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 9,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Power Overwhelming",
    "description": "Give a friendly minion +4\/+4 until end of turn. Then, it dies. Horribly.",
    popularity: 3172
}, {
    "id": 447,
    "image": "CS2_025",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 0,
    "cost": 2,
    "collectible": 1,
    "name": "Arcane Explosion",
    "description": "Deal 1 damage to all enemy minions.",
    popularity: 1847
}, {
    "id": 1367,
    "image": "CS2_234",
    "collectible": 1,
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 5,
    "name": "Shadow Word: Pain",
    "description": "Destroy a minion with 3 or less Attack.",
    popularity: 4493
}, {
    "id": 584,
    "image": "EX1_130",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "faction": 3,
    "classs": 2,
    "collectible": 1,
    "name": "Noble Sacrifice",
    "description": "Secret: When an enemy attacks, summon a 2\/1 Defender as the new target.",
    popularity: 1612
}, {
    "id": 1019,
    "image": "CS2_064",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 9,
    "race": 15,
    "quality": 1,
    "cost": 6,
    "attack": 6,
    "health": 6,
    "collectible": 1,
    "name": "Dread Infernal",
    "description": "Battlecry: Deal 1 damage to ALL other characters.",
    popularity: 961
}, {
    "id": 233,
    "image": "EX1_161",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Naturalize",
    "description": "Destroy a minion. Your opponent draws 2 cards.",
    popularity: 859
}, {
    "id": 836,
    "image": "EX1_154",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 2,
    "collectible": 1,
    "name": "Wrath",
    "description": "Choose One - Deal 3 damage to a minion; or 1 damage and draw a card.",
    popularity: 4807
}, {
    "id": 158,
    "image": "EX1_080",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "collectible": 1,
    "name": "Secretkeeper",
    "description": "Whenever a Secret is played, gain +1\/+1.",
    popularity: 704
}, {
    "id": 878,
    "image": "NEW1_022",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 3,
    "health": 3,
    "race": 23,
    "collectible": 1,
    "name": "Dread Corsair",
    "description": "Taunt. Costs (1) less per Attack of your weapon.",
    popularity: 1352
}, {
    "id": 299,
    "image": "EX1_251",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Forked Lightning",
    "description": "Deal 2 damage to 2 random enemy minions. Overload: (2)",
    popularity: 1620
}, {
    "id": 727,
    "image": "EX1_371",
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "classs": 2,
    "faction": 3,
    "collectible": 1,
    "name": "Hand of Protection",
    "description": "Give a minion Divine Shield.",
    popularity: 1400
}, {
    "id": 286,
    "image": "EX1_594",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "faction": 3,
    "classs": 8,
    "collectible": 1,
    "name": "Vaporize",
    "description": "Secret: When a minion attacks your hero, destroy it.",
    popularity: 1146
}, {
    "id": 411,
    "image": "EX1_560",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 9,
    "attack": 8,
    "health": 8,
    "faction": 3,
    "elite": 1,
    "collectible": 1,
    "race": 24,
    "name": "Nozdormu",
    "description": "Players only have 15 seconds to take their turns.",
    popularity: 357
}, {
    "id": 1361,
    "image": "CS2_236",
    "collectible": 1,
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 5,
    "name": "Divine Spirit",
    "description": "Double a minion's Health.",
    popularity: 2119
}, {
    "id": 596,
    "image": "EX1_402",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 1,
    "quality": 3,
    "cost": 2,
    "attack": 1,
    "health": 4,
    "collectible": 1,
    "name": "Armorsmith",
    "description": "Whenever a friendly minion takes damage, gain 1 Armor.",
    popularity: 1861
}, {
    "id": 976,
    "image": "EX1_506",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 14,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "name": "Murloc Tidehunter",
    "description": "Battlecry: Summon a 1\/1 Murloc Scout.",
    popularity: 2576
}, {
    "id": 699,
    "image": "DS1_178",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 2,
    "health": 5,
    "faction": 3,
    "classs": 3,
    "race": 20,
    "collectible": 1,
    "name": "Tundra Rhino",
    "description": "Your Beasts have Charge.",
    popularity: 1755
}, {
    "id": 969,
    "image": "EX1_315",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 9,
    "quality": 1,
    "cost": 4,
    "health": 4,
    "collectible": 1,
    "attack": 0,
    "name": "Summoning Portal",
    "description": "Your minions cost (2) less, but not less than (1).",
    popularity: 628
}, {
    "id": 250,
    "image": "CS2_094",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 2,
    "quality": 0,
    "cost": 4,
    "collectible": 1,
    "name": "Hammer of Wrath",
    "description": "Deal 3 damage. Draw a card.",
    popularity: 3244
}, {
    "id": 622,
    "image": "CS2_131",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 4,
    "attack": 2,
    "health": 5,
    "collectible": 1,
    "name": "Stormwind Knight",
    "description": "Charge",
    popularity: 1380
}, {
    "id": 762,
    "image": "EX1_082",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 2,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "name": "Mad Bomber",
    "description": "Battlecry: Deal 3 damage randomly split between all other characters.",
    popularity: 1954
}, {
    "id": 476,
    "image": "CS2_093",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 2,
    "quality": 1,
    "cost": 4,
    "collectible": 1,
    "name": "Consecration",
    "description": "Deal 2 damage to all enemies.",
    popularity: 5123
}, {
    "id": 1073,
    "image": "NEW1_019",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "name": "Knife Juggler",
    "description": "After you summon a minion, deal 1 damage to a random enemy.",
    popularity: 7934
}, {
    "id": 621,
    "image": "EX1_289",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "cost": 3,
    "collectible": 1,
    "name": "Ice Barrier",
    "description": "Secret: When your hero is attacked, gain 8 Armor.",
    popularity: 1874
}, {
    "id": 383,
    "image": "CS2_091",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 2,
    "quality": 0,
    "cost": 1,
    "attack": 1,
    "durability": 4,
    "collectible": 1,
    "name": "Light's Justice",
    popularity: 487
}, {
    "id": 864,
    "image": "EX1_241",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 3,
    "cost": 3,
    "collectible": 1,
    "name": "Lava Burst",
    "description": "Deal 5 damage. Overload: (2)",
    popularity: 1367
}, {
    "id": 734,
    "image": "EX1_085",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "collectible": 1,
    "name": "Mind Control Tech",
    "description": "Battlecry: If your opponent has 4 or more minions, take control of one at random.",
    popularity: 1566
}, {
    "id": 1686,
    "image": "CS2_200",
    "collectible": 1,
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 6,
    "health": 7,
    "name": "Boulderfist Ogre",
    popularity: 2775
}, {
    "id": 424,
    "image": "EX1_583",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "health": 4,
    "attack": 5,
    "faction": 3,
    "collectible": 1,
    "name": "Priestess of Elune",
    "description": "Battlecry: Restore 4 Health to your hero.",
    popularity: 811
}, {
    "id": 915,
    "image": "EX1_584",
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "cost": 4,
    "health": 5,
    "attack": 2,
    "faction": 3,
    "set": 3,
    "collectible": 1,
    "name": "Ancient Mage",
    "description": "Battlecry: Give adjacent minions Spell Damage +1.",
    popularity: 779
}, {
    "id": 151,
    "image": "EX1_155",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 3,
    "collectible": 1,
    "name": "Mark of Nature",
    "description": "Choose One - Give a minion +4 Attack; or +4 Health and Taunt.",
    popularity: 1112
}, {
    "id": 1363,
    "image": "EX1_622",
    "collectible": 1,
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "classs": 5,
    "name": "Shadow Word: Death",
    "description": "Destroy a minion with an Attack of 5 or more.",
    popularity: 5102
}, {
    "id": 290,
    "image": "CS2_203",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 1,
    "collectible": 1,
    "race": 20,
    "name": "Ironbeak Owl",
    "description": "Battlecry: Silence a minion.",
    popularity: 8098
}, {
    "id": 904,
    "image": "EX1_124",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 4,
    "faction": 3,
    "collectible": 1,
    "name": "Eviscerate",
    "description": "Deal 2 damage. Combo: Deal 4 damage instead.",
    popularity: 4107
}, {
    "id": 232,
    "image": "EX1_379",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "classs": 2,
    "faction": 3,
    "collectible": 1,
    "name": "Repentance",
    "description": "Secret: When your opponent plays a minion, reduce its Health to 1.",
    popularity: 442
}, {
    "id": 759,
    "image": "EX1_032",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 6,
    "attack": 4,
    "health": 5,
    "collectible": 1,
    "name": "Sunwalker",
    "description": "Taunt. Divine Shield",
    popularity: 5265
}, {
    "id": 1074,
    "image": "EX1_391",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 1,
    "cost": 2,
    "collectible": 1,
    "name": "Slam",
    "description": "Deal 2 damage to a minion. If it survives, draw a card.",
    popularity: 2087
}, {
    "id": 643,
    "image": "EX1_366",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 1,
    "durability": 5,
    "classs": 2,
    "faction": 3,
    "collectible": 1,
    "name": "Sword of Justice",
    "description": "Whenever you summon a minion, give it +1\/+1 and this loses 1 Durability.",
    popularity: 2016
}, {
    "id": 636,
    "image": "EX1_400",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 1,
    "quality": 1,
    "cost": 1,
    "collectible": 1,
    "name": "Whirlwind",
    "description": "Deal 1 damage to ALL minions.",
    popularity: 2400
}, {
    "id": 556,
    "image": "EX1_614",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "health": 5,
    "attack": 7,
    "faction": 3,
    "elite": 1,
    "collectible": 1,
    "race": 15,
    "name": "Illidan Stormrage",
    "description": "Whenever you play a card, summon a 2\/1 Flame of Azzinoth.",
    popularity: 1066
}, {
    "id": 581,
    "image": "EX1_561",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 9,
    "attack": 8,
    "health": 8,
    "faction": 3,
    "race": 24,
    "elite": 1,
    "collectible": 1,
    "name": "Alexstrasza",
    "description": "Battlecry: Set a hero's remaining Health to 15.",
    popularity: 3435
}, {
    "id": 1189,
    "image": "EX1_332",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 5,
    "quality": 1,
    "cost": 0,
    "collectible": 1,
    "name": "Silence",
    "description": "Silence a minion.",
    popularity: 1282
}, {
    "id": 48,
    "image": "CS2_065",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 9,
    "race": 15,
    "quality": 0,
    "cost": 1,
    "health": 3,
    "attack": 1,
    "collectible": 1,
    "name": "Voidwalker",
    "description": "Taunt",
    popularity: 4052
}, {
    "id": 1004,
    "image": "CS2_032",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 8,
    "quality": 1,
    "cost": 7,
    "collectible": 1,
    "name": "Flamestrike",
    "description": "Deal 4 damage to all enemy minions.",
    popularity: 5045
}, {
    "id": 1369,
    "image": "CS2_120",
    "collectible": 1,
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 3,
    "race": 20,
    "name": "River Crocolisk",
    popularity: 2179
}, {
    "id": 960,
    "image": "EX1_247",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "durability": 3,
    "collectible": 1,
    "name": "Stormforged Axe",
    "description": "Overload: (1)",
    popularity: 2399
}, {
    "id": 1364,
    "image": "EX1_623",
    "collectible": 1,
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "classs": 5,
    "attack": 6,
    "health": 6,
    "name": "Temple Enforcer",
    "description": "Battlecry: Give a friendly minion +3 Health.",
    popularity: 1495
}, {
    "id": 926,
    "image": "EX1_597",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "health": 5,
    "attack": 1,
    "faction": 3,
    "collectible": 1,
    "name": "Imp Master",
    "description": "At the end of your turn, deal 1 damage to this minion and summon a 1\/1 Imp.",
    popularity: 1992
}, {
    "id": 742,
    "image": "CS2_011",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 3,
    "collectible": 1,
    "name": "Savage Roar",
    "description": "Give your characters +2 Attack this turn.",
    popularity: 3059
}, {
    "id": 254,
    "image": "EX1_169",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 0,
    "cost": 0,
    "collectible": 1,
    "name": "Innervate",
    "description": "Gain 2 Mana Crystals this turn only.",
    popularity: 4865
}, {
    "id": 1141,
    "image": "EX1_250",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 7,
    "quality": 4,
    "cost": 5,
    "attack": 7,
    "health": 8,
    "collectible": 1,
    "name": "Earth Elemental",
    "description": "Taunt. Overload: (3)",
    popularity: 1324
}, {
    "id": 531,
    "image": "EX1_564",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "health": 3,
    "attack": 3,
    "faction": 3,
    "collectible": 1,
    "name": "Faceless Manipulator",
    "description": "Battlecry: Choose a minion and become a copy of it.",
    popularity: 7456
}, {
    "id": 679,
    "image": "EX1_349",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 2,
    "quality": 3,
    "cost": 3,
    "collectible": 1,
    "name": "Divine Favor",
    "description": "Draw cards until you have as many in hand as your opponent.",
    popularity: 1412
}, {
    "id": 979,
    "image": "EX1_102",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 3,
    "cost": 3,
    "attack": 1,
    "health": 4,
    "collectible": 1,
    "race": 17,
    "name": "Demolisher",
    "description": "At the start of your turn, deal 2 damage to a random enemy.",
    popularity: 1355
}, {
    "id": 891,
    "image": "EX1_058",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 3,
    "cost": 2,
    "attack": 2,
    "health": 3,
    "collectible": 1,
    "name": "Sunfury Protector",
    "description": "Battlecry: Give adjacent minions Taunt.",
    popularity: 5526
}, {
    "id": 618,
    "image": "EX1_243",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 7,
    "quality": 1,
    "cost": 1,
    "attack": 3,
    "health": 1,
    "collectible": 1,
    "name": "Dust Devil",
    "description": "Windfury. Overload: (2)",
    popularity: 340
}, {
    "id": 291,
    "image": "CS2_089",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 2,
    "quality": 0,
    "cost": 2,
    "collectible": 1,
    "name": "Holy Light",
    "description": "Restore 6 Health.",
    popularity: 1669
}, {
    "id": 238,
    "image": "EX1_248",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 7,
    "quality": 3,
    "cost": 3,
    "collectible": 1,
    "name": "Feral Spirit",
    "description": "Summon two 2\/3 Spirit Wolves with Taunt. Overload: (2)",
    popularity: 3826
}, {
    "id": 1401,
    "image": "CS2_122",
    "collectible": 1,
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 2,
    "name": "Raid Leader",
    "description": "Your other minions have +1 Attack.",
    popularity: 2267
}, {
    "id": 790,
    "image": "EX1_393",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "cost": 2,
    "attack": 2,
    "health": 3,
    "collectible": 1,
    "name": "Amani Berserker",
    "description": "Enrage: +3 Attack",
    popularity: 4366
}, {
    "id": 205,
    "image": "CS2_232",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 8,
    "health": 8,
    "attack": 8,
    "faction": 3,
    "classs": 11,
    "collectible": 1,
    "name": "Ironbark Protector",
    "description": "Taunt",
    popularity: 1538
}, {
    "id": 834,
    "image": "NEW1_030",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 10,
    "attack": 12,
    "health": 12,
    "race": 24,
    "elite": 1,
    "collectible": 1,
    "name": "Deathwing",
    "description": "Battlecry: Destroy all other minions and discard your hand.",
    popularity: 834
}, {
    "id": 413,
    "image": "CS2_150",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 5,
    "attack": 4,
    "health": 2,
    "collectible": 1,
    "name": "Stormpike Commando",
    "description": "Battlecry: Deal 2 damage.",
    popularity: 1247
}, {
    "id": 67,
    "image": "CS2_127",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 1,
    "quality": 1,
    "cost": 3,
    "attack": 1,
    "health": 4,
    "collectible": 1,
    "race": 20,
    "name": "Silverback Patriarch",
    "description": "Taunt",
    popularity: 1072
}, {
    "id": 311,
    "image": "DS1_188",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 3,
    "quality": 4,
    "cost": 7,
    "attack": 5,
    "durability": 2,
    "collectible": 1,
    "name": "Gladiator's Longbow",
    "description": "Your hero is Immune while attacking.",
    popularity: 710
}, {
    "id": 1754,
    "image": "PRO_001",
    "set": 11,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 5,
    "health": 5,
    "collectible": 1,
    "elite": 1,
    "name": "Elite Tauren Chieftain",
    "description": "Battlecry: Give both players the power to ROCK! (with a Power Chord card)",
    popularity: 273
}, {
    "id": 1807,
    "image": "FP1_023",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 3,
    "health": 4,
    "classs": 5,
    "name": "Dark Cultist",
    "description": "Deathrattle: Give a random friendly minion +3 Health.",
    popularity: 925
}, {
    "id": 1783,
    "image": "FP1_004",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 2,
    "health": 2,
    "name": "Mad Scientist",
    "description": "Deathrattle: Put a Secret from your deck into the battlefield.",
    popularity: 1396
}, {
    "id": 1805,
    "image": "FP1_021",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 4,
    "attack": 4,
    "durability": 2,
    "classs": 1,
    "name": "Death's Bite",
    "description": "Deathrattle: Deal 1 damage to all minions.",
    popularity: 759
}, {
    "id": 1799,
    "image": "FP1_016",
    "collectible": 1,
    "set": 12,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 3,
    "health": 5,
    "name": "Wailing Soul",
    "description": "Battlecry: Silence your other minions.",
    popularity: 123
}, {
    "id": 1791,
    "image": "FP1_010",
    "collectible": 1,
    "set": 12,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 2,
    "health": 8,
    "elite": 1,
    "race": 20,
    "name": "Maexxna",
    "description": "Destroy any minion damaged by this minion.",
    popularity: 690
}, {
    "id": 1810,
    "image": "FP1_026",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "classs": 4,
    "attack": 5,
    "health": 5,
    "name": "Anub'ar Ambusher",
    "description": "Deathrattle: Return a random friendly minion to your hand.",
    popularity: 177
}, {
    "id": 1861,
    "image": "FP1_027",
    "set": 12,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 1,
    "health": 4,
    "name": "Stoneskin Gargoyle",
    "description": "At the start of your turn, restore this minion to full Health.",
    popularity: 256
}, {
    "id": 1806,
    "image": "FP1_022",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "classs": 9,
    "attack": 3,
    "health": 4,
    "race": 15,
    "name": "Voidcaller",
    "description": "Deathrattle: Put a random Demon from your hand into the battlefield.",
    popularity: 433
}, {
    "id": 1915,
    "image": "FP1_031",
    "set": 12,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 1,
    "health": 7,
    "elite": 1,
    "name": "Baron Rivendare",
    "description": "Your minions trigger their Deathrattles twice.",
    popularity: 939
}, {
    "id": 1802,
    "image": "FP1_019",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "classs": 11,
    "name": "Poison Seeds",
    "description": "Destroy all minions and summon 2\/2 Treants to replace them.",
    popularity: 254
}, {
    "id": 1801,
    "image": "FP1_018",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "classs": 8,
    "name": "Duplicate",
    "description": "Secret: When a friendly minion dies, put 2 copies of it into your hand.",
    popularity: 738
}, {
    "id": 1910,
    "image": "FP1_028",
    "set": 12,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "name": "Undertaker",
    "description": "Whenever you summon a minion with Deathrattle, gain +1\/+1.",
    popularity: 2108
}, {
    "id": 1786,
    "image": "FP1_007",
    "collectible": 1,
    "set": 12,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 0,
    "health": 2,
    "name": "Nerubian Egg",
    "description": "Deathrattle: Summon a 4\/4 Nerubian.",
    popularity: 2534
}, {
    "id": 1794,
    "image": "FP1_013",
    "collectible": 1,
    "set": 12,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 8,
    "attack": 6,
    "health": 8,
    "elite": 1,
    "name": "Kel'Thuzad",
    "description": "At the end of each turn, summon all friendly minions that died this turn.",
    popularity: 973
}, {
    "id": 1793,
    "image": "FP1_012",
    "collectible": 1,
    "set": 12,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 3,
    "health": 5,
    "name": "Sludge Belcher",
    "description": "Taunt. Deathrattle: Summon a 1\/2 Slime with Taunt.",
    popularity: 4284
}, {
    "id": 1790,
    "image": "FP1_009",
    "collectible": 1,
    "set": 12,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 8,
    "name": "Deathlord",
    "description": "Taunt. Deathrattle: Your opponent puts a minion from their deck into the battlefield.",
    popularity: 913
}, {
    "id": 1804,
    "image": "FP1_020",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "classs": 2,
    "name": "Avenge",
    "description": "Secret: When one of your minions dies, give a random friendly minion +3\/+2.",
    popularity: 359
}, {
    "id": 1753,
    "image": "FP1_001",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 3,
    "name": "Zombie Chow",
    "description": "Deathrattle: Restore 5 Health to the enemy hero.",
    popularity: 1015
}, {
    "id": 1800,
    "image": "FP1_017",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 1,
    "health": 4,
    "name": "Nerub'ar Weblord",
    "description": "Minions with Battlecry cost (2) more.",
    popularity: 255
}, {
    "id": 1860,
    "image": "FP1_011",
    "set": 12,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "classs": 3,
    "race": 20,
    "description": "Deathrattle: Add a random Beast card to your hand.",
    "name": "Webspinner",
    popularity: 1077
}, {
    "id": 1858,
    "image": "FP1_003",
    "set": 12,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 1,
    "health": 2,
    "name": "Echoing Ooze",
    "description": "Battlecry: Summon an exact copy of this minion at the end of the turn.",
    popularity: 486
}, {
    "id": 1781,
    "image": "FP1_002",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 1,
    "health": 2,
    "race": 20,
    "name": "Haunted Creeper",
    "description": "Deathrattle: Summon two 1\/1 Spectral Spiders.",
    popularity: 3577
}, {
    "id": 1789,
    "image": "FP1_008",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 4,
    "health": 6,
    "name": "Spectral Knight",
    "description": "Can't be targeted by spells or Hero Powers.",
    popularity: 850
}, {
    "id": 1797,
    "image": "FP1_015",
    "collectible": 1,
    "set": 12,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 4,
    "health": 7,
    "elite": 1,
    "name": "Feugen",
    "description": "Deathrattle: If Stalagg also died this game, summon Thaddius.",
    popularity: 888
}, {
    "id": 1784,
    "image": "FP1_005",
    "collectible": 1,
    "set": 12,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 2,
    "name": "Shade of Naxxramas",
    "description": "Stealth. At the start of your turn, gain +1\/+1.",
    popularity: 786
}, {
    "id": 1808,
    "image": "FP1_024",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 1,
    "health": 3,
    "name": "Unstable Ghoul",
    "description": "Taunt. Deathrattle: Deal 1 damage to all minions.",
    popularity: 1110
}, {
    "id": 1914,
    "image": "FP1_030",
    "set": 12,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 5,
    "health": 5,
    "elite": 1,
    "name": "Loatheb",
    "description": "Battlecry: Enemy spells cost (5) more next turn.",
    popularity: 3867
}, {
    "id": 1809,
    "image": "FP1_025",
    "collectible": 1,
    "set": 12,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 7,
    "name": "Reincarnate",
    "description": "Destroy a minion, then return it to life with full Health.",
    popularity: 493
}, {
    "id": 1913,
    "image": "FP1_029",
    "set": 12,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 4,
    "health": 4,
    "name": "Dancing Swords",
    "description": "Deathrattle: Your opponent draws a card.",
    popularity: 452
}, {
    "id": 1927,
    "image": "GVG_001",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 8,
    "name": "Flamecannon",
    "description": "Deal 4 damage to a random enemy minion.",
    popularity: 61
}, {
    "id": 1928,
    "image": "GVG_002",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 3,
    "classs": 8,
    "race": 17,
    "name": "Snowchugger",
    "description": "Freeze any character damaged by this minion.",
    popularity: 65
}, {
    "id": 1929,
    "image": "GVG_003",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 8,
    "name": "Unstable Portal",
    "description": "Add a random minion to your hand. It costs (3) less.",
    popularity: 52
}, {
    "id": 1934,
    "image": "GVG_004",
    "set": 13,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 5,
    "health": 4,
    "classs": 8,
    "collectible": 1,
    "name": "Goblin Blastmage",
    "description": "Battlecry: If you have a Mech, deal 4 damage randomly split among all enemies.",
    popularity: 57
}, {
    "id": 1941,
    "image": "GVG_005",
    "set": 13,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "classs": 8,
    "collectible": 1,
    "name": "Echo of Medivh",
    "description": "Put a copy of each friendly minion into your hand.",
    popularity: 43
}, {
    "id": 1940,
    "image": "GVG_006",
    "set": 13,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 3,
    "collectible": 1,
    "race": 17,
    "name": "Mechwarper",
    "description": "Your Mechs cost (1) less.",
    popularity: 280
}, {
    "id": 1939,
    "image": "GVG_007",
    "set": 13,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "attack": 7,
    "health": 7,
    "classs": 8,
    "elite": 1,
    "collectible": 1,
    "race": 17,
    "name": "Flame Leviathan",
    "description": "When you draw this, deal 2 damage to all characters.",
    popularity: 6
}, {
    "id": 1938,
    "image": "GVG_008",
    "set": 13,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 6,
    "classs": 5,
    "collectible": 1,
    "name": "Lightbomb",
    "description": "Deal damage to each minion equal to its Attack.",
    popularity: 40
}, {
    "id": 1937,
    "image": "GVG_009",
    "set": 13,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "classs": 5,
    "collectible": 1,
    "name": "Shadowbomber",
    "description": "Battlecry: Deal 3 damage to each hero.",
    popularity: 19
}, {
    "id": 1935,
    "image": "GVG_010",
    "set": 13,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "classs": 5,
    "collectible": 1,
    "name": "Velen's Chosen",
    "description": "Give a minion +2\/+4 and Spell Damage +1.",
    popularity: 56
}, {
    "id": 1936,
    "image": "GVG_011",
    "set": 13,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "classs": 5,
    "attack": 3,
    "health": 2,
    "collectible": 1,
    "name": "Shrinkmeister",
    "description": "Battlecry: Give a minion -2 Attack this turn.",
    popularity: 97
}, {
    "id": 1933,
    "image": "GVG_012",
    "set": 13,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "classs": 5,
    "collectible": 1,
    "name": "Light of the Naaru",
    "description": "Restore 3 Health. If the target is still damaged, summon a Lightwarden.",
    popularity: 70
}, {
    "id": 1932,
    "image": "GVG_013",
    "set": 13,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "collectible": 1,
    "name": "Cogmaster",
    "description": "Has +2 Attack while you have a Mech.",
    popularity: 119
}, {
    "id": 1931,
    "image": "GVG_014",
    "set": 13,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 6,
    "health": 2,
    "classs": 5,
    "collectible": 1,
    "elite": 1,
    "name": "Vol'jin",
    "description": "Battlecry: Swap Health with another minion.",
    popularity: 101
}, {
    "id": 2093,
    "image": "GVG_015",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 9,
    "name": "Darkbomb",
    "description": "Deal 3 damage.",
    popularity: 104
}, {
    "id": 1982,
    "image": "GVG_016",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 8,
    "health": 8,
    "race": 17,
    "name": "Fel Reaver",
    "description": "Whenever your opponent plays a card, discard the top 3 cards of your deck.",
    popularity: 41
}, {
    "id": 2094,
    "image": "GVG_017",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 3,
    "name": "Call Pet",
    "description": "Draw a card. If it's a Beast, it costs (4) less.",
    popularity: 24
}, {
    "id": 2172,
    "image": "GVG_018",
    "set": 13,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 1,
    "health": 4,
    "classs": 9,
    "collectible": 1,
    "race": 15,
    "name": "Mistress of Pain",
    "description": "Whenever this minion deals damage, restore that much Health to your hero.",
    popularity: 69
}, {
    "id": 1985,
    "image": "GVG_019",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 9,
    "cost": 5,
    "name": "Demonheart",
    "description": "Deal 5 damage to a minion.  If it's a friendly Demon, give it +5\/+5 instead.",
    popularity: 65
}, {
    "id": 1997,
    "image": "GVG_020",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 9,
    "cost": 4,
    "attack": 3,
    "health": 5,
    "race": 17,
    "name": "Fel Cannon",
    "description": "At the end of your turn, deal 2 damage to a non-Mech minion.",
    popularity: 27
}, {
    "id": 1986,
    "image": "GVG_021",
    "set": 13,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 9,
    "cost": 9,
    "attack": 9,
    "health": 7,
    "elite": 1,
    "race": 15,
    "name": "Mal'Ganis",
    "description": "Your other Demons have +2\/+2. Your hero is Immune.",
    popularity: 89
}, {
    "id": 2095,
    "image": "GVG_022",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "classs": 4,
    "name": "Tinker's Sharpsword Oil",
    "description": "Give your weapon +3 Attack. Combo: Give a random friendly minion +3 Attack.",
    popularity: 73
}, {
    "id": 1988,
    "image": "GVG_023",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 4,
    "cost": 2,
    "attack": 3,
    "health": 2,
    "race": 17,
    "name": "Goblin Auto-Barber",
    "description": "Battlecry: Give your weapon +1 Attack.",
    popularity: 92
}, {
    "id": 1989,
    "image": "GVG_024",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "classs": 4,
    "cost": 3,
    "attack": 1,
    "durability": 3,
    "name": "Cogmaster's Wrench",
    "description": "Has +2 Attack while you have a Mech.",
    popularity: 45
}, {
    "id": 1990,
    "image": "GVG_025",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 4,
    "cost": 2,
    "attack": 4,
    "health": 1,
    "race": 23,
    "name": "One-eyed Cheat",
    "description": "Whenever you summon a Pirate, gain Stealth.",
    popularity: 26
}, {
    "id": 1991,
    "image": "GVG_026",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 3,
    "cost": 2,
    "name": "Feign Death",
    "description": "Trigger all Deathrattles on your minions.",
    popularity: 44
}, {
    "id": 1992,
    "image": "GVG_027",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 4,
    "cost": 3,
    "attack": 2,
    "health": 2,
    "race": 17,
    "name": "Iron Sensei",
    "description": "At the end of your turn, give another friendly Mech +2\/+2.",
    popularity: 54
}, {
    "id": 1993,
    "image": "GVG_028",
    "set": 13,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 4,
    "elite": 1,
    "cost": 6,
    "attack": 5,
    "health": 8,
    "name": "Trade Prince Gallywix",
    "description": "Whenever your opponent casts a spell, gain a copy of it and give them a Coin.",
    popularity: 42
}, {
    "id": 1998,
    "image": "GVG_029",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 7,
    "cost": 4,
    "name": "Ancestor's Call",
    "description": "Put a random minion from each player's hand into the battlefield.",
    popularity: 13
}, {
    "id": 2096,
    "image": "GVG_030",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "classs": 11,
    "attack": 2,
    "health": 2,
    "race": 17,
    "elite": 0,
    "name": "Anodized Robo Cub",
    "description": "Taunt. Choose One - +1 Attack; or +1 Health.",
    popularity: 44
}, {
    "id": 1995,
    "image": "GVG_031",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "cost": 6,
    "name": "Recycle",
    "description": "Shuffle an enemy minion into your opponent's deck.",
    popularity: 7
}, {
    "id": 2225,
    "image": "GVG_032",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 4,
    "classs": 11,
    "name": "Grove Tender",
    "description": "Choose One - Give each player a Mana Crystal; or Each player draws a card.",
    popularity: 44
}, {
    "id": 2001,
    "image": "GVG_033",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 9,
    "classs": 11,
    "name": "Tree of Life",
    "description": "Restore all characters to full Health.",
    popularity: 23
}, {
    "id": 2002,
    "image": "GVG_034",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "classs": 11,
    "attack": 7,
    "health": 6,
    "race": 17,
    "name": "Mech-Bear-Cat",
    "description": "Whenever this minion takes damage, add a Spare Part card to your hand.",
    popularity: 24
}, {
    "id": 2003,
    "image": "GVG_035",
    "set": 13,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "classs": 11,
    "elite": 1,
    "attack": 9,
    "health": 7,
    "race": 20,
    "name": "Malorne",
    "description": "Deathrattle: Shuffle this minion into your deck.",
    popularity: 47
}, {
    "id": 2004,
    "image": "GVG_036",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "classs": 7,
    "attack": 3,
    "durability": 2,
    "name": "Powermace",
    "description": "Deathrattle: Give a random friendly Mech +2\/+2.",
    popularity: 37
}, {
    "id": 2005,
    "image": "GVG_037",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "classs": 7,
    "attack": 3,
    "health": 2,
    "race": 17,
    "name": "Whirling Zap-o-matic",
    "description": "Windfury",
    popularity: 53
}, {
    "id": 2006,
    "image": "GVG_038",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 7,
    "name": "Crackle",
    "description": "Deal 3-6 damage. Overload: (1)",
    popularity: 73
}, {
    "id": 2007,
    "image": "GVG_039",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "classs": 7,
    "attack": 0,
    "health": 3,
    "race": 21,
    "name": "Vitality Totem",
    "description": "At the end of your turn, restore 4 Health to your hero.",
    popularity: 24
}, {
    "id": 2008,
    "image": "GVG_040",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "classs": 7,
    "attack": 2,
    "health": 5,
    "race": 14,
    "name": "Siltfin Spiritwalker",
    "description": "Whenever another friendly Murloc dies, draw a card. Overload: (1)",
    popularity: 68
}, {
    "id": 2009,
    "image": "GVG_041",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 6,
    "classs": 11,
    "name": "Dark Wispers",
    "description": "Choose One - Summon 5 Wisps; or Give a minion +5\/+5 and Taunt.",
    popularity: 15
}, {
    "id": 2010,
    "image": "GVG_042",
    "set": 13,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "classs": 7,
    "elite": 1,
    "attack": 7,
    "health": 7,
    "name": "Neptulon",
    "description": "Battlecry: Add 4 random Murlocs to your hand. Overload: (3)",
    popularity: 68
}, {
    "id": 2011,
    "image": "GVG_043",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 2,
    "classs": 3,
    "attack": 2,
    "durability": 2,
    "name": "Glaivezooka",
    "description": "Battlecry: Give a random friendly minion +1 Attack.",
    popularity: 22
}, {
    "id": 2012,
    "image": "GVG_044",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "race": 17,
    "attack": 3,
    "health": 4,
    "name": "Spider Tank",
    popularity: 181
}, {
    "id": 2013,
    "image": "GVG_045",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "classs": 9,
    "name": "Imp-losion",
    "description": "Deal 2-4 damage to a minion. Summon a 1\/1 Imp for each damage dealt.",
    popularity: 52
}, {
    "id": 2014,
    "image": "GVG_046",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "classs": 3,
    "attack": 2,
    "health": 6,
    "race": 20,
    "name": "King of Beasts",
    "description": "Taunt. Battlecry: Gain +1 Attack for each other Beast you have.",
    popularity: 26
}, {
    "id": 2015,
    "image": "GVG_047",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "classs": 4,
    "name": "Sabotage",
    "description": "Destroy a random enemy minion. Combo: And your opponent's weapon.",
    popularity: 38
}, {
    "id": 2016,
    "image": "GVG_048",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "classs": 3,
    "race": 17,
    "attack": 3,
    "health": 3,
    "name": "Metaltooth Leaper",
    "description": "Battlecry: Give your other Mechs +2 Attack.",
    popularity: 14
}, {
    "id": 2017,
    "image": "GVG_049",
    "set": 13,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "classs": 3,
    "elite": 1,
    "attack": 6,
    "health": 9,
    "race": 20,
    "name": "Gahz'rilla",
    "description": "Whenever this minion takes damage, double its Attack.",
    popularity: 47
}, {
    "id": 2018,
    "image": "GVG_050",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "classs": 1,
    "name": "Bouncing Blade",
    "description": "Deal 1 damage to a random minion. Repeat until a minion dies.",
    popularity: 37
}, {
    "id": 2019,
    "image": "GVG_051",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "classs": 1,
    "attack": 1,
    "health": 3,
    "race": 17,
    "name": "Warbot",
    "description": "Enrage: +1 Attack.",
    popularity: 33
}, {
    "id": 2020,
    "image": "GVG_052",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 7,
    "classs": 1,
    "name": "Crush",
    "description": "Destroy a minion. If you have a damaged minion, this costs (4) less.",
    popularity: 30
}, {
    "id": 2021,
    "image": "GVG_053",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "classs": 1,
    "attack": 5,
    "health": 5,
    "name": "Shieldmaiden",
    "description": "Battlecry: Gain 5 Armor.",
    popularity: 30
}, {
    "id": 2022,
    "image": "GVG_054",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "classs": 1,
    "attack": 4,
    "durability": 2,
    "name": "Ogre Warmaul",
    "description": "50% chance to attack the wrong enemy.",
    popularity: 8
}, {
    "id": 2023,
    "image": "GVG_055",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "classs": 1,
    "attack": 2,
    "health": 5,
    "race": 17,
    "name": "Screwjank Clunker",
    "description": "Battlecry: Give a friendly Mech +2\/+2.",
    popularity: 30
}, {
    "id": 2024,
    "image": "GVG_056",
    "set": 13,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "classs": 1,
    "elite": 1,
    "attack": 6,
    "health": 5,
    "race": 17,
    "name": "Iron Juggernaut",
    "description": "Battlecry: Shuffle a Mine into your opponent's deck. When drawn, it explodes for 10 damage.",
    popularity: 64
}, {
    "id": 2025,
    "image": "GVG_057",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "classs": 2,
    "name": "Seal of Light",
    "description": "Restore 4 Health to your hero and gain +2 Attack this turn.",
    popularity: 36
}, {
    "id": 2026,
    "image": "GVG_058",
    "set": 13,
    "collectible": 1,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "classs": 2,
    "attack": 2,
    "health": 2,
    "race": 17,
    "name": "Shielded Minibot",
    "description": "Divine Shield",
    popularity: 65
}, {
    "id": 2027,
    "image": "GVG_059",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "classs": 2,
    "attack": 2,
    "durability": 3,
    "name": "Coghammer",
    "description": "Battlecry: Give a random friendly minion Divine Shield and Taunt.",
    popularity: 53
}, {
    "id": 2028,
    "image": "GVG_060",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "classs": 2,
    "attack": 2,
    "health": 5,
    "name": "Quartermaster",
    "description": "Battlecry: Give your Silver Hand Recruits +2\/+2.",
    popularity: 43
}, {
    "id": 2029,
    "image": "GVG_061",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "classs": 2,
    "name": "Muster for Battle",
    "description": "Summon three 1\/1 Silver Hand Recruits. Equip a 1\/4 Weapon.",
    popularity: 60
}, {
    "id": 2030,
    "image": "GVG_062",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "classs": 2,
    "attack": 6,
    "health": 3,
    "race": 17,
    "name": "Cobalt Guardian",
    "description": "Whenever you summon a Mech, gain Divine Shield.",
    popularity: 20
}, {
    "id": 2031,
    "image": "GVG_063",
    "set": 13,
    "collectible": 1,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "classs": 2,
    "elite": 1,
    "attack": 1,
    "health": 7,
    "name": "Bolvar Fordragon",
    "description": "Whenever a friendly minion dies while this is in your hand, gain +1 Attack.",
    popularity: 45
}, {
    "id": 2032,
    "image": "GVG_064",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 3,
    "health": 2,
    "race": 14,
    "name": "Puddlestomper",
    popularity: 82
}, {
    "id": 2033,
    "image": "GVG_065",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 4,
    "health": 4,
    "name": "Ogre Brute",
    "description": "50% chance to attack the wrong enemy.",
    popularity: 37
}, {
    "id": 2034,
    "image": "GVG_066",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 5,
    "health": 4,
    "classs": 7,
    "name": "Dunemaul Shaman",
    "description": "Windfury, Overload: (1) 50% chance to attack the wrong enemy.",
    popularity: 21
}, {
    "id": 2035,
    "image": "GVG_067",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 2,
    "health": 3,
    "name": "Stonesplinter Trogg",
    "description": "Whenever your opponent casts a spell, gain +1 Attack.",
    popularity: 29
}, {
    "id": 2036,
    "image": "GVG_068",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 3,
    "health": 5,
    "name": "Burly Rockjaw Trogg",
    "description": "Whenever your opponent casts a spell, gain +2 Attack.",
    popularity: 35
}, {
    "id": 2037,
    "image": "GVG_069",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 3,
    "health": 3,
    "race": 17,
    "name": "Antique Healbot",
    "description": "Battlecry: Restore 8 Health to your hero.",
    popularity: 88
}, {
    "id": 2038,
    "image": "GVG_070",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 7,
    "health": 4,
    "race": 23,
    "name": "Salty Dog",
    popularity: 24
}, {
    "id": 2039,
    "image": "GVG_071",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 5,
    "health": 4,
    "race": 20,
    "name": "Lost Tallstrider",
    popularity: 27
}, {
    "id": 2040,
    "image": "GVG_072",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 2,
    "health": 3,
    "race": 17,
    "classs": 5,
    "name": "Shadowboxer",
    "description": "Whenever a character is healed, deal 1 damage to a random enemy.",
    popularity: 54
}, {
    "id": 2041,
    "image": "GVG_073",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 1,
    "classs": 3,
    "name": "Cobra Shot",
    "description": "Deal 3 damage to a minion and the enemy hero.",
    popularity: 10
}, {
    "id": 2042,
    "image": "GVG_074",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 4,
    "health": 3,
    "name": "Kezan Mystic",
    "description": "Battlecry: Take control of a random enemy Secret.",
    popularity: 43
}, {
    "id": 2043,
    "image": "GVG_075",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 2,
    "health": 3,
    "name": "Ship's Cannon",
    "description": "Whenever you summon a Pirate, deal 2 damage to a random enemy.",
    popularity: 34
}, {
    "id": 2044,
    "image": "GVG_076",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 1,
    "health": 1,
    "race": 17,
    "name": "Explosive Sheep",
    "description": "Deathrattle: Deal 2 damage to all minions.",
    popularity: 64
}, {
    "id": 2045,
    "image": "GVG_077",
    "set": 13,
    "collectible": 1,
    "cost": 6,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 4,
    "health": 9,
    "attack": 9,
    "race": 17,
    "classs": 9,
    "name": "Anima Golem",
    "description": "At the end of each turn, destroy this minion if it's your only one.",
    popularity: 29
}, {
    "id": 2046,
    "image": "GVG_078",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 4,
    "health": 5,
    "race": 17,
    "name": "Mechanical Yeti",
    "description": "Deathrattle: Give each player a Spare Part.",
    popularity: 242
}, {
    "id": 2047,
    "image": "GVG_079",
    "set": 13,
    "collectible": 1,
    "cost": 8,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 7,
    "health": 7,
    "race": 17,
    "name": "Force-Tank MAX",
    "description": "Divine Shield",
    popularity: 33
}, {
    "id": 2048,
    "image": "GVG_080",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 4,
    "health": 4,
    "classs": 11,
    "name": "Druid of the Fang",
    "description": "Battlecry: If you have a Beast, transform this minion into a 7\/7.",
    popularity: 16
}, {
    "id": 2049,
    "image": "GVG_081",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 2,
    "health": 3,
    "name": "Gilblin Stalker",
    "description": "Stealth",
    popularity: 17
}, {
    "id": 2050,
    "image": "GVG_082",
    "set": 13,
    "collectible": 1,
    "cost": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 2,
    "health": 1,
    "race": 17,
    "name": "Clockwork Gnome",
    "description": "Deathrattle: Add a Spare Part card to your hand.",
    popularity: 249
}, {
    "id": 2051,
    "image": "GVG_083",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 5,
    "health": 5,
    "race": 17,
    "classs": 5,
    "name": "Upgraded Repair Bot",
    "description": "Battlecry: Give a friendly Mech +4 Health.",
    popularity: 21
}, {
    "id": 2052,
    "image": "GVG_084",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "race": 17,
    "attack": 1,
    "health": 4,
    "name": "Flying Machine",
    "description": "Windfury",
    popularity: 40
}, {
    "id": 2053,
    "image": "GVG_085",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 1,
    "health": 2,
    "race": 17,
    "name": "Annoy-o-Tron",
    "description": "Taunt Divine Shield",
    popularity: 163
}, {
    "id": 2054,
    "image": "GVG_086",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "classs": 1,
    "attack": 5,
    "health": 5,
    "race": 17,
    "name": "Siege Engine",
    "description": "Whenever you gain Armor, give this minion +1 Attack.",
    popularity: 30
}, {
    "id": 2055,
    "image": "GVG_087",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 4,
    "classs": 3,
    "attack": 2,
    "health": 3,
    "name": "Steamwheedle Sniper",
    "description": "Your Hero Power can target minions.",
    popularity: 51
}, {
    "id": 2056,
    "image": "GVG_088",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 6,
    "health": 6,
    "classs": 4,
    "name": "Ogre Ninja",
    "description": "Stealth 50% chance to attack the wrong enemy.",
    popularity: 12
}, {
    "id": 2057,
    "image": "GVG_089",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 2,
    "health": 4,
    "name": "Illuminator",
    "description": "If you control a Secret at the end of your turn, restore 4 health to your hero.",
    popularity: 22
}, {
    "id": 2058,
    "image": "GVG_090",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 5,
    "health": 4,
    "name": "Madder Bomber",
    "description": "Battlecry: Deal 6 damage randomly split between all other characters.",
    popularity: 32
}, {
    "id": 2059,
    "image": "GVG_091",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 2,
    "health": 5,
    "race": 17,
    "name": "Arcane Nullifier X-21",
    "description": "Taunt Can't be targeted by spells or Hero Powers.",
    popularity: 97
}, {
    "id": 2060,
    "image": "GVG_092",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 3,
    "health": 2,
    "name": "Gnomish Experimenter",
    "description": "Battlecry: Draw a card. If it's a minion, transform it into a Chicken.",
    popularity: 7
}, {
    "id": 2061,
    "image": "GVG_093",
    "set": 13,
    "collectible": 1,
    "cost": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 0,
    "health": 2,
    "race": 17,
    "name": "Target Dummy",
    "description": "Taunt",
    popularity: 25
}, {
    "id": 2062,
    "image": "GVG_094",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 1,
    "health": 4,
    "race": 17,
    "name": "Jeeves",
    "description": "At the end of each player's turn, that player draws until they have 3 cards.",
    popularity: 153
}, {
    "id": 2063,
    "image": "GVG_095",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 2,
    "health": 4,
    "name": "Goblin Sapper",
    "description": "Has +4 Attack while your opponent has 6 or more cards in hand.",
    popularity: 35
}, {
    "id": 2064,
    "image": "GVG_096",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 4,
    "health": 3,
    "race": 17,
    "name": "Piloted Shredder",
    "description": "Deathrattle: Summon a random 2-Cost minion.",
    popularity: 238
}, {
    "id": 2065,
    "image": "GVG_097",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 2,
    "health": 3,
    "name": "Lil' Exorcist",
    "description": "Taunt Battlecry: Gain +1\/+1 for each enemy Deathrattle minion.",
    popularity: 32
}, {
    "id": 2066,
    "image": "GVG_098",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 1,
    "health": 4,
    "name": "Gnomeregan Infantry",
    "description": "Charge Taunt",
    popularity: 16
}, {
    "id": 2067,
    "image": "GVG_099",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "attack": 3,
    "health": 3,
    "name": "Bomb Lobber",
    "description": "Battlecry: Deal 4 damage to a random enemy minion.",
    popularity: 41
}, {
    "id": 2068,
    "image": "GVG_100",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 4,
    "health": 4,
    "classs": 9,
    "race": 15,
    "name": "Floating Watcher",
    "description": "Whenever your hero takes damage on your turn, gain +2\/+2.",
    popularity: 94
}, {
    "id": 2069,
    "image": "GVG_101",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 3,
    "classs": 2,
    "attack": 4,
    "health": 3,
    "name": "Scarlet Purifier",
    "description": "Battlecry: Deal 2 damage to all minions with Deathrattle.",
    popularity: 22
}, {
    "id": 2070,
    "image": "GVG_102",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 3,
    "health": 3,
    "name": "Tinkertown Technician",
    "description": "Battlecry: If you have a Mech, gain +1\/+1 and add a Spare Part to your hand.",
    popularity: 224
}, {
    "id": 2071,
    "image": "GVG_103",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "attack": 1,
    "health": 2,
    "race": 17,
    "name": "Micro Machine",
    "description": "At the start of each turn, gain +1 Attack.",
    popularity: 167
}, {
    "id": 2072,
    "image": "GVG_104",
    "set": 13,
    "collectible": 1,
    "cost": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 4,
    "attack": 2,
    "health": 3,
    "name": "Hobgoblin",
    "description": "Whenever you play a 1-Attack minion, give it +2\/+2.",
    popularity: 73
}, {
    "id": 2073,
    "image": "GVG_105",
    "set": 13,
    "collectible": 1,
    "cost": 6,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 4,
    "attack": 6,
    "health": 4,
    "race": 17,
    "name": "Piloted Sky Golem",
    "description": "Deathrattle: Summon a random 4-Cost minion.",
    popularity: 140
}, {
    "id": 2074,
    "image": "GVG_106",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 4,
    "attack": 1,
    "health": 5,
    "race": 17,
    "name": "Junkbot",
    "description": "Whenever a friendly Mech dies, gain +2\/+2.",
    popularity: 47
}, {
    "id": 2075,
    "image": "GVG_107",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 4,
    "attack": 3,
    "health": 2,
    "race": 17,
    "name": "Enhance-o Mechano",
    "description": "Battlecry: Give your other minions Windfury, Taunt, or Divine Shield. (at random)",
    popularity: 153
}, {
    "id": 2076,
    "image": "GVG_108",
    "set": 13,
    "collectible": 1,
    "cost": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 4,
    "attack": 3,
    "health": 2,
    "name": "Recombobulator",
    "description": "Battlecry: Transform a friendly minion into a random minion with the same Cost.",
    popularity: 58
}, {
    "id": 2077,
    "image": "GVG_109",
    "set": 13,
    "collectible": 1,
    "cost": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 4,
    "health": 1,
    "attack": 4,
    "name": "Mini-Mage",
    "description": "Stealth Spell Damage +1",
    popularity: 10
}, {
    "id": 2078,
    "image": "GVG_110",
    "set": 13,
    "collectible": 1,
    "cost": 7,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 7,
    "health": 7,
    "name": "Dr. Boom",
    "description": "Battlecry: Summon two 1\/1 Boom Bots. WARNING: Bots may explode.",
    popularity: 22
}, {
    "id": 2079,
    "image": "GVG_111",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 4,
    "health": 5,
    "race": 17,
    "name": "Mimiron's Head",
    "description": "At the start of your turn, if you have at least 3 Mechs, destroy them all and form V-07-TR-0N.",
    popularity: 82
}, {
    "id": 2080,
    "image": "GVG_112",
    "set": 13,
    "collectible": 1,
    "cost": 6,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 7,
    "health": 6,
    "name": "Mogor the Ogre",
    "description": "All minions have a 50% chance to attack the wrong enemy.",
    popularity: 13
}, {
    "id": 2081,
    "image": "GVG_113",
    "set": 13,
    "collectible": 1,
    "cost": 8,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 6,
    "health": 9,
    "race": 17,
    "name": "Foe Reaper 4000",
    "description": "Also damages the minions next to whomever he attacks.",
    popularity: 33
}, {
    "id": 2082,
    "image": "GVG_114",
    "set": 13,
    "collectible": 1,
    "cost": 8,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 5,
    "health": 7,
    "race": 17,
    "name": "Sneed's Old Shredder",
    "description": "Deathrattle: Summon a random legendary minion.",
    popularity: 108
}, {
    "id": 2083,
    "image": "GVG_115",
    "set": 13,
    "collectible": 1,
    "cost": 6,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 5,
    "health": 7,
    "name": "Toshley",
    "description": "Battlecry and Deathrattle: Add a Spare Part card to your hand.",
    popularity: 54
}, {
    "id": 2084,
    "image": "GVG_116",
    "set": 13,
    "collectible": 1,
    "cost": 9,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 9,
    "health": 7,
    "race": 17,
    "name": "Mekgineer Thermaplugg",
    "description": "Whenever an enemy minion dies, summon a Leper Gnome.",
    popularity: 13
}, {
    "id": 2085,
    "image": "GVG_117",
    "set": 13,
    "collectible": 1,
    "cost": 6,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 3,
    "health": 6,
    "name": "Gazlowe",
    "description": "Whenever you cast a 1-mana spell, add a random Mech to your hand.",
    popularity: 73
}, {
    "id": 2086,
    "image": "GVG_118",
    "set": 13,
    "collectible": 1,
    "cost": 7,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 6,
    "health": 6,
    "name": "Troggzor the Earthinator",
    "description": "Whenever your opponent casts a spell, summon a Burly Rockjaw Trogg.",
    popularity: 55
}, {
    "id": 2087,
    "image": "GVG_119",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 3,
    "health": 4,
    "race": 17,
    "name": "Blingtron 3000",
    "description": "Battlecry: Equip a random weapon for each player.",
    popularity: 36
}, {
    "id": 2088,
    "image": "GVG_120",
    "set": 13,
    "collectible": 1,
    "cost": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "elite": 1,
    "attack": 6,
    "health": 3,
    "name": "Hemet Nesingwary",
    "description": "Battlecry: Destroy a Beast.",
    popularity: 4
}, {
    "id": 2233,
    "image": "GVG_121",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 12,
    "attack": 8,
    "health": 8,
    "race": 17,
    "name": "Clockwork Giant",
    "description": "Costs (1) less for each card in your opponent's hand.",
    popularity: 34
}, {
    "id": 2234,
    "image": "GVG_122",
    "set": 13,
    "collectible": 1,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 2,
    "health": 5,
    "classs": 8,
    "name": "Wee Spellstopper",
    "description": "Adjacent minions can't be targeted by spells or Hero Powers.",
    popularity: 13
}, {
    "id": 2249,
    "image": "GVG_123",
    "set": 13,
    "collectible": 1,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 3,
    "health": 3,
    "classs": 8,
    "race": 17,
    "name": "Soot Spewer",
    "description": "Spell Damage +1",
    popularity: 27
}];
/* End of collectible card list */




















/*
*	Start of uncollectible card list
*/

var uncollectibleCards = [{
    "id": 482,
    "image": "CS2_152",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "attack": 2,
    "health": 2,
    "cost": 1,
    "name": "Squire",
    popularity: 0
}, {
    "id": 298,
    "image": "CS2_boar",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "attack": 1,
    "health": 1,
    "cost": 1,
    "race": 20,
    "name": "Boar",
    popularity: 0
}, {
    "id": 796,
    "image": "CS2_tk1",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "attack": 1,
    "health": 1,
    "race": 20,
    "cost": 0,
    "name": "Sheep",
    popularity: 0
}, {
    "id": 204,
    "image": "EX1_554t",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "health": 1,
    "attack": 1,
    "faction": 3,
    "classs": 3,
    "cost": 0,
    "race": 20,
    "name": "Snake",
    popularity: 0
}, {
    "id": 76,
    "image": "EX1_598",
    "set": 3,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "health": 1,
    "attack": 1,
    "faction": 3,
    "race": 15,
    "name": "Imp",
    popularity: 0
}, {
    "id": 332,
    "image": "EX1_tk29",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "attack": 5,
    "health": 5,
    "cost": 5,
    "race": 20,
    "name": "Devilsaur",
    popularity: 0
}, {
    "id": 959,
    "image": "NEW1_032",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 4,
    "health": 4,
    "cost": 3,
    "race": 20,
    "quality": 1,
    "classs": 3,
    "name": "Misha",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 100,
    "image": "NEW1_034",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 4,
    "health": 2,
    "cost": 3,
    "race": 20,
    "quality": 1,
    "classs": 3,
    "name": "Huffer",
    "description": "Charge",
    popularity: 0
}, {
    "id": 460,
    "image": "NEW1_040t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "quality": 2,
    "name": "Gnoll",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1322,
    "image": "TU4a_003",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "name": "Gnoll",
    popularity: 0
}, {
    "id": 54,
    "image": "ds1_whelptoken",
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "attack": 1,
    "health": 1,
    "set": 3,
    "cost": 1,
    "race": 24,
    "quality": 2,
    "name": "Whelp",
    popularity: 0
}, {
    "id": 548,
    "image": "hexfrog",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 0,
    "health": 1,
    "faction": 3,
    "race": 20,
    "cost": 0,
    "name": "Frog",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1077,
    "image": "skele11",
    "set": 2,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "health": 1,
    "attack": 1,
    "faction": 3,
    "cost": 1,
    "name": "Skeleton",
    "description": " ",
    popularity: 0
}, {
    "id": 928,
    "image": "NEW1_007b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Starfall",
    "description": "Deal 5 damage to a minion.",
    popularity: 0
}, {
    "id": 21,
    "image": "TU4c_003",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 0,
    "health": 2,
    "faction": 3,
    "name": "Barrel",
    "description": "Is something in this barrel?",
    popularity: 0
}, {
    "id": 578,
    "image": "EX1_178a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Rooted",
    "description": "+5 Health and Taunt.",
    popularity: 0
}, {
    "id": 182,
    "image": "EX1_178b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Uproot",
    "description": "+5 Attack.",
    popularity: 0
}, {
    "id": 364,
    "image": "EX1_573b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Shan'do's Lesson",
    "description": "Summon two 2\/2 Treants with Taunt.",
    popularity: 0
}, {
    "id": 1161,
    "image": "NEW1_007a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Starfall",
    "description": "Deal 2 damage to all enemy minions.",
    popularity: 0
}, {
    "id": 1720,
    "image": "EX1_345t",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 0,
    "attack": 0,
    "health": 1,
    "classs": 5,
    "description": "Mindgames whiffed! Your opponent had no minions!",
    "name": "Shadow of Nothing",
    popularity: 0
}, {
    "id": 313,
    "image": "NEW1_008a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Ancient Teachings",
    "description": "Draw 2 cards.",
    popularity: 0
}, {
    "id": 217,
    "image": "DREAM_05",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 0,
    "quality": 2,
    "name": "Nightmare",
    "description": "Give a minion +5\/+5. At the start of your next turn, destroy it.",
    popularity: 0
}, {
    "id": 318,
    "image": "EX1_110t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 5,
    "cost": 4,
    "attack": 4,
    "health": 5,
    "elite": 1,
    "name": "Baine Bloodhoof",
    popularity: 0
}, {
    "id": 1769,
    "image": "CRED_09",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 4,
    "health": 7,
    "elite": 1,
    "name": "Ben Thompson",
    "description": "Battlecry: Draw some cards. With a pen.",
    popularity: 0
}, {
    "id": 600,
    "image": "EX1_158t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 11,
    "attack": 2,
    "health": 2,
    "cost": 1,
    "quality": 2,
    "name": "Treant",
    popularity: 0
}, {
    "id": 808,
    "image": "DREAM_04",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 0,
    "quality": 2,
    "name": "Dream",
    "description": "Return a minion to its owner's hand.",
    popularity: 0
}, {
    "id": 1751,
    "image": "EX1_614t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "quality": 2,
    "name": "Flame of Azzinoth",
    popularity: 0
}, {
    "id": 1694,
    "image": "EX1_014t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "quality": 2,
    "name": "Bananas",
    "description": "Give a minion +1\/+1.",
    popularity: 0
}, {
    "id": 227,
    "image": "Mekka1",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "health": 1,
    "cost": 1,
    "attack": 0,
    "race": 17,
    "name": "Homing Chicken",
    "description": "At the start of your turn, destroy this minion and draw 3 cards.",
    popularity: 0
}, {
    "id": 1086,
    "image": "tt_010a",
    "set": 3,
    "quality": 4,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "health": 3,
    "attack": 1,
    "classs": 8,
    "cost": 0,
    "name": "Spellbender",
    popularity: 0
}, {
    "id": 1190,
    "image": "EX1_tk28",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "attack": 1,
    "health": 1,
    "cost": 1,
    "race": 20,
    "name": "Squirrel",
    popularity: 0
}, {
    "id": 1661,
    "image": "EX1_409t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 1,
    "attack": 1,
    "classs": 1,
    "durability": 3,
    "quality": 2,
    "name": "Heavy Axe",
    popularity: 0
}, {
    "id": 1669,
    "image": "TU4f_002",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "name": "Pandaren Scout",
    popularity: 0
}, {
    "id": 301,
    "image": "DREAM_02",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "quality": 2,
    "name": "Ysera Awakens",
    "description": "Deal 5 damage to all characters except Ysera.",
    popularity: 0
}, {
    "id": 488,
    "image": "EX1_131t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 2,
    "health": 1,
    "faction": 3,
    "classs": 4,
    "cost": 1,
    "quality": 2,
    "name": "Defias Bandit",
    popularity: 0
}, {
    "id": 321,
    "image": "EX1_166b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Dispel",
    "description": "Silence a minion.",
    popularity: 0
}, {
    "id": 1501,
    "image": "TU4c_007",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 10,
    "health": 10,
    "name": "Mukla's Big Brother",
    "description": "So strong! And only 6 Mana?!",
    popularity: 0
}, {
    "id": 1323,
    "image": "TU4a_004",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "name": "Hogger SMASH!",
    "description": "Deal 4 damage.",
    popularity: 0
}, {
    "id": 451,
    "image": "EX1_164a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Nourish",
    "description": "Gain 2 Mana Crystals.",
    popularity: 0
}, {
    "id": 1660,
    "image": "EX1_323w",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 3,
    "durability": 8,
    "classs": 9,
    "quality": 2,
    "name": "Blood Fury",
    popularity: 0
}, {
    "id": 1324,
    "image": "TU4a_005",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 5,
    "health": 2,
    "name": "Massive Gnoll",
    popularity: 0
}, {
    "id": 1143,
    "image": "EX1_tk34",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "attack": 6,
    "health": 6,
    "race": 15,
    "cost": 6,
    "classs": 9,
    "name": "Infernal",
    popularity: 0
}, {
    "id": 835,
    "image": "EX1_160b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Leader of the Pack",
    "description": "Give your minions +1\/+1.",
    popularity: 0
}, {
    "id": 262,
    "image": "Mekka4t",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 1,
    "health": 1,
    "cost": 0,
    "race": 20,
    "quality": 2,
    "name": "Chicken",
    "description": "Hey Chicken!",
    popularity: 0
}, {
    "id": 690,
    "image": "EX1_155b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Mark of Nature",
    "description": "+4 Health and Taunt.",
    popularity: 0
}, {
    "id": 226,
    "image": "NEW1_033",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 2,
    "health": 4,
    "race": 20,
    "classs": 3,
    "cost": 3,
    "quality": 1,
    "name": "Leokk",
    "description": "Other friendly minions have +1 Attack.",
    popularity: 0
}, {
    "id": 1715,
    "image": "EX1_538t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 3,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "race": 20,
    "quality": 2,
    "name": "Hound",
    "description": "Charge",
    popularity: 0
}, {
    "id": 1624,
    "image": "EX1_534t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 3,
    "quality": 3,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "race": 20,
    "name": "Hyena",
    popularity: 0
}, {
    "id": 1681,
    "image": "EX1_165t1",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 4,
    "health": 4,
    "classs": 11,
    "race": 20,
    "name": "Druid of the Claw",
    "description": "Charge",
    popularity: 0
}, {
    "id": 1677,
    "image": "TU4f_007",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "name": "Crazy Monkey",
    "description": "Battlecry: Throw Bananas.",
    popularity: 0
}, {
    "id": 1639,
    "image": "TU4e_004",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 2,
    "attack": 2,
    "durability": 2,
    "name": "Warglaive of Azzinoth",
    popularity: 0
}, {
    "id": 987,
    "image": "EX1_166a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Moonfire",
    "description": "Deal 2 damage.",
    popularity: 0
}, {
    "id": 1006,
    "image": "EX1_finkle",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 3,
    "health": 3,
    "faction": 3,
    "cost": 2,
    "elite": 1,
    "name": "Finkle Einhorn",
    popularity: 0
}, {
    "id": 325,
    "image": "EX1_164b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Nourish",
    "description": "Draw 3 cards.",
    popularity: 0
}, {
    "id": 1773,
    "image": "CRED_13",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 10,
    "attack": 10,
    "health": 10,
    "elite": 1,
    "name": "Brian Schwab",
    "description": "At the end of your turn, give a random minion +1 Attack.",
    popularity: 0
}, {
    "id": 471,
    "image": "skele21",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 2,
    "health": 1,
    "faction": 3,
    "cost": 1,
    "race": 17,
    "name": "Damaged Golem",
    popularity: 0
}, {
    "id": 1541,
    "image": "TU4c_008",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "name": "Will of Mukla",
    "description": "Restore 8 Health.",
    popularity: 0
}, {
    "id": 1642,
    "image": "TU4e_007",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 6,
    "attack": 4,
    "durability": 2,
    "name": "Dual Warglaives",
    popularity: 0
}, {
    "id": 1723,
    "image": "EX1_317t",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "classs": 9,
    "race": 15,
    "name": "Worthless Imp",
    "description": "You are out of demons! At least there are always imps...",
    popularity: 0
}, {
    "id": 209,
    "image": "NEW1_008b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Ancient Secrets",
    "description": "Restore 5 Health.",
    popularity: 0
}, {
    "id": 1603,
    "image": "TU4d_002",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "name": "Crazed Hunter",
    popularity: 0
}, {
    "id": 1673,
    "image": "TU4f_005",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 4,
    "health": 4,
    "name": "Brewmaster",
    popularity: 0
}, {
    "id": 146,
    "image": "Mekka4",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "health": 3,
    "cost": 1,
    "attack": 0,
    "race": 17,
    "name": "Poultryizer",
    "description": "At the start of your turn, transform a random minion into a 1\/1 Chicken.",
    popularity: 0
}, {
    "id": 1672,
    "image": "TU4f_004",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "name": "Legacy of the Emperor",
    "description": "Give your minions +2\/+2. (+2 Attack\/+2 Health)",
    popularity: 0
}, {
    "id": 537,
    "image": "CS2_050",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 7,
    "quality": 0,
    "attack": 1,
    "health": 1,
    "race": 21,
    "cost": 1,
    "name": "Searing Totem",
    popularity: 0
}, {
    "id": 485,
    "image": "CS2_082",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "faction": 3,
    "classs": 4,
    "quality": 0,
    "attack": 1,
    "durability": 2,
    "cost": 1,
    "name": "Wicked Knife",
    popularity: 0
}, {
    "id": 340,
    "image": "DREAM_01",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 3,
    "health": 5,
    "quality": 2,
    "name": "Laughing Sister",
    "description": "Can't be targeted by spells or Hero Powers.",
    popularity: 0
}, {
    "id": 1733,
    "image": "GAME_002",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 0,
    "cost": 0,
    "attack": 1,
    "health": 1,
    "name": "Avatar of the Coin",
    "description": "You lost the coin flip, but gained a friend.",
    popularity: 0
}, {
    "id": 1725,
    "image": "CS2_013t",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 0,
    "classs": 11,
    "quality": 2,
    "name": "Excess Mana",
    "description": "Draw a card. (You can only have 10 Mana in your tray.)",
    popularity: 0
}, {
    "id": 533,
    "image": "EX1_tk11",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 7,
    "quality": 3,
    "attack": 2,
    "health": 3,
    "cost": 2,
    "name": "Spirit Wolf",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1652,
    "image": "CS2_101t",
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "classs": 2,
    "name": "Silver Hand Recruit",
    popularity: 0
}, {
    "id": 317,
    "image": "TU4c_006",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "faction": 3,
    "name": "Bananas",
    "description": "Give a friendly minion +1\/+1. (+1 Attack\/+1 Health)",
    popularity: 0
}, {
    "id": 678,
    "image": "EX1_573t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 2,
    "classs": 11,
    "quality": 2,
    "name": "Treant",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 358,
    "image": "EX1_tk9",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "attack": 2,
    "health": 2,
    "cost": 1,
    "name": "Treant",
    "description": "Charge.  At the end of the turn, destroy this minion.",
    popularity: 0
}, {
    "id": 1748,
    "image": "GAME_006",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "quality": 2,
    "name": "NOOOOOOOOOOOO",
    "description": "Somehow, the card you USED to have has been deleted.  Here, have this one instead!",
    popularity: 0
}, {
    "id": 137,
    "image": "EX1_154b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Wrath",
    "description": "Deal 1 damage to a minion. Draw a card.",
    popularity: 0
}, {
    "id": 1682,
    "image": "EX1_165t2",
    "set": 3,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 4,
    "health": 6,
    "classs": 11,
    "race": 20,
    "name": "Druid of the Claw",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1078,
    "image": "EX1_506a",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "race": 14,
    "quality": 1,
    "attack": 1,
    "health": 1,
    "cost": 0,
    "name": "Murloc Scout",
    popularity: 0
}, {
    "id": 850,
    "image": "CS2_051",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 7,
    "quality": 0,
    "health": 2,
    "race": 21,
    "cost": 1,
    "attack": 0,
    "name": "Stoneclaw Totem",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1640,
    "image": "TU4e_005",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "name": "Flame Burst",
    "description": "Shoot 5 missiles at random enemies for 1 damage each.",
    popularity: 0
}, {
    "id": 458,
    "image": "CS2_052",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "classs": 7,
    "quality": 0,
    "health": 2,
    "race": 21,
    "cost": 1,
    "attack": 0,
    "name": "Wrath of Air Totem",
    "description": "Spell Damage +1",
    popularity: 0
}, {
    "id": 52,
    "image": "Mekka3",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 1,
    "attack": 0,
    "health": 4,
    "race": 17,
    "name": "Emboldener 3000",
    "description": "At the end of your turn, give a random minion +1\/+1.",
    popularity: 0
}, {
    "id": 489,
    "image": "DREAM_03",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 7,
    "health": 6,
    "race": 24,
    "quality": 2,
    "name": "Emerald Drake",
    popularity: 0
}, {
    "id": 784,
    "image": "TU4c_002",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "faction": 3,
    "name": "Barrel Toss",
    "description": "Deal 2 damage.",
    popularity: 0
}, {
    "id": 988,
    "image": "TU4c_004",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "faction": 3,
    "name": "Stomp",
    "description": "Deal 2 damage to all enemies.",
    popularity: 0
}, {
    "id": 1746,
    "image": "GAME_005",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 2,
    "cost": 0,
    "name": "The Coin",
    "description": "Gain 1 Mana Crystal this turn only.",
    popularity: 0
}, {
    "id": 1321,
    "image": "TU4a_002",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "name": "Riverpaw Gnoll",
    popularity: 0
}, {
    "id": 490,
    "image": "TU4c_005",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "health": 3,
    "attack": 1,
    "faction": 3,
    "name": "Hidden Gnome",
    "description": "Was hiding in a barrel!",
    popularity: 0
}, {
    "id": 468,
    "image": "EX1_155a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Mark of Nature",
    "description": "+4 Attack.",
    popularity: 0
}, {
    "id": 63,
    "image": "EX1_165a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 0,
    "name": "Cat Form",
    "description": "Charge",
    popularity: 0
}, {
    "id": 764,
    "image": "NEW1_009",
    "set": 2,
    "quality": 0,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "classs": 7,
    "attack": 0,
    "health": 2,
    "race": 21,
    "name": "Healing Totem",
    "description": "At the end of your turn, restore 1 Health to all friendly minions.",
    popularity: 0
}, {
    "id": 1145,
    "image": "EX1_573a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Demigod's Favor",
    "description": "Give your other minions +2\/+2.",
    popularity: 0
}, {
    "id": 329,
    "image": "Mekka2",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 2,
    "quality": 1,
    "cost": 1,
    "attack": 0,
    "health": 3,
    "race": 17,
    "name": "Repair Bot",
    "description": "At the end of your turn, restore 6 Health to a damaged character.",
    popularity: 0
}, {
    "id": 60,
    "image": "EX1_160a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Summon a Panther",
    "description": "Summon a 3\/2 Panther.",
    popularity: 0
}, {
    "id": 968,
    "image": "CS2_mirror",
    "set": 2,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "health": 2,
    "classs": 8,
    "cost": 0,
    "attack": 0,
    "name": "Mirror Image",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1674,
    "image": "TU4f_006",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "name": "Transcendence",
    "description": "Until you kill Cho's minions, he can't be attacked.",
    popularity: 0
}, {
    "id": 1643,
    "image": "TU4e_002t",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 1,
    "name": "Flame of Azzinoth",
    popularity: 0
}, {
    "id": 2142,
    "image": "NAX12_03H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 1,
    "attack": 3,
    "durability": 5,
    "quality": 2,
    "name": "Jaws",
    "description": "Whenever a minion with Deathrattle dies, gain +2 Attack.",
    popularity: 0
}, {
    "id": 59,
    "image": "EX1_025t",
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "faction": 3,
    "quality": 1,
    "attack": 2,
    "health": 1,
    "set": 2,
    "cost": 1,
    "race": 17,
    "name": "Mechanical Dragonling",
    popularity: 0
}, {
    "id": 1707,
    "image": "EX1_398t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "classs": 1,
    "cost": 1,
    "attack": 2,
    "durability": 2,
    "quality": 2,
    "name": "Battle Axe",
    popularity: 0
}, {
    "id": 1638,
    "image": "TU4e_003",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "name": "Naga Myrmidon",
    "description": " ",
    popularity: 0
}, {
    "id": 1671,
    "image": "TU4f_003",
    "set": 5,
    "quality": 1,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "name": "Shado-Pan Monk",
    popularity: 0
}, {
    "id": 253,
    "image": "EX1_154a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Wrath",
    "description": "Deal 3 damage to a minion.",
    popularity: 0
}, {
    "id": 378,
    "image": "NEW1_026t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 0,
    "attack": 1,
    "health": 1,
    "quality": 2,
    "name": "Violet Apprentice",
    popularity: 0
}, {
    "id": 1730,
    "image": "EX1_383t",
    "set": 3,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 5,
    "attack": 5,
    "classs": 2,
    "durability": 3,
    "name": "Ashbringer",
    popularity: 0
}, {
    "id": 102,
    "image": "EX1_130a",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "quality": 1,
    "cost": 1,
    "classs": 2,
    "attack": 2,
    "health": 1,
    "faction": 3,
    "name": "Defender",
    popularity: 0
}, {
    "id": 99,
    "image": "EX1_165b",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "faction": 3,
    "classs": 11,
    "quality": 1,
    "cost": 0,
    "name": "Bear Form",
    "description": "+2 Health and Taunt.",
    popularity: 0
}, {
    "id": 812,
    "image": "EX1_160t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "classs": 11,
    "cost": 2,
    "attack": 3,
    "health": 2,
    "race": 20,
    "quality": 1,
    "name": "Panther",
    popularity: 0
}, {
    "id": 1772,
    "image": "CRED_12",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 1,
    "health": 2,
    "elite": 1,
    "name": "Rachelle Davis",
    "description": "Battlecry: Draw TWO cards. She's not a novice engineer.",
    popularity: 0
}, {
    "id": 1777,
    "image": "CRED_17",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 9,
    "attack": 9,
    "health": 9,
    "elite": 1,
    "name": "Rob Pardo",
    "description": "You can't start a game without this minion in your deck.",
    popularity: 0
}, {
    "id": 1845,
    "image": "PRO_001b",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "quality": 2,
    "name": "Rogues Do It...",
    "description": "Deal 4 damage. Draw a card.",
    popularity: 0
}, {
    "id": 1843,
    "image": "PRO_001a",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "quality": 2,
    "name": "I Am Murloc",
    "description": "Summon three, four, or five 1\/1 Murlocs.",
    popularity: 0
}, {
    "id": 1767,
    "image": "CRED_07",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "elite": 1,
    "name": "Zwick",
    "description": "Battlecry: Complain about bacon prices.",
    popularity: 0
}, {
    "id": 1771,
    "image": "CRED_11",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 1,
    "health": 4,
    "elite": 1,
    "name": "Jay Baxter",
    "description": "Battlecry: Summon FIVE random Inventions.",
    popularity: 0
}, {
    "id": 1844,
    "image": "PRO_001at",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "race": 14,
    "quality": 2,
    "name": "Murloc",
    popularity: 0
}, {
    "id": 1764,
    "image": "CRED_04",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 3,
    "health": 3,
    "elite": 1,
    "name": "Steven Gabriel",
    "description": "Battlecry: Summon a frothy beverage.",
    popularity: 0
}, {
    "id": 1770,
    "image": "CRED_10",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 2,
    "health": 2,
    "elite": 1,
    "name": "Michael Schweitzer",
    "description": "C-C-C-COMBO: Destroy a minion.",
    popularity: 0
}, {
    "id": 1776,
    "image": "CRED_16",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 7,
    "attack": 9,
    "health": 5,
    "elite": 1,
    "name": "Hamilton Chu",
    "description": "Was successfully NOT part of the problem! ...most of the time.",
    popularity: 0
}, {
    "id": 1775,
    "image": "CRED_15",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 3,
    "elite": 1,
    "name": "Andy Brock",
    "description": "Can't be Silenced. Divine Shield, Stealth.",
    popularity: 0
}, {
    "id": 1766,
    "image": "CRED_06",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 3,
    "health": 1,
    "elite": 1,
    "name": "Derek Sakamoto",
    "description": "The notorious Footclapper.",
    popularity: 0
}, {
    "id": 1765,
    "image": "CRED_05",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 5,
    "health": 4,
    "elite": 1,
    "name": "Kyle Harrison",
    "description": "3 for a 5\/4? That's a good deal!",
    popularity: 0
}, {
    "id": 1762,
    "image": "CRED_01",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 7,
    "health": 6,
    "elite": 1,
    "name": "Jason Chayes",
    "description": "Enrage: Just kidding! He never Enrages.",
    popularity: 0
}, {
    "id": 1768,
    "image": "CRED_08",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 4,
    "health": 1,
    "elite": 1,
    "name": "Ben Brode",
    "description": "Your volume can't be reduced below maximum.",
    popularity: 0
}, {
    "id": 1774,
    "image": "CRED_14",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 3,
    "health": 2,
    "elite": 1,
    "name": "Yong Woo",
    "description": "Your other minions have +3 Attack and Charge.",
    popularity: 0
}, {
    "id": 1761,
    "image": "CRED_02",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 5,
    "health": 5,
    "elite": 1,
    "name": "Eric Dodds",
    "description": "Battlecry: Summon a 2\/2 Pirate and destroy all Ninjas.",
    popularity: 0
}, {
    "id": 1846,
    "image": "PRO_001c",
    "set": 11,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "quality": 2,
    "name": "Power of the Horde",
    "description": "Summon a random Horde Warrior.",
    popularity: 0
}, {
    "id": 1763,
    "image": "CRED_03",
    "set": 16,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 4,
    "elite": 1,
    "name": "Bob Fitch",
    "description": "Super Taunt (EVERY character must attack this minion.)",
    popularity: 0
}, {
    "id": 1912,
    "image": "EX1_116t",
    "set": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "race": 24,
    "quality": 2,
    "name": "Whelp",
    popularity: 0
}, {
    "id": 1903,
    "image": "NAX15_03t",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 5,
    "health": 5,
    "quality": 2,
    "name": "Guardian of Icecrown",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1877,
    "image": "NAX8_05",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 6,
    "attack": 5,
    "health": 6,
    "quality": 2,
    "name": "Unrelenting Rider",
    "description": "Deathrattle: Summon a Spectral Rider for your opponent.",
    popularity: 0
}, {
    "id": 1787,
    "image": "FP1_007t",
    "set": 12,
    "quality": 3,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 4,
    "health": 4,
    "name": "Nerubian",
    popularity: 0
}, {
    "id": 1880,
    "image": "NAX9_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 1,
    "health": 7,
    "elite": 1,
    "quality": 2,
    "name": "Thane Korth'azz",
    "description": "Your hero is Immune.",
    popularity: 0
}, {
    "id": 1925,
    "image": "NAX11_04",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "quality": 2,
    "name": "Mutating Injection",
    "description": "Give a minion +4\/+4 and Taunt.",
    popularity: 0
}, {
    "id": 1868,
    "image": "NAX3_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "quality": 2,
    "name": "Necrotic Poison",
    "description": "Destroy a minion.",
    popularity: 0
}, {
    "id": 2089,
    "image": "NAX6_04",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "quality": 2,
    "name": "Sporeburst",
    "description": "Deal 1 damage to all enemy minions. Summon a Spore.",
    popularity: 0
}, {
    "id": 1960,
    "image": "NAX7_05",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "quality": 2,
    "name": "Mind Control Crystal",
    "description": "Activate the Crystal to control the Understudies!",
    popularity: 0
}, {
    "id": 1882,
    "image": "NAX9_05",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 1,
    "durability": 3,
    "quality": 2,
    "name": "Runeblade",
    "description": "Has +3 Attack if the other Horsemen are dead.",
    popularity: 0
}, {
    "id": 2132,
    "image": "NAX10_02H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 4,
    "durability": 8,
    "quality": 2,
    "name": "Hook",
    "description": "Windfury Deathrattle: Put this weapon into your hand.",
    popularity: 0
}, {
    "id": 2130,
    "image": "NAX7_04H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 10,
    "durability": 2,
    "quality": 2,
    "name": "Massive Runeblade",
    "description": "Deals double damage to heroes.",
    popularity: 0
}, {
    "id": 1884,
    "image": "NAX9_07",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 5,
    "quality": 2,
    "name": "Mark of the Horsemen",
    "description": "Give your minions and your weapon +1\/+1.",
    popularity: 0
}, {
    "id": 1865,
    "image": "NAX6_03t",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 0,
    "attack": 0,
    "health": 1,
    "quality": 2,
    "name": "Spore",
    "description": "Deathrattle: Give all enemy minions +8 Attack.",
    popularity: 0
}, {
    "id": 2199,
    "image": "NAX15_03n",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 3,
    "health": 3,
    "quality": 2,
    "name": "Guardian of Icecrown",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 2123,
    "image": "NAX9_02H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 7,
    "elite": 1,
    "quality": 2,
    "name": "Lady Blaumeux",
    "description": "Your hero is Immune.",
    popularity: 0
}, {
    "id": 1785,
    "image": "FP1_006",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 3,
    "quality": 2,
    "name": "Deathcharger",
    "description": "Charge. Deathrattle: Deal 3 damage to your hero.",
    popularity: 0
}, {
    "id": 1879,
    "image": "NAX9_02",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 1,
    "health": 7,
    "elite": 1,
    "quality": 2,
    "name": "Lady Blaumeux",
    "description": "Your hero is Immune.",
    popularity: 0
}, {
    "id": 1795,
    "image": "FP1_012t",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 2,
    "quality": 2,
    "name": "Slime",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1798,
    "image": "FP1_014t",
    "set": 12,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 10,
    "attack": 11,
    "health": 11,
    "elite": 1,
    "name": "Thaddius",
    popularity: 0
}, {
    "id": 1830,
    "image": "NAX1_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 3,
    "health": 1,
    "cost": 2,
    "quality": 2,
    "name": "Nerubian",
    popularity: 0
}, {
    "id": 1803,
    "image": "FP1_019t",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 2,
    "classs": 11,
    "quality": 2,
    "name": "Treant",
    popularity: 0
}, {
    "id": 1782,
    "image": "FP1_002t",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "quality": 2,
    "name": "Spectral Spider",
    popularity: 0
}, {
    "id": 2162,
    "image": "NAX2_05H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 4,
    "quality": 2,
    "name": "Worshipper",
    "description": "Your hero has +3 Attack on your turn.",
    popularity: 0
}, {
    "id": 1885,
    "image": "NAX10_02",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 5,
    "durability": 8,
    "quality": 2,
    "name": "Hook",
    "description": "Deathrattle: Put this weapon into your hand.",
    popularity: 0
}, {
    "id": 2114,
    "image": "NAX4_03H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 5,
    "health": 5,
    "quality": 2,
    "name": "Skeleton",
    popularity: 0
}, {
    "id": 1878,
    "image": "NAX8_05t",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 0,
    "health": 6,
    "quality": 2,
    "name": "Spectral Rider",
    "description": "At the start of your turn, deal 1 damage to your hero.",
    popularity: 0
}, {
    "id": 2126,
    "image": "NAX9_05H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 2,
    "durability": 3,
    "quality": 2,
    "name": "Runeblade",
    "description": "Has +6 Attack if the other Horsemen are dead.",
    popularity: 0
}, {
    "id": 2145,
    "image": "NAX13_05H",
    "set": 12,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 7,
    "health": 4,
    "elite": 1,
    "name": "Stalagg",
    popularity: 0
}, {
    "id": 2144,
    "image": "NAX13_04H",
    "set": 12,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 4,
    "health": 7,
    "elite": 1,
    "name": "Feugen",
    popularity: 0
}, {
    "id": 1876,
    "image": "NAX8_04t",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 0,
    "health": 4,
    "quality": 2,
    "name": "Spectral Warrior",
    "description": "At the start of your turn, deal 1 damage to your hero.",
    popularity: 0
}, {
    "id": 1832,
    "image": "NAX1_05",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 7,
    "quality": 2,
    "name": "Locust Swarm",
    "description": "Deal 3 damage to all enemy minions. Restore 3 Health to your hero.",
    popularity: 0
}, {
    "id": 1848,
    "image": "NAX4_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "quality": 2,
    "name": "Skeleton",
    popularity: 0
}, {
    "id": 1842,
    "image": "NAX2_05",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "attack": 1,
    "health": 4,
    "cost": 3,
    "quality": 2,
    "name": "Worshipper",
    "description": "Your hero has +1 Attack on your turn.",
    popularity: 0
}, {
    "id": 1906,
    "image": "NAX14_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 2,
    "health": 10,
    "quality": 2,
    "name": "Frozen Champion",
    "description": "Permanently Frozen.  Adjacent minions are Immune to Frost Breath.",
    popularity: 0
}, {
    "id": 2101,
    "image": "NAX1h_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 4,
    "health": 4,
    "quality": 2,
    "name": "Nerubian",
    popularity: 0
}, {
    "id": 1788,
    "image": "NAXM_001",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 4,
    "attack": 5,
    "health": 6,
    "quality": 2,
    "name": "Necroknight",
    "description": "Deathrattle: Destroy the minions next to this one as well.",
    popularity: 0
}, {
    "id": 1873,
    "image": "NAX8_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 2,
    "quality": 2,
    "name": "Unrelenting Trainee",
    "description": "Deathrattle: Summon a Spectral Trainee for your opponent.",
    popularity: 0
}, {
    "id": 1875,
    "image": "NAX8_04",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 3,
    "health": 4,
    "quality": 2,
    "name": "Unrelenting Warrior",
    "description": "Deathrattle: Summon a Spectral Warrior for your opponent.",
    popularity: 0
}, {
    "id": 1893,
    "image": "NAX12_04",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 3,
    "quality": 2,
    "name": "Enrage",
    "description": "Give your hero +6 Attack this turn.",
    popularity: 0
}, {
    "id": 1907,
    "image": "NAX14_04",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 5,
    "quality": 2,
    "name": "Pure Cold",
    "description": "Deal 8 damage to the enemy hero, and Freeze it.",
    popularity: 0
}, {
    "id": 1976,
    "image": "NAX13_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "quality": 2,
    "name": "Supercharge",
    "description": "Give your minions +2 Health.",
    popularity: 0
}, {
    "id": 1881,
    "image": "NAX9_04",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 1,
    "health": 7,
    "elite": 1,
    "quality": 2,
    "name": "Sir Zeliek",
    "description": "Your hero is Immune.",
    popularity: 0
}, {
    "id": 1850,
    "image": "NAX4_05",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 6,
    "quality": 2,
    "name": "Plague",
    "description": "Destroy all non-Skeleton minions.",
    popularity: 0
}, {
    "id": 1864,
    "image": "NAX6_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 4,
    "quality": 2,
    "name": "Deathbloom",
    "description": "Deal 5 damage to a minion. Summon a Spore.",
    popularity: 0
}, {
    "id": 2157,
    "image": "NAX15_05",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 0,
    "attack": 1,
    "health": 1,
    "elite": 1,
    "quality": 5,
    "race": 20,
    "name": "Mr. Bigglesworth",
    "description": "This is Kel'Thuzad's kitty.",
    popularity: 0
}, {
    "id": 1892,
    "image": "NAX12_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 1,
    "attack": 1,
    "durability": 5,
    "quality": 2,
    "name": "Jaws",
    "description": "Whenever a minion with Deathrattle dies, gain +2 Attack.",
    popularity: 0
}, {
    "id": 2125,
    "image": "NAX9_04H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 7,
    "elite": 1,
    "quality": 2,
    "name": "Sir Zeliek",
    "description": "Your hero is Immune.",
    popularity: 0
}, {
    "id": 1874,
    "image": "NAX8_03t",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 0,
    "health": 2,
    "quality": 2,
    "name": "Spectral Trainee",
    "description": "At the start of your turn, deal 1 damage to your hero.",
    popularity: 0
}, {
    "id": 1871,
    "image": "NAX7_04",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_swords",
    "type": 7,
    "cost": 3,
    "attack": 5,
    "durability": 2,
    "quality": 2,
    "name": "Massive Runeblade",
    "description": "Deals double damage to heroes.",
    popularity: 0
}, {
    "id": 1869,
    "image": "NAX7_02",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 2,
    "attack": 0,
    "health": 7,
    "quality": 2,
    "name": "Understudy",
    "description": "Taunt",
    popularity: 0
}, {
    "id": 1792,
    "image": "NAXM_002",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 4,
    "health": 3,
    "quality": 2,
    "name": "Skeletal Smith",
    "description": "Deathrattle: Destroy your opponent's weapon.",
    popularity: 0
}, {
    "id": 1889,
    "image": "NAX11_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 2,
    "health": 2,
    "quality": 2,
    "name": "Fallout Slime",
    popularity: 0
}, {
    "id": 1855,
    "image": "NAX5_03",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 2,
    "quality": 2,
    "name": "Mindpocalypse",
    "description": "Both players draw 2 cards and gain a Mana Crystal.",
    popularity: 0
}, {
    "id": 2124,
    "image": "NAX9_03H",
    "set": 12,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 3,
    "attack": 2,
    "health": 7,
    "elite": 1,
    "quality": 2,
    "name": "Thane Korth'azz",
    "description": "Your hero is Immune.",
    popularity: 0
}, {
    "id": 2277,
    "image": "GVG_028t",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 0,
    "quality": 2,
    "name": "Gallywix's Coin",
    "description": "Gain 1 Mana Crystal this turn only. (Won't trigger Gallywix.)",
    popularity: 0
}, {
    "id": 2195,
    "image": "GVG_030a",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Attack Mode",
    "description": "+1 Attack.",
    popularity: 0
}, {
    "id": 2197,
    "image": "GVG_030b",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Tank Mode",
    "description": "+1 Health.",
    popularity: 0
}, {
    "id": 2226,
    "image": "GVG_032a",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Gift of Mana",
    "description": "Give each player a Mana Crystal.",
    popularity: 0
}, {
    "id": 2227,
    "image": "GVG_032b",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Gift of Cards",
    "description": "Each player draws a card.",
    popularity: 0
}, {
    "id": 2176,
    "image": "GVG_041a",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Dark Wispers",
    "description": "+5\/+5 and Taunt.",
    popularity: 0
}, {
    "id": 2177,
    "image": "GVG_041b",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 11,
    "quality": 2,
    "cost": 0,
    "name": "Dark Wispers",
    "description": "Summon 5 Wisps.",
    popularity: 0
}, {
    "id": 2270,
    "image": "GVG_045t",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "classs": 9,
    "race": 15,
    "quality": 2,
    "name": "Imp",
    popularity: 0
}, {
    "id": 2221,
    "image": "GVG_056t",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "classs": 1,
    "cost": 0,
    "quality": 2,
    "name": "Burrowing Mine",
    "description": "When you draw this, it explodes. You take 10 damage and draw a card.",
    popularity: 0
}, {
    "id": 2230,
    "image": "GVG_080t",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 5,
    "attack": 7,
    "health": 7,
    "classs": 11,
    "race": 20,
    "quality": 2,
    "name": "Druid of the Fang",
    popularity: 0
}, {
    "id": 2240,
    "image": "GVG_092t",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "race": 20,
    "quality": 2,
    "name": "Chicken",
    popularity: 0
}, {
    "id": 2235,
    "image": "GVG_110t",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 1,
    "attack": 1,
    "health": 1,
    "race": 17,
    "quality": 2,
    "name": "Boom Bot",
    "description": "Deathrattle: Deal 1-4 damage to a random enemy.",
    popularity: 0
}, {
    "id": 2232,
    "image": "GVG_111t",
    "set": 13,
    "quality": 5,
    "icon": "inv_misc_ticket_tarot_beasts_01",
    "type": 4,
    "cost": 8,
    "attack": 4,
    "health": 8,
    "elite": 1,
    "race": 17,
    "name": "V-07-TR-0N",
    "description": "Charge Mega-Windfury (Can attack four times a turn.)",
    popularity: 0
}, {
    "id": 2151,
    "image": "PART_001",
    "set": 13,
    "cost": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 2,
    "name": "Armor Plating",
    "description": "Give a minion +1 Health.",
    popularity: 0
}, {
    "id": 2152,
    "image": "PART_002",
    "set": 13,
    "cost": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 2,
    "name": "Time Rewinder",
    "description": "Return a friendly minion to your hand.",
    popularity: 0
}, {
    "id": 2153,
    "image": "PART_003",
    "set": 13,
    "cost": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 2,
    "name": "Rusty Horn",
    "description": "Give a minion Taunt.",
    popularity: 0
}, {
    "id": 2154,
    "image": "PART_004",
    "set": 13,
    "cost": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 2,
    "name": "Finicky Cloakfield",
    "description": "Give a friendly minion Stealth until your next turn.",
    popularity: 0
}, {
    "id": 2155,
    "image": "PART_005",
    "set": 13,
    "cost": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 2,
    "name": "Emergency Coolant",
    "description": "Freeze a minion.",
    popularity: 0
}, {
    "id": 2156,
    "image": "PART_006",
    "set": 13,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "cost": 1,
    "quality": 2,
    "name": "Reversing Switch",
    "description": "Swap a minion's Attack and Health.",
    popularity: 0
}, {
    "id": 2150,
    "image": "PART_007",
    "set": 13,
    "cost": 1,
    "icon": "inv_misc_ticket_tarot_elemental02",
    "type": 5,
    "quality": 2,
    "name": "Whirling Blades",
    "description": "Give a minion +1 Attack.",
    popularity: 0
}];
/* End of uncollectible card list */


var hearthstoneCards = hearthstoneCards.concat(uncollectibleCards);

/* TIER LIST */
// http://www.liquidhearth.com/forum/viewmessage.php?topic_id=513
var tierListCommon = [{
	"name":"Chillwind Yeti",
	"arenaRank":1
},{
    "name":"Dark Iron Dwarf",
    "arenaRank":2
},{
    "name":"Harvest Golem",
    "arenaRank":3
},{
    "name":"Shattered Sun Cleric",
    "arenaRank":4
},{
    "name":"Acidic Swamp Ooze",
    "arenaRank":5
},{
    "name":"Silver Hand Knight",
    "arenaRank":6
},{
    "name":"Venture Co. Mercenary",
    "arenaRank":7
},{
    "name":"Scarlet Crusader",
    "arenaRank":8
},{
    "name":"Boulderfist Ogre",
    "arenaRank":9
},{
    "name":"Gnomish Inventor",
    "arenaRank":10
},{
    "name":"Earthen Ring Farseer",
    "arenaRank":11
},{
    "name":"Sen'jin Shieldmasta",
    "arenaRank":12
},{
    "name":"Cult Master",
    "arenaRank":13
},{
    "name":"Stormwind Champion",
    "arenaRank":14
},{
    "name":"Worgen Infiltrator",
    "arenaRank":15
},{
    "name":"Loot Hoarder",
    "arenaRank":16
},{
    "name":"Mad Bomber",
    "arenaRank":17
},{
    "name":"Spellbreaker",
    "arenaRank":18
},{
    "name":"Frostwolf Warlord",
    "arenaRank":19
},{
    "name":"Faerie Dragon",
    "arenaRank":20
},{
    "name":"Youthful Brewmaster",
    "arenaRank":21
},{
    "name":"Bloodfen Raptor",
    "arenaRank":22
},{
    "name":"Stranglethorn Tiger",
    "arenaRank":23
},{
    "name":"Raging Worgen",
    "arenaRank":24
},{
    "name":"Stormwind Knight",
    "arenaRank":25
},{
    "name":"Jungle Panther",
    "arenaRank":26
},{
    "name":"Dire Wolf Alpha",
    "arenaRank":27
},{
    "name":"Ancient Brewmaster",
    "arenaRank":28
},{
    "name":"Fen Creeper",
    "arenaRank":29
},{
    "name":"Stormpike Commando",
    "arenaRank":30
},{
    "name":"Darkscale Healer",
    "arenaRank":31
},{
    "name":"Bluegill Warrior",
    "arenaRank":32
},{
    "name":"Wolfrider",
    "arenaRank":33
},{
    "name":"Spiteful Smith",
    "arenaRank":34
},{
    "name":"Flesheating Ghoul",
    "arenaRank":35
},{
    "name":"Frost Elemental",
    "arenaRank":36
},{
    "name":"Oasis Snapjaw",
    "arenaRank":37
},{
    "name":"Silvermoon Guardian",
    "arenaRank":38
},{
    "name":"War Golem",
    "arenaRank":39
},{
    "name":"Ironfur Grizzly",
    "arenaRank":40
},{
    "name":"Razorfen Hunter",
    "arenaRank":41
},{
    "name":"Amani Berserker",
    "arenaRank":42
},{
    "name":"Acolyte of Pain",
    "arenaRank":43
},{
    "name":"Lord of the Arena",
    "arenaRank":44
},{
    "name":"Gurubashi Berserker",
    "arenaRank":45
},{
    "name":"Archmage",
    "arenaRank":46
},{
    "name":"Elven Archer",
    "arenaRank":47
},{
    "name":"Dragonling Mechanic",
    "arenaRank":48
},{
    "name":"Novice Engineer",
    "arenaRank":49
},{
    "name":"Bloodsail Raider",
    "arenaRank":50
},{
    "name":"River Crocolisk",
    "arenaRank":51
},{
    "name":"Abusive Sergeant",
    "arenaRank":52
},{
    "name":"Ironforge Rifleman",
    "arenaRank":53
},{
    "name":"Ogre Magi",
    "arenaRank":54
},{
    "name":"Priestess of Elune",
    "arenaRank":55
},{
    "name":"Reckless Rocketeer",
    "arenaRank":56
},{
    "name":"Booty Bay Bodyguard",
    "arenaRank":57
},{
    "name":"Ironbeak Owl",
    "arenaRank":58
},{
    "name":"Kobold Geomancer",
    "arenaRank":59
},{
    "name":"Argent Squire",
    "arenaRank":60
},{
    "name":"Murloc Tidehunter",
    "arenaRank":61
},{
    "name":"Core Hound",
    "arenaRank":62
},{
    "name":"Raid Leader",
    "arenaRank":63
},{
    "name":"Leper Gnome",
    "arenaRank":64
},{
    "name":"Thrallmar Farseer",
    "arenaRank":65
},{
    "name":"Windfury Harpy",
    "arenaRank":66
},{
    "name":"Nightblade",
    "arenaRank":67
},{
    "name":"Frostwolf Grunt",
    "arenaRank":68
},{
    "name":"Mogu'shan Warden",
    "arenaRank":69
},{
    "name":"Dread Corsair",
    "arenaRank":70
},{
    "name":"Tauren Warrior",
    "arenaRank":71
},{
    "name":"Magma Rager",
    "arenaRank":72
},{
    "name":"Dalaran Mage",
    "arenaRank":73
},{
    "name":"Voodoo Doctor",
    "arenaRank":74
},{
    "name":"Silverback Patriarch",
    "arenaRank":75
},{
    "name":"Southsea Deckhand",
    "arenaRank":76
},{
    "name":"Goldshire Footman",
    "arenaRank":77
},{
    "name":"Shieldbearer",
    "arenaRank":78
},{
    "name":"Stonetusk Boar",
    "arenaRank":79
},{
    "name":"Murloc Raider",
    "arenaRank":80
},{
    "name":"Young Dragonhawk",
    "arenaRank":81
},{
    "name":"Wisp",
    "arenaRank":82
},{
    "name":"Grimscale Oracle",
    "arenaRank":83
}];

/* RARE TIER LIST */
// http://www.liquidhearth.com/forum/viewmessage.php?topic_id=835
var tierListRare = [{
	"name":"Azure Drake",
	"arenaRank":1
},{
    "name":"Argent Commander",
    "arenaRank":2
},{
    "name":"Stampeding Kodo",
    "arenaRank":3
},{
    "name":"Knife Juggler",
    "arenaRank":4
},{
    "name":"Twilight Drake",
    "arenaRank":5
},{
    "name":"Sunwalker",
    "arenaRank":6
},{
    "name":"Mind Control Tech",
    "arenaRank":7
},{
    "name":"Defender of Argus",
    "arenaRank":8
},{
    "name":"Imp Master",
    "arenaRank":9
},{
    "name":"Emperor Cobra",
    "arenaRank":10
},{
    "name":"Wild Pyromancer",
    "arenaRank":11
},{
    "name":"Injured Blademaster",
    "arenaRank":12
},{
    "name":"Violet Teacher",
    "arenaRank":13
},{
    "name":"Abomination",
    "arenaRank":14
},{
    "name":"Ravenholdt Assassin",
    "arenaRank":15
},{
    "name":"Gadgetzan Auctioneer",
    "arenaRank":16
},{
    "name":"Sunfury Protector",
    "arenaRank":17
},{
    "name":"Demolisher",
    "arenaRank":18
},{
    "name":"Questing Adventurer",
    "arenaRank":19
},{
    "name":"Crazed Alchemist",
    "arenaRank":20
},{
    "name":"Arcane Golem",
    "arenaRank":21
},{
    "name":"Mana Wraith",
    "arenaRank":22
},{
    "name":"Master Swordsmith",
    "arenaRank":23
},{
    "name":"Pint-Sized Summoner",
    "arenaRank":24
},{
    "name":"Young Priestess",
    "arenaRank":25
},{
    "name":"Bloodsail Corsair",
    "arenaRank":26
},{
    "name":"Ancient Mage",
    "arenaRank":27
},{
    "name":"Mana Addict",
    "arenaRank":28
},{
    "name":"Coldlight Oracle",
    "arenaRank":29
},{
    "name":"Coldlight Seer",
    "arenaRank":30
},{
    "name":"Secretkeeper",
    "arenaRank":31
},{
    "name":"Alarm-o-Bot",
    "arenaRank":32
},{
    "name":"Lightwarden",
    "arenaRank":33
},{
    "name":"Ancient Watcher",
    "arenaRank":34
},{
    "name":"Murloc Tidecaller",
    "arenaRank":35
},{
    "name":"Angry Chicken",
    "arenaRank":36
}];

/* EPIC TIER LIST */
// http://www.liquidhearth.com/forum/viewmessage.php?topic_id=975
var tierListEpic = [{
	"name":"Sea Giant",
	"arenaRank":1
},{
    "name":"Faceless Manipulator",
    "arenaRank":2
},{
    "name":"Blood Knight",
    "arenaRank":3
},{
    "name":"Big Game Hunter",
    "arenaRank":4
},{
    "name":"Southsea Captain",
    "arenaRank":5
},{
    "name":"Murloc Warleader",
    "arenaRank":6
},{
    "name":"Molten Giant",
    "arenaRank":7
},{
    "name":"Mountain Giant",
    "arenaRank":8
},{
    "name":"Hungry Crab",
    "arenaRank":9
},{
    "name":"Doomsayer",
    "arenaRank":10
}];

/* LEGENDARY TIER LIST */
// http://www.liquidhearth.com/forum/viewmessage.php?topic_id=975
var tierListLegendary = [{
	"name":"Cairne Bloodhoof",
	"arenaRank":1
},{
    "name":"Ragnaros the Firelord",
    "arenaRank":2
},{
    "name":"Ysera",
    "arenaRank":3
},{
    "name":"Sylvanas Windrunner",
    "arenaRank":4
},{
    "name":"Onyxia",
    "arenaRank":5
},{
    "name":"The Black Knight",
    "arenaRank":6
},{
    "name":"Baron Geddon",
    "arenaRank":7
},{
    "name":"Gruul",
    "arenaRank":8
},{
    "name":"Harrison Jones",
    "arenaRank":9
},{
    "name":"Illidan Stormrage",
    "arenaRank":10
},{
    "name":"Tinkmaster Overspark",
    "arenaRank":11
},{
    "name":"Hogger",
    "arenaRank":12
},{
    "name":"Deathwing",
    "arenaRank":13
},{
    "name":"The Beast",
    "arenaRank":14
},{
    "name":"Alexstrasza",
    "arenaRank":15
},{
    "name":"Bloodmage Thalnos",
    "arenaRank":16
},{
    "name":"King Mukla",
    "arenaRank":17
},{
    "name":"Nat Pagle",
    "arenaRank":18
},{
    "name":"Leeroy Jenkins",
    "arenaRank":19
},{
    "name":"Captain Greenskin",
    "arenaRank":20
},{
    "name":"Malygos",
    "arenaRank":21
},{
    "name":"Millhouse Manastorm",
    "arenaRank":22
},{
    "name":"Nozdormu",
    "arenaRank":23
},{
    "name":"Lorewalker Cho",
    "arenaRank":24
}];

/* Druid  LIST */
// http://www.liquidhearth.com/forum/arena-strategy/457541-trumps-arena-list-druid
var tierListDruid = [{
	"name":"Cenarius",
	"arenaRank":1
},{
    "name":"Ancient of Lore",
    "arenaRank":2
},{
    "name":"Ancient of War",
    "arenaRank":3
},{
    "name":"Keeper of the Grove",
    "arenaRank":4
},{
    "name":"Starfall",
    "arenaRank":5
},{
    "name":"Swipe",
    "arenaRank":6
},{
    "name":"Force of Nature",
    "arenaRank":7
},{
    "name":"Nourish",
    "arenaRank":8
},{
    "name":"Druid of the Claw",
    "arenaRank":9
},{
    "name":"Power of the Wild",
    "arenaRank":10
},{
    "name":"Ironbark Protector",
    "arenaRank":11
},{
    "name":"Wrath",
    "arenaRank":12
},{
    "name":"Starfire",
    "arenaRank":13
},{
    "name":"Claw",
    "arenaRank":14
},{
    "name":"Bite",
    "arenaRank":15
},{
    "name":"Mark of the Wild",
    "arenaRank":16
},{
    "name":"Innervate",
    "arenaRank":17
},{
    "name":"Mark of Nature",
    "arenaRank":18
},{
    "name":"Savage Roar",
    "arenaRank":19
},{
    "name":"Wild Growth",
    "arenaRank":20
},{
    "name":"Soul of the Forest",
    "arenaRank":21
},{
    "name":"Savagery",
    "arenaRank":22
},{
    "name":"Naturalize",
    "arenaRank":23
},{
    "name":"Healing Touch",
    "arenaRank":24
},{
    "name":"Moonfire",
    "arenaRank":25
}];


/* Mage  LIST */
// http://www.liquidhearth.com/forum/arena-strategy/457552-trumps-arena-tier-list-mage
var tierListMage = [{
	"name":"Flamestrike",
	"arenaRank":1
},{
    "name":"Water Elemental",
    "arenaRank":2
},{
    "name":"Fireball",
    "arenaRank":3
},{
    "name":"Frostbolt",
    "arenaRank":4
},{
    "name":"Polymorph",
    "arenaRank":5
},{
    "name":"Archmage Antonidas",
    "arenaRank":6
},{
    "name":"Pyroblast",
    "arenaRank":7
},{
    "name":"Kirin Tor Mage",
    "arenaRank":8
},{
    "name":"Blizzard",
    "arenaRank":9
},{
    "name":"Sorcerer's Apprentice",
    "arenaRank":10
},{
    "name":"Mana Wyrm",
    "arenaRank":11
},{
    "name":"Arcane Missiles",
    "arenaRank":12
},{
    "name":"Arcane Intellect",
    "arenaRank":13
},{
    "name":"Spellbender",
    "arenaRank":14
},{
    "name":"Vaporize",
    "arenaRank":15
},{
    "name":"Counterspell",
    "arenaRank":16
},{
    "name":"Ethereal Arcanist",
    "arenaRank":17
},{
    "name":"Mirror Entity",
    "arenaRank":18
},{
    "name":"Arcane Explosion",
    "arenaRank":19
},{
    "name":"Cone of Cold",
    "arenaRank":20
},{
    "name":"Ice Block",
    "arenaRank":21
},{
    "name":"Mirror Image",
    "arenaRank":22
},{
    "name":"Frost Nova",
    "arenaRank":23
},{
    "name":"Ice Barrier",
    "arenaRank":24
},{
    "name":"Ice Lance",
    "arenaRank":25
}];

/* Rogue  LIST */
// http://www.liquidhearth.com/forum/arena-strategy/457552-trumps-arena-tier-list-mage
var tierListRogue = [{
	"name":"SI:7 Agent",
	"arenaRank":1
},{
    "name":"Perdition's Blade",
    "arenaRank":2
},{
    "name":"Backstab",
    "arenaRank":3
},{
    "name":"Deadly Poison",
    "arenaRank":4
},{
    "name":"Eviscerate",
    "arenaRank":5
},{
    "name":"Assassinate",
    "arenaRank":6
},{
    "name":"Assassin's Blade",
    "arenaRank":7
},{
    "name":"Patient Assassin",
    "arenaRank":8
},{
    "name":"Betrayal",
    "arenaRank":9
},{
    "name":"Edwin VanCleef",
    "arenaRank":10
},{
    "name":"Master of Disguise",
    "arenaRank":11
},{
    "name":"Cold Blood",
    "arenaRank":12
},{
    "name":"Defias Ringleader",
    "arenaRank":13
},{
    "name":"Sprint",
    "arenaRank":14
},{
    "name":"Fan of Knives",
    "arenaRank":15
},{
    "name":"Blade Flurry",
    "arenaRank":16
},{
    "name":"Headcrack",
    "arenaRank":17
},{
    "name":"Shiv",
    "arenaRank":18
},{
    "name":"Shadowstep",
    "arenaRank":19
},{
    "name":"Kidnapper",
    "arenaRank":20
},{
    "name":"Preparation",
    "arenaRank":21
},{
    "name":"Sap",
    "arenaRank":22
},{
    "name":"Vanish",
    "arenaRank":23
},{
    "name":"Conceal",
    "arenaRank":24
},{
    "name":"Sinister Strike",
    "arenaRank":25
}];

// add common cards tiers to the hearthstoneCards list
var counter = 0;
$.each(tierListCommon, function(cardName, rank) {
	$.each(hearthstoneCards, function(index, value) {
		if (rank.name === value.name){
			value.arenaRank = rank.arenaRank;
			if (0 < value.arenaRank && value.arenaRank <= 15){
				value.arenaRankText = "Excellent";
				value.arenaRankTier = "2";
			}
			else if (16 <= value.arenaRank && value.arenaRank <= 24){
				value.arenaRankText = "Good";
				value.arenaRankTier = "3";
			}
			else if (25 <= value.arenaRank && value.arenaRank <= 43){
				value.arenaRankText = "Average";
				value.arenaRankTier = "4";
			}
			else if (44 <= value.arenaRank && value.arenaRank <= 60){
				value.arenaRankText = "Poor";
				value.arenaRankTier = "5";
			}
			else if (61 <= value.arenaRank && value.arenaRank <= 83){
				value.arenaRankText = "Terrible";
				value.arenaRankTier = "6";
			}
			else{
				value.arenaRankText = "";
				value.arenaRankTier = "";
			}
			counter++;
		}
    });
});
console.log("#Common: " + counter + " of 83");

// add rare cards tiers to the hearthstoneCards list
var counter = 0;
$.each(tierListRare, function(cardName, rank) {
	$.each(hearthstoneCards, function(index, value) {
		if (rank.name === value.name){
			value.arenaRank = rank.arenaRank;
			if (0 < value.arenaRank && value.arenaRank <= 2){
				value.arenaRankText = "Best";
				value.arenaRankTier = "1";
			}
			else if (3 <= value.arenaRank && value.arenaRank <= 10){
				value.arenaRankText = "Excellent";
				value.arenaRankTier = "2";
			}
			else if (11 <= value.arenaRank && value.arenaRank <= 14){
				value.arenaRankText = "Good";
				value.arenaRankTier = "3";
			}
			else if (15 <= value.arenaRank && value.arenaRank <= 21){
				value.arenaRankText = "Average";
				value.arenaRankTier = "4";
			}
			else if (22 <= value.arenaRank && value.arenaRank <= 25){
				value.arenaRankText = "Poor";
				value.arenaRankTier = "5";
			}
			else if (26 <= value.arenaRank <= 36){
				value.arenaRankText = "Terrible";
				value.arenaRankTier = "6";
			}
			else{
				value.arenaRankText = "";
				value.arenaRankTier = "";
			}
		   counter++;
	   }
    });
});

console.log("#Rare: " + counter + " of 36");

// add epic cards tiers to the hearthstoneCards list
var counter = 0;
$.each(tierListEpic, function(cardName, rank) {
	$.each(hearthstoneCards, function(index, value) {
		if (rank.name === value.name){
			value.arenaRank = rank.arenaRank;
			if (1 <= value.arenaRank && value.arenaRank <= 3){
				value.arenaRankText = "Excellent";
				value.arenaRankTier = "2";
			}
			else if (4 == value.arenaRank){
				value.arenaRankText = "Good";
				value.arenaRankTier = "3";
			}
			else if (5 <= value.arenaRank && value.arenaRank <= 6){
				value.arenaRankText = "Average";
				value.arenaRankTier = "4";
			}
			else if (7 == value.arenaRank){
				value.arenaRankText = "Poor";
				value.arenaRankTier = "5";
			}
			else if (8 <= value.arenaRank <= 10){
				value.arenaRankText = "Terrible";
				value.arenaRankTier = "6";
			}
			else{
				value.arenaRankText = "";
				value.arenaRankTier = "";
			}
		   counter++;
	   }
    });
});
console.log("#Epic: " + counter + " of 10");

// add legendary cards tiers to the hearthstoneCards list
var counter = 0;
$.each(tierListLegendary, function(cardName, rank) {
	$.each(hearthstoneCards, function(index, value) {
		if (rank.name === value.name){
			value.arenaRank = rank.arenaRank;
			if (0 < value.arenaRank && value.arenaRank <= 5){
				value.arenaRankText = "Best";
				value.arenaRankTier = "1";
			}
			else if (6 <= value.arenaRank && value.arenaRank <= 7){
				value.arenaRankText = "Excellent";
				value.arenaRankTier = "2";
			}
			else if (8 <= value.arenaRank  && value.arenaRank <= 10){
				value.arenaRankText = "Good";
				value.arenaRankTier = "3";
			}
			else if (11 <= value.arenaRank && value.arenaRank <= 18){
				value.arenaRankText = "Average";
				value.arenaRankTier = "4";
			}
			else if (19 <= value.arenaRank && value.arenaRank <= 21){
				value.arenaRankText = "Poor";
				value.arenaRankTier = "5";
			}
			else if (22 <= value.arenaRank <= 24){
				value.arenaRankText = "Terrible";
				value.arenaRankTier = "6";
			}
			else{
				value.arenaRankText = "";
				value.arenaRankTier = "";
			}
		   counter++;
	   }
    });
});

console.log("#Legendary: " + counter + " of 24");

// add Druid cards tiers to the hearthstoneCards list
var counter = 0;
$.each(tierListDruid, function(cardName, rank) {
	$.each(hearthstoneCards, function(index, value) {
		if (rank.name === value.name && value.collectible){
			value.arenaRank = rank.arenaRank;
			if (0 < value.arenaRank && value.arenaRank <= 6){
				value.arenaRankText = "Best";
				value.arenaRankTier = "1";
			}
			else if (7 <= value.arenaRank && value.arenaRank <= 14){
				value.arenaRankText = "Excellent";
				value.arenaRankTier = "2";
			}
			else if (15 == value.arenaRank){
				value.arenaRankText = "Good";
				value.arenaRankTier = "3";
			}
			else if (16 <= value.arenaRank && value.arenaRank <= 17){
				value.arenaRankText = "Average";
				value.arenaRankTier = "4";
			}
			else if (18 <= value.arenaRank && value.arenaRank <= 21){
				value.arenaRankText = "Poor";
				value.arenaRankTier = "5";
			}
			else if (22 <= value.arenaRank && value.arenaRank <= 25){
				value.arenaRankText = "Terrible";
				value.arenaRankTier = "6";
			}
			else{
				value.arenaRankText = "";
				value.arenaRankTier = "";
			}
		   counter++;
	   }
    });
});

console.log("#Druid: " + counter + " of 25");

// add Mage cards tiers to the hearthstoneCards list
var counter = 0;
$.each(tierListMage, function(cardName, rank) {
	$.each(hearthstoneCards, function(index, value) {
		if (rank.name === value.name && value.collectible){
			value.arenaRank = rank.arenaRank;
			if (0 < value.arenaRank && value.arenaRank <= 3){
				value.arenaRankText = "Best";
				value.arenaRankTier = "1";
			}
			else if (4 <= value.arenaRank && value.arenaRank <= 5){
				value.arenaRankText = "Excellent";
				value.arenaRankTier = "2";
			}
			else if (6 <= value.arenaRank && value.arenaRank <= 12){
				value.arenaRankText = "Good";
				value.arenaRankTier = "3";
			}
			else if (13 == value.arenaRank){
				value.arenaRankText = "Average";
				value.arenaRankTier = "4";
			}
			else if (14 <= value.arenaRank && value.arenaRank <= 20){
				value.arenaRankText = "Poor";
				value.arenaRankTier = "5";
			}
			else if (21 <= value.arenaRank && value.arenaRank <= 25){
				value.arenaRankText = "Terrible";
				value.arenaRankTier = "6";
			}
			else{
				value.arenaRankText = "";
				value.arenaRankTier = "";
			}
		   counter++;
	   }
    });
});

console.log("#Mage: " + counter + " of 25");

// add Rogue cards tiers to the hearthstoneCards list
var counter = 0;
$.each(tierListRogue, function(cardName, rank) {
	$.each(hearthstoneCards, function(index, value) {
		if (rank.name === value.name && value.collectible){
			value.arenaRank = rank.arenaRank;
			if (1 == value.arenaRank){
				value.arenaRankText = "Best";
				value.arenaRankTier = "1";
			}
			else if (2 <= value.arenaRank && value.arenaRank <= 7){
				value.arenaRankText = "Excellent";
				value.arenaRankTier = "2";
			}
			else if (8 <= value.arenaRank && value.arenaRank <= 9){
				value.arenaRankText = "Good";
				value.arenaRankTier = "3";
			}
			else if (10 <= value.arenaRank && value.arenaRank <= 15){
				value.arenaRankText = "Average";
				value.arenaRankTier = "4";
			}
			else if (16 <= value.arenaRank && value.arenaRank <= 19){
				value.arenaRankText = "Poor";
				value.arenaRankTier = "5";
			}
			else if (20 <= value.arenaRank && value.arenaRank <= 25){
				value.arenaRankText = "Terrible";
				value.arenaRankTier = "6";
			}
			else{
				value.arenaRankText = "";
				value.arenaRankTier = "";
			}
		   counter++;
	   }
    });
});

console.log("#Rogue: " + counter + " of 25");

var table = "";
$.each(hearthstoneCards, function(i, value) {

	/* CLASS */
	var classs = "neutral";
	if (!(typeof value.classs === 'undefined')){
		switch(value.classs)
		{
			case 1:
			  classs = "warrior";
			  break;
			case 2:
			  classs = "paladin";
			  break;
			case 3:
			  classs = "hunter";
			  break;
			case 4:
			  classs = "rogue";
			  break;
			case 5:
			  classs = "priest";
			  break;
			case 6:
			  classs = "neutral";
			  break;
			case 7:
			  classs = "shaman";
			  break;
			case 8:
			  classs = "mage";
			  break;
			case 9:
			  classs = "warlock";
			  break;
			case 10:
			  classs = "neutral";
			  break;
			case 11:
			  classs = "druid";
			  break;
			default:
			  classs = "neutral";
		}
	}
	
	/* CARD QUALITY */
	var quality = "";
	if (!(typeof value.quality === 'undefined')){
		switch(value.quality)
		{
			case 0:
			  quality = "free";
			  break;
			case 1:
			  quality = "common";
			  break;
			case 3:
			  quality = "rare";
			  break;
			case 4:
			  quality = "epic";
			  break;
			case 5:
			  quality = "legendary";
			  break;
			default:
			  quality = "common";
		}
	}

	/* HEALTH vs DURABILITY */
	var health = "";
	var healthType = "";
	var attack = "";
	var attackType = "";
	if (typeof value.health === 'undefined'){
		if (!(typeof value.durability === 'undefined')){
			health = value.durability;
			healthType = "durability";
			attackType = "damage";
			
		}
		else
		{
			health = "";
		}
	}
	else {
		health = value.health;
		healthType = "health";
		attackType = "attack";		
	}
	
	if (!(typeof value.attack === 'undefined')){
		attack = value.attack;
	} else {
		attack = "";
	}
	
	var arenaRank = "";
	if (!(typeof value.arenaRank === 'undefined')){
		arenaRank = value.arenaRank;
	}
	
	var arenaRankText = "";
	if (!(typeof value.arenaRankText === 'undefined')){
		arenaRankText = value.arenaRankText;
	}	
	
	var arenaRankTier = "";
	if (!(typeof value.arenaRankTier === 'undefined')){
		arenaRankTier = value.arenaRankTier;
	}
	
	var description = "";
	if (!(typeof value.description === 'undefined')){
		description = value.description;
	} 

	table += '<tr><td><a rel="popover" href="https://www.hearthhead.com/hearthstone/card='+value.id+'&power" class="quality '+ quality + '" target="_blank">' + value.name + '</a></td>';
	table += '<td class="quality ' + quality + '">' + quality + '</td>';
	table += '<td class="txclass ' + classs + '">' + classs + '</td>';
	table += '<td><span class="mana">' + value.cost + '</span></td>';
	table += '<td><span class="' + attackType + '">' + attack + '</span></td>';
	table += '<td><span class="' + healthType + '">' + health + '</span></td>';
	table += '<td><span class="arenaRank">' + arenaRankText + '<div class="hidden">' + arenaRank + '</div><div class="arenaRankTier hidden">' + arenaRankTier + '</div></span></td>';
	table += '<td class="description">' + description + '</td>';
	table += '</tr>';
});
$('table').remove();
$('body').append('<table style="700px;" class="table-info" id="table-card-list"></table>');
$('table').append('<thead><tr><th>title</th><th>quality</th><th>class</th><th>mana</th><th>attack</th><th>health</th><th>Rank</th><th>description</th></tr></thead>');
$('table').append("<tbody></tbody>");
$('table tbody').html(table);