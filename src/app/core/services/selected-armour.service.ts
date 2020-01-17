import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedArmourService {
  private armourSource = new BehaviorSubject({name: "robe", encumbrance:0, img:"robe"});
  private shieldSource = new BehaviorSubject({name: "no shield", encumbrance:0, img:"no shield"});

  armour = this.armourSource.asObservable();
  shield = this.shieldSource.asObservable();

  selectArmour(weapon) {
    this.armourSource.next(weapon);
  }
  selectShield(weapon) {
    console.log("Selecting shield: " + weapon)
    console.log(weapon)
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
