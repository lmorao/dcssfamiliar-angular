import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedWeaponService {
  weapon;
  selectWeapon(id) {
    weapon = id
  }
  getWeapon() {
    return weapon
  }

  constructor() { }
}
