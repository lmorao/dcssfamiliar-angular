import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../../core/services/skills.service'
import { ProfileService } from '../../../core/services/profile.service'
import { Skills } from '../../../shared/models/skills.model'
import { Character } from '../../../shared/models/character.model'
import { spell_db } from 'src/app/spell_db'

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
  power = function (spell, apply_int = true, fail_rate = false,limited = true, scale=1, enhancers = 0, brilliance = false, wildMagic=0, subDueMagic = 0) {
    //brilliance is either 0 or 3
    var mut = 1
    var bMut = 1
    var ds = 1
    var spellcasting = this.skills['spellcasting']['level']
    var schools
    var enh
    var res
    var raw_power = 0
    if (enhancers >3) {enhancers = 3}

    schools = this.skills[spell.type1]['level']
    var div = 1
    if (spell.type2 != "") {
      schools += this.skills[spell.type2]['level']
      div = 2
    }

    raw_power =  Math.floor(schools*200/div)
    raw_power += spellcasting * 50

    enh = Math.pow(1.5, enhancers)
    switch (true) {
      case (wildMagic == 0): mut =  1; break; case (wildMagic == 1): mut = 1.3; break; case (wildMagic == 2): mut = 1.6; break; case (wildMagic == 3): mut= 1.9; break;
    }
    if (fail_rate == true) {
      raw_power *= scale
      raw_power /=100
      res = raw_power
    } else {
      if (brilliance == true) {
        raw_power += 600
      }
      if (apply_int) {
        raw_power *= (this.profile.int/10) 
      }
      raw_power *= enh
      raw_power *= mut * bMut * ds
      //step down could be another function
      //assert range?
      var divisor = Math.floor(1000/scale)

      //res = this.stepdown_value(res * 10 , 50000, 50000, 150000, 200000) /divisor;
      res = Math.floor(raw_power *10/divisor)


    }

    if (limited == true) {
      if (res > spell.power) {res = spell.power}
    }
    return res
  }

  raw_spell_fail = function (spell) {
    var chance = 60
    chance -= this.power(spell, false, true,false, 6)
    chance -= this.profile.int * 2
    chance += this.armour_penalty
    var spell_level = [0,3,15,35,70,100,150,200,260,340]
    chance += spell_level[spell.level]

    var chance2 

    chance2 = Math.floor((((chance + 426) * chance + 82670) * chance + 7245398) / 262144);
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

    return chance2
  }

  _get_true_fail_rate = function (raw_fail) {
    var outcomes = 101*101*100;
    var target = raw_fail * 3

    if (target <= 100) {
      return this._tetrahedral_number(target)/outcomes
    }
    if (target <= 200) {
      return (this._tetrahedral_number(target)
              - 2 * this._tetrahedral_number(target - 101)
              - this._tetrahedral_number(target - 100)) / outcomes;
    }

    return (outcomes - this._tetrahedral_number(300 - target)) / outcomes;

  }
  failure_rate_to_int = function (fail) {
    if (fail <= 0)
        return 0;
    else if (fail >= 100)
        return Math.floor((fail + 100)/2);
    else
        var tetra = this._get_true_fail_rate(fail)
        var res = (100 * tetra);
        res = Math.floor(res)
        if (res <1) {res = 1}
        return res
  }
  failure_rate_to_string = function () {}
  fail = function (spell) {
    return this.failure_rate_to_int(this.raw_spell_fail(spell))

  }

  _tetrahedral_number = function (n)
  {
      return n * (n+1) * (n+2) / 6;
  }
  spellList = [
    spell_db.SPELL_STING,
    spell_db.SPELL_FOXFIRE,
    spell_db.SPELL_HAILSTORM,
    spell_db.SPELL_STARBURST,
  ]
  max_spell_dam_dice = function (spell,power) {
    // dont use ndice, because we would have to divide and multiply again
    return spell.pdice + power * spell.mdice/spell.ddice
  }
  display_damage = function (spell) {
    var res =  ""
    res +=  spell.ndice + "d(" + spell.pdice/spell.ddice + " + " + '<font color:"red">' + this.power(spell,true,false,true) + '</font>' + "*" + spell.mdice/spell.ddice
    return res
  }

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
