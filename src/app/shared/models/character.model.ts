import { Inventory } from "./inventory.model";
import { Skills } from "./skills.model"
import { Weapon } from "./weapon.model"
import { Deserializable } from "./deserializable.model"

export class Character implements Deserializable{

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
    private static USERNAME = "";
    constructor (

    public username:string = Character.USERNAME,
    public name:string = "",
    public race: string = "",
    public background: string = "",

    public health: string = "",
    public magic: string = "",
    public gold: number = 0,

    public ac: number = 0,
    public ev: number = 0,
    public sh: number = 0,

    public str: number = 1,
    public int: number = 1,
    public dex: number = 1,

    public xl: number = 1,
    public god: string = "",
    public spells: string = "",

    public inventory: Inventory,
    public skills: Skills,

    public c_weapon: Weapon,


    ) {}
}
