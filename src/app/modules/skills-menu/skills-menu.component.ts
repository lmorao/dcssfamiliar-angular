import { Component, OnInit } from '@angular/core';
import { Skills } from '../../shared/models/skills.model'
import { SkillsService } from '../../core/services/skills.service'
import { CfParserService } from '../../core/services/cf-parser.service'
import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import { weapon_types } from '../../weapon_types'


@Component({
  selector: 'app-skills-menu',
  templateUrl: './skills-menu.component.html',
  styleUrls: ['./skills-menu.component.sass']
})
export class SkillsMenuComponent implements OnInit {
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
  // TODO: dont separate skills, but use attribute instead. easy to pass between components
  s_melee
  skills 
  s_melee_temp = ["fighting","short blades", "long blades", "maces", "axes", "polearms", "staves", "unarmed",
"slings"]
  wt = weapon_types
  selectedSkill = "unarmed"
  lessb = function (skill) {if (this.s_melee[skill]['level'] >0) {this.s_melee[skill]['level'] -=1}; this.skillsService.updateSkills(this.s_melee)}
  moreb = function (skill) {if (this.s_melee[skill]['level'] <27) {this.s_melee[skill]['level'] +=1}; this.skillsService.updateSkills(this.s_melee)}

  s_ranged = {
    bows:0,
    crossbows:0,
    throwing:0,
    slings:0,
  }

  s_defense = {
    armour:0,
    dodging:0,
    shields:0,
  }

  s_spells = {
    spellcasting:0,
    conjurations:0,
    hexes:0,
    charms:0,
    summonings:0,
    necromancy:0,
    translocations:0,
    transmutations:0,
    "fire magic":0,
    "ice magic":0,
    "air magic":0,
    "earth magic":0,
    "poison magic":0,
  }

  s_other = {
    invocations:0,
    evocations:0,
    stealth:0
  }
  constructor(
    private skillsService: SkillsService,
    private parserService: CfParserService,
    private selectedWeaponService: SelectedWeaponService,
  ) { }

  ngOnInit() {
    this.selectedWeaponService.weapon.subscribe(weapon => {
      console.log(this.wt[weapon.name]['category'])
      this.selectedSkill = this.wt[weapon.name]['category']
    })
    this.parserService.skills.subscribe(skills => { this.s_melee = skills; 
      this.skillsService.updateSkills(this.s_melee)
    })
    this.skillsService.skills.subscribe(skills => {
      this.s_melee = skills
    })
  }

}
