export const weapon_types = {
   "unarmed": {'category': "unarmed", "name": 'unarmed', 'damage': '3', 'hit':'+6', 'speed': {base: 10, min: 5},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':''},

  "dagger": { name: 'dagger', category: "short blades",
    damage: "4",
    hit: "+6",
    speed: { base: 10, min: 5},
    ohms: 'little',
    thms: 'little',
    damage_type: 'piercing',
    prob: '10',
    img: "dagger"
  },
   "quick blade": {'category': "short blades", "name": 'quick_blade', 'damage': '5', 'hit':'+6', 'speed': {base: 7, min: 3},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':'2',  img: 'quickblade'},
   "short sword": {'category': "short blades", "name": 'short_sword', 'damage': '6', 'hit':'+4', 'speed': {base: 11, min: 5},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':10, img: "short_sword"},
   "rapier": {'category': "short blades", "name": 'rapier', 'damage': '8', 'hit':'+4', 'speed': {base:'12',min:5},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':10, img: "rapier"},

   "falchion": {'category': "long blades", "name": 'falchion', 'damage': '7', 'hit':'+2', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "falchion"},
   "long sword": {'category': "long blades", "name": 'long_sword', 'damage': '9', 'hit':'+1', 'speed': {base: '14',min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "long_sword"},
   "scimitar": {'category': "long blades", "name": 'scimitar', 'damage': '11', 'hit':'0', 'speed': {base: 14,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "scimitar"},
   "demon blade": {'category': "long blades", "name": 'demon_blade', 'damage': '12', 'hit':'-1', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':"2", img: "demon_blade"},
   "eudemon blade": {'category': "long blades", "name": 'eudemon_blade', 'damage': '13', 'hit':'-2', 'speed': {base: 12,min:6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':"-", img: "blessed_blade"},

   "double sword": {'category': "long blades", "name": 'double_sword', 'damage': '14', 'hit':'-1', 'speed': {base: 15,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "double_sword"},
   "great sword": {'category': "long blades", "name": 'great_sword', 'damage': '15', 'hit':'-3', 'speed': {base: 17,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "greatsword"},
   "triple sword": {'category': "long blades", "name": 'triple_sword', 'damage': '17', 'hit':'-4', 'speed': {base:'19',min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "triple_sword"},


   "hand axe": {'category': "axes", "name": 'hand axe', 'damage': '7', 'hit':'+3', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "hand_axe"},
   "war axe": {'category': "axes", "name": 'hand axe', 'damage': '11', 'hit':'0', 'speed': {base: 15,min: 7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "war_axe"},
   "broad axe": {'category': "axes", "name": 'hand axe', 'damage': '13', 'hit':'-2', 'speed': {base: 16,min: 7},'ohms':'medium', 'thms':'little','damage_type':"chopping", 'prob':10, img: "broad_axe"},
   "battleaxe": {'category': "axes", "name": 'hand axe', 'damage': '15', 'hit':'-4', 'speed': {base: 17,min: 7},'ohms':'', 'thms':'medium','damage_type':"chopping", 'prob':10, img: "battle_axe"},
   "executioner's axe": {'category': "axes", "name": 'hand axe', 'damage': '17', 'hit':'-6', 'speed': {base: 20,min: 7},'':'little', 'thms':'medium','damage_type':"chopping", 'prob':2, img: "executioner_axe"},

   "whip": {'category': "maces", "name": 'whip', 'damage': '6', 'hit':'+2', 'speed': {base: 11,min: 5},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "bullwhip"},
   "club": {'category': "maces", "name": 'hand axe', 'damage': '5', 'hit':'+3', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "club"},
   "mace": {'category': "maces", "name": 'hand axe', 'damage': '8', 'hit':'+3', 'speed': {base: 14,min: 7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "mace"},
   "flail": {'category': "maces", "name": 'hand axe', 'damage': '10', 'hit':'+0', 'speed': {base: 14,min: 7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "flail"},
   "morningstar": {'category': "maces", "name": 'hand axe', 'damage': '13', 'hit':'-2', 'speed': {base: 15,min: 7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "morningstar"},
   "demon whip": {'category': "maces", "name": 'hand axe', 'damage': '11', 'hit':'+1', 'speed': {base: 11,min:5},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "demon_whip"},
   "sacred scourge": {'category': "maces", "name": 'hand axe', 'damage': '12', 'hit':'+0', 'speed': {base: 11,min:5},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "sacred_scourge"},
   "dire flail": {'category': "maces", "name": 'dire flail', 'damage': '13', 'hit':'-3', 'speed': {base: 13,min:6},'ohms':'', 'thms':'medium','damage_type':"chopping", 'prob':10, img: "dire_flail"},
   "eveningstar": {'category': "maces", "name": 'hand axe', 'damage': '15', 'hit':'-1', 'speed': {base: 15,min:7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "eveningstar"},
   "great mace": {'category': "maces", "name": 'hand axe', 'damage': '17', 'hit':'-4', 'speed': {base: 17,min:7},'ohms':'', 'thms':'medium','damage_type':"chopping", 'prob':10, img: "mace_large"},
   "giant club": {'category': "maces", "name": 'hand axe', 'damage': '20', 'hit':'-6', 'speed': {base: 16,min:7},'ohms':'', 'thms':'large','damage_type':"chopping", 'prob':10, img: "giant_club"},
   "giant spiked club": {'category': "maces", "name": 'hand axe', 'damage': '22', 'hit':'-7', speed: {base: 22,min:7},'ohms':'', 'thms':'large','damage_type':"chopping", 'prob':10, img: "spiked_giant_club"},

   "spear": {'category': "polearms", "name": 'spear', 'damage': '6', 'hit':'+4', 'speed': {base: 11,min:6},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':10, img: "spear"},
   "trident": {'category': "polearms", "name": 'spear', 'damage': '9', 'hit':'+1', 'speed': {base: 13,min:6},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':10, img: "trident"},
   "halberd": {'category': "polearms", "name": 'spear', 'damage': '13', 'hit':'-3', 'speed': {base: 15,min:7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10, img: "halberd"},
   "scythe": {'category': "polearms", "name": 'spear', 'damage': '14', 'hit':'-4', 'speed': {base: 20,min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "scythe"},
   "demon trident": {'category': "polearms", "name": 'spear', 'damage': '12', 'hit':'+1', 'speed': {base: 13,min:6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "demon_trident"},
   "trishula": {'category': "polearms", "name": 'spear', 'damage': '13', 'hit':'+0', 'speed': {base: 13,min:6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "trishula"},
   "glaive": {'category': "polearms", "name": 'spear', 'damage': '15', 'hit':'-3', 'speed': {base: 17,min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "glaive"},
   "bardiche": {'category': "polearms", "name": 'spear', 'damage': '18', 'hit':'-6', 'speed': {base: 20,min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "bardiche"},

   "quarterstaff": {'category': "staves", "name": 'spear', 'damage': '10', 'hit':'+3', 'speed': {base: 13,min:6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "quarterstaff"},
   "lajatang": {'category': "staves", "name": 'spear', 'damage': '16', 'hit':'-3', 'speed': {base: 14,min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "lajatang"},
   "staff": {'category': "staves", "name": 'spear', 'damage': '5', 'hit':'+5', 'speed': {base: 12,min:6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10, img: "staff"},

   "hunting sling": {'category': "slings", "name": 'triple_sword', 'damage': '5', 'hit':'+2', 'speed': {base: 12,min: 6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "ranged/sling"},
   "fustibalus": {'category': "slings", "name": 'triple_sword', 'damage': '8', 'hit':'-1', 'speed': {base: 14,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "ranged/fustibalus"},

   "shortbow": {'category': "bows", "name": 'triple_sword', 'damage': '9', 'hit':'+2', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "ranged/shortbow"},
   "longbow": {'category': "bows", "name": 'triple_sword', 'damage': '15', 'hit':'0', 'speed': {base: 17,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "ranged/longbow"},
   
   "hand crossbow": {'category': "crossbows", "name": 'triple_sword', 'damage': '12', 'hit':'+5', 'speed': {base: 15,min: 10},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "ranged/hand_crossbow"},
   "arbalest": {'category': "crossbows", "name": 'triple_sword', 'damage': '18', 'hit':'+2', 'speed': {base: 19,min: 10},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "ranged/arbalest"},
   "triple crossbow": {'category': "crossbows", "name": 'triple_sword', 'damage': '22', 'hit':'+0', 'speed': {base: 23,min: 10},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2, img: "ranged/triple_crossbow"},

   "stone": {'category': "throwing", "name": 'triple_sword', 'damage': '2', 'hit':'+0', 'speed': {base: 11,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},
   "boomerang": {'category': "throwing", "name": 'triple_sword', 'damage': '6', 'hit':'+0', 'speed': {base: 13,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},
   "javelin": {'category': "throwing", "name": 'triple_sword', 'damage': '11', 'hit':'+0', 'speed': {base: 15,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},
   "large rock": {'category': "throwing", "name": 'triple_sword', 'damage': '20', 'hit':'+0', 'speed': {base: 20,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},
};



export const colors = {
  "bright white": "#eeeeec",
  "dark brown": "#121212",
  "fade white": "#babdb6",
  "lime gree": "#65ff00",
  "gold border": "#7d623c",
  "blue light to replacement": "#00b8e6",
}

export function brand_color (brand) {
  switch (brand) {
    case "flaming":
      return "red";
    case "freezing":
      return "aqua";
    case "holy wrath":
      return "yellow";
    case "electrocution":
      return "orange";
    case "pain":
      return "slateblue";
    case "distortion":
      return "violet";
    case "speed":
      return "silver";
    case "vorpal":
      return "white";
    case "protection":
      return "brown";
    case "draining":
      return "purple";
    case "":
      return "";

  }

}
export const armour_types = {

"no armour" : {"name": "no armour",  armour: 0, encumbrance:   0, price:    0, img: "../../player/base/lorc_f6"},
"animal skin" : {"name": "animal skin",  armour: 2, encumbrance:   0, price:    3, img: "animal_skin1"},
"robe" : {"name" :"robe",  armour: 2, encumbrance: 0, img: "robe1"},
"leather armour" : {name: "leather armour",  armour: 3, encumbrance: -40,  price: 20, img: "leather_armour1"},
"ring mail" : {name: "ring mail",  armour: 5, encumbrance: -70 , img: "ring_mail1"},
"scale mail" : {name: "scale mail", armour: 6, encumbrance: -100, img: "scale_mail1"},
"chain mail" : {name: "chain mail", armour: 8, encumbrance: -150, img: "chain_mail1"},
"plate armour" : {name: "plate armour",  armour: 10, encumbrance: -180, img: "plate1"},
"crystal plate" :{ name: "crystal plate",armour: 14, encumbrance:-230, img: "crystal_plate"},

"troll leather" :{ name: "troll leather",armour: 4, encumbrance:-40, img: "troll_leather_armour"} ,

"cloak" : {name: "cloak",  armour: 1, encumbrance: 0, img: ""},
"scarf" : {name: "scarf",  armour: 0, encumbrance: 0},
"gloves" : {name: "gloves",armour: 1, encumbrance: 0},

"helmet" : {name: "helmet",armour: 1, encumbrance: 0},
"hat" : {name: "hat",armour: 0, encumbrance: 0} ,

"boots" : {name: "boots",armour: 1, encumbrance: 0},
"centaur barding" : {name: "centaur barding",  armour: 4, encumbrance: -60},
"naga barding" : {name: "naga barding",  armour: 4, encumbrance: -60} ,

"no shield" : {name: "no shield",armour: 0, encumbrance: 0, img: "../../../player/base/lorc_f6"},
"buckler" : {name: "buckler",armour: 3, encumbrance: -8 , img: "buckler2"},
"shield" : {name: "shield",armour: 8, encumbrance: -30, img: "shield2"} ,
"large shield" : {name: "large shield",amour: 13, encumbrance: -50, img: "large_shield2"},

// Following all ARM_ entries for the benefit of util/gather_items
"steam": {name: "steam", armour: 5, encumbrance:   0, img: "silver_dragon_scale_mail"},
"acid": {name: "acid", armour: 6, encumbrance:  -50, img: "acid_dragon_armour"},
"quicksilver": { name: "quicksilver", armour: 9, encumbrance:  -70, img: "quicksilver_dragon_scale_mail"},
"swamp": { name: "swamp", armour: 7, encumbrance:  -70, img: "swamp_dragon_armour"},
"fire": { name: "fire", armour: 8, encumbrance: -110, img: "red_dragon_scale_mail"},
"ice": { name: "ice", armour: 9, encumbrance: -110, img: "ice_dragon_armour"},
"pearl": { name: "pearl", armour: 10, encumbrance: -110, img: "pearl_dragon_armour"},
"storm": { name: "storm", armour: 10, encumbrance: -150, img: "blue_dragon_scale_mail"},
"shadow": { name: "shadow", armour: 10, encumbrance: -150, img: "shadow_dragon_scale_mail"},
"gold": { name: "gold", armour: 12, encumbrance: -230, img: "gold_dragon_armour"},

}
export const armour_types_list  = [ "animal skin", "robe","leather armour", "ring mail", "scale mail", "chain mail",
"plate armour", "crystal plate", "troll leather"]
export const armour_types_list_dragon  = ["steam", "acid", "quicksilver","swamp", "fire", "ice", "pearl",
"storm", "shadow", "gold"]
export const shield_types_list  = [ "buckler", "shield", "large shield"]