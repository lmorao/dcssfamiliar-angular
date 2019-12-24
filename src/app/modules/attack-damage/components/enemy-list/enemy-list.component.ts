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
