import { Component, OnInit } from '@angular/core';


import { CfParserService } from '../../core/services/cf-parser.service'

import { SkillsService } from '../../core/services/skills.service'
import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import { WeaponListService } from '../../core/services/weapon-list.service'
import { ProfileService } from '../../core/services/profile.service'
import { ShareUrlService } from 'src/app/core/services/share-url.service';
import { EnemyListService } from '../../core/services/enemy-list.service'

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
    //var url = this.shareUrlService.createUrl(profile, skills, weaponsArray[0], weaponsArray[1])
    //window.location.href = environment.serverUrl+ "/#/parse/" + url
    this.skillsService.updateSkills(skills)
    this.weaponListService.updateWeaponList(weaponsArray[0])
    this.selectedWeaponService.selectWeapon(weaponsArray[1])
    this.profileService.updateProfile(profile)
    this.enemyListService.updateEnemyList(enemyList)

    this.model.name = ""
  }
  constructor(
    private parserService: CfParserService,
    private skillsService: SkillsService,
    private selectedWeaponService: SelectedWeaponService,
    private weaponListService: WeaponListService,
    private profileService: ProfileService,
    private enemyListService: EnemyListService,

    private shareUrlService: ShareUrlService,
  ) { }

  ngOnInit() {
  }

}
