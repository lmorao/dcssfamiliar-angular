import { Injectable } from '@angular/core';
import { SelectedWeaponService } from './selected-weapon.service';
import { Skills } from '../../shared/models/skills.model'
import { Character } from '../../shared/models/character.model'

@Injectable({
  providedIn: 'root'
})
export class ShareUrlService {

  convertNumberToLeter = function (n) {
    if (n <0) {return 0}
    if (n ==0) {return 0}
    if (n ==1) {return "a"}
    if (n ==2) {return "b"}
    if (n ==3) {return "c"}
    if (n ==4) {return "d"}
    if (n ==5) {return "e"}
    if (n ==6) {return "f"}
    if (n ==7) {return "g"}
    if (n ==8) {return "h"}
    if (n ==9) {return "i"}
    if (n ==11) {return "j"}
    if (n ==12) {return "k"}
    if (n ==13) {return "l"}
    if (n ==14) {return "m"}
    if (n ==15) {return "n"}
    if (n ==16) {return "o"}
    if (n ==17) {return "p"}
    if (n ==18) {return "q"}
    if (n ==19) {return "r"}
    if (n ==20) {return "s"}
    if (n ==21) {return "t"}
    if (n ==22) {return "u"}
    if (n ==23) {return "v"}
    if (n ==24) {return "w"}
    if (n ==25) {return "x"}
    if (n ==26) {return "y"}
    if (n ==27) {return "z"}
    if (n ==28) {return "A"}
    if (n ==29) {return "B"}
    if (n ==30) {return "C"}
    if (n ==31) {return "D"}
    if (n ==32) {return "E"}
    if (n ==33) {return "F"}
    if (n ==34) {return "G"}
    if (n ==35) {return "H"}
    if (n ==36) {return "I"}
    if (n ==37) {return "J"}
    if (n ==38) {return "K"}
    if (n ==39) {return "L"}
    if (n ==40) {return "M"}
    if (n ==41) {return "N"}
    if (n ==42) {return "O"}
    if (n ==43) {return "P"}
    if (n ==44) {return "Q"}
    if (n ==45) {return "R"}
    if (n ==46) {return "S"}
    if (n ==47) {return "T"}
    if (n ==48) {return "U"}
    if (n ==49) {return "V"}
    if (n ==50) {return "W"}
    if (n ==51) {return "X"}
    if (n ==52) {return "Y"}
    if (n ==53) {return "Z"}
    if (n >53) {console.log('dont support higher than 53');return "Z"}
  }
  routeid = ""
  createUrl = function (profile, skills,  weapons, selectedWeapon) {
    var url = ""
    var conv = this.convertNumberToLeter
    url += conv(profile.xl)
    url += conv(profile.str);
    url += conv(profile.int);
    url += conv(profile.dex);
    url += conv(profile.slaying);

    url += "/" + profile.name
    url += "/" + profile.species + "/"

    url += conv(skills.fighting.level );
    url += conv(skills["short blades"].level);
    url += conv(skills["long blades"].level);
    url += conv(skills.maces.level);
    url += conv(skills.axes.level);
    url += conv(skills.polearms.level);
    url += conv(skills.staves.level);
    url += conv(skills.unarmed.level);
    url += conv(skills.bows.level);
    url += conv(skills.crossbows.level);
    url += conv(skills.throwing.level);
    url += conv(skills.slings.level);


    url += conv(skills.armour.level);
    url += conv(skills.dodging.level);
    url += conv(skills.shields.level);

    url += conv(skills.spellcasting.level);
    url += conv(skills.conjurations.level);
    url += conv(skills.hexes.level);
    url += conv(skills.charms.level);
    url += conv(skills.summonings.level);
    url += conv(skills.necromancy.level);
    url += conv(skills.translocations.level);
    url += conv(skills.transmutations.level);
    url += conv(skills["fire magic"].level );
    url += conv(skills["ice magic"].level );
    url += conv(skills["air magic"].level );
    url += conv(skills["earth magic"].level );
    url += conv(skills["poison magic"].level );

    url += conv(skills.invocations.level);
    url += conv(skills.evocations.level);
    url += conv(skills.stealth.level);

    url += "/"
    for (var i=0 ; i<weapons.length; i+=1) {
      url += this.weaponHash(weapons[i])

    }
    url += "/"
    url += this.weaponHash(selectedWeapon)

    return url
  }

  weaponHash (weapon) {
    var res = ""
    var name =  ""
    if (weapon.name == "unarmed") { name = "Z" }
    if (weapon.name == "dagger") { name = "0" }
    if (weapon.name == "quick blade") { name = "a" }
    if (weapon.name == "short sword") { name = "b" }
    if (weapon.name == "rapier") { name = "c" }
    if (weapon.name == "falchion") { name = "d" }
    if (weapon.name == "long sword") { name = "e" }
    if (weapon.name == "scimitar") { name = "f" }
    if (weapon.name == "demon blade") { name = "g" }
    if (weapon.name == "eudemon blade") { name = "h" }
    if (weapon.name == "double sword") { name = "i" }
    if (weapon.name == "great sword") { name = "j" }
    if (weapon.name == "triple sword") { name = "k" }
    if (weapon.name == "hand axe") { name = "l" }
    if (weapon.name == "war axe") { name = "m" }
    if (weapon.name == "broad axe") { name = "n" }
    if (weapon.name == "battleaxe") { name = "o" }
    if (weapon.name == "executioner's axe") { name = "p" }
    if (weapon.name == "whip") { name = "q" }
    if (weapon.name == "club") { name = "r" }
    if (weapon.name == "mace") { name = "s" }
    if (weapon.name == "flail") { name = "t" }
    if (weapon.name == "morningstar") { name = "u" }
    if (weapon.name == "demon whip") { name = "v" }
    if (weapon.name == "sacred scourge") { name = "w" }
    if (weapon.name == "dire flail") { name = "x" }
    if (weapon.name == "eveningstar") { name = "y" }
    if (weapon.name == "great mace") { name = "z" }
    if (weapon.name == "giant club") { name = "A" }
    if (weapon.name == "giant spiked club") { name = "B" }
    if (weapon.name == "spear") { name = "C" }
    if (weapon.name == "trident") { name = "D" }
    if (weapon.name == "halberd") { name = "E" }
    if (weapon.name == "scythe") { name = "F" }
    if (weapon.name == "demon trident") { name = "G" }
    if (weapon.name == "trishula") { name = "H" }
    if (weapon.name == "glaive") { name = "I" }
    if (weapon.name == "bardiche") { name = "J" }
    if (weapon.name == "quarterstaff") { name = "K" }
    if (weapon.name == "lajatang") { name = "L" }
    if (weapon.name == "hunting sling") { name = "M" }
    if (weapon.name == "fustibalus") { name = "N" }
    if (weapon.name == "shortbow") { name = "O" }
    if (weapon.name == "longbow") { name = "P" }
    if (weapon.name == "hand crossbow") { name = "Q" }
    if (weapon.name == "arbalest") { name = "R" }
    if (weapon.name == "triple crossbow") { name = "S" }
    if (weapon.name == "stone") { name = "T" }
    if (weapon.name == "boomerang") { name = "U" }
    if (weapon.name == "javelin") { name = "V" }
    if (weapon.name == "large rock") { name = "W" }

    res += name 
    if (weapon.slaying[0] == "+") {res+= "0"} else {res += "1"}
    res += this.convertNumberToLeter(weapon.slaying[1])

    var brand
    if (weapon.brand == "") { brand = "0" }
    if (weapon.brand == "flaming") { brand = "a" }
    if (weapon.brand == "freezing") { brand = "b" }
    if (weapon.brand == "electrocution") { brand = "c" }
    if (weapon.brand == "vorpal") { brand = "d" }
    if (weapon.brand == "holy wrath") { brand = "e" }
    if (weapon.brand == "pain") { brand = "f" }
    if (weapon.brand == "speed") { brand = "g" }
    if (weapon.brand == "protection") { brand = "h" }
    if (weapon.brand == "vamp") { brand = "i" }
    
    res += brand
    return res
  }

  reverseWeaponHash = function (name, signal, slaying, brand) {
    var res = {name: "dagger", slaying: "+0", brand: ""}
    if (name == "Z") { res.name = "unarmed"}
    if (name == "0") { res.name = "dagger"}
    if (name == "a") { res.name = "quick blade"}
    if (name == "b") { res.name = "short sword"}
    if (name == "c") { res.name = "rapier"}
    if (name == "d") { res.name = "falchion"}
    if (name == "e") { res.name = "long sword"}
    if (name == "f") { res.name = "scimitar"}
    if (name == "g") { res.name = "demon blade"}
    if (name == "h") { res.name = "eudemon blade"}
    if (name == "i") { res.name = "double sword"}
    if (name == "j") { res.name = "great sword"}
    if (name == "k") { res.name = "triple sword"}
    if (name == "l") { res.name = "hand axe"}
    if (name == "m") { res.name = "war axe"}
    if (name == "n") { res.name = "broad axe"}
    if (name == "o") { res.name = "battleaxe"}
    if (name == "p") { res.name = "executioner's axe"}
    if (name == "q") { res.name = "whip"}
    if (name == "r") { res.name = "club"}
    if (name == "s") { res.name = "mace"}
    if (name == "t") { res.name = "flail"}
    if (name == "u") { res.name = "morningstar"}
    if (name == "v") { res.name = "demon whip"}
    if (name == "w") { res.name = "sacred scourge"}
    if (name == "x") { res.name = "dire flail"}
    if (name == "y") { res.name = "eveningstar"}
    if (name == "z") { res.name = "great mace"}
    if (name == "A") { res.name = "giant club"}
    if (name == "B") { res.name = "giant spiked club"}
    if (name == "C") { res.name = "spear"}
    if (name == "D") { res.name = "trident"}
    if (name == "E") { res.name = "halberd"}
    if (name == "F") { res.name = "scythe"}
    if (name == "G") { res.name = "demon trident"}
    if (name == "H") { res.name = "trishula"}
    if (name == "I") { res.name = "glaive"}
    if (name == "J") { res.name = "bardiche"}
    if (name == "K") { res.name = "quarterstaff"}
    if (name == "L") { res.name = "lajatang"}
    if (name == "M") { res.name = "hunting sling"}
    if (name == "N") { res.name = "fustibalus"}
    if (name == "O") { res.name = "shortbow"}
    if (name == "P") { res.name = "longbow"}
    if (name == "Q") { res.name = "hand crossbow"}
    if (name == "R") { res.name = "arbalest"}
    if (name == "S") { res.name = "triple crossbow"}
    if (name == "T") { res.name = "stone"}
    if (name == "U") { res.name = "boomerang"}
    if (name == "V") { res.name = "javelin"}
    if (name == "W") { res.name = "large rock"}

    if (signal == "0") {res.slaying ="+"} else {res.slaying ="-"}
    res.slaying += this.convertLetterToNumber(slaying)

    var brand
    if (brand == "0") { res.brand = ""}
    if (brand == "a" ) { res.brand = "flaming"}
    if (brand == "b" ) { res.brand = "freezing"}
    if (brand == "c" ) { res.brand = "electrocution"}
    if (brand == "d" ) { res.brand = "vorpal"}
    if (brand == "e" ) { res.brand = "holy wrath"}
    if (brand == "f" ) { res.brand = "pain"}
    if (brand == "g" ) { res.brand = "speed"}
    if (brand == "h" ) { res.brand = "protection"}
    if (brand == "i" ) { res.brand = "vamp"}
 
    return res

  }
  recreateWeaponList = function (wltxt) {
    var res = []
    for (var i=0;i<wltxt.length;i+=4) {
      res.push(this.reverseWeaponHash(wltxt[i],wltxt[i+1],wltxt[i+2],wltxt[i+3]))
    }
    return res
    
  }
  recreateSelectedWeapon = function (swtxt) {
    return this.reverseWeaponHash(swtxt[0],swtxt[1],swtxt[2],swtxt[3],)
  }

  convertLetterToNumber = function (n) {
    if (n <0) {return 0}
    if (n ==0) {return 0}
    if (n =="a") {return 1}
    if (n =="b") {return 2}
    if (n =="c") {return 3}
    if (n =="d") {return 4}
    if (n =="e") {return 5}
    if (n =="f") {return 6}
    if (n =="g") {return 7}
    if (n =="h") {return 8}
    if (n =="i") {return 9}
    if (n =="j") {return 11}
    if (n =="k") {return 12}
    if (n =="l") {return 13}
    if (n =="m") {return 14}
    if (n =="n") {return 15}
    if (n =="o") {return 16}
    if (n =="p") {return 17}
    if (n =="q") {return 18}
    if (n =="r") {return 19}
    if (n =="s") {return 20}
    if (n =="t") {return 21}
    if (n =="u") {return 22}
    if (n =="v") {return 23}
    if (n =="w") {return 24}
    if (n =="x") {return 25}
    if (n =="y") {return 26}
    if (n =="z") {return 27}
    if (n =="A") {return 28}
    if (n =="B") {return 29}
    if (n =="C") {return 30}
    if (n =="D") {return 31}
    if (n =="E") {return 32}
    if (n =="F") {return 33}
    if (n =="G") {return 34}
    if (n =="H") {return 35}
    if (n =="I") {return 36}
    if (n =="J") {return 37}
    if (n =="K") {return 38}
    if (n =="L") {return 39}
    if (n =="M") {return 40}
    if (n =="N") {return 41}
    if (n =="O") {return 42}
    if (n =="P") {return 43}
    if (n =="Q") {return 44}
    if (n =="R") {return 45}
    if (n =="S") {return 46}
    if (n =="T") {return 47}
    if (n =="U") {return 48}
    if (n =="V") {return 49}
    if (n =="W") {return 50}
    if (n =="X") {return 51}
    if (n =="Y") {return 52}
    if (n =="Z") {return 53}
  }
  recreateProfile = function (attr,name, species) {
    var res = new Character()
    var conv = this.convertLetterToNumber
    res.xl =      conv(attr[0])
    res.str =     conv(attr[1])
    res.int =     conv(attr[2])
    res.dex =     conv(attr[3])
    res.slaying = conv(attr[4])
    res.name = name
    res.species = species
    return res
  }
  recreateSkills = function (skills) {
    var res = new Skills()
    var conv = this.convertLetterToNumber

    res.fighting.level = conv(skills[0]);
    res["short blades"].level = conv(skills[1]);
    res["long blades"].level = conv(skills[2]);
    res.maces.level = conv(skills[3]);
    res.axes.level = conv(skills[4]);
    res.polearms.level = conv(skills[5]);
    res.staves.level = conv(skills[6]);
    res.unarmed.level = conv(skills[7]);
    res.bows.level = conv(skills[8]);
    res.crossbows.level = conv(skills[9]);
    res.throwing.level = conv(skills[10]);
    res.slings.level = conv(skills[11]);


    res.armour.level = conv(skills[12]);
    res.dodging.level = conv(skills[13]);
    res.shields.level = conv(skills[14]);

    res.spellcasting.level = conv(skills[15]);
    res.conjurations.level = conv(skills[16]);
    res.hexes.level = conv(skills[17]);
    res.charms.level = conv(skills[18]);
    res.summonings.level = conv(skills[19]);
    res.necromancy.level = conv(skills[20]);
    res.translocations.level = conv(skills[21]);
    res.transmutations.level = conv(skills[22]);
    res["fire magic"].level = conv(skills[23]);
    res["ice magic"].level = conv(skills[24]);
    res["air magic"].level = conv(skills[25]);
    res["earth magic"].level = conv(skills[26]);
    res["poison magic"].level = conv(skills[27]);

    res.invocations.level = conv(skills[28]);
    res.evocations.level = conv(skills[29]);
    res.stealth.level = conv(skills[30]);

    return res
  }

  constructor() { }
}
