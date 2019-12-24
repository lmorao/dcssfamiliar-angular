
export function Enemy() {
      this.name="rat";
      this.hp="1";
      this.hd=1;
      this.xp=1;
      this.speed=10;
      this.ac=1;
      this.ev=10;
      this.mr=0;
      this.attack = 3;
      this.attack_type = "hit";
      this.attack_flavour = "plain";
      this.type_of_meat = "Clean";
      this.resistances = {rc:0,rf:0,rn:0,re:0,rp:0};
      this.vulnerabilities = {rc:0,rf:0,rn:0,re:0,rp:0};
      this.habitat = ""
      this.inteligence = "Human"
      this.uses = []
      this.holiness = "natural"
      this.size = "medium"
      this.type = "goblin, goblin"
      this.flags = []
}
