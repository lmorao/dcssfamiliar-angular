import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {
  spellList = [
    {display:"Foxfire", image: "fire/foxfire.png", type:"charms"},
    {display:"Foxfire", image: "fire/foxfire.png",type:"translocations"},
  ]
  targetSpell = function () {}

  constructor() { }

  ngOnInit() {
  }

}
