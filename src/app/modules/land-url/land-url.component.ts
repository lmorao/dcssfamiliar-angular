import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import { WeaponListService } from '../../core/services/weapon-list.service'
import { ProfileService } from '../../core/services/profile.service'
import { SkillsService } from '../../core/services/skills.service'

@Component({
  selector: 'app-land-url',
  templateUrl: './land-url.component.html',
  styleUrls: ['./land-url.component.sass']
})
export class LandUrlComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,

    private skillsService: SkillsService,
    private selectedWeaponService: SelectedWeaponService,
    private weaponListService: WeaponListService,
    private profileService: ProfileService,
    private router: Router,

    ) {}
  ngOnInit() {
       var profile  =this.route.snapshot.params.profile
       var name  =this.route.snapshot.params.name
       var species  =this.route.snapshot.params.species
       var skills  =this.route.snapshot.params.skills

       //this.router.navigate(['/']);

      
  };

}
