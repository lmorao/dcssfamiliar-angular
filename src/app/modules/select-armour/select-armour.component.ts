import { Component, OnInit } from '@angular/core';
import { armour_types, armour_types_list, shield_types_list } from 'src/app/weapon_types';
import { encumbrance_penalty, adjusted_shield_penalty } from 'src/app/skill_functions';
import { SkillsService } from '../../core/services/skills.service';
import { ProfileService } from '../../core/services/profile.service';
import { Skills } from '../../shared/models/skills.model';
import { Character } from '../../shared/models/character.model';

@Component({
  selector: 'app-select-armour',
  templateUrl: './select-armour.component.html',
  styleUrls: ['./select-armour.component.scss']
})
export class SelectArmourComponent implements OnInit {
  selectedArmour = {name: "robe", encumbrance:0}
  selectedShield = {name: "no shield", encumbrance:0}
  armourList = armour_types_list
  shieldList = shield_types_list
  encumbrance = 0
  shieldPen = 0
  skills = new Skills
  profile = new Character

  selectArmour = function (name) {
    this.selectedArmour = armour_types[name]
    this.encumbrance = encumbrance_penalty(this.selectedArmour, 100, this.skills['armour']['level'], this.profile.str)
  }
  selectShield = function (name) {
    this.selectedShield = armour_types[name]
    this.shieldPen = adjusted_shield_penalty(this.selectedShield, 100, this.skills['shields']['level'])
  }
  constructor(
    private skillsService : SkillsService,
    private profileService : ProfileService,
  ) { }

  ngOnInit() {
    this.skillsService.skills.subscribe (skills => {this.skills = skills;
      this.selectArmour(this.selectedArmour.name)
      this.selectShield(this.selectedShield.name)
    })
    this.profileService.profile.subscribe (profile => {this.profile = profile
      this.selectArmour(this.selectedArmour.name)
      this.selectShield(this.selectedShield.name)
    })
  }

}
