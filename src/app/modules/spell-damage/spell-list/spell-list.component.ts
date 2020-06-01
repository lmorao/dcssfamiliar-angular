import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../../core/services/skills.service'
import { ProfileService } from '../../../core/services/profile.service'
import { SpellListService } from '../../../core/services/spell-list.service'
import { Skills } from '../../../shared/models/skills.model'
import { Character } from '../../../shared/models/character.model'
import { spell_db } from 'src/app/spell_db'
import { SelectedArmourService } from '../../../core/services/selected-armour.service';
import { encumbrance_penalty, adjusted_shield_penalty } from 'src/app/skill_functions';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {
  toggle = 0
  skills = new Skills()
  profile = new Character()
  armour_penalty = 0
  shield_penalty = 0
  searchedSpell = "Spell"
  searchedInputSpell = ""
  showAdd = false

  altImage = function (ele) {
    ele.src = "https://github.com/crawl/crawl/blob/master/crawl-ref/source/rltiles/gui/spells/memorise.png"
  }
  tempFunc = function (db) {
    var result = []
    var keys = Object.keys(db)
    for (var i=0;i<keys.length;i++) {
      result.push(db[keys[i]])
    }
    return result
  }
  searchResults = this.tempFunc(spell_db)

  calculateResults = function () {
    var result = []
    var input = this.searchedInputSpell
    var spell_list = Object.keys(spell_db)
    for (var i=0;i<spell_list.length;i++) {
      var real = spell_db[spell_list[i]]
      var re = new RegExp(input,'gi')
      if (re.test(real.display)) {
        result.push(real)
      } 
    }
    this.searchResults = result
  }
  addSpell = function (spell) {
    this.spellList.splice(0,0,spell)
  }
  
  diceAvg = function (number) {
    return (number -1) /2
  }
  diceMax = function (number) {
    return number 
  }
  displaytype = function (t) {
    // slice:0:3
    if (t =="") { return "" }
    if (t =="conjurations") { return "Conj" }
    if (t =="charms") { return "Chrm" }
    if (t =="hexes") { return "Hex" }
    if (t =="translocations") { return "Tloc" }
    if (t =="transmutations") { return "Tmut" }
    if (t =="summonings") { return "Summ" }
    if (t =="necromancy") { return "Necr" }
    if (t =="fire magic") { return "Fire" }
    if (t =="ice magic") { return "Ice" }
    if (t =="air magic") { return "Air" }
    if (t =="earth magic") { return "Erth" }
    if (t =="poison magic") { return "Pois" }
  }
  power = function (spell, apply_int = true, fail_rate = false,limited = true, scale=1, enhancers = 0, brilliance = 0, wildMagic=0, subDueMagic = 0) {
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

    if (spell.type1 == "none") {schools =1}
    else {
    schools = this.skills[spell.type1]['level']
    }
    var div = 1
    if (spell.type2 != "") {
      schools += this.skills[spell.type2]['level']
      div = 2
    }
    if (spell.type3 != "") {
      schools += this.skills[spell.type3]['level']
      div = 3
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
      if (this.profile.brilliance == 1) {
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
  _apply_spellcasting_success_boosts = function (chance) {
    var fail_reduce = 100
    if (this.profile.wiz > 0) {
      fail_reduce = Math.floor(fail_reduce * 6/(7 + this.profile.wiz))
    }
    if (this.profile.brilliance > 0) {
      fail_reduce= Math.floor(fail_reduce/2)
    }
    if (fail_reduce <50) {
      fail_reduce = 50
    }
    return Math.floor(chance * fail_reduce/100)

  }

  raw_spell_fail = function (spell) {
    var chance = 60
    chance -= this.power(spell, false, true,false, 6)
    chance -= this.profile.int * 2
    chance += this.armour_penalty + this.shield_penalty
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
    chance2 = this._apply_spellcasting_success_boosts( chance2);

    if (chance2 <0) {chance2 =0 }
    if (chance2 >100) {chance2 =100 }

    return chance2
  }
  power_bars = function (power) {
    var res
    if (0<=power && power<9)     {res = "#........."}
    if (10<power && power<14)    {res = "##........"}
    if (15<power && power<24)    {res = "###......."}
    if (25<power && power<34)    {res = "####......"}
    if (35<power && power<49)    {res = "#####....."}
    if (50<power && power<74)    {res = "######...."}
    if (75<power && power<99)    {res = "#######..."}
    if (100<power && power<149)  {res = "########.."}
    if (150<power && power<199)  {res = "#########."}
    if (200<power)       {res = "##########"}
    return res

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
    spell_db['spell_sting'],
    spell_db['spell_foxfire'],
    spell_db['spell_stone_arrow'],
    spell_db['spell_hailstorm'],
    spell_db['spell_starburst'],
    spell_db['spell_iron_shot'],
  ]
  max_spell_dam_dice = function (spell,power) {
      var res = spell.pdice + power * spell.mdice/spell.ddice
    if (!spell.calcdice) {
      res *=spell.ndice
    } 

    return  res
  }
  calcdice = function (spell,p) {
    if (spell.calcdice) {return p/spell.ndice}
    else {return p}
  }
  display_damage = function (spell) {
    var res =  ""
      res +=  spell.ndice + "d(" + this.calcdice(spell,spell.pdice) + " + " + '<font color:"red">' + this.power(spell,true,false,true) + '</font>' + "*" + this.calcdice(spell,spell.mdice/spell.ddice)
    return res
  }
  target_ev = 10
  hitchance = function (spellhit,enemyev) {
    var hit = 0
    var miss = 0
    for (var i=1;i<=spellhit;i++) {
      for (var j=1;j<=enemyev;j++) {
        for (var k=1;k <= j-1;k++) {
          for (var l=1;l<=j-1;l++) {
            if (Math.floor((k + l)/2)-1 <= i-1) {
              hit++
             } else {
               miss ++
             }

          }
        }

      }
    }
    console.log("hit "+hit)
    return hit/(hit+miss)*100


  }

  targetSpell = function () {}

  constructor(
    private skillsService: SkillsService,
    private profileService: ProfileService,
    private spellListService: SpellListService,
    private selectedArmourService: SelectedArmourService,

  ) { }

  ngOnInit() {

    this.skillsService.skills.subscribe(skills => {
      this.skills = skills
    })
    this.profileService.profile.subscribe(profile => {
      this.profile  = profile
    })
    this.spellListService.spellList1.subscribe(spellList1 => {
      this.spellList  = [
        spell_db['SPELL_STING'],
        spell_db['SPELL_FOXFIRE'],
        spell_db['SPELL_STONE_ARROW'],
        spell_db['SPELL_HAILSTORM'],
        spell_db['SPELL_STARBURST'],
        spell_db['SPELL_IRON_SHOT'],
      ]



      if (spellList1.length>0) {
        this.spellList  = [
        ]
        for (var i=0; i<spellList1.length;i++){
          this.spellList.push(spell_db[spellList1[i]])  
        }
      }
    })

    this.selectedArmourService.armour.subscribe(armour => {
      this.armour_penalty = encumbrance_penalty(armour, 100, this.skills['armour']['level'], this.profile.str)*19/100
    })
    this.selectedArmourService.shield.subscribe(shield => {
      this.shield_penalty = adjusted_shield_penalty(shield, 100, this.skills['shields']['level'])*19/100
    })
  }

}
