import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CfParserService {

  //the weaponlist is a property to share, but the profile
  // its returned because it is bugging with the profile service on the profile page...

  private weaponListSource = new BehaviorSubject([]);
  private profileSource = new BehaviorSubject({});
  weaponList = this.weaponListSource.asObservable();
  profile = this.profileSource.asObservable();

  parseCharacterFile(txt) {
    var profile = {xl:1}

    var maXl= /XL:\s+(\d+)/.exec(txt);
    var maStr= /Str:\s+(\d+)/.exec(txt);
    var maInt= /Int:\s+(\d+)/.exec(txt);
    var maDex= /Dex:\s+(\d+)/.exec(txt);

    profile['xl']  = parseInt(maXl[1])
    profile['str']  = parseInt(maStr[1])
    profile['int']  = parseInt(maInt[1])
    profile['dex']  = parseInt(maDex[1])


    // Find weapons first
    var re1 = /Hand Weapons.+(?:Missiles|Armour|Jewellery|Wands|Scrolls|Potions|Comestibles|Skills:)/
    var maHandWeapons= re1.exec(txt);
    if (re1.test(txt)) {
      var inventory  = maHandWeapons[0]
      var weapons = inventory.split(/[a-zA-Z] - (?:a|the)/)
      var weaponList  = new Array();
      for (var line=0; line < weapons.length; line +=1) {
        var found1 = weapons[line]
        var wtRe= "(dire flail|shortbow|eveningstar|great mace|dagger|flail|hunting sling|falchion|club)"
        var retype = new RegExp("(\\+|-)(\\d+)\\s+" + wtRe)

        if (retype.test(weapons[line])) {
          var maType = retype.exec(weapons[line])
          var maBrand = /(?:freezing|flaming|holy wrath|protection|piercing|speed|vamp)/.exec(weapons[line])

          weaponList.push({name: maType[3], slaying: maType[1] + maType[2], brand: maBrand[0]})
        }
      }
      this.weaponListSource.next(weaponList)

    }

    return profile
  }

  constructor(
  ) { }
}
