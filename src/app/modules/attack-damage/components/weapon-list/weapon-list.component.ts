import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../../shared/models/weapon.model'

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.sass']
})
export class WeaponListComponent implements OnInit {
  //TODO hardcoded weapon list

    //new Weapon{"dagger", "elec", 1),
  weapons = [
  new Weapon("dagger","+1","elec"),
  new Weapon("hunting sling",),

  ]

  constructor() { }

  ngOnInit() {
  }

}
