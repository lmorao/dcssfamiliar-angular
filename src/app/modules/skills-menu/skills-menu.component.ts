import { Component, OnInit } from '@angular/core';
import { Skills } from '../../shared/models/skills.model'

@Component({
  selector: 'app-skills-menu',
  templateUrl: './skills-menu.component.html',
  styleUrls: ['./skills-menu.component.sass']
})
export class SkillsMenuComponent implements OnInit {
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
  // TODO: dont separate skills, but use attribute instead. easy to pass between components
  s_melee = {
    fighting: { level: 0, display: "Fighting"},
    "short blades": { level: 0, display: "Short Blades"},
    "long blades":{ level: 0,display: "Long Blades"},
    maces:{ level: 0,display: "Maces & Flails"},
    axes:{ level: 0,display: "Axes"},
    polearms:{ level: 0,display: "Polearms"},
    staves:{ level: 0,display: "Staves"},
    unarmed:{ level: 0,display: "Unarmed"},
  }
  s_melee_temp = ["fighting","short blades", "long blades", "maces", "axes", "polearms", "staves", "unarmed"]

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
