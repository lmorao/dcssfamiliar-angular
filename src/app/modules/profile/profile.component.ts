import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/character.model'
import { ProfileService } from '../../core/services/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  char = new Character(<Character> {"dex":5});
  profile;
  mutations: []
  
  lessxl = function () {if (this.profile.xl >1) {this.profile.xl -=1}; this.profileService.updateProfile(this.profile)}
  morexl = function () {if (this.profile.xl <27) {this.profile.xl +=1}; this.profileService.updateProfile(this.profile)}
  lessstr = function () {if (this.profile.str >1) {this.profile.str -=1}; this.profileService.updateProfile(this.profile)}
  morestr = function () {if (this.profile.str <60) {this.profile.str +=1}; this.profileService.updateProfile(this.profile)}
  lessint = function () {if (this.profile.int >1) {this.profile.int -=1}; this.profileService.updateProfile(this.profile)}
  moreint = function () {if (this.profile.str <60) {this.profile.int +=1}; this.profileService.updateProfile(this.profile)}
  lessdex = function () {if (this.profile.dex >1) {this.profile.dex -=1}; this.profileService.updateProfile(this.profile)}
  moredex = function () {if (this.profile.str <60) {this.profile.dex +=1}; this.profileService.updateProfile(this.profile)}


  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.profile.subscribe(profile => {
      this.profile = profile
    })

  }

}
