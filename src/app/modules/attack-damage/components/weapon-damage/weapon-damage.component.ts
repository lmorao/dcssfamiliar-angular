import { Component, OnInit } from '@angular/core';
import { SelectedWeaponService } from '../../../../core/services/selected-weapon.service'
import { EnemyListService } from '../../../../core/services/enemy-list.service'
import { weapon_types, brand_color } from '../../../../weapon_types'
import { SkillsService } from '../../../../core/services/skills.service'
import { ProfileService } from '../../../../core/services/profile.service'
import { Skills } from '../../../../shared/models/skills.model'
import { Enemy } from '../../../../shared/models/enemy.model';

@Component({
  selector: 'app-weapon-damage',
  templateUrl: './weapon-damage.component.html',
  styleUrls: ['./weapon-damage.component.sass']
})
export class WeaponDamageComponent implements OnInit {
  selectedWeapon;
  skills = new Skills()
  wt=weapon_types
  target = new Enemy()
  str 
  ac_reduction = 0;
  ac_reduction_per_turn = 0;
  w_speed = 10;
  min_damage = 0;
  max_damage = 0;
  exp_damage = 0;
  profile = {slaying:0}
  attack_speed;
  brand_color = ""
  brand_damage = 0;
  dice_min = function (n) { return 0}
  dice_max = function (n) { return n-1}
  dice_exp = function (n) { 
    var total = 0;
    total = (n-1)/2
    return total
  }
  //TODO not to unarmed
  misc = 0 
  final = 1
  stabbing = 0
  calc_ac_reduction = function (target, dice) {
    //very simple since its monster defense, max_damage =0, which simplifies alot
    //var stab_bypass = 0
    //var ac = max(armour_class()- stab_bypass, 0)
    return dice(1+target.ac)
  };

  calc_brand_resist_mutlipier = function (brand, target_res) {
    var look_for = "nothing"
    var level = 0
    var multiplier = 1
    if (brand == "flaming") {look_for = "rF\\+"}
    if (brand == "freezing") {look_for = "rC\\+"}
    if (brand == "draining") {look_for = "rDrain"}
    if (brand == "pain") {look_for = "rN\\+"}
    if (brand == "electrocution") {look_for = "rElec"}
    for (var i=0;i<target_res.length;i++) {
      var re = new RegExp(look_for)
      if (re.test(target_res[i])) {

        level = 1
        var re2 = new RegExp(look_for + "\\+")
        if (re2.test(target_res[i])) { level =2}
        var re3 = new RegExp(look_for + "\\+\\+")
        if (re3.test(target_res[i])) { level =3}
      }
    }
    if (level ==1) {multiplier = 0.5}
    if (level ==2) {multiplier = 0.2}
    if (level ==3) {multiplier = 0}
    if (brand == "electrocution") {if (level == 1) {multiplier =0.33}}
    if (brand == "electrocution") {if (level == 2) {multiplier =0.17}}
    return multiplier
  }
  calc_brand_vul_mutlipier = function (brand, target_vul,skill) {

    var look_for = "nothing"
    var level = 0
    var multiplier = 1
    if (brand == "flaming") {look_for = "Fire"}
    if (brand == "freezing") {look_for = "Cold"}
    if (brand == "holy wrath") {look_for = "Holy"}
    for (var i=0;i<target_vul.length;i++) {
      var re = new RegExp(look_for)
      if (re.test(target_vul[i])) {
        level = 1
      }
    }
    if (level ==1) {multiplier = 2}
    // holy does nothing if you don't have vul
    if (brand == "holy wrath" && multiplier == 1) {multiplier = 0}
    if (brand == "holy wrath" && multiplier == 2) {multiplier = 1}
    // ranged does only 1.5
    if (['slings', 'bows', 'crossbows'].indexOf(skill) >= 0) {
      if (multiplier  ==2) { multiplier = 1.5}
    }

    return multiplier

  }

  resist_reduction
  change_brand = function (weapon) {
    this.brand_color = brand_color (weapon.brand)
      var speed = this.calc_w_speed(weapon)
    if (weapon.brand != "") {
      if (weapon.brand =="flaming") {this.brand_damage = this.attack_speed * 0.25}
      if (weapon.brand =="freezing") {this.brand_damage = this.attack_speed * 0.25}
      if (weapon.brand =="holy wrath") {this.brand_damage = this.attack_speed * 0.75}
      if (weapon.brand =="vorpal") {this.brand_damage = this.attack_speed * 0.1667}
      if (weapon.brand =="draining") {this.brand_damage = this.attack_speed * 0.25}
      if (weapon.brand =="pain") {
        this.brand_damage = 
        this.damage_per_turn(this.skills['necromancy']['level']/2, this.calc_w_speed(weapon))}
      if (weapon.brand =="electrocution") {
        console.log( this.dice_exp(13))
        this.brand_damage =  
        this.damage_per_turn(0.33 * (8 + this.dice_exp(13)),this.calc_w_speed(weapon) )}
      if (weapon.brand =="distortion") {
        this.brand_damage = 
        this.damage_per_turn(0.33*(1+7)/2+0.22*14.5, this.calc_w_speed(weapon))
      }
      if (weapon.brand =="speed") {
        this.brand_damage =  this.exp_damage/(speed*0.66/10) - this.attack_speed
        speed = speed * 0.66
      }
      if (weapon.brand =="protection") {this.brand_damage = 0}
      if (weapon.brand =="poison") {this.brand_damage = 0}
      if (weapon.brand =="None") {this.brand_damage = 0}
      if (weapon.brand =="vamp") {this.brand_damage = 0}
      if (weapon.brand =="antimagic") {this.brand_damage = 0}
    } else {
      this.brand_damage = 0
    }
    this.w_speed = speed

    this.resist_reduction = this.brand_damage * (1-this.calc_brand_resist_mutlipier(weapon.brand, this.target.res))
    this.brand_damage *= this.calc_brand_resist_mutlipier(weapon.brand, this.target.res)
    this.brand_damage *= this.calc_brand_vul_mutlipier(weapon.brand, this.target.vul,  this.wt[weapon.name].category);
  }

  calc_slaying = function (preslaying, dice) {
    var slaying
    slaying = preslaying
    if (preslaying > 0) {
      slaying = dice(1 + preslaying ) 
    } else {
      slaying = -1 * dice(1 - preslaying ) 
    }

    return  slaying
  }

  debug = 'l'
  calculate_damage = function (weapon,dice, inverse=false) {
    // inverse is used for max damage formula
    if (weapon.name == "") { return 0}
    var weapon_spec = this.wt[weapon.name];
    var base_damage = weapon_spec['damage']

    var preslaying = parseInt(weapon.slaying) + parseInt(this.profile['slaying'])
    var tempslaying = this.calc_slaying(preslaying,dice)
    var slaying = tempslaying

    var weapon_skill = this.skills[weapon_spec['category']]['level']
    var form = 3
    if (weapon.name == "unarmed") {
      base_damage = form + weapon_skill
    }
    var fighting_skill = this.skills['fighting']['level']

    var wsm = (2500 + dice(100 * weapon_skill +1))/2500
    var fm = (4000 + dice(100 * fighting_skill +1))/4000
    var total = 0;
    var strm  
    var dammod = 39;
    if (this.str > 10) {
      strm = (dammod+(dice(this.str-9)*2))/39
    } else if (this.str <10) {
      if (inverse) {strm = dammod/39} else {
      strm = (dammod-(dice(11-this.str)*3))/39
      }
    } else {
      strm=1
    }
    var ac_reduction = this.calc_ac_reduction(this.target,dice)
    this.ac_reduction_per_turn = this.damage_per_turn(ac_reduction, this.calc_w_speed(weapon))

    //total = (( dice(base_damage * strm + 1) - 1) * wsm * fm + this.misc + slaying) * this.final + this.stabbing - this.ac_reduction
    //TODO stabbing is not right
    total = ( dice(base_damage * strm + 1)  * wsm * fm + this.misc + slaying) * this.final + this.stabbing - ac_reduction
    if (0 > total) {total = 0}

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
    if (weapon.name == "unarmed") {
      return 10-5/27 * weapon_skill
    }
    var speed = weapon_spec['speed'];
    var base = speed['base']
    var min = speed['min']
    return this.calc_attack_speed(base, min, weapon_skill)
  }

  constructor(
    private selectedWeaponService: SelectedWeaponService,
    private skillsService: SkillsService,
    private profileService: ProfileService,
    private enemyListService: EnemyListService,
  ) { }

  ngOnInit() {
    this.selectedWeaponService.weapon.subscribe(weapon => {
      this.selectedWeapon = weapon;
      this.min_damage = this.calculate_damage(weapon,this.dice_min);
      this.max_damage = this.calculate_damage(weapon,this.dice_max, true);
      this.exp_damage = this.calculate_damage(weapon,this.dice_exp);
      this.attack_speed = this.damage_per_turn(this.exp_damage, this.calc_w_speed(weapon))
      this.change_brand(weapon)
    });
    this.skillsService.skills.subscribe(skills => {
      this.skills = skills
      this.min_damage = this.calculate_damage(this.selectedWeapon,this.dice_min);
      this.max_damage = this.calculate_damage(this.selectedWeapon,this.dice_max, true);
      this.exp_damage = this.calculate_damage(this.selectedWeapon,this.dice_exp);
      this.attack_speed = this.damage_per_turn(this.exp_damage, this.calc_w_speed(this.selectedWeapon))
      this.change_brand(this.selectedWeapon)
    });
    this.profileService.profile.subscribe(profile => {
      this.profile  = profile
      this.str = profile['str']
      this.min_damage = this.calculate_damage(this.selectedWeapon,this.dice_min);
      this.max_damage = this.calculate_damage(this.selectedWeapon,this.dice_max, true);
      this.exp_damage = this.calculate_damage(this.selectedWeapon,this.dice_exp);
      this.attack_speed = this.damage_per_turn(this.exp_damage, this.calc_w_speed(this.selectedWeapon))
      this.change_brand(this.selectedWeapon)
    });
    this.enemyListService.target.subscribe(target => {
      this.target = target;
      this.min_damage = this.calculate_damage(this.selectedWeapon,this.dice_min);
      this.max_damage = this.calculate_damage(this.selectedWeapon,this.dice_max, true);
      this.exp_damage = this.calculate_damage(this.selectedWeapon,this.dice_exp);
      this.attack_speed = this.damage_per_turn(this.exp_damage, this.calc_w_speed(this.selectedWeapon))
      this.change_brand(this.selectedWeapon)

    });
  }

}
