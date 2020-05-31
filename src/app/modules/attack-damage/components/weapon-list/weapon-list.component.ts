import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../../../shared/models/weapon.model'
import { SelectedWeaponService } from '../../../../core/services/selected-weapon.service'
import { WeaponListService } from '../../../../core/services/weapon-list.service'
import {  brand_color, weapon_types,brands,weapon_image } from '../../../../weapon_types'
//import { WeaponListDB } from '../../../../weapon_types'


@Component({
  selector: 'weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.sass']
})
export class WeaponListComponent implements OnInit {

  //TODO hardcoded weapon list

    //new Weapon{"dagger", "elec", 1),
  showAdd = false
  searchWeaponInput = ""
  selectedBrand = "Brand"
  weaponSearched = "Weapon"
  searchedSlaying = "Plus"

  brands = brands
  pluses = ['-4','-3','-2','-1','+0','+1','+2','+3','+4','+5','+6','+7','+8','+9']
  searchResults = Object.keys(weapon_types)

  weapons = [
    {name: 'unarmed', slaying:"+0", brand:""},
  ];
  addWeaponToList = function () {
    if (this.selectedBrand != "Brand" && this.weaponSearched != "Weapon" && this.searchedSlaying != "Plus") {
      this.weapons.splice(1,0,{name: this.weaponSearched, slaying:this.searchedSlaying, brand:this.selectedBrand, img: weapon_image(this.weaponSearched, this.selectedBrand)})
    }
  }

  toggleShowAdd = function () {
    this.showAdd = ! this.showAdd
  }

  selectedWeapon =  {name: 'unarmed', slaying:"+0", brand:""};
  brand_color = function (brand) {
    return brand_color(brand)

  }
  
  getWeapon = function(weapon) {
    //return WeaponListDB.prototype.getWeapon(weapon);
  }
  searchedWeapon = {
    //name: this.getWeapon(search)
  };
  calculateResults = function () {
    var results = []
    console.log(this.searchWeaponInput)
    var re = new RegExp (this.searchWeaponInput, "g") 
    var keys = Object.keys(weapon_types)
    for (var i=0;i<=keys.length;i++){
      if (this.searchWeaponInput == "all") {
          results.push(keys[i])
      } 
      if (this.searchWeaponInput == "Weapon") {
          results.push(keys[i])
      } else {
        if (re.test(keys[i])) {
          console.log(re)
          results.push(keys[i])
        }
      }
    }
    this.searchResults = results
  }
  selectBrand = function (brand) {
    this.selectedBrand = brand
  }
  selectSearchWeapon = function (weapon) {
    this.weaponSearched = weapon
    this.searchResults = Object.keys(weapon_types)
  }
  selectSearchedSlaying = function (plus) {
    this.searchedSlaying = plus
  }
  addingWeapon= function (searchResult) {
    this.searchWeaponInput = searchResult 
    //this.searchWeaponInput = "" 
    this.calculateResults()

  }

  selectWeapon (weapon) {
    this.selectedWeaponService.selectWeapon(weapon)
    this.selectedWeapon = weapon;
  }

  constructor(
    private selectedWeaponService: SelectedWeaponService,
    private weaponListService: WeaponListService,
  ) { 
  }

  ngOnInit() {
    this.selectedWeaponService.weapon.subscribe(weapon => {this.selectedWeapon = weapon; })
    this.weaponListService.weaponList.subscribe(weaponList => {this.weapons = weaponList; })
  }

}
