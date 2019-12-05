import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedWeaponService {
  weapon;
  selectWeapon(id) {
    this.weapon = id
  }
  getWeapon() {
    return this.weapon
  }

  constructor() { }
}
