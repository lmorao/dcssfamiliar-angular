import { Component, OnInit } from '@angular/core';


import { CfParserService } from '../../core/services/cf-parser.service'

import { SkillsService } from '../../core/services/skills.service'
import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import { SelectedArmourService } from '../../core/services/selected-armour.service'
import { WeaponListService } from '../../core/services/weapon-list.service'
import { ProfileService } from '../../core/services/profile.service'
import { ShareUrlService } from 'src/app/core/services/share-url.service';
import { EnemyListService } from '../../core/services/enemy-list.service'
import { SpellListService } from '../../core/services/spell-list.service'
import { spell_db } from 'src/app/spell_db';

import {environment} from '../../../environments/environment';



@Component({
  selector: 'app-paste-character',
  templateUrl: './paste-character.component.html',
  styleUrls: ['./paste-character.component.sass']
})
export class PasteCharacterComponent implements OnInit {

  model = {name : ""}

  tryParser () {
    var skills = this.parserService.parseSkills(this.model.name)
    var weaponsArray = this.parserService.parseWeapons(this.model.name)
    var profile = this.parserService.parseProfile(this.model.name)
    var enemyList = this.parserService.parseEnemies(this.model.name)
    var armour = this.parserService.parseArmour(this.model.name)
    var shield = this.parserService.parseShield(this.model.name)
    var spellList3 = this.parserService.parseSpells(this.model.name)[0]
    var spellList4 = this.parserService.parseSpells(this.model.name)[1]
    var spellList1 = new Array()
    var spellList2 = new Array()
    for (var i=0;i < spellList3.length; i++) {
      var result = Object.keys(spell_db) .filter(key => {
        if (spellList3[i].length>19) {
          return spell_db[key].display.includes(spellList3[i])
        } else {
          return spell_db[key].display ==spellList3[i]
        }
      })
      if (result[0] == undefined) {
        spellList1.push('SPELL_NO_SPELL')
      } else {
        spellList1.push(result[0])
      }
    }
    //var url = this.shareUrlService.createUrl(profile, skills, weaponsArray[0], weaponsArray[1])
    //window.location.href = environment.serverUrl+ "/#/parse/" + url
    this.skillsService.updateSkills(skills)
    this.weaponListService.updateWeaponList(weaponsArray[0])
    this.selectedWeaponService.selectWeapon(weaponsArray[1])
    this.selectedArmourService.selectArmour(armour)
    this.selectedArmourService.selectShield(shield)
    this.profileService.updateProfile(profile)
    this.enemyListService.updateEnemyList(enemyList)
    this.spellListService.updateSpellList1(spellList1)
    //this.spellListService.updateSpellList2(spellList2)


    this.model.name = ""
  }
  constructor(
    private parserService: CfParserService,
    private skillsService: SkillsService,
    private selectedWeaponService: SelectedWeaponService,
    private selectedArmourService: SelectedArmourService,
    private weaponListService: WeaponListService,
    private profileService: ProfileService,
    private enemyListService: EnemyListService,
    private spellListService: SpellListService,

    private shareUrlService: ShareUrlService,
  ) { }

  ngOnInit() {
  }

}
