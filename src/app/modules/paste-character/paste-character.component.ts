import { Component, OnInit } from '@angular/core';
import { CfParserService } from '../../core/services/cf-parser.service'

import { SkillsService } from '../../core/services/skills.service'
import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import { WeaponListService } from '../../core/services/weapon-list.service'
import { ProfileService } from '../../core/services/profile.service'

@Component({
  selector: 'app-paste-character',
  templateUrl: './paste-character.component.html',
  styleUrls: ['./paste-character.component.sass']
})
export class PasteCharacterComponent implements OnInit {

  model = {name : ""}
  tryParser () {
    var skillsTemp = this.parserService.parseSkills(this.model.name)
    this.skillsService.updateSkills(skillsTemp)
    
    var swTempArray = this.parserService.parseWeapons(this.model.name)
    this.weaponListService.updateWeaponList(swTempArray[0])
    this.selectedWeaponService.selectWeapon(swTempArray[1])

    var profile = this.parserService.parseProfile(this.model.name)
    this.profileService.updateProfile(profile)

    this.model.name = ""
  }
  constructor(
    private parserService: CfParserService,
    private skillsService: SkillsService,
    private selectedWeaponService: SelectedWeaponService,
    private weaponListService: WeaponListService,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
  }

}
