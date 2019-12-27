import { Component, OnInit } from '@angular/core';
import { Enemy } from '../../../../shared/models/enemy.model'
import { EnemyListService} from '../../../../core/services/enemy-list.service'
import { monsters } from '../../../../monsters'
import { ProfileService} from '../../../../core/services/profile.service'
import { Character } from '../../../../shared/models/character.model';

@Component({
  selector: 'app-enemy-list',
  templateUrl: './enemy-list.component.html',
  styleUrls: ['./enemy-list.component.sass']
})
export class EnemyListComponent implements OnInit {

  selectedEnemy = new Enemy()
  profile = new Character()

  lessac = function () {if (this.selectedEnemy.ac >1) {this.selectedEnemy.ac -=1};  this.enemyListService.updateTarget(this.selectedEnemy);};
  moreac = function () {if (this.selectedEnemy.ac <30) {this.selectedEnemy.ac +=1}; this.enemyListService.updateTarget(this.selectedEnemy);};

  enemyList = [monsters['orc'], monsters['gnoll'], monsters['crimson imp'], monsters['centaur'], monsters['yak'],monsters['grinder']]
  getResColor = function (res) {
    switch (res) {
      case 'rP':
        return 'lightgreen';
      case 'rF':
      case 'rF+':
      case 'rF++':
      case 'rF+++':
      case 'Fire':
        return 'red';
      case 'rC':
      case 'rC+':
      case 'rC++':
      case 'rC+++':
      case 'Cold':
        return 'aqua';
      case 'rElec':
      case 'rElec+':
      case 'rElec++':
      case 'rElec+++':
        return 'orange';
      case 'Holy':
      case 'rHoly':
        return 'yellow';
      case 'rDrain':
        return 'purple';
      case 'rN+':
      case 'rN++':
      case 'rN+++':
        return 'gray';
      case 'rTorm':
        return 'slateblue';
    }
  }
  dangerous = function (hd) {
    return '#babdb6'
    switch (true) {
      case (hd > this.profile.xl):
        console.log('red');
        return 'red';
      case hd == this.profile.xl:
        return 'yellow';
      case hd < this.profile.xl:
        return 'grey';
    }
  }
  calcXp = function (hd,speed,hp ) {
    var maxhp = hp*1.33
    var x_val = (16 + maxhp) * hd * hd / 10;
    x_val *= speed
    x_val /= 10
    if (x_val > 100)
    {
      x_val = 100 + ((x_val - 100) * 3) / 4;
    }
    if (x_val > 750)
    { 
      x_val = 750 + (x_val - 750) / 3
    }
    return x_val
  }
  toPlus = function (n: number) {
    var res = ""
    if (n==0) {res = ""}
    if (0 < +n && n <= 5) {res = "+"}
    if (5 < +n && n <=10) {res = "++"}
    if (10<n && n<=15) {res = "+++"}
    if (15<n && n<=20) {res = "++++"}
    if (20< n && n <=25) {res = "+++++"}
    if (25<n && n<=30) {res = "++++++"}
    return res
  }
  toPlusMr = function (n: number) {
    var res = ""
    if (n==0) {res = ""}
    if (0 < +n && n <= 40) {res = "+"}
    if (40<n && n<=80) {res = "+++"}
    if (80<n && n<=120) {res = "++++"}
    if (120< n && n <=160) {res = "+++++"}
    if (160<n && n<=200) {res = "++++++"}
    return res
  }



  targetEnemy = function (enemy) {
    this.selectedEnemy = enemy
    this.enemyListService.updateTarget(enemy)
  }

  
  constructor(
    private enemyListService: EnemyListService,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.profile.subscribe(profile => this.profileService = profile)
    this.enemyListService.enemyList.subscribe(enemyList => this.enemyList = enemyList)
  }

}
