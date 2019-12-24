import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { SkillsService } from '../../core/services/skills.service';
import { WeaponListService } from '../../core/services/weapon-list.service';
import { SelectedWeaponService } from '../../core/services/selected-weapon.service';
import { ShareUrlService } from '../../core/services/share-url.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-share-url-button',
  templateUrl: './share-url-button.component.html',
  styleUrls: ['./share-url-button.component.sass']
})
export class ShareUrlButtonComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
    private skillsService: SkillsService,
    private weaponListService: WeaponListService,
    private selectedWeaponService: SelectedWeaponService,
    private shareUrlService: ShareUrlService
  ) { }

  share_clicked=false
  share_url = "Share configuration"
  profile
  skills
  wl
  sw
  create_url = function () {
    this.profileService.get()
    this.skillsService.get()
    this.weaponListService.get()
    this.selectedWeaponService.get()

    console.log(this.skills, )
    var url  = environment.serverUrl + "/#/parse/"
    url += this.shareUrlService.createUrl(this.profile, this.skills, this.wl, this.sw)

    this.share_url = url
    this.share_clicked = true
    //var inputElement = document.getElementById('urlinput');
    //inputElement.select()
  }
  copyToClipboard = function (inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);

  }
  ngOnInit() {
    this.profileService.get().subscribe(value => this.profile = value);
    this.skillsService.get().subscribe(value => this.skills = value);
    this.weaponListService.get().subscribe(value => this.wl = value);
    this.selectedWeaponService.get().subscribe(value => this.sw = value);
  }

}
