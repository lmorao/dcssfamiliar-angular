import { Component, OnInit } from '@angular/core';


import { CfParserService } from '../../core/services/cf-parser.service'

import { SkillsService } from '../../core/services/skills.service'
import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import { WeaponListService } from '../../core/services/weapon-list.service'
import { ProfileService } from '../../core/services/profile.service'
import { ShareUrlService } from 'src/app/core/services/share-url.service';


@Component({
  selector: 'app-paste-character',
  templateUrl: './paste-character.component.html',
  styleUrls: ['./paste-character.component.sass']
})
export class PasteCharacterComponent implements OnInit {

  model = {name : ""}
  tryParser () {
    var skills = this.parserService.parseSkills(this.model.name)
    //this.skillsService.updateSkills(skills)
    
    var weaponsArray = this.parserService.parseWeapons(this.model.name)
    //this.weaponListService.updateWeaponList(weaponsArray[0])
    //this.selectedWeaponService.selectWeapon(weaponsArray[1])

    var profile = this.parserService.parseProfile(this.model.name)
    //this.profileService.updateProfile(profile)

    var url = this.shareUrlService.createUrl(profile, skills, weaponsArray[0], weaponsArray[1])
    //console.log(url)
    window.location.href = "http://www.dcssfamiliar.com/#/parse/" + url
    //window.location.href = "http://localhost:4200/#/parse/" + url

    this.model.name = ""
  }
  constructor(
    private parserService: CfParserService,
    //private skillsService: SkillsService,
    //private selectedWeaponService: SelectedWeaponService,
    //private weaponListService: WeaponListService,
    //private profileService: ProfileService,

    private shareUrlService: ShareUrlService,
  ) { }

  ngOnInit() {
  }

}
