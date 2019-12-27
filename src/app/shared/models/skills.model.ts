export function Skills(fighting=2,maces=3) {
      this.fighting = { level: fighting, display: "Fighting"};
      this["short blades"]= { level: 0, display: "Short Blades"};
      this["long blades"]={ level: 0,display: "Long Blades"};
      this.maces={ level: maces,display: "Maces & Flails"};
      this.axes={ level: 0,display: "Axes"};
      this.polearms={ level: 0,display: "Polearms"};
      this.staves={ level: 0,display: "Staves"};
      this.unarmed={ level: 0,display: "Unarmed"};
      this.bows={ level: 0,display: "Bows"};
      this.crossbows={ level: 0,display: "Crossbows"};
      this.throwing={ level: 0,display: "Throwing"};
      this.slings={ level: 0,display: "Slings"};


      this.armour={ level: 0,display: "Armour"};
      this.dodging={ level: 0,display: "Dodging"};
      this.shields={ level: 0,display: "Shields"};

      this.spellcasting={ level: 0,display: "Spellcasting"};
      this.conjurations={ level: 0,display: "Conjurations"};
      this.hexes={ level: 0,display: "Hexes"};
      this.charms={ level: 0,display: "Charms"};
      this.summonings={ level: 0,display: "Summonings"};
      this.necromancy={ level: 0,display: "Necromancy"};
      this.translocations={ level: 0,display: "Translocations"};
      this.transmutations={ level: 0,display: "Transmutations"};
      this["fire magic"] = { level: 0,display: "Fire Magic"};
      this["ice magic"] = { level: 0,display: "Ice Magic"};
      this["air magic"] = { level: 0,display: "Air Magic"};
      this["earth magic"] = { level: 0,display: "Earth Magic"};
      this["poison magic"] = { level: 0,display: "Poison Magic"};

      this.invocations={ level: 0,display: "Invocations"};
      this.evocations={ level: 0,display: "Evocations"};
      this.stealth={ level: 0,display: "Stealth"};
}
