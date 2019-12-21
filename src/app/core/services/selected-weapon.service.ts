import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedWeaponService {
  private weaponSource = new BehaviorSubject({"name":"unarmed","slaying":"+0",brand:""});
  weapon = this.weaponSource.asObservable();

  selectWeapon(weapon) {
    this.weaponSource.next(weapon);
  }

  constructor() { }
}
