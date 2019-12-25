
export const monsters = {
    orc      : {name:"orc", ac:1, display: "orc"  },
    gnoll    : {name:"gnoll", ac:2,  display: "gnoll"},
    "orc_warrior"    : {name:"orc_warrior", display: "orc warrior",  ac:9, ev:10,  hd:4 , hp:"18-38"  , mr:20, speed:10, xp:39  , attack:5  },
    "orc_wizard"     : {name:"orc_wizard",  display: "orc wizard",  ac:2, ev:12, hd:3 , hp:"9-20"    , mr:20, speed:10, xp:132 , attack:20 },
    "centaur"        : {name:"centaur",     display : "centaur ", ac:3, ev:7,  hd:4 , hp:"14-30"  , mr:20, speed:15, xp:112  , attack:10  },
    "crimson_imp"        : {name:"crimson_imp",     display : "crimson imp ", ac:3, ev:14,  hd:4 , hp:"8-18"  , mr:40, speed:10, xp:48  , attack:10,   resistances: ["rF+++","rPois","rRot","rN+++","rTorm"], vulnerabilities: ["Cold","Holy"]},
}