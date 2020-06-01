
fixdict = {
"SPELL_CAUSE_FEAR"               : [1,0,1,1,"false", "Power multiplier of 3/2. Then it checks against the magic-resist of the target"],
"SPELL_FIREBALL"                 : [1,0,1,1, "true", "Always hits as an explosion"],
"SPELL_APPORTATION"              : [1,0,1,1],
"SPELL_CONJURE_FLAME"            : [6,3.66,0,1, 'false', "Cloud damage is not dependent on power."],
"SPELL_LIGHTNING_BOLT"           : [1,0,1,1],
"SPELL_BOLT_OF_MAGMA"            : [1,0,1,1],
"SPELL_SLOW"                     : [1,0,1,1],
"SPELL_INVISIBILITY"             : [1,0,1,1],
"SPELL_CONTROLLED_BLINK"         : [1,0,1,1],
"SPELL_DISJUNCTION"              : [1,0,1,1],
"SPELL_FREEZING_CLOUD"           : [6,3.66,0,1, 'false', "Any freezing cloud damage per turn to a monster is the same. Power doesn't affect damage"],
"SPELL_MEPHITIC_CLOUD"           : [1,0,1,1],
"SPELL_RING_OF_FLAMES"           : [6,3.66,0,1, 'false', "Cloud damage is not dependent on power. The power will determine the duration, formula is 6 + (power/10) + random(0,power)/5 so about 25 turns for 100 power. The maximum duration is 50 turns."],
"SPELL_OLGREBS_TOXIC_RADIANCE"   : [1,0,1,1],
"SPELL_TELEPORT_OTHER"           : [1,0,1,1],
"SPELL_DEATHS_DOOR"              : [1,0,1,1],
"SPELL_SUMMON_SMALL_MAMMAL"      : [1,0,1,1],
"SPELL_AURA_OF_ABJURATION"       : [1,0,1,1],
"SPELL_LEHUDIBS_CRYSTAL_SPEAR"   : [10,23,1,1, 'true'],
"SPELL_TORNADO"                  : [9,0,1,15, 'false', "Damage depends on open spaces, distance from the targets and the duration left. The further away, and the longer its been active, the more confined space, the less damage it does. The damage is reduced by armour"],
"SPELL_FIRE_STORM"               : [8,5,1,1, 'true', "This is a BEAM_LAVA, which means it bypasses some of the rF. This also generates clouds of fire that have a fixed damage, and the vortexes"],
"SPELL_BLINK"                    : [1,0,1,1],
"SPELL_ISKENDERUNS_MYSTIC_BLAST" : [2,6,1,3, 'true'],
"SPELL_SUMMON_HORRIBLE_THINGS"   : [1,0,1,1],
"SPELL_MALIGN_GATEWAY"           : [1,0,1,1],
"SPELL_ANIMATE_DEAD"             : [1,0,1,1],
"SPELL_ANIMATE_SKELETON"         : [1,0,1,1],
"SPELL_VAMPIRIC_DRAINING"        : [1,7.5,1,2, "false", "Can only drain if the target doesn't have negative resistance (rN). The spell can't drain more than the target's hp. The formula is approximated"],
"SPELL_HAUNT"                    : [1,0,1,1, "false", "Total summoned: 2*log2(1+ (random(pow)/10 + random(pow)/10)/2), so about 5-6 summons at 100 power"],
"SPELL_BORGNJORS_REVIVIFICATION" : [1,0,1,1],
"SPELL_FREEZE"                   : [1,3,1,3, 'false', "Ignores AC and EV"],
"SPELL_SUMMON_ICE_BEAST"         : [3,0,1,13,'false',  "Number presented is the summoned beast's HD (ingore the avg dmg). The beasts hit damage will be 5 + Cold(HD + 1dice(HD*2) - 1), think of it as 5 + 2*HD cold"],
"SPELL_OZOCUBUS_ARMOUR"          : [1,0,1,1],
"SPELL_CALL_IMP"                 : [1,0,1,1],
"SPELL_DISPEL_UNDEAD"            : [1,0,1,1],
"SPELL_REGENERATION"             : [1,0,1,1],
"SPELL_SUBLIMATION_OF_BLOOD"     : [1,0,1,1],
"SPELL_TUKIMAS_DANCE"            : [1,0,1,1],
"SPELL_SUMMON_DEMON"             : [1,0,1,1],
"SPELL_SUMMON_GREATER_DEMON"     : [1,0,1,1],
"SPELL_CORPSE_ROT"               : [1,0,1,1],
"SPELL_IRON_SHOT"                : [1,0,1,1],
"SPELL_SWIFTNESS"                : [1,0,1,1],
"SPELL_RECALL"                   : [1,0,1,1],
"SPELL_AGONY"                    : [1,0,1,1],
"SPELL_SPIDER_FORM"              : [1,0,1,1],
"SPELL_BLADE_HANDS"              : [1,0,1,1],
"SPELL_STATUE_FORM"              : [1,0,1,1],
"SPELL_ICE_FORM"                 : [1,0,1,1],
"SPELL_DRAGON_FORM"              : [1,0,1,1],
"SPELL_HYDRA_FORM"               : [1,0,1,1],
"SPELL_NECROMUTATION"            : [1,0,1,1],
"SPELL_DEATH_CHANNEL"            : [1,0,1,1],
"SPELL_DEFLECT_MISSILES"         : [1,0,1,1],
"SPELL_AIRSTRIKE"                : [5,2,1,7, "true", "Damage: 8 + empty_space + random(2+power/7). empty_space only starts counting after 3 spaces, so if there are 8 spaces around the target it adds 5 damage. It does extra damage to flying. The damage is reduced by armour."],
"SPELL_SHADOW_CREATURES"         : [1,0,1,1],
"SPELL_CONFUSING_TOUCH"          : [1,0,1,1],
"SPELL_PASSWALL"                 : [1,0,1,1],
"SPELL_IGNITE_POISON"            : [2,12,6,100,'false',  "Damage per stack, multiply by the stacks of poison"],
"SPELL_STICKS_TO_SNAKES"         : [1,0,1,1],
"SPELL_CALL_CANINE_FAMILIAR"     : [1,0,1,1],
"SPELL_ENGLACIATION"             : [1,0,1,1],
"SPELL_SUMMON_BUTTERFLIES"       : [1,0,1,1],
"SPELL_SILENCE"                  : [1,0,1,1],
"SPELL_SHATTER"                  : [1,0,1,1],
"SPELL_DISPERSAL"                : [1,0,1,1],
"SPELL_DISCHARGE"                : [1,0,1,1],
"SPELL_CORONA"                   : [1,0,1,1],
"SPELL_INTOXICATE"               : [1,0,1,1],
"SPELL_LRD"                      : [3,5,1,5, "false", "The damage is an explosion reduced by armour. If cast directly on a monster it will do the damage without ac reduction + the normal explosion as if it was from a wall. It will do a third more for certain targets like bone, iron, etc."],
"SPELL_SIMULACRUM"               : [1,0,1,1],
"SPELL_CONJURE_BALL_LIGHTNING"   : [1,0,1,1],
"SPELL_CHAIN_LIGHTNING"          : [1,0,1,1],
"SPELL_EXCRUCIATING_WOUNDS"      : [1,0,1,1],
"SPELL_PORTAL_PROJECTILE"        : [1,0,1,1],
"SPELL_MONSTROUS_MENAGERIE"      : [1,0,1,1],
"SPELL_GOLUBRIAS_PASSAGE"        : [1,0,1,1],
"SPELL_FULMINANT_PRISM"          : [1,0,1,1],
"SPELL_IOOD"                     : [9,0,1,4, "false", "Less damage if less than 4, 50% power at 1 space, 70% at 2 and 90% at 3."],
"SPELL_LEDAS_LIQUEFACTION"       : [1,0,1,1],
"SPELL_SUMMON_HYDRA"             : [1,0,1,1],
"SPELL_DARKNESS"                 : [1,0,1,1],
"SPELL_SHROUD_OF_GOLUBRIA"       : [1,0,1,1],
"SPELL_INNER_FLAME"              : [1,0,1,1],
"SPELL_BEASTLY_APPENDAGE"        : [1,0,1,1],
"SPELL_BATTLESPHERE"             : [1,0,1,1],
"SPELL_DAZZLING_FLASH"           : [1,0,1,1],
"SPELL_INFUSION"                 : [1,0,1,1],
"SPELL_SONG_OF_SLAYING"          : [1,0,1,1],
"SPELL_SPECTRAL_WEAPON"          : [1,0,1,1],
"SPELL_SEARING_RAY"              : [1,0,1,1],
"SPELL_DISCORD"                  : [1,0,1,1],
"SPELL_SUMMON_FOREST"            : [1,0,1,1],
"SPELL_SUMMON_LIGHTNING_SPIRE"   : [1,0,1,1],
"SPELL_SUMMON_GUARDIAN_GOLEM"    : [1,0,1,1],
"SPELL_GLACIATE"                 : [1,0,1,1],
"SPELL_DRAGON_CALL"              : [1,0,1,1],
"SPELL_SPELLFORGED_SERVITOR"     : [1,0,1,1],
"SPELL_SUMMON_MANA_VIPER"        : [1,0,1,1],
"SPELL_IRRADIATE"                : [1,0,1,1],
"SPELL_GRAVITAS"                 : [1,0,1,1],
"SPELL_VIOLENT_UNRAVELLING"      : [1,0,1,1],
"SPELL_INFESTATION"              : [1,0,1,1],
"SPELL_BECKONING"                : [1,0,1,1],
"SPELL_POISONOUS_VAPOURS"        : [1,0,1,1],
"SPELL_IGNITION"                 : [3,10,1,3, "true", "shoots a beam_fire and is an explosion that will always hit"],
"SPELL_STARBURST"                : [6,18,2,3, 'true', "Fires a bolt of fire in 8 directions, damage displayed is from bolt of fire."],
"SPELL_FOXFIRE"                  : [1,3,1,3],
"SPELL_HAILSTORM"                : [3,10,1,2, 'true', "Casts in a circle around the caster 2 spaces away, each tile damage calculated separetely"],
"SPELL_NOXIOUS_BOG"              : [1,0,1,1],
}

fixlist = []
def ns(s):
    return re.sub(" ","",s)
def qu(s):
    return '"' + s + '"'

path2 = "/Users/lmorao/quick/web/crawl/crawl-ref/source/rltiles/dc-spells.txt"
with open(path2, "r") as f:
    g2 = f.read()
img_d = {}
img_dir = g2.split("dir")[1:]
for school in img_dir:
    spells = school.split("\n")
    folder = ns(spells[0])
    for line in spells[1:]:
        m  =re.search("(\S+)\s+(\S+)",line)
        if m:
            img_d["SPELL_" + m.group(2)] = folder + "/" + m.group(1) + ".png"


path3 = "/Users/lmorao/quick/web/crawl/crawl-ref/source/spl-zap.cc"
with open(path3, "r") as f:
    g = f.read()
h3 = g.split("\n")
def find_zap(db):
    zap = ""
    for line in h3:
        if db in line:
            m = re.search("{}, (\S+)".format(db),line)
            if m:
                zap = m.group(1)
    return zap



path4 = "/Users/lmorao/quick/web/crawl/crawl-ref/source/zap-data.h"
with open(path4, "r") as f:
    g = f.read()

h = re.sub("\n","",g )
spells = h.split("{")[3:]
zapd = {}
#zapd[""] = {'ndice':1, 'pdice':0,'mdice':1,'ddice':1}

for spell in spells[2:]:
    s = spell.split("}")[0]
    s = re.sub("//\S+","",s)
    #s=ns(s)
    s = s.split(",    ")
    db = ns(s[0])
    zapd[db] = {}
    zapd[db]['power'] = s[2] 

    m = re.search("_calculator<(\d+), (\d+), (\d+), (\d+)>",s[3])
    if m:
        zapd[db]['ndice'] = m.group(1)
        zapd[db]['pdice'] = m.group(2)
        zapd[db]['mdice'] = m.group(3)
        zapd[db]['ddice'] = m.group(4)
    else: 
        if db in fixdict:
            t2 = fixdict[db]
            zapd[db]['ndice'] = t2[0]
            zapd[db]['pdice'] = t2[1]
            zapd[db]['mdice'] = t2[2]
            zapd[db]['ddice'] = t2[3]
        else:
            zapd[db]['ndice'] = 1
            zapd[db]['pdice'] = 0
            zapd[db]['mdice'] = 1
            zapd[db]['ddice'] = 1
    m = re.search("calcdice",s[3])
    if m:
        zapd[db]['calcdice'] = 'true'
    else:
        zapd[db]['calcdice'] = 'false'

    zapd[db]['hitp'] = 0
    zapd[db]['hitm'] = 0
    zapd[db]['hitd'] = 1
    m = re.search("tohit_calculator<(\d+), (\d+), (\d+)>",s[4])
    if m:
        zapd[db]['hitp'] = m.group(1)
        zapd[db]['hitm'] = m.group(2)
        zapd[db]['hitd'] = m.group(3)
    m = re.search("tohit_calculator<(\d+)>",s[4])
    if m:
        zapd[db]['hitp'] = m.group(1)
        zapd[db]['hitm'] = 0
        zapd[db]['hitd'] = 1
    m = re.search("tohit_calculator<AUTOMATIC_HIT>",s[4])
    if m:
        zapd[db]['hitp'] = 100
        zapd[db]['hitm'] = 0
        zapd[db]['hitd'] = 1
    




path = "/Users/lmorao/quick/web/crawl/crawl-ref/source/spl-data.h"
with open(path, "r") as f:
    g = f.read()

h0 = re.sub("//.*(?!\n)*","",g )
h = re.sub("\n","",h0 )
spells = h.split("{")[3:]
d_spells = Munch("")
entry =""

for spell in spells:
    s = spell.split("}")[0]
    s = re.sub("\s+"," ",s)
    s = s.split(",")
    db = ns(s[0])
    display = re.search("\".*\"", s[1]).group(0)

    type1 = re.search("spschool::(\S+)\s*\|?\s*(?:\S*::)?(\S*)",s[2]).group(1)
    type2 = re.search("spschool::(\S+)\s*\|?\s*(?:\S*::)?(\S*)",s[2]).group(2)
    type3 = re.search("spschool::(\S+)\s*\|?\s*(?:\S*::)?(\S*)\s*\|?\s*(?:\S*::)?(\S*)",s[2]).group(3)
    if type1 in ['ice', 'fire', 'poison', 'air', 'earth']:
        type1 += " magic"
    if type2 in ['ice', 'fire', 'poison', 'air', 'earth']:
        type2 += " magic"
    if type1 in ['summoning', 'transmutation', 'translocation', 'conjuration']:
        type1 += "s"
    if type2 in ['summoning', 'transmutation', 'translocation', 'conjuration']:
        type2 += "s"
    if type3 in ['ice', 'fire', 'poison', 'air', 'earth']:
        type3 += " magic"
    if type3 in ['summoning', 'transmutation', 'translocation', 'conjuration']:
        type3 += "s"
    flags = ns(s[3]).split("|")
    flags = ""
    s[4] = re.sub("//\S+","",s[4])
    level = ns(s[4])
    power = ns(s[5])
    if int(power) == 0: power =1
    rini = ns(s[6])
    rmax = ns(s[7])
    if type(rini) != int: rini = '""'
    if type(rmax) != int: rmax = '""'
    no = ns(s[8])
    noe = ns(s[9])
    if type(no) != int: no = '""'
    if type(noe) != int: noe = '""'
    if find_zap(db) in zapd:
        n = zapd[find_zap(db)]['ndice']
        p = zapd[find_zap(db)]['pdice']
        m = zapd[find_zap(db)]['mdice']
        d = zapd[find_zap(db)]['ddice']
        calcdice  = zapd[find_zap(db)]['calcdice']
        notes = ""
        if db in fixdict:
            if len(t2) >5:
                notes = t2[5]
        hitp = zapd[find_zap(db)]['hitp']
        hitm = zapd[find_zap(db)]['hitm']
        hitd = zapd[find_zap(db)]['hitd']
    else:
        calcdice  = 'false' 
        notes = ""
        if db in fixdict:
            t2 = fixdict[db]
            n = t2[0]
            p = t2[1]
            m = t2[2]
            d = t2[3]
            hitp = 0
            hitm = 0
            hitd = 1
            if len(t2) >4:
                calcdice = t2[4]
            if len(t2) >5:
                notes = t2[5]
        else:
            n=m=d = 1
            p = 0
            hitp = 0
            hitm = 0
            hitd = 1
    if db in img_d:
        img = qu(img_d[db])
    else: 
        img = qu("gui/commands/help.png")
    temp = """{}: {{db: {}, display: {}, type1: {}, type2: {}, type3: {}, flags: {}, level: {}, power: {}, rini: {}, rmax: {}, noise: {}, noise_e: {}, img: {}, ndice: {}, pdice: {}, mdice: {}, ddice: {}, calcdice: {}, hitp: {}, hitm: {}, hitd : {}, notes: {}}},"""\
    .format(qu(db),qu(db),display,qu(type1),qu(type2),qu(type3),qu(flags),level,power,rini,rmax,no,noe, img, n, p, m, d, calcdice, hitp, hitm, hitd, qu(notes))
    if n ==1 and p ==0 and m ==1 and n ==1:
        fixlist.append(db)
    print(temp)
    entry += temp

fixthese = []
path5 = "/Users/lmorao/quick/web/crawl/crawl-ref/source/book-data.h"
with open(path5, "r") as f:
    g5 = f.read()
for item in fixlist:
    if item in g5:
        fixthese.append(item)
        #print('{:33}: [1,0,1,1],'.format('"'+item+'"') )
        

