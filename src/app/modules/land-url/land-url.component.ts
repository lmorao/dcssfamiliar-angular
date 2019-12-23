import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SelectedWeaponService } from '../../core/services/selected-weapon.service'
import { WeaponListService } from '../../core/services/weapon-list.service'
import { ProfileService } from '../../core/services/profile.service'
import { SkillsService } from '../../core/services/skills.service'
import { ShareUrlService } from 'src/app/core/services/share-url.service';

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
    private shareUrlService: ShareUrlService,

    ) {}
  ngOnInit() {
       var profile  =this.route.snapshot.params.profile
       var name  =this.route.snapshot.params.name
       var species  =this.route.snapshot.params.species
       var skills  =this.route.snapshot.params.skills

       var profile_hash = this.shareUrlService.convertLetterToNumber(profile)
       var name_hash = this.shareUrlService.convertLetterToNumber(name)
       var species_hash = this.shareUrlService.convertLetterToNumber(species)
       var skills_hash = this.shareUrlService.convertLetterToNumber(skills)

       this.profileService.updateProfile( this.shareUrlService.recreateProfile(profile_hash))


       //this.router.navigate(['/']);

      
  };

}
