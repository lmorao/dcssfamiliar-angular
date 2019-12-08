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
  
  lessxl = function () {this.xl -=1}
  morexl = function () {this.xl +=1}
  lessstr = function () {this.str -=1}
  morestr = function () {this.str +=1}
  lessint = function () {this.int -=1}
  moreint = function () {this.int +=1}
  lessdex = function () {this.dex -=1}
  moredex = function () {this.dex +=1}


  constructor() { }

  ngOnInit() {
  this.str = this.char['str']
  this.int = this.char['int']
  this.dex = this.char['dex']
  }

}
