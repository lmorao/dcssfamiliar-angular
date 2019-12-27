import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponListService {
  private weaponListSource = new BehaviorSubject([
    {"name":"unarmed","slaying":"+0",brand:""},
    {name:"dagger",slaying:"+0", "brand":""},
    {name:"short sword",slaying:"+0", "brand":""},
    {name:"hand axe",slaying:"+0", "brand":""},
    {name:"flail",slaying:"+0", "brand":""},
    //{name:"falchion",slaying:"+0", "brand":""},
  ])
  weaponList = this.weaponListSource.asObservable();

  updateWeaponList = function (wl) {
    this.weaponListSource.next(wl)
  }
  get () {
    return this.weaponList
  }

  constructor() { }
}
