import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service'
import { CfParserService } from '../../core/services/cf-parser.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  char = {"dex":5};
  profile = {str:3};
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
    private parserService: CfParserService,
  ) { }

  ngOnInit() {
    this.parserService.profile.subscribe(profile => {
      this.profile = profile; 
      this.profileService.updateProfile(profile)
    })

  }

}
