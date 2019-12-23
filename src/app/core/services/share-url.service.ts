import { Injectable } from '@angular/core';
import { SelectedWeaponService } from './selected-weapon.service';
import { Skills } from '../../shared/models/skills.model'
import { Character } from '../../shared/models/character.model'

@Injectable({
  providedIn: 'root'
})
export class ShareUrlService {

  convertNumberToLeter = function (n) {
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
    if (n >27) {console.log("TODO number > 27")}
  }
  routeid = ""
  createUrl = function (profile,skills,  weapons) {
    var url = ""
    var conv = this.convertNumberToLeter
    url += conv(profile.xl)
    url += conv(profile.str);
    url += conv(profile.int);
    url += conv(profile.dex);
    url += conv(profile.name);
    url += conv(profile.title);
    url += conv(profile.species);
    url += conv(profile.slaying);

    url += conv(skills.fighting );
    url += conv(skills["short blades"]);
    url += conv(skills["long blades"]);
    url += conv(skills.maces);
    url += conv(skills.axes);
    url += conv(skills.polearms);
    url += conv(skills.staves);
    url += conv(skills.unarmed);
    url += conv(skills.bows);
    url += conv(skills.crossbows);
    url += conv(skills.throwing);
    url += conv(skills.slings);


    url += conv(skills.armour);
    url += conv(skills.dodging);
    url += conv(skills.shields);

    url += conv(skills.spellcasting);
    url += conv(skills.conjurations);
    url += conv(skills.hexes);
    url += conv(skills.charms);
    url += conv(skills.summonings);
    url += conv(skills.necromancy);
    url += conv(skills.translocations);
    url += conv(skills.transmutations);
    url += conv(skills["fire magic"] );
    url += conv(skills["ice magic"] );
    url += conv(skills["air magic"] );
    url += conv(skills["earth magic"] );
    url += conv(skills["poison magic"] );

    url += conv(skills.invocations);
    url += conv(skills.evocations);
    url += conv(skills.stealth);

    console.log(url)
    return url
  }

  constructor() { }
}
