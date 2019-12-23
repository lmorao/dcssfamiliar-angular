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
    if (n >53) {console.log("TODO number > 27")}
  }
  routeid = ""
  createUrl = function (profile, skills,  weapons) {
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

    console.log(url)
    return url
  }

  constructor() { }
}
