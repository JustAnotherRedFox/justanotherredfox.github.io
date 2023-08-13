# Dictionary
## Equations
### Material Deterioration
* Deterioration(Rustiness or decay)
* the percentage which the material is deteriorating
* 0 to 1, if 0 nothing will happen, if 1: 100% of sharpness, absorption, hardness, beauty will be reduced, and 99% of durability
* the value if defined by the sum of all deterioration rate
* if material is a impure or half impure metal,  deterioration +90% and +50% respectively 

* time deterioration rate
    * determine the current time deterioration rate
    * increase defined by deterioration factor
    * time deterioration rate += time deterioration factor  
* wet deterioration rate
    * determine the current wet deterioration rate
    * increase defined by deterioration factor
    * wet deterioration rate += wet deterioration factor 
* submersion deterioration rate
    * determine the current water submersion deterioration rate
    * increase defined by deterioration factor
    * submersion deterioration rate += submersion deterioration factor 
* cold deterioration rate
    * determine the current cold deterioration rate
    * increase defined by deterioration factor
    * cold deterioration rate += cold deterioration factor 
* heat deterioration rate
    * determine the current heat deterioration rate
    * increase defined by deterioration factor
    * heat deterioration rate += heat deterioration factor 
    
* time deterioration factor
    * defines the amount of deterioration that occurs in defined situation
    * amount of deterioration rate increase each day
    * +0.0001
* wet deterioration factor
    * defines the amount of deterioration that occurs in defined situation
    * amount of deterioration rate increase each day, only when wet
    * +0.009
* submersion deterioration factor
    * defines the amount of deterioration that occurs in defined situation
    * amount of deterioration rate increase each day, only when submerged on water
    * +0.07
* cold deterioration factor
    * defines the amount of deterioration that occurs in defined situation
    * amount of deterioration rate increase each day, only when mild cold, moderate cold, severe cold, freezing and deadly cold
    * +0.0001 when mild cold
    * +0.0005 when moderate cold
    * +0.0009 when severe cold
    * +0.005 when freezing
    * +0.009 when deadly cold 
* heat deterioration factor
    * defines the amount of deterioration that occurs in defined situation
    * amount of deterioration rate increase each day, only when hot, Desert heat, heatwave, scorching, deadly hot and deadly heatwave
    * +0.0001 when hot
    * +0.0009 when desert heat
    * +0.001 when scorching
    * +0.003 when heatwave
    * +0.009 when deadly hot
    * +0.07 when deadly heatwave
### General Equations
* Product Market Value
    * PMK = (((PMV * PMQ) * PB) * PQ) * PRV
        * PMK: Product Market Value
        * PMV: Product Material Value
        * PMQ: Product Material Quantity
        * PB: Product Beautiness
        * PQ: Product Quality
        * PRV: Product Raw Value
* Product Beautiness
    * PB = (PMB * PQ) - ((PD * 100) * ((PMB * PQ) / 100))
        * PB: Product Beautiness
        * PMB: Product Material Beautiness
        * PQ = Product Quality
        * PD: Product Deterioration
* Product Deterioration
    * PD = TDD + WDD + SDD + CDD + HDD
        * PD = Product Deterioration
        * TDD: Time Deterioration Degree 
        * WDD: Wet Deterioration Degree 
        * SDD: Submersion Deterioration Degree 
        * CDD: Cold Deterioration Degree 
        * HDD: Heat Deterioration Degree
* Product Work to Make
    * PWtM = (25 * MWtMM) / KRP
        * PWtM: Product Work to Make
        * MWtMM: Material Work to Make Modifier
        * KRP: Knowledge Required Proficiency
## Terms
### Calendar
* General YYYY/MM/DD Season 

* Months
1: January
2: February
3: March
4: April
5: May 
6: June
7: July
8: August
9: September 
10: October
11: November
12: December 

### Material Ages
> early age: research and use of especified material
> lately age: daily use and improvement in the use of the material

* Stone Age
	* early	
		* Stone tools
		* wood tools
		* leather apparel
		* hardened leather apparel
	* lately
		* masonry
		* refined stone archtecture
		
* Iron Age
	* early
	* lately
	
* copper age
	* early
		* copper ingot
		* zinc ingot
		* tin ingot
	* lately
		* brass alloy
		* bronze alloy
		* bronze alloys

* Coal Age
	* early
		* coal
		* charcoal
		* rustic steam power
	* lately
		* efficient steam power

* Paper Age
	* early
		* scrolls
		* leather books
	* lately
		* books

* Steel Age
	* early
	* lately
	
* Glass Age
	* early
		* Rustic glass
		* Mica Glass
	* lately
		* Sand Glass
		* refined Glass
		* Colored Glass

* Aluminum Age
	* early
	* lately

* Tungsten Age
	* early
        * Tungsten ingot
		* Reinforced Glass
	* lately
        * Tungsten Alloys

* Palladium Age
	* early
		* palladium Ingot
		* Ruthenium Ingot
		* Platinum Ingot
		* Rhodium
	* lately
		* Osmium Ingot
		* Iridium Ingot
		* Osmium Alloys
	
* Densitium age
	* early
		* Densitium Ingot
	* lately
		* Densitium Alloys

### Technology Level
* Low Medieval
    * Buildings
        * villages
        * Wood Structures
        * Stone Structures
    * Manufacture
        * Tier 1 Metals
        * simple weavering and clothing
        * Leather Clothes
        * Rustic Cotton Clothes
    * Technology
        * Wood Tools
        * Stone Tools
        * Fire
        * use of animal fat and firewood as fuel
        * Simple Farming
        * Herbal Medicine
        * Scrolls
    * Placement 
        * Usually appears in spots more extreme of the continent like, the northern taiga forest, the northern alpine mountains or the equator dense rain forest

* High Medieval
    * Buildings
        * Small Towns
        * Medium Towns
        * Castles
        * Sculpt Wood Structures
        * Refined Stones Structures
        * Iron Mixed Structures
    * Manufacture
        * Tier 2 and 3 Metals
        * rustic glass made of mica
        * Fabric Clothes
        * jewelery 
    * Technology
        * fueled lamps
        * Stone ovens and primitive furnaces
        * compasses, eyeglasses
        * telescopes and microscope
        * simple chemistry 
        * advanced non-mechanical farming and fertilizer
        * hydro and wind energy source
        * Hydraulic Generator power source
        * Coal, charcoal and firewood as fuel
        * rustic books
    * Placement 
        * Appear in the more estable areas cross the continent like, the border of temperates forest and plains

* Industrial
    * citys
    * fission reactor
    * electricity
    * hydro power, solar power, fission power
    * Silicon computers
    * prosthetics
    * television 
    * tier 4 and 5 metals

* Spacial
    * molecular nano fiber
    * advanced creation of thread and fabrics
    * advanced solar array
    * Power armor
    * Arch Prosthetic
    * Tier 6 metals
    * mech manufacture
    * biogel nerve link
    * Quantum Reactor
    * FTL Drive

### Nomenclature
*  [Quality] [Material] [Type]
    * material: the main material the object is made of
    * Type: the type of object 
    * quality: the quality of the object
    * e.g [normal][wood][long bow]
    
* SR
    * Stress Resistance (Health Pool on living beings)
    * refer to the total damage that a living being (human, animal or plant) can take before dying
    * materials don't have HP they have DP instead
    * modifiers can increase or decrease the total pool
    * decease can reduce total HP and endurence can increase
    * default: 100
    
* SR
    * Stress Resistance (Durability Pool on materials and itens)
    * refer to the total damage that a material can take before broke
    * if reach 0 the material will receive a [broken] tag if a equipment or tool
    * if is a material it will be destroyed instead 
    * items with the [broken] tag will have 0% usability, thise items are useless for they purpose 
    * Default: 100
    
* Weight
    * Mass * Gravity

* Mass 
    * Volume * Density

* beauty
    * beauty on materials and objects
    * affected by deterioration
    * affects market value

* Density
    * each equipment or tool will inherit the density of its source material
    * to damage(attack/defence) calculation usually uses contact material density
    * e.g wood shield: body density, iron arrow: head density 
    
### Formulas
* Volume
    * Cube:  (V=s³), volume =  length * length * length, e.g V cm³
    * Rectangle: (V=lwh), Volume = length * width * height, e.g V cm³
    * Cylinder: (V=πr²h), Volume = 3.14 * (radius * radius) * height, e.g V cm³
    * Square Pyramid: (V=1/3bh), Volume = 0.33 * (base * height), e.g V cm³
    * Cone: (V=1/3πr²h), Volume = 0.33 * (3.14 * (radius * radius) * height), e.g V cm³
    * sphere: (4/3πr³), Volume = 1.33 * (3.14 * (radius * radius * radius)), e.g V cm³
    
* Size
    * Weight: (F=mg), Weight = Mass * Gravity(9.8m/s²).
    * Mass: (M=vd), Mass = Volume * Density.
    * Momentum: (F=mv), Mass * Velocity
    * Kinetic Energy: (K=mv²/2), Kinetic Energy = (Mass * (Velocity * Velicity)) / 2
    

* Composite material Density
    * is used to calculate the density of a compound material(e.g alloys) or weight(total density of a equipment or tool)
    * 1st material percentage in compound * 1st material density + 2nd material percentage in compound * 2nd material density = compound density
    * mrc = mercury(13.5g/cm3), wtr = water(1.0g/cm³),
    *  composite material( 40% mrc, 60% wtr)
    * e.g (0.40 * 13.5) + (0.60 * 1.0) = 3.24 g/cm³
    
### scientific connotation and abbreviation
* E+: n * 10 ^ Nth 
    * e.g 3.1E+12
    * means 3.1 * 10¹²
* cm³
    * e.g 5cm³
    * cubic centimeters 
* g/cm³
    * e.g 7.8 g/cm³
    * grammar per cubic centimeters 
* kPa
    * e.g 1 kPa
    * kilopascal 
    * equivalent to 0.14 psi (pounds per square inch)
    * like psi is a unit of pressure measurement 
* j
    * e.g 20j
    * joules
    * used as kinetic energy measurement unit 
* #U
     * Is a Placeholder for unit
## Classifications

### Proficiency labor 
Tier     proficiency      Profission Title     Equipment Classification    
tier 0   0.16             unskilled            Unusable                   
tier 1   0.32             novice               Improvised                 
tier 2   0.48             adequade             Poorly Crafted             
tier 3   0.64             competent            Common                     
tier 4   0.8              skilled              Well Crafted               
tier 5   0.96             proficient           Uncommon                   
tier 6   1.12             talented             Rare                       
tier 7   1.28             adept                Unusual                    
tier 8   1.44             expert               Fine                       
tier 9   1.6              professional         Refined                    
tier 10  1.76             accomplished         Superior                   
tier 11  1.92             Great                Exceptional                
tier 12  2.08             Master               Master Piece               
tier 13  2.24             High Master          Unique                     
tier 14  2.4              Grand Master         Legendary                  
tier 15  2.56             Legendary            Historical            

### Attributes Ranks
> G, F, E, D, C, B, A(Apex), S(Surpassor), X(eXceeded), Z(Zenith)

// increase by 0.30
* G   = 0.10 ~ 0.29
* F-  = 0.30 ~ 0.59
* F   = 0.60 ~ 0.89   * NT: normal adult human
* F+  = 0.90 ~ 1.19
* F++ = 1.20 ~ 1.49

// increase by 0.35
* E-  = 1.50 ~ 1.84
* E   = 1.85 ~ 2.19
* E+  = 2.20 ~ 2.54
* E++ = 2.55 ~ 2.89

// increase by 0.40
* D-  = 2.90 ~ 3.29
* D   = 2.30 ~ 3.69
* D+  = 3.70 ~ 4.09
* D++ = 4.10 ~ 4.49

// increase by 0.45
* C-  = 4.50 ~ 4.94
* C   = 4.95 ~ 5.39
* C+  = 5.40 ~ 5.84
* C++ = 5.85 ~ 6.29

// increase by 0.50
* B-  = 6.30 ~ 6.79
* B   = 6.80 ~ 7.29
* B+  = 7.30 ~ 7.79
* B++ = 7.80 ~ 8,29

// increase by 0.60
* A-  = 8.30 ~ 8.89
* A   = 8.90 ~ 9.49
* A+  = 9.50 ~ 10.09
* A++ = 10.10 ~ 10.69

// increase by 0.75
* S-  = 10.70 ~ 11.44
* S   = 11.45 ~ 12.19
* S+  = 12.20 ~ 12.94
* S++ = 12.95 ~ 13.69

// increase by 0.95
* X-  = 13.70 ~ 14.64
* X   = 14.65 ~ 15.59
* X+  = 15.60 ~ 16.54
* X++ = 16.55 ~ 17.49

// increase by 1.25
* Z-  = 17.50 ~ 18.74
* Z   = 18.75 ~ 19.99
* Z+  = 20.00 ~ 21.24
* Z++ = 21.25 ~ 22.50

### Threat Levels
* URGENT NOTE: * higher threat level doesn't means bigger or stronger but higher lethality, like a camouflaged snake with the strongest venom with no cure, that kill you in 3 secs, it will be level z++ lethality 
* Normal
    * Descripiton:
        > A normal level of Threat, a Weak human can deal with
    * Rank Needed:
        * G, F-

* Low 
    * Descripition:
        > A Low Level of Threat, a Normal Human Can Deal With
    * Rank Needed:
        * F

* Minor 
    * Descripition:
        > A Minor Threat, A Normal Human Can deal with it, with some struggle
    * Rank Needed:
        * F+, F++

* Moderate 
    * Descripition:
        > 
    * Rank Needed:
        *

* Major 
    * Descripition:
        > 
    * Rank Needed:
        *

* Substancial 
    * Descripition:
        > 
    * Rank Needed:
        *

* Severe 
    * Descripition:
        > 
    * Rank Needed:
        *

* Critical 
    * Descripition:
        > 
    * Rank Needed:
        *

* Exceptional 
    * Descripition:
        > 
    * Rank Needed:
        *

* Immeasurable 
    * Descripition:
        > 
    * Rank Needed:
        *

* Unfantable 
    * Descripition:
        > 
    * Rank Needed:
        *

* Unknown
    * Descripition:
        > 
    * Rank Needed:
        *

### Beast Ranks
* Ranks
    * unranked
    * knight/Dame
    * Lord/Lady
    * Baron/Baroness
    * Duke/Duchess
    * Archduke/Archduchess
    * Prince/princess
    * King/Queen
    * Emperor/Empress 

#### Unranked
* Suffix: Unranked, ex.: Unranked Cow
- Radiation Level: 
- Threat level: Low
- Mind: F ~ F++
- Knowledge: G
- Reaction Speed: 
- Resistance: 
- Lung Strength: 
- Muscular Strength:
- Muscular Density: 
- Muscular Elasticity:
- Hand Dexterity: 
- Leg Dexterity: 

#### Knight/Dame
* Suffix: Elite, ex.: Cow Elite
- Threat level: Major
- Mind: F ~ E++
- Knowledge: G
- Reaction Speed: 
- Resistance: 
- Lung Strength: 
- Muscular Strength: 
- Muscular Density: 
- Muscular Elasticity: 
- Hand Dexterity: 
- Leg Dexterity: 

#### Lord/Lady
* Suffix: General, ex.: Cow General
- Threat level: Substancial
- Mind: E ~ D++
- Knowledge: G
- Reaction Speed: 
- Resistance: 
- Lung Strength: 
- Muscular Strength: 
- Muscular Density: 
- Muscular Elasticity: 
- Hand Dexterity: 
- Leg Dexterity: 

#### Baron/Baroness
* Suffix: Lord, ex.: Cow Lord
- Threat level: Minor
- Mind: D ~ C++
- Knowledge: G
- Reaction Speed: 
- Resistance: 
- Lung Strength: 
- Muscular Strength: 
- Muscular Density: 
- Muscular Elasticity: 
- Hand Dexterity: 
- Leg Dexterity: 

#### Duke/Duchess
* Suffix: Emperor, ex.: Cow Emperor
- Threat level: Severe
- Mind: C ~ B++
- Knowledge: G
- Reaction Speed: 
- Resistance: 
- Lung Strength: 
- Muscular Strength: 
- Muscular Density: 
- Muscular Elasticity: 
- Hand Dexterity: 
- Leg Dexterity: 

#### Archduke/Archduchess
* Suffix: Monarch, ex.: Cow Monarch
- Threat level: Critical
- Mind: B ~ B++
- Knowledge: G
- Reaction Speed: 
- Resistance: 
- Lung Strength: 
- Muscular Strength:
- Muscular Density: 
- Muscular Elasticity:
- Hand Dexterity: 
- Leg Dexterity: 

#### Prince/princess
#### King/Queen
#### Emperor/Empress 

### Special Ranks
- farm, Berserker, Titanic, Behemoth, Leviathan, Legend

#### Farm
* Suffix: Farm, ex.: Farm Cow
- Threat level: Normal
- Mind: F- ~ F
- Knowledge: G
- Reaction Speed: G ~ F
- Resistance: G ~ F
- Lung Strength: G ~ F
- Muscular Strength: G ~ F-
- Muscular Density: G ~ F-
- Muscular Elasticity: G ~ F-
- Hand Dexterity: G ~ F-
- Leg Dexterity: G ~ F-

#### Berserker
* Suffix: Berserker, ex.: Berserker Cow
* Caracteristic: ranpage-like state
- Threat level: Substancial
- Mind: reduced to G
- Knowledge: reduced to G
- Reaction Speed: rank -4 (ex.: from B++ to C++
- Resistance: rank +4
- Lung Strength: rank +7
- Muscular Strength: rank +10
- Muscular Density: rank +4
- Muscular Elasticity: rank -4
- Hand Dexterity: rank -2
- Leg Dexterity: rank +5

#### Titanic
* Suffix: Titanic, ex.: Titanic Cow
* Caracteristic: always huge in size
- Threat level: Exceptional
- Mind: D- ~ A++
- Knowledge: G ~ F++
- Reaction Speed: A- S+
- Resistance: A++ ~ X-
- Lung Strength: A++ ~ X-
- Muscular Strength: A++ ~ X-
- Muscular Density: A++ ~ X-
- Muscular Elasticity: A- S-
- Hand Dexterity: A- S-
- Leg Dexterity: A- S-

#### Behemoth
* Prefix: by age, ex.: young Behemoth
* Caracteristics: a monster with appearence of a hippo
- Threat level: immeasurable
- Mind: A- ~ S++
- Knowledge: C- ~ B-
- Reaction Speed: S++ ~ X-
- Resistance: X- ~ Z++
- Lung Strength: X- ~ X++
- Muscular Strength: X- ~ X++
- Muscular Density: X- ~ X++
- Muscular Elasticity: S++ ~ X-
- Hand Dexterity: S++ ~ X-
- Leg Dexterity: S++ ~ X-

#### Leviathan
* Prefix: by age, ex.: Old Leviathan
* Caracteristics: a monster with the apearence of a aligator
- Threat level: immeasurable
- Mind: A- ~ S++
- Knowledge: C- ~ B-
- Reaction Speed: X- ~ Z++
- Resistance: S++ ~ X-
- Lung Strength: S++ ~ X
- Muscular Strength: X- ~ X++
- Muscular Density: S++ ~ X-
- Muscular Elasticity: X- ~ X++
- Hand Dexterity: X- ~ X++
- Leg Dexterity: X- ~ X++

#### Legends
* Prefix: Legendary, ex.: legendary kraken
- Threat level: unfantable
- Mind: S++ ~ Z++
- Knowledge: B- ~ Z++
- Reaction Speed: Z- ~ Z++
- Resistance: Z- ~ Z++
- Lung Strength: Z- ~ Z++
- Muscular Strength: Z- ~ Z++
- Muscular Density: Z- ~ Z++
- Muscular Elasticity: Z- ~ Z++
- Hand Dexterity: Z- ~ Z++
- Leg Dexterity: Z- ~ Z++