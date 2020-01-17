import { Component, OnInit } from '@angular/core';
import { armour_types, armour_types_list,armour_types_list_dragon , shield_types_list } from 'src/app/weapon_types';
import { encumbrance_penalty, adjusted_shield_penalty } from 'src/app/skill_functions';
import { SkillsService } from '../../core/services/skills.service';
import { ProfileService } from '../../core/services/profile.service';
import { Skills } from '../../shared/models/skills.model';
import { Character } from '../../shared/models/character.model';
import { SelectedArmourService } from '../../core/services/selected-armour.service';

@Component({
  selector: 'app-select-armour',
  templateUrl: './select-armour.component.html',
  styleUrls: ['./select-armour.component.scss']
})
export class SelectArmourComponent implements OnInit {
  selectedArmour = {name: "robe", encumbrance:0, img:"robe"}
  selectedShield = {name: "no shield", encumbrance:0, img:"no shield"}
  armourList = armour_types_list
  dragonArmourList = armour_types_list_dragon
  shieldList = shield_types_list
  armour_types = armour_types
  encumbrance = 0
  shieldPen = 0
  skills = new Skills
  profile = new Character

  selectArmour = function (name) {
    this.selectedArmour = armour_types[name]
    this.encumbrance = encumbrance_penalty(this.selectedArmour, 100, this.skills['armour']['level'], this.profile.str)*19/100
    this.selectedArmourService.selectArmour(this.selectedArmour)
  }
  selectShield = function (name) {
    this.selectedShield = armour_types[name]
    this.shieldPen = adjusted_shield_penalty(this.selectedShield, 100, this.skills['shields']['level'])*19/100
    this.selectedArmourService.selectShield(this.selectedShield)
  }
  constructor(
    private skillsService : SkillsService,
    private profileService : ProfileService,
    private selectedArmourService : SelectedArmourService,
  ) { }

  ngOnInit() {
    this.selectArmour(this.selectedArmour.name)
    this.selectShield(this.selectedShield.name)
    this.skillsService.skills.subscribe (skills => {this.skills = skills;
    })
    this.profileService.profile.subscribe (profile => {this.profile = profile
    })
    this.selectedArmourService.armour.subscribe (armour => {this.selectedArmour = armour
    })
    this.selectedArmourService.shield.subscribe (shield => {this.selectedShield = shield
    })
  }

}
