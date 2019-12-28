path2 = "/Users/lmorao/quick/web/crawl/crawl-ref/source/rltiles/dc-mon.txt"

with open(path2, "r") as f:
    images = f.read()

def find_image_path(monster):
    """ takes 'db' entry"""
    found_dir = ""
    final = ""
    for line in images.split("\n"):
        m = re.search("dir (mon/\S+)",line)
        if m:
            found_dir = m.group(1)
        n = re.search("(\S+)\s*{}".format(monster),line)
        if n:
            if re.search("unique", line):
                final = n.group(1) + ".png"
            else:
                final = found_dir + "/"+ n.group(1) + ".png"
            break
    return final


path = "/Users/lmorao/quick/web/crawl/crawl-ref/source/mon-data.h"

with open(path, "r") as f:
    g = f.read()

number = 0
final = "export const monsters = {\n"
count = 0
entry = ""
for line in g.split("\n"):
    number +=1
    if number <300:
        continue
    if count ==0:
        if "   MONS_" in line:
            count = 1
            name_re = re.search("(\S+),\s*\'(\S+)\',\s*(\S+),\s*\"(\S+\s*\S*\s*\S*\s*\S*\s*\S*)\",",line)
            if name_re:
                db = name_re.group(1)
                symbol = name_re.group(2)
                color = name_re.group(3)
                name = name_re.group(4)
                entry += '''"{}": {{ display: "{}", name: "{}",  symbol: "{}", color: "{}", db: "{}", '''.format(name.lower(), name, name.lower(), symbol, color, db)
        res= ""
        vul= ""
        continue
    if count == 1:

        if "," in line:
            count +=1
        continue
    if count == 2:
        m = re.search("MR_RES_POISON",line)
        if m:
            res += "'rP', "
        m = re.search("MR_RES_FIRE",line)
        if m:
            n = re.search("mrd\(.*?MR_RES_FIRE.*?, (\d+)\)",line)
            if n:
                res += "'rF" + int(n.group(1))*"+" + "', "
            else:
                res += "'rF" + "', "
        m = re.search("MR_RES_COLD",line)
        if m:
            n = re.search("mrd\(.*?MR_RES_COLD.*?, (\d+)\)",line)
            if n:
                res += "'rC" + int(n.group(1))*"+" + "', "
            else:
                res += "'rC" + "', "
        m = re.search("MR_RES_ELEC",line)
        if m:
            n = re.search("mrd\(.*?MR_RES_ELEC.*?, (\d+)\)",line)
            if n:
                res += "'rElec" + int(n.group(1))*"+" + "', "
            else:
                res += "'rElec" + "', "
        m = re.search("MR_RES_DAMNATION",line)
        if m:
            res += "'rDamnation" + "', "
        
        m = re.search("MR_VUL_FIRE",line)
        if m:
            vul += "'Fire" + "', "
        m = re.search("MR_VUL_COLD",line)
        if m:
            vul += "'Cold" + "', "
        m = re.search("MR_VUL_POISON",line)
        if m:
            vul += "'Poison" + "', "
        m = re.search("MR_VUL_WATER",line)
        if m:
            vul += "'Water" + "', "
        if "," in line:
            count +=1
        continue
    if count == 3:
        count +=1
        line_re = re.search("(\S+),\s*(\S+),\s*(\S+),(.*),\s+(\S+),",line)
        if line_re:
            family = line_re.group(2)
            mons = line_re.group(3)
            cat = line_re.group(4)
            mr = line_re.group(5)
            ##print("family: " + family, "mons: " + mons, "category: " + cat, "MR: " +mr)
            entry+= ''' family: "{}", mons: "{}", category: "{}", mr: "{}", '''.format(family,mons,cat,mr)
            if re.search("MH_HOLY",cat):
                res += "'rHoly', "
            if re.search("MH_UNDEAD",cat):
                res += "'rDrain', 'rN+++', 'rTorm', "
                vul += "'Holy', "
            if re.search("MH_DEMONIC",cat):
                res += "'rDrain', 'rN+++', 'rTorm', "
                vul += "'Holy', "

        continue
    if count == 4:
        count +=1
        continue
    if count == 5:
        count +=1
        line_re = re.search("   (\d+),\s+(\d+),",line)
        if line_re:
            hd = line_re.group(1)
            hp = line_re.group(2)
            entry += '''hp: {}, hd: {}, '''.format(hp,hd)
        continue
    if count == 6:
        count +=1
        line_re = re.search("   (\d+),\s+(\d+),",line)
        if line_re:
            ac = line_re.group(1)
            ev = line_re.group(2)
            #print("ac: " + ac, "ev: " + ev)
            entry += '''ac: {}, ev: {}, '''.format(ac,ev)
        continue
    if count == 7:
        count +=1
        line_re = re.search(",\s*(\d+)\s*,",line)
        if line_re:
            speed = line_re.group(1)
            #print("speed: " + speed)
            entry += '''speed: {}, '''.format(speed)
        continue
    if count == 8:
        count +=1
        line_re = re.search("SIZE_(\S+)",line)
        if line_re:
            size = line_re.group(1)
            #print("size: " + size)
            entry += '''size: "{}", '''.format(size.lower())



        entry += '''res: [{}], vul: [{}], '''.format(res,vul)

        if db == "":
            print("did not find image for name {}".format(name))
        image = find_image_path(db)
        entry += '''image: "{}", '''.format(image)
        entry+= "},\n"
        #print(entry)
        final  += entry
        entry= ""
        db = ""
        count =0
        continue



"""
{
    MONS_ADDER, 'S', LIGHTGREEN, "adder",
    M_COLD_BLOOD,
    MR_NO_FLAGS,
    10, MONS_SNAKE, MONS_ADDER, MH_NATURAL, mr: 10,
    { {AT_BITE, AF_POISON, 5}, AT_NO_ATK, AT_NO_ATK, AT_NO_ATK },
    HD: 2, exp: 110,
    ac: 1, ev: 15, MST_NO_SPELLS, CE_CLEAN, S_HISS,
    I_ANIMAL, HT_AMPHIBIOUS, speed: 13, SWIM_ENERGY(6),
    MONUSE_NOTHING, SIZE_LITTLE, MON_SHAPE_SNAKE,
    {TILEP_MONS_ADDER}, TILE_CORPSE_ADDER
},
{
    MONS_MOON_TROLL, 'T', LIGHTCYAN, "moon troll",
    M_WARM_BLOOD | M_SPEAKS | M_FAST_REGEN | M_SEE_INVIS
        | M_NO_POLY_TO | M_NO_GEN_DERIVED,
    MR_RES_FIRE | MR_RES_COLD | MR_RES_POISON,
    10, MONS_TROLL, MONS_MOON_TROLL, MH_NATURAL, 140,
    { {AT_BITE, AF_PLAIN, 35}, {AT_CLAW, AF_PLAIN, 25},
      {AT_CLAW, AF_PLAIN, 25}, AT_NO_ATK },
    18, 990,
    20, 4, MST_MOON_TROLL, CE_NOCORPSE, S_SHOUT,
    I_HUMAN, HT_LAND, 12, DEFAULT_ENERGY,
    MONUSE_WEAPONS_ARMOUR, SIZE_BIG, MON_SHAPE_HUMANOID,
    {TILEP_MONS_MOON_TROLL}, TILE_ERROR
},
{
    MONS_CRIMSON_IMP, '5', RED, "crimson imp",
    M_SPEAKS | M_FAST_REGEN | M_FLIES,
    MR_RES_POISON | mrd(MR_RES_FIRE, 3) | MR_VUL_COLD,
    13, MONS_CRIMSON_IMP, MONS_CRIMSON_IMP, MH_DEMONIC, 40,
    { {AT_HIT, AF_PLAIN, 4}, AT_NO_ATK, AT_NO_ATK, AT_NO_ATK },
    3, 135,
    3, 14, MST_BLINKER, CE_NOCORPSE, S_SHOUT,
    I_HUMAN, HT_LAND, 10, DEFAULT_ENERGY,
    MONUSE_WEAPONS_ARMOUR, SIZE_LITTLE,
         MON_SHAPE_HUMANOID_WINGED,
    {TILEP_MONS_CRIMSON_IMP}, TILE_ERROR
},
"""


final += "\n}"
path2 = "/Users/lmorao/quick/python/scripts/mon_db.txt"
with open(path2, "w+") as f:
    f.write(final)
