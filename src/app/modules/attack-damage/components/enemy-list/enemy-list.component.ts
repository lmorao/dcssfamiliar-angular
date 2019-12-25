import { Component, OnInit } from '@angular/core';
import { Enemy } from '../../../../shared/models/enemy.model'
import { EnemyListService} from '../../../../core/services/enemy-list.service'
import { monsters } from '../../../../monsters'

@Component({
  selector: 'app-enemy-list',
  templateUrl: './enemy-list.component.html',
  styleUrls: ['./enemy-list.component.sass']
})
export class EnemyListComponent implements OnInit {

  selectedEnemy = new Enemy()

  lessac = function () {if (this.selectedEnemy.ac >1) {this.selectedEnemy.ac -=1};  this.enemyListService.updateTarget(this.selectedEnemy);};
  moreac = function () {if (this.selectedEnemy.ac <30) {this.selectedEnemy.ac +=1}; this.enemyListService.updateTarget(this.selectedEnemy);};

  enemyList = [monsters.orc, monsters.gnoll, monsters.centaur, monsters.orc_warrior]
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
    if (0 < +n && n <= 20) {res = "+"}
    if (10<n && n<=15) {res = "+++"}
    if (15<n && n<=20) {res = "++++"}
    if (20< n && n <=25) {res = "+++++"}
    if (25<n && n<=30) {res = "++++++"}
    return res
  }



  targetEnemy = function (enemy) {
    this.selectedEnemy = enemy
    this.enemyListService.updateTarget(enemy)
  }

  
  constructor(
    private enemyListService: EnemyListService
  ) { }

  ngOnInit() {
  }

}
