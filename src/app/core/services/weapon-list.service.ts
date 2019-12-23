import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponListService {
  private weaponListSource = new BehaviorSubject([{"name":"unarmed","slaying":"+0",brand:""}]);
  weaponList = this.weaponListSource.asObservable();

  updateWeaponList = function (wl) {
    this.weaponListSource.next(wl)
  }

  constructor() { }
}
