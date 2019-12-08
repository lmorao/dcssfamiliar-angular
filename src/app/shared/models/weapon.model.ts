import { Deserializable } from "./deserializable.model"
export class Weapon implements Deserializable {

    private static D_BRAND ="";
    private static D_SLAYING ="+0";
    private static D_ART ="";

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    constructor(
        public name = name,
        public slaying = Weapon.D_SLAYING,
        public brand = Weapon.D_BRAND,
        public art = Weapon.D_ART,

    ) {
    }



    // eg. "short_blades"
    //category: string;
    //damage: number;
    //hit: string;
    //speed: number;
    //one hand minimum size
    //ohms: string;
    //two hand minimum size
    //thms: string;
    //damage_type: string;
    // change to drop
    //prob: number;
}
