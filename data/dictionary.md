Dictionary
==========

Conotation
-----------

Nomenclature Rules
-------------------

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
 
Acronyms
---------
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

Equations
----------

### calculations
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
 
### Product Value
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

Terms
---------

### Material Ages (Part of data/mechanics/researchTree)
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
* Used as reference to settlement, the three biggest city(one to each continent) is industrial level, the hidden civilization is spatial and most tribes(settlements) are high medieval
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


