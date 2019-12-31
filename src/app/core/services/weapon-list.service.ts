import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponListService {
  private weaponListSource = new BehaviorSubject([
    {"name":"unarmed","slaying":"+0",brand:""},
    {name:"dagger",slaying:"+0", "brand":""},
    {name:"quick blade",slaying:"+4", "brand":"electrocution"},
    {name:"broad axe",slaying:"+3", "brand":"flaming"},
    {name:"trident",slaying:"+5", "brand":"freezing"},
    {name:"triple sword",slaying:"+9", "brand":""},
    // draining is wrong
    //{name:"triple sword",slaying:"+8", "brand":"draining"},
    {name:"longbow",slaying:"+4", "brand":"speed"},

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
