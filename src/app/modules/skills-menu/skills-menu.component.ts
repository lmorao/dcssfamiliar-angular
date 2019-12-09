import { Component, OnInit } from '@angular/core';
import { Skills } from '../../shared/models/skills.model'
import { Deserializable } from "./deserializable.model"

@Component({
  selector: 'app-skills-menu',
  templateUrl: './skills-menu.component.html',
  styleUrls: ['./skills-menu.component.sass']
})
export class SkillsMenuComponent implements OnInit {
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
  s_melee = {
    fighting: 0,
    "short blades": 0,
    "long blades":0,
    maces:0,
    axes:0,
    polearms:0,
    staves:0,
    unarmed:0
  }
  s_melee_names = ["Fighting","Short Blades", "Long Blades", "Maces & Flails", "Axes", "Polearms", "Staves", "Unarmed"]

  s_ranged = {
    bows:0,
    crossbows:0,
    throwing:0,
    slings:0,
  }

  s_defense = {
    armour:0,
    dodging:0,
    shields:0,
  }

  s_spells = {
    spellcasting:0,
    conjurations:0,
    hexes:0,
    charms:0,
    summonings:0,
    necromancy:0,
    translocations:0,
    transmutations:0,
    "fire magic":0,
    "ice magic":0,
    "air magic":0,
    "earth magic":0,
    "poison magic":0,
  }

  s_other = {
    invocations:0,
    evocations:0,
    stealth:0
  }
  constructor() { }

  ngOnInit() {
  }

}
