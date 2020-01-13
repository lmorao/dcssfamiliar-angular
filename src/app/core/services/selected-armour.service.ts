import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedArmourService {
  private armourSource = new BehaviorSubject({"name":"unarmed","slaying":"+0",brand:""});
  private shieldSource = new BehaviorSubject({"name":"unarmed","slaying":"+0",brand:""});
  armour = this.armourSource.asObservable();
  shield = this.shieldSource.asObservable();

  selectArmour(weapon) {
    this.armourSource.next(weapon);
  }
  selectShield(weapon) {
    this.shieldSource.next(weapon);
  }
  getArmour() {
    return this.armour
  }
  getShield() {
    return this.shield
  }


  constructor() { }
}
