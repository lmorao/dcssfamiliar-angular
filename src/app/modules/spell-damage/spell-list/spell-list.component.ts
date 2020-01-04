import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../../core/services/skills.service'
import { ProfileService } from '../../../core/services/profile.service'
import { Skills } from '../../../shared/models/skills.model'
import { Character } from '../../../shared/models/character.model'

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {
  skills = new Skills()
  profile = new Character()
  diceAvg = function (number) {
    return (number -1) /2
  }
  diceMax = function (number) {
    return number 
  }
  power = function (spell, enhancers = 0, brilliance = 0, wildMagic=0, subDueMagic = 0) {
    //brilliance is either 0 or 3
    var mut = 1
    var bMut = 1
    var ds = 1
    var spellcasting = this.skills['spellcasting']['level']
    var schools = this.skills[spell.type1]['level']
    if (spell.type2 != "") {
      schools += this.skills[spell.type2]['level']
    }
    if (enhancers >3) {enhancers = 3}
    var enh = Math.pow(1.5, enhancers)
    switch(wildMagic) {case 0: mut =  1;case 1: mut = 1.3; case 2: mut = 1.6; case 3: mut= 1.9}
    var raw_power = ((spellcasting/2) + 2* schools + brilliance) * enh * (this.profile.int/10) * mut * bMut * ds
    //step down could be another function

    var res = 50 * Math.log2(1 + raw_power/50)
    return res
  }
  spellList = [
    {display:"Foxfire", image: "fire/foxfire.png", type1:"conjurations" , type2:"fire magic", max_power: 40,

      "formula" : function (power, dice, max_power = 40) { if (power > max_power) {power = max_power}; return dice(3+power/3)},
  },
    {
      display:"Freeze", 
      image: "ice/freeze.png",
      type1:"ice magic", 
      type2: "" , 
      max_power: 25, 
      "formula" : function (power, dice, max_power = 25) { if (power > max_power) {power = max_power}; return dice(3+power/3)},
      damage_type: "cold",
      range: 1
    }, 
  ]
  targetSpell = function () {}

  constructor(
    private skillsService: SkillsService,
    private profileService: ProfileService,

  ) { }

  ngOnInit() {

    this.skillsService.skills.subscribe(skills => {
      this.skills = skills
    })
    this.profileService.profile.subscribe(profile => {
      this.profile  = profile
    })
  }

}
