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
  private skillsSource = new BehaviorSubject(
    {
      fighting: { level: 0, display: "Fighting"},
      "short blades": { level: 0, display: "Short Blades"},
      "long blades":{ level: 0,display: "Long Blades"},
      maces:{ level: 0,display: "Maces & Flails"},
      axes:{ level: 0,display: "Axes"},
      polearms:{ level: 0,display: "Polearms"},
      staves:{ level: 0,display: "Staves"},
      unarmed:{ level: 0,display: "Unarmed"},
      slings:{ level: 0,display: "Slings"},
      }
    );
  weaponList = this.weaponListSource.asObservable();
  profile = this.profileSource.asObservable();
  skills = this.skillsSource.asObservable();

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
    var skillsTemp = {
      fighting: { level: 0, display: "Fighting"},
      "short blades": { level: 0, display: "Short Blades"},
      "long blades":{ level: 0,display: "Long Blades"},
      maces:{ level: 0,display: "Maces & Flails"},
      axes:{ level: 0,display: "Axes"},
      polearms:{ level: 0,display: "Polearms"},
      staves:{ level: 0,display: "Staves"},
      unarmed:{ level: 0,display: "Unarmed"},
      slings:{ level: 0,display: "Slings"},
      }
    var re2 = /Skills:.*(spell level.? left.|You cannot memorise any spells.)/
    if (re2.test(txt)) {
      var skillsText= re2.exec(txt)[0];
      if (/Fighting/.test(skillsText)) {skillsTemp['fighting']['level'] = parseInt(/Level (\d+)\.\d+\S*\s+Fighting/.exec(skillsText)[1])}
      if (/Short/.test(skillsText)) {skillsTemp['short blades']['level'] = parseInt(/Level (\d+)\.\d+\S*\s+Short/.exec(skillsText)[1])}
      if (/Long/.test(skillsText)) {skillsTemp['long blades']['level'] = parseInt(/Level (\d+)\.\d+\S*\s+Long/.exec(skillsText)[1])}
      if (/Maces/.test(skillsText)) {skillsTemp['maces']['level'] = parseInt(/Level (\d+)\.\d+\S*\s+Maces/.exec(skillsText)[1])}
      if (/Axes/.test(skillsText)) {skillsTemp['axes']['level'] = parseInt(/Level (\d+)\.\d+\S*\s+Axes/.exec(skillsText)[1])}
      if (/Polearms/.test(skillsText)) {skillsTemp['polearms']['level'] = parseInt(/Level (\d+)\.\d+\S*\s+Polearms/.exec(skillsText)[1])}
      if (/Staves/.test(skillsText)) {skillsTemp['staves']['level'] = parseInt(/Level (\d+)\.\d+\S*\s+Staves/.exec(skillsText)[1])}
      if (/Unarmed/.test(skillsText)) {skillsTemp['unarmed']['level'] = parseInt(/Level (\d+)\.\d+\S*\s+Unarmed/.exec(skillsText)[1])}
      this.skillsSource.next(skillsTemp)
    }

    return profile
  }

  constructor(
  ) { }
}
