export const spell_db = {
    foxfire : { 
    display:"Foxfire", 
    image: "fire/foxfire.png", 
    type2:"conjurations" , 
    type1:"fire magic", 
    max_power: 40,
    "formula" : function (power, dice, max_power = 40) { if (power > max_power) {power = max_power}; return dice(3+power/3)},
    ndice: 1,
    pdice: 3,
    mdice: 1,
    ddice: 3,

    level: 1,
    },

    starburst : { display: "Starburst", image:"fire/starburst.png", type1:"fire magic", type2:"conjurations", max_power:200,ndice:6,pdice:18,mdice:2,ddice:3,level:6},
    hailstorm : { display: "Hailstorm", image:"ice/hailstorm.png", type1:"ice magic", type2:"conjurations", max_power:100,ndice:3,pdice:10,mdice:1,ddice:2,level:4},
    sting : { display: "Sting", image:"poison/sting.png", type1:"poison magic", type2:"conjurations", max_power:25,ndice:1,pdice:3,mdice:1,ddice:5,level:1},
    
    
}