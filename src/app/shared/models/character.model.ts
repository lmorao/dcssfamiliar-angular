import { Inventory } from ".inventory.model";
import { Skills } from ".skills.model"
import { Weapon } from ".weapon.model"

export class Character {
    username: string;
    name: string;
    race: string;
    class: string;

    health: string;
    magic: string;
    gold: number;

    ac: number;
    ev: number;
    sh: number;

    str: number;
    int: number;
    sh: number;

    xl: number;
    god: string;
    spells: string;

    inventory: Inventory;
    skills: Skills;

    c_weapon: Weapon;
}
