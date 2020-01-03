
export function skill_xp (level) {
    var xp =0 
    return xp
}

/**
 * function adjusted_body_armour_penalty
 * The encumbrance penalty to the player for their worn body armour.
 *
 * @param scale     A scale to multiply the result by, to avoid precision loss.
 * @return          A penalty to EV based quadratically on body armour
 *                  encumbrance.
 */

 export function encumberance_penalty (item, scale, armour_skill, str, mutations = [])
{
    var sturdy_frame = 0 
    if (mutations.hasOwnProperty('sturdy_frame') {sturdy_frame = mutations['sturdy_frame'] *2}
    var e = item.encumbrance - sturdy_frame
    if (e <0) {e = 0}

    // New formula for effect of str on aevp: (2/5) * evp^2 / (str+3)
    /*
    return 2 * base_ev_penalty * base_ev_penalty * (450 - skill(SK_ARMOUR, 10))
          * scale / (5 * (strength() + 3)) / 450;
    */

    return 2 * e * e * (450 - armour_skill * 10) * scale / (5 * (str + 3)) /450
}

/**
 * The encumbrance penalty to the player for their worn shield.
 *
 * @param scale     A scale to multiply the result by, to avoid precision loss.
 * @return          A penalty to EV based on shield weight.
 */
export function adjusted_shield_penalty(item, scale, shields_skill, racial_factor = 0 ) 
{

    var base_shield_penalty = item['penalty']
    //var player_shield_racial_factor = max(1, 5 + racial_factor )
    var player_shield_racial_factor = 5 + racial_factor
    return ((base_shield_penalty * scale) - shields_skill * scale / player_shield_racial_factor * 10) / 10;
}

/*
int player::armour_tohit_penalty(bool random_factor, int scale) const
{
    return maybe_roll_dice(1, adjusted_body_armour_penalty(scale), random_factor);
}

int player::shield_tohit_penalty(bool random_factor, int scale) const
{
    return maybe_roll_dice(1, adjusted_shield_penalty(scale), random_factor);
}
*/