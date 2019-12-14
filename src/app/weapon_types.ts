export const weapon_types = {
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
   "scimitar": {'category': "long blades", "name": 'scimitar', 'damage': '11', 'hit':'0', 'speed': '14','ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10},
   "demon blade": {'category': "long blades", "name": 'demon_blade', 'damage': '12', 'hit':'-1', 'speed': '13','ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':"2"},
   "eudemon blade": {'category': "long blades", "name": 'eudemon_blade', 'damage': '13', 'hit':'-2', 'speed': '12','ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':"-"},

   "double sword": {'category': "long blades", "name": 'double_sword', 'damage': '14', 'hit':'-1', 'speed': '15','ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},
   "great sword": {'category': "long blades", "name": 'great_sword', 'damage': '15', 'hit':'-3', 'speed': '17','ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':10},
   "triple sword": {'category': "long blades", "name": 'triple_sword', 'damage': '17', 'hit':'-4', 'speed': {base:'19',min:7},'ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},

   "hunting sling": {'category': "slings", "name": 'triple_sword', 'damage': '5', 'hit':'+2', 'speed': '12','ohms':'little', 'thms':'little','damage_type':"slicing", 'prob':2},
};
