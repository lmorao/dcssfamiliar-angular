import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/character.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  char = new Character(<Character> {"dex":5});
  str:number 
  int: number
  dex: number
  xl: number
  mutations: []
  
  lessxl = function () {if (this.xl >1) {this.xl -=1}}
  morexl = function () {if (this.xl <27) {this.xl +=1}}
  lessstr = function () {if (this.str >1) {this.str -=1}}
  morestr = function () {if (this.str <60) {this.str +=1}}
  lessint = function () {if (this.int >1) {this.int -=1}}
  moreint = function () {if (this.str <60) {this.int +=1}}
  lessdex = function () {if (this.dex >1) {this.dex -=1}}
  moredex = function () {if (this.str <60) {this.dex +=1}}


  constructor() { }

  ngOnInit() {
  this.str = this.char['str']
  this.int = this.char['int']
  this.dex = this.char['dex']
  }

}
