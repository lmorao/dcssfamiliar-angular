import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {
  spellList = [{display:"spell1"}]
  targetSpell = function () {}

  constructor() { }

  ngOnInit() {
  }

}
