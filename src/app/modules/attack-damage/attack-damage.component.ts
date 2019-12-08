import { Component } from '@angular/core';
import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import {MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'attack-damage',
  templateUrl: "./attack-damage.component.html",
  styles: ['mat-grid-tile { background: lightblue; }']
})
export class AttackDamageComponent {
}