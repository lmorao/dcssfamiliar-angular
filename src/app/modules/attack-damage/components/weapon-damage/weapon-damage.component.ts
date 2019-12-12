import { Component, OnInit } from '@angular/core';
import { SelectedWeaponService } from '../../../../core/services/selected-weapon.service'
import { SkillsService } from '../../../../core/services/skills.service'
import { weapon_types } from '../../../../weapon_types'

@Component({
  selector: 'app-weapon-damage',
  templateUrl: './weapon-damage.component.html',
  styleUrls: ['./weapon-damage.component.sass']
})
export class WeaponDamageComponent implements OnInit {
  selectedWeapon;
  skills
  wt=weapon_types
  str = 15;
  min_damage = 0;
  max_damage = 0;
  exp_damage = 0;
  attack_speed
  dice_min = function (n) { return 1}
  dice_max = function (n) { return n}
  dice_exp = function (n) { 
    var total = 0;
    for ( var i=0; i<=n; i+=1 ) {
      total += i
    }
    return total/n
  }
  //TODO not to unarmed
  misc = 0 
  final = 1
  stabbing = 0
  ac_reduction = 0;

  calc_slaying = function (preslaying, dice) {
    var slaying
    // regex positive or negative
    var posre = /\+/.test(preslaying)
    var pos
    if (posre) { pos = 1; } else { pos = -1; }
    // regex value
    var re = /\d+/.test(preslaying)
    if (re) { var s1 = /\d+/.exec(preslaying); slaying =s1[0] ; } else { slaying = 0; }
    slaying = slaying * pos
    if (slaying > 0) {
      slaying = dice(1 + slaying ) -1
    } else {
      slaying = -1 * dice(1 - slaying ) -1
    }

    return  slaying
  }

  debug = 'l'
  calculate_damage = function (weapon,dice) {
    if (weapon.name == "") { return 0}
    var weapon_spec = this.wt[weapon.name];
    var base_damage = weapon_spec['damage']
    var preslaying = weapon.slaying
    var tempslaying = this.calc_slaying(preslaying,dice)
    var slaying = tempslaying
    var weapon_skill = this.skills[weapon_spec['category']]['level']
    var fighting_skill = this.skills['fighting']['level']
    this.debug = this.skills['long blades']['level']

    var wsm = (2499 + dice(100 * weapon_skill +1))/2500
    var fm = (3999 + dice(100 * fighting_skill +1))/4000
    var total = 0;
    var strm  
    if (this.str > 10) {
      strm = (39+((dice(this.str-8)-1)*2))/39
    } else if (this.str <10) {
      strm = (39-((dice(12-this.str)-1)*3))/39
    } else {
      strm=1
    }
    total = (( dice(base_damage * strm + 1) - 1) * wsm * fm + this.misc + slaying) * this.final + this.stabbing - this.ac_reduction
    return total
  }

  damage_per_turn = function (damage,speed) {
    return damage/(speed/10)
  }

  calc_attack_speed = function (base, min, skill) {
    var a = base - skill/2
    if (a < min) {a = min}
    return a
  }
  calc_w_speed = function(weapon) {
    if (weapon.name == "") { return 0}
    var weapon_spec = this.wt[weapon.name];
    var weapon_skill = this.skills[weapon_spec['category']]['level']
    var speed = weapon_spec['speed'];
    var base = speed['base']
    var min = speed['min']
    return this.calc_attack_speed(base, min, weapon_skill)
  }

 

  constructor(
    private selectedWeaponService: SelectedWeaponService,
    private skillsService: SkillsService,
  ) { }

  ngOnInit() {
    this.selectedWeaponService.weapon.subscribe(weapon => {
      this.selectedWeapon = weapon;
      this.min_damage = this.calculate_damage(weapon,this.dice_min);
      this.max_damage = this.calculate_damage(weapon,this.dice_max);
      this.exp_damage = this.calculate_damage(weapon,this.dice_exp);
      this.attack_speed = this.damage_per_turn(this.exp_damage, this.calc_w_speed(weapon))
    })
    this.skillsService.skills.subscribe(skills => {
      this.skills = skills
      this.min_damage = this.calculate_damage(this.selectedWeapon,this.dice_min);
      this.max_damage = this.calculate_damage(this.selectedWeapon,this.dice_max);
      this.exp_damage = this.calculate_damage(this.selectedWeapon,this.dice_exp);
      this.attack_speed = this.damage_per_turn(this.exp_damage, this.calc_w_speed(this.selectedWeapon))
    })
  }

}
