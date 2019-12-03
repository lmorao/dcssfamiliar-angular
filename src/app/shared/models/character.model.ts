import { Inventory } from "./inventory.model";
import { Skills } from "./skills.model"
import { Weapon } from "./weapon.model"

export class Character {
    public username: string;
    public name: string;
    public race: string;
    public class: string;

    public health: string;
    public magic: string;
    public gold: number;

    public ac: number;
    public ev: number;
    public sh: number;

    public str: number;
    public int: number;
    public dex: number;

    public xl: number;
    public god: string;
    public spells: string;

    public inventory: Inventory;
    public skills: Skills;

    public c_weapon: Weapon;
}
