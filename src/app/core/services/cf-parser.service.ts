import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { unrands } from '../../../assets/unrands';
import { SelectedWeaponService } from './selected-weapon.service';
import { Skills } from '../../shared/models/skills.model'
import { Character } from '../../shared/models/character.model'
import { monsters } from '../../monsters'

import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CfParserService {

  //the weaponlist is a property to share, but the profile
  // its returned because it is bugging with the profile service on the profile page...

  private weaponListSource = new BehaviorSubject([{"name":"unarmed", "slaying":"+0", brand:""}]);
  private profileSource = new BehaviorSubject(new Character());

  weaponList = this.weaponListSource.asObservable();
  profile = this.profileSource.asObservable();

  parseProfile(txt) {
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

    var charReg = /(\S+)\s+the\s+(\S+\s*\S*\s*\S*\s*\S*)\s+\((\S+)\s*(\S*\s*\S*)\)\s+Turns/
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
    return profile

  }
  auxChecks = function (mons) {
    var mon
    mon =  mons.replace(/ \(\S+\)/,"")
    var c1 = / \d+ (.*)/
    var c2 = / (?:an|a|\d+) (.*)/
    var c4 = / (.*)/
    var res
    if (c1.test(mon)) {
      environment.debug("\"" + c1.exec(mon)[1] + "\"")
      res = monsters[c1.exec(mon)[1].slice(0, -1)]
    }
    else if (c2.test(mon)) {
      environment.debug("\"" + c2.exec(mon)[1] + "\"")
      res = monsters[c2.exec(mon)[1]]
    }
    else if (c4.test(mon)) {
      environment.debug("\"" + c4.exec(mon)[1] + "\"")
      res = monsters[c4.exec(mon)[1].toLowerCase()]
    }
    return res
      }

  parseEnemies = function (txt) {
    var caseRe = /There (?:were|are) no monsters in sight/
    if (caseRe.test(txt)) {
      console.log('no monsters found')
      return [monsters['orc'], monsters['gnoll'], monsters['crimson imp'], monsters['centaur'], monsters['yak'],monsters['grinder']]
    }
    var res = []
    var caseRe = /You (?:can|could) see(.*?)\.\s*Vanquished Creatures/
    if (caseRe.test(txt)) {
      var m1 = caseRe.exec(txt)[1]
      var mons = m1.split(",")

      for (var i=0; i <mons.length ; i +=1) {
        environment.debug(mons[i])

        if (!/ and /.test(mons[i])) {
          var mon0 = this.auxChecks(mons[i])
          if (mon0 == undefined) {mon0 = monsters.butterfly}
          res.push(mon0)
        } else {
          var pre1 = mons[i].split(" and")[0]
          var pre2 = mons[i].split(" and")[1]
          var mon1 = this.auxChecks(pre1)
          var mon2 = this.auxChecks(pre2)
          if (mon1 == undefined) {mon1 = monsters.butterfly}
          if (mon2 == undefined) {mon2 = monsters.butterfly}
          res.push(mon1)
          res.push(mon2)
        }
      }
    } else {
      console.log("Error, should not come here")
    }
    return res

  }
  parseWeapons = function (txt) {
    // Find weapons first
    var re1 = /Hand Weapons.+?(?:Missiles|Armour|Jewellery|Wands|Scrolls|Potions|Comestibles|Skills:)/
    var maHandWeapons= re1.exec(txt);
    var weaponList  = new Array({"name":"unarmed", "slaying":"+0", brand:""});
    var cWeapon = {name:"unarmed","slaying":"+0",brand:""}
    if (re1.test(txt)) {
      var inventory  = maHandWeapons[0]
      var weapons = inventory.split(/[a-zA-Z] - (?:a|the)/)
      for (var line=0; line < weapons.length; line +=1) {
        var found1 = weapons[line]
        console.log(weapons[line])
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

        if (retype.test(weapons[line])) {
          var maType = retype.exec(weapons[line])
          var brandRe = /(?:freezing|flaming|distortion|pain|draining|holy wrath|speed|vamp|electrocution|freeze|flame|elec|holy|protection|crushing|chopping|piercing|slashing|slicing|crush|chop|pierce|slash|slice)/
          if (brandRe.test(weapons[line]))
          {
            var maBrand = brandRe.exec(weapons[line])[0]
            console.log(maBrand)
            if (maBrand == "freeze") {maBrand = "freezing"}
            if (maBrand == "flame") {maBrand = "flaming"}
            if (maBrand == "elec") {maBrand = "electrocution"}
            if (maBrand == "crushing") {maBrand = "vorpal"}
            if (maBrand == "chopping") {maBrand = "vorpal"}
            if (maBrand == "piercing") {maBrand = "vorpal"}
            if (maBrand == "slashing") {maBrand = "vorpal"}
            if (maBrand == "slicing" ) {maBrand = "vorpal"}
            if (maBrand == "crush") {maBrand = "vorpal"}
            if (maBrand == "chop") {maBrand = "vorpal"}
            if (maBrand == "pierce") {maBrand = "vorpal"}
            if (maBrand == "slash") {maBrand = "vorpal"}
            if (maBrand == "slice" ) {maBrand = "vorpal"}
            console.log(maBrand)


          } else {maBrand = ""}
          if (currentWeapon.test(weapons[line])) {
            cWeapon = {name: maType[3], slaying: maType[1] + maType[2], brand: maBrand}
          }

          weaponList.push({name: maType[3], slaying: maType[1] + maType[2], brand: maBrand})
        }
      }

    }
    return [weaponList, cWeapon]
  }
  _checkCrossTraining = function (skillLevel, skill, skills) {
    if (skillLevel == 0) {
      if (skill == "axes") 
      { "polearms" + "maces"}
      if (skill == "staves") 
      { "polearms" + "maces"}
      if (skill == "maces") 
      { "axes" + "staves"}
      if (skill == "polearms") 
      { "axes" + "staves"}
      if (skill == "long blades") 
      { "short blades"}
      if (skill == "throwing") 
      { "slings"}
      if (skill == "slings") 
      { "throwing"}
    }
  }
  _getSkill = function (display, txt) {
    //var temp =  /Level (\d+)\.?\d{0,2}\S*\s+Maces/.exec(txt)
    var temp =  new RegExp("Level (\\d+)\\.?\\d{0,2}\\(?(\\d+)?\\.?\\d*\\)?\\s+" + display, "g").exec(txt)
    var pos
    console.log(temp)
    if (temp[2] != undefined) { pos = 2} else {pos = 1}
    return parseInt(temp[pos])
  }
  parseSkills = function (txt) {
    //skills
    var skillsTemp = new Skills(0, 0);
    var re2 = /Skills:.*(spell level.? left.|You cannot memorise any spells.|You couldn't memorise any spells.)/
    if (re2.test(txt)) {
      var skillsText= re2.exec(txt)[0];
      if (/Fighting/.test(skillsText)) {skillsTemp['fighting']['level'] = this._getSkill("Fighting",skillsText)}
      if (/Short/.test(skillsText)) {skillsTemp['short blades']['level'] = this._getSkill("Short",skillsText)}
      if (/Long/.test(skillsText)) {skillsTemp['long blades']['level'] = this._getSkill("Long",skillsText)}
      if (/Maces/.test(skillsText)) {skillsTemp['maces']['level'] = this._getSkill("Maces",skillsText)}
      if (/Axes/.test(skillsText)) {skillsTemp['axes']['level'] = this._getSkill("Axes",skillsText)}
      if (/Polearms/.test(skillsText)) {skillsTemp['polearms']['level'] = this._getSkill("Polearms",skillsText)}
      if (/Staves/.test(skillsText)) {skillsTemp['staves']['level'] = this._getSkill("Staves",skillsText)}
      if (/Unarmed/.test(skillsText)) {skillsTemp['unarmed']['level'] = this._getSkill("Unarmed",skillsText)}
      if (/Bows/.test(skillsText)) {skillsTemp['bows']['level'] = this._getSkill("Bows",skillsText)}
      if (/Crossbows/.test(skillsText)) {skillsTemp['crossbows']['level'] = this._getSkill("Crossbows",skillsText)}
      if (/Throwing/.test(skillsText)) {skillsTemp['throwing']['level'] = this._getSkill("Throwing",skillsText)}
      if (/Slings/.test(skillsText)) {skillsTemp['slings']['level'] = this._getSkill("Slings",skillsText)}
      if (/Spellcasting/.test(skillsText)) {skillsTemp['spellcasting']['level'] = this._getSkill("Spellcasting",skillsText)}

      if (/Conjurations/.test(skillsText)) {skillsTemp['conjurations']['level'] = this._getSkill("Conjurations",skillsText)}
      if (/Hexes/.test(skillsText)) {skillsTemp['hexes']['level'] = this._getSkill("Hexes",skillsText)}
      if (/Charms/.test(skillsText)) {skillsTemp['charms']['level'] = this._getSkill("Charms",skillsText)}
      if (/Summonings/.test(skillsText)) {skillsTemp['summonings']['level'] = this._getSkill("Summonings",skillsText)}
      if (/Necromancy/.test(skillsText)) {skillsTemp['necromancy']['level'] = this._getSkill("Necromancy",skillsText)}
      if (/Translocations/.test(skillsText)) {skillsTemp['translocations']['level'] = this._getSkill("Translocations",skillsText)}
      if (/Transmutations/.test(skillsText)) {skillsTemp['transmutations']['level'] = this._getSkill("Transmutations",skillsText)}
      if (/Fire Magic/.test(skillsText)) {skillsTemp['fire magic']['level'] = this._getSkill("Fire Magic",skillsText)}
      if (/Ice Magic/.test(skillsText)) {skillsTemp['ice magic']['level'] = this._getSkill("Ice Magic",skillsText)}
      if (/Air Magic/.test(skillsText)) {skillsTemp['air magic']['level'] = this._getSkill("Air Magic",skillsText)}
      if (/Earth Magic/.test(skillsText)) {skillsTemp['earth magic']['level'] = this._getSkill("Earth Magic",skillsText)}
      if (/Poison Magic/.test(skillsText)) {skillsTemp['poison magic']['level'] = this._getSkill("Poison Magic",skillsText)}


    }
    return skillsTemp
  }
  parseSpells = function (txt) {

    var spellsTemp1 = new Array()
    var spellsTemp2 = new Array()
    var re2 = /You know the following spells:(.*)Dungeon Overview and Level Annotations/
    var re3 = /\S - (\S.*\S)\s+(?:Conj|Chrm|Hex|Tloc|Tmut|Pois|Air|Fire|Ice|Summ|Eart)/
    var re4 = /(\S.*\S)\s+(?:Conj|Chrm|Hex|Tloc|Tmut|Pois|Air|Fire|Ice|Summ|Eart)/
    if (re2.test(txt)){
      var spellsT = re2.exec(txt)[0]
      var a = spellsT.match(/(\S - )?((?:\S+ +)?\S+ +)?\S+ +\S+\s+\S+\s+\d+.\s+\d+\s+\S+/g)
      //console.log(a)

      for (var i=0; i <= a.length ; i++) {
        if (re3.test(a[i])) {
          spellsTemp1.push(re3.exec(a[i])[1])
          //console.log(re3.exec(a[i])[1])
        }
        else if (re4.test(a[i])) 
        {
          spellsTemp2.push(re4.exec(a[i])[1])
          //console.log(re4.exec(a[i])[1])
        }

      }

    }
    return new Array(spellsTemp1,spellsTemp2)

  }

  constructor(
    private selectedWeaponService: SelectedWeaponService,
  ) { }
}
