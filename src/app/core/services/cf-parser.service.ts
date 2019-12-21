import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectedWeaponService } from './selected-weapon.service';
import { unrands } from '../../../assets/unrands';
import { Skills } from '../../shared/models/skills.model'
import { Character } from '../../shared/models/character.model'


@Injectable({
  providedIn: 'root'
})
export class CfParserService {

  //the weaponlist is a property to share, but the profile
  // its returned because it is bugging with the profile service on the profile page...

  private weaponListSource = new BehaviorSubject([{"name":"unarmed", "slaying":"+0", brand:""}]);
  private profileSource = new BehaviorSubject(new Character());
  private skillsSource = new BehaviorSubject( new Skills());

  weaponList = this.weaponListSource.asObservable();
  profile = this.profileSource.asObservable();
  skills = this.skillsSource.asObservable();

  parseCharacterFile(txt) {
    //profile
    var profile = new Character()

    var maXl= /XL:\s+(\d+)/.exec(txt);
    var maStr= /Str:\s+(\d+)/.exec(txt);
    var maInt= /Int:\s+(\d+)/.exec(txt);
    var maDex= /Dex:\s+(\d+)/.exec(txt);

    profile['xl']  = parseInt(maXl[1])
    profile['str']  = parseInt(maStr[1])
    profile['int']  = parseInt(maInt[1])
    profile['dex']  = parseInt(maDex[1])

    var charReg = /(\S+)\s+the\s+(\S+\s*\S*\s*\S*\s*\S*)\s+\((\S+)\s+(\S+\s*\S*)\)\s+Turns/
    if (charReg.test(txt)) {
      var charname= charReg.exec(txt);
      profile['name']  = charname[1]
      profile['title']  = charname[2]
      profile['species']  = charname[3]
      profile['background']  = charname[4]
      profile['mutations']  = charname[4]
    }
    var re0 = /.*Inventory:/
    if (re0.test(txt)) {
      var temp0 = re0.exec(txt)[0];
      var words = temp0.split(/ /)
      var slaying = 0
      for (var line=0; line < words.length; line +=1) {
        var slayRe = /Slay[\+-](\d+)/
        if (slayRe.test(words[line])) {
          slaying = parseInt(slayRe.exec(words[line])[1]) + slaying
        }
      }
      var ring1 = /\+(\d+) ring of slaying/
      if (ring1.test(temp0)) { slaying = slaying + parseInt(ring1.exec(temp0)[1])}
      profile['slaying'] = slaying
    }
    this.profileSource.next(profile)

    // Find weapons first
    var re1 = /Hand Weapons.+(?:Missiles|Armour|Jewellery|Wands|Scrolls|Potions|Comestibles|Skills:)/
    var maHandWeapons= re1.exec(txt);
    if (re1.test(txt)) {
      var inventory  = maHandWeapons[0]
      var weapons = inventory.split(/[a-zA-Z] - (?:a|the)/)
      var weaponList  = new Array({"name":"unarmed", "slaying":"+0", brand:""});
      for (var line=0; line < weapons.length; line +=1) {
        var found1 = weapons[line]
        var wtRe= "("
        wtRe += "dagger|quick blade|short sword|rapier"
        wtRe += "|falchion|long sword|scimitar|demon blade|eudemon blade|double sword|great sword|triple sword"
        wtRe += "|hand axe|war axe|broad axe|battleaxe|executioner's axe"
        wtRe += "|whip|club|mace|flail|morningstar|demon whip|sacred scourge|dire flail|eveningstar|great mace|giant club|giant spiked club"
        wtRe += "|spear|trident|halberd|scythe|demon trident|trishula|glaive|bardiche"
        wtRe += "|staff|quarterstaff|lajatang"
        wtRe += "|hunting sling|fustibalus"
        wtRe += "|shortbow|longbow"
        wtRe += "|hand crossbow|arbalest|triple crossbow"
        wtRe += ")"
        var retype = new RegExp("(\\+|-)(\\d+)\\s+(?:vampiric\\s+)?" + wtRe)
        var currentWeapon= /\(weapon\)/
        var cWeapon = {name:"unarmed","slaying":"+0",brand:""}

        if (retype.test(weapons[line])) {
          var maType = retype.exec(weapons[line])
          var brandRe = /(?:freezing|flaming|holy wrath|speed|vamp|electrocution|freeze|flame|elec|holy|protection|crushing|chopping|piercing|slashing|slicing)/
          if (brandRe.test(weapons[line]))
          {
            var maBrand = brandRe.exec(weapons[line])[0]
            if (maBrand == "freeze") {maBrand = "freezing"}
            if (maBrand == "flame") {maBrand = "flaming"}
            if (maBrand == "elec") {maBrand = "electrocution"}
            if (maBrand == "crushing") {maBrand = "vorpal"}
            if (maBrand == "chopping") {maBrand = "vorpal"}
            if (maBrand == "piercing") {maBrand = "vorpal"}
            if (maBrand == "slashing") {maBrand = "vorpal"}
            if (maBrand == "slicing" ) {maBrand = "vorpal"}

          } else {maBrand = ""}
          if (currentWeapon.test(weapons[line])) {
            cWeapon = {name: maType[3], slaying: maType[1] + maType[2], brand: maBrand}
            this.selectedWeaponService.selectWeapon(cWeapon)
          }

          weaponList.push({name: maType[3], slaying: maType[1] + maType[2], brand: maBrand})
        }
      }
      this.weaponListSource.next(weaponList)

    }
    //skills
    var skillsTemp = new Skills();
    var re2 = /Skills:.*(spell level.? left.|You cannot memorise any spells.)/
    if (re2.test(txt)) {
      var skillsText= re2.exec(txt)[0];
      if (/Fighting/.test(skillsText)) {skillsTemp['fighting']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Fighting/.exec(skillsText)[1])}
      if (/Short/.test(skillsText)) {skillsTemp['short blades']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Short/.exec(skillsText)[1])}
      if (/Long/.test(skillsText)) {skillsTemp['long blades']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Long/.exec(skillsText)[1])}
      if (/Maces/.test(skillsText)) {skillsTemp['maces']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Maces/.exec(skillsText)[1])}
      if (/Axes/.test(skillsText)) {skillsTemp['axes']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Axes/.exec(skillsText)[1])}
      if (/Polearms/.test(skillsText)) {skillsTemp['polearms']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Polearms/.exec(skillsText)[1])}
      if (/Staves/.test(skillsText)) {skillsTemp['staves']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Staves/.exec(skillsText)[1])}
      if (/Unarmed/.test(skillsText)) {skillsTemp['unarmed']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Unarmed/.exec(skillsText)[1])}
      if (/Bows/.test(skillsText)) {skillsTemp['bows']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Bows/.exec(skillsText)[1])}
      if (/Crossbows/.test(skillsText)) {skillsTemp['crossbows']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Crossbows/.exec(skillsText)[1])}
      if (/Throwing/.test(skillsText)) {skillsTemp['throwing']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Throwing/.exec(skillsText)[1])}
      if (/Slings/.test(skillsText)) {skillsTemp['slings']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Slings/.exec(skillsText)[1])}
      if (/Necromancy/.test(skillsText)) {skillsTemp['necromancy']['level'] = parseInt(/Level (\d+)\.?\d{0,2}\S*\s+Necromancy/.exec(skillsText)[1])}
      this.skillsSource.next(skillsTemp)
    }

  }

  constructor(
    private selectedWeaponService: SelectedWeaponService,
  ) { }
}
