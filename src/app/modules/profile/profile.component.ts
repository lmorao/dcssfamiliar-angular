import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service'
import { CfParserService } from '../../core/services/cf-parser.service'
import { Character } from '../../shared/models/character.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  char = {"dex":5};
  profile = new Character();
  mutations: []
  
  lessxl = function () {if (this.profile.xl >1) {this.profile.xl -=1}; this.profileService.updateProfile(this.profile)}
  morexl = function () {if (this.profile.xl <27) {this.profile.xl +=1}; this.profileService.updateProfile(this.profile)}
  lessstr = function () {if (this.profile.str >1) {this.profile.str -=1}; this.profileService.updateProfile(this.profile)}
  morestr = function () {if (this.profile.str <53) {this.profile.str +=1}; this.profileService.updateProfile(this.profile)}
  lessint = function () {if (this.profile.int >1) {this.profile.int -=1}; this.profileService.updateProfile(this.profile)}
  moreint = function () {if (this.profile.str <53) {this.profile.int +=1}; this.profileService.updateProfile(this.profile)}
  lessdex = function () {if (this.profile.dex >1) {this.profile.dex -=1}; this.profileService.updateProfile(this.profile)}
  moredex = function () {if (this.profile.str <53) {this.profile.dex +=1}; this.profileService.updateProfile(this.profile)}
  lessslaying = function () {if (this.profile.slaying >-8) {this.profile.slaying -=1}; this.profileService.updateProfile(this.profile)}
  moreslaying = function () {if (this.profile.slaying <25) {this.profile.slaying +=1}; this.profileService.updateProfile(this.profile)}
  lesswiz = function () {if (this.profile.wiz >-3) {this.profile.wiz -=1}; this.profileService.updateProfile(this.profile)}
  morewiz = function () {if (this.profile.wiz <3) {this.profile.wiz +=1}; this.profileService.updateProfile(this.profile)}
  lessbrill = function () {if (this.profile.brilliance >0) {this.profile.brilliance -=1}; this.profileService.updateProfile(this.profile)}
  morebrill = function () {if (this.profile.brilliance <1) {this.profile.brilliance +=1}; this.profileService.updateProfile(this.profile)}

  constructor(
    private profileService: ProfileService,
    private parserService: CfParserService,
  ) { }

  ngOnInit() {
    this.profileService.profile.subscribe(profile => {this.profile = profile});
  }

}
