import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeaponListService {
  private weaponListSource = new BehaviorSubject([
    {"name":"unarmed","slaying":"+0",brand:""},
    {name:"dagger",slaying:"+0", "brand":"", img:"dagger.png"},
    {name:"quick blade",slaying:"+4", "brand":"electrocution",img:"quickblade2.png"},
    {name:"broad axe",slaying:"+3", "brand":"flaming",img:"broad_axe2.png"},
    {name:"trident",slaying:"+5", "brand":"freezing",img:"trident2.png"},
    {name:"triple sword",slaying:"+9", "brand":"",img:"triple_sword.png"},
    // draining is wrong
    //{name:"triple sword",slaying:"+8", "brand":"draining"},
    {name:"longbow",slaying:"+4", "brand":"speed",img:"ranged/longbow2.png"},

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
