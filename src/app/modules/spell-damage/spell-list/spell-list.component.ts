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
  armour_penalty = 0
  diceAvg = function (number) {
    return (number -1) /2
  }
  diceMax = function (number) {
    return number 
  }
  power = function (spell, limited = true, enhancers = 0, brilliance = 0, wildMagic=0, subDueMagic = 0) {
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
    switch (true) {
      case (wildMagic == 0): mut =  1; break; case (wildMagic == 1): mut = 1.3; break; case (wildMagic == 2): mut = 1.6; break; case (wildMagic == 3): mut= 1.9; break;
    }
    var raw_power = ((spellcasting/2) + 2* schools + brilliance) * enh * (this.profile.int/10) * mut * bMut * ds
    //step down could be another function
    var res = 50 * Math.log2(1 + raw_power/50)
    if (limited == true) {
      if (res > spell.max_power) {res = spell.max_power}
    }
    return res
  }
  raw_fail = function (spell) {
    var pow = this.power(spell, false)
    pow = 7
    var chance = 60
    chance -= pow
    chance -= this.profile.int * 2
    chance += this.armour_penalty
    var spell_level = [0,3,15,35,70,100,150,200,260,340]
    chance += spell_level[spell.level]

    var chance2 

    chance2 = (((chance + 426) * chance + 82670) * chance + 7245398) / 262144;
    if (chance2 <0) {chance2 =0 }

//chance2 += get_form()->spellcasting_penalty;

//chance2 -= 2 * you.get_mutation_level(MUT_SUBDUED_MAGIC);
//chance2 += 4 * you.get_mutation_level(MUT_WILD_MAGIC);
//chance2 += 4 * you.get_mutation_level(MUT_ANTI_WIZARDRY);

//if (you.props.exists(SAP_MAGIC_KEY))
//chance2 += you.props[SAP_MAGIC_KEY].get_int() * 12;

//chance2 += you.duration[DUR_VERTIGO] ? 7 : 0;

// Apply the effects of Vehumet and items of wizardry.
//chance2 = _apply_spellcasting_success_boosts(spell, chance2);

    if (chance2 <0) {chance2 =0 }
    if (chance2 >100) {chance2 =100 }

    console.log("chance2 " + chance2)
    return chance2
  }

  _get_true_fail_rate = function (raw_fail) {
    var outcomes = 101*101*100;
    var target = raw_fail * 3

    console.log("tetra " + this._tetrahedral_number(raw_fail))
    console.log("tetra over outcomes "+this._tetrahedral_number(raw_fail)/outcomes)
    if (target <= 100) {
      return this._tetrahedral_number(raw_fail)/outcomes
    }
    if (target <= 200) {
      return (this._tetrahedral_number(target)
              - 2 * this._tetrahedral_number(target - 101)
              - this._tetrahedral_number(target - 100)) / outcomes;
    }

    return (outcomes - this._tetrahedral_number(300 - target)) / outcomes;

  }
  failure_rate_to_int = function (fail)
{
    if (fail <= 0)
        return 0;
    else if (fail >= 100)
        return (fail + 100)/2;
    else
      var tetra = this._get_true_fail_rate(fail)
        var res = (100 * tetra);
    console.log("percentage? " +100*tetra)
    console.log(" ")
        if (res <1) {res = 1}
        return res
}
fail = function (spell) {
  return this.failure_rate_to_int(this.raw_fail(spell))

}

  _tetrahedral_number = function (n)
  {
      return n * (n+1) * (n+2) / 6;
  }
  spellList = [
    {display:"Foxfire", image: "fire/foxfire.png", type1:"conjurations" , type2:"fire magic", max_power: 40,

      "formula" : function (power, dice, max_power = 40) { if (power > max_power) {power = max_power}; return dice(3+power/3)},
      level: 1,
  },
  /*
    {
      display:"Freeze", 
      image: "ice/freeze.png",
      type1:"ice magic", 
      type2: "" , 
      max_power: 25, 
      "formula" : function (power, dice, max_power = 25) { if (power > max_power) {power = max_power}; return dice(3+power/3)},
      damage_type: "cold",
      range: 1,
      level: 1,
    }, 
    */
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
