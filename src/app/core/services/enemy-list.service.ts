import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Enemy } from '../../shared/models/enemy.model'
import { monsters } from '../../monsters'

@Injectable({
  providedIn: 'root'
})
export class EnemyListService {
  private enemyListSource = new BehaviorSubject(
    [monsters['orc'], monsters['gnoll'], monsters['crimson imp'], monsters['centaur'], monsters['yak'],monsters['grinder']]
    );
  private targetSource = new BehaviorSubject(new Enemy);

  enemyList = this.enemyListSource.asObservable();
  target = this.targetSource.asObservable();

  updateTarget = function (target) {
    this.targetSource.next(target)
  }
  updateEnemyList = function (enemyList) {
    this.enemyListSource.next(enemyList)
  }
  getTarget = function () {
    return this.target;
  }
  getEnemyList = function () {
    return this.enemyList;
  }


  constructor() { }
}