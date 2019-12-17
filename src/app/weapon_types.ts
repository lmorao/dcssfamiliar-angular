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
  },
   "quick blade": {'category': "short blades", "name": 'quick_blade', 'damage': '5', 'hit':'+6', 'speed': {base: 7, min: 3},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':'2'},
   "short sword": {'category': "short blades", "name": 'short_sword', 'damage': '6', 'hit':'+4', 'speed': {base: 11, min: 5},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':10},
   "rapier": {'category': "short blades", "name": 'rapier', 'damage': '8', 'hit':'+4', 'speed': {base:'12',min:5},'ohms':'little', 'thms':'little','damage_type':"piercing", 'prob':10},

   "falchion": {'category': "long blades", "name": 'falchion', 'damage': '7', 'hit':'+2', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10},
   "long sword": {'category': "long blades", "name": 'long_sword', 'damage': '9', 'hit':'+1', 'speed': {base: '14',min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10},
   "scimitar": {'category': "long blades", "name": 'scimitar', 'damage': '11', 'hit':'0', 'speed': {base: 14,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10},
   "demon blade": {'category': "long blades", "name": 'demon_blade', 'damage': '12', 'hit':'-1', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':"2"},
   "eudemon blade": {'category': "long blades", "name": 'eudemon_blade', 'damage': '13', 'hit':'-2', 'speed': {base: 12,min:6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':"-"},

   "double sword": {'category': "long blades", "name": 'double_sword', 'damage': '14', 'hit':'-1', 'speed': {base: 15,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},
   "great sword": {'category': "long blades", "name": 'great_sword', 'damage': '15', 'hit':'-3', 'speed': {base: 17,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10},
   "triple sword": {'category': "long blades", "name": 'triple_sword', 'damage': '17', 'hit':'-4', 'speed': {base:'19',min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},


   "hand axe": {'category': "axes", "name": 'hand axe', 'damage': '7', 'hit':'+3', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "war axe": {'category': "axes", "name": 'hand axe', 'damage': '11', 'hit':'0', 'speed': {base: 15,min: 7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "broad axe": {'category': "axes", "name": 'hand axe', 'damage': '13', 'hit':'-2', 'speed': {base: 16,min: 7},'ohms':'medium', 'thms':'little','damage_type':"chopping", 'prob':10},
   "battleaxe": {'category': "axes", "name": 'hand axe', 'damage': '15', 'hit':'-4', 'speed': {base: 17,min: 7},'ohms':'', 'thms':'medium','damage_type':"chopping", 'prob':10},
   "executioner's axe": {'category': "axes", "name": 'hand axe', 'damage': '17', 'hit':'-6', 'speed': {base: 20,min: 7},'':'little', 'thms':'medium','damage_type':"chopping", 'prob':2},

   "whip": {'category': "maces", "name": 'whip', 'damage': '6', 'hit':'+2', 'speed': {base: 11,min: 5},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "club": {'category': "maces", "name": 'hand axe', 'damage': '5', 'hit':'+3', 'speed': {base: 13,min: 6},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "mace": {'category': "maces", "name": 'hand axe', 'damage': '8', 'hit':'+3', 'speed': {base: 14,min: 7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "flail": {'category': "maces", "name": 'hand axe', 'damage': '10', 'hit':'+0', 'speed': {base: 14,min: 7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "morningstar": {'category': "maces", "name": 'hand axe', 'damage': '13', 'hit':'-2', 'speed': {base: 15,min: 7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "demon whip": {'category': "maces", "name": 'hand axe', 'damage': '11', 'hit':'+1', 'speed': {base: 11,min:5},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "sacred scourge": {'category': "maces", "name": 'hand axe', 'damage': '12', 'hit':'+0', 'speed': {base: 11,min:5},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "dire flail": {'category': "maces", "name": 'dire flail', 'damage': '13', 'hit':'-3', 'speed': {base: 13,min:6},'ohms':'', 'thms':'medium','damage_type':"chopping", 'prob':10},
   "eveningstar": {'category': "maces", "name": 'hand axe', 'damage': '15', 'hit':'-1', 'speed': {base: 15,min:7},'ohms':'little', 'thms':'little','damage_type':"chopping", 'prob':10},
   "great mace": {'category': "maces", "name": 'hand axe', 'damage': '17', 'hit':'-4', 'speed': {base: 17,min:7},'ohms':'', 'thms':'medium','damage_type':"chopping", 'prob':10},
   "giant club": {'category': "maces", "name": 'hand axe', 'damage': '20', 'hit':'-6', 'speed': {base: 16,min:7},'ohms':'', 'thms':'large','damage_type':"chopping", 'prob':10},
   "giant spiked club": {'category': "maces", "name": 'hand axe', 'damage': '22', 'hit':'-7', speed: {base: 22,min:7},'ohms':'', 'thms':'large','damage_type':"chopping", 'prob':10},


   "hunting sling": {'category': "slings", "name": 'triple_sword', 'damage': '5', 'hit':'+2', 'speed': {base: 12,min: 6},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},
   "fustibalus": {'category': "slings", "name": 'triple_sword', 'damage': '8', 'hit':'-1', 'speed': {base: 14,min: 7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},

};
