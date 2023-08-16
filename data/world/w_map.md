# Consept
* there will be 5 procedural generated limited maps:  3 continents and 2 islands
* with a predetermined min and max amount of features(citys, towns, dungeons, danger zones; forges, Buildings type, etc  per settlement; etc)
* each continent civic characteristics will be immutable, but individual city, towns, etc will have a independent and procedural(from a pool) civic characteristics 
* each region inside a continent has <Region Features> that will increase the chance of a settlement chose this place to be built(spawn) and will give a reason for casus belli or infiltration from another settlement
* the hierarchy of spawn is: World > Continent > Biome > Region > Territory(Settlement Area of Influence)
 # Variables
* Continent
    * ==== Global Government======
    * Political Structure:
    * Civ. Issue: e.g foreign relations
    * Stability:
    * Individual Freedom:
    * Scandals: e.g common, rare
    * Foreign Relations: e.g bad, good, indifferent, welcome
    * ===== Global Culture ========
    * Highly Values: e.g family, wealth, health, physical strength, intelligence
    * Known For: e.g architecture, Technology, Medicine
    * Popular Entertainment:
    * Respected Profession:
    * ===== Global Economy ======
    * Main resources: e.g Mining - Metal
    * Main Export: e.g machine components, medicine, minerals
    * Main Import: e.g textiles, ceramic
    * Trade: e.g import and export equal, more import, more export
    * Strength: e.g week but improving, bankrupt
    * Wealth: e.g in the hand of elite, controlled by government
    * ====== Global Military=======
    * Strength:
    * Focus: e.g sea, land, air, space, underground 
    * Main Unit: e.g small, stealth ships; big, warships; medium, aircraft
    * ====== Global Population========
    * Urban: e.g 55%
    * Rural: e.g 20%
    * commercial: 20%
    * Industrial: e.g 5%
    * Literacy Rate: e.g 69%
    * Gender Ratio: e.g 1 M/ F.   a.k.a 1 male per female
    * Fertility Rate: e.g 2.5       a.k.a 2.5 children per family 
    * Life Expectancy: e.g 72.4 years
    * ===== Building Details ========
    * Natural Resources: e.g very abundant, scarce
    * Latitude range:
    * Elevation Range:
    * Moisture Range:
    * City Quant. Range:
    * City Buildings Range[for each city]:
        * City Residential Buil. Range: min(), max(65% of City Buildings Range)
			> City Residential Buil. Englobes: Occuped Houses, Abandoned Houses, On Building Process Houses, Buildable Terrains, 
			> from whom Unoccuped houses(abandoned) and terrains are buyable or buildable to player.
            * City Residents Range: min(), max(City Residential Buil. Range * 3)
        * City Commercial Buil. Range: min(), max(City Buildings Range - City Residential Buil. Range)
        * City Industrial Buil. Range: min(), max(City Buildings Range - (City Residential Buil. Range + City Commercial Buil. Range))
    * Town Quant. Range:
    * Villages Quant. Range:
    * Dungeon Range:
    * Danger Zone Range:
    * Unique Dungeon Quant.:   //wich dungeon is spawned can't be repeated, and new ones will be spawed iver time
  
* City/Village
    * ==== Local Government======
    * Traditions:
    * Political Structure:
    * Civ. Issue: e.g foreign relations
    * Stability:
    * Individual Freedom:
    * Scandals: e.g common, rare
    * Foreign Relations: e.g bad, good, indifferent, welcome
    * ===== Local Culture ========
    * Highly Values: e.g family, wealth, health, physical strength, intelligence
    * Known For: e.g architecture, Technology, Medicine
    * Popular Entertainment:
    * Respected Profession:
    * ===== Local Economy ======
    * Main resources: e.g Mining - Metal
    * Main Export: e.g machine components, medicine, minerals
    * Main Import: e.g textiles, ceramic
    * Trade: e.g import and export equal, more import, more export
    * Strength: e.g week but improving, bankrupt
    * Wealth: e.g in the hand of elite, controlled by government
    * ====== Local Military=======
    * Strength:
    * Focus: e.g sea, land, air, space, underground 
    * Main Unit: e.g small, stealth ships; big, warships; medium, aircraft
    * ====== Local Population========
    * Urban: e.g 55%
    * Rural: e.g 20%
    * commercial: 20%
    * Industrial: e.g 5%
    * Literacy Rate: e.g 69%
    * Gender Ratio: e.g 1 M/ F.   a.k.a 1 male per female
    * Fertility Rate: e.g 2.5       a.k.a 2.5 children per family 
    * Life Expectancy: e.g 72.4 years
    * ======= Districts ===========
    * Urban District: (responsible for keeping the population)(e.g houses, mansions)
    * Industrial District: (responsible for Manufacturing, forging, etc)(e.g forges, factories, slaughterhouse, etc)
    * Commercial District: (responsible for Money management)(e.g Central Bank, Banks, Money House, Exchange Bank, etc)
    * Laboratory District: (responsible for research and experiments)
    * Entertainment District: (responsible for entertainment)
    * Generator District: (Responsible for power generation, been it coal, eletrical, nuclear, hydro, solar, etc)
    * Mining District: (where the miner bring the mined resources and refinaries polish the raw ore into useful metals or precious gems)
    * Agriculture District: (where are located farms, silos etc)
    
# Ruins(former Dungeons)
the Ruins will be procedure generated with pre-determined enemys and rewards
the name will be dependent of what the dungeons theme is:
e.g:
    tomb dungeons will have the name of some dead npc
    holds will have the name of a dead knight 
    sites are ruins that hold technologies(physical objects that can't be created from the tech tree), blueprints and techs(from tech tree(
    
# Traditions
* based in stellaris traditions, will be used to narrow the government type and behavior of a community
* types:
    * Expansionist, Prosperity, Mercantile, Diplomatic, Discovery, Harmony, Information (Specialized in give and get information, subterfuge), Cybernetic, genetic, Syntetic