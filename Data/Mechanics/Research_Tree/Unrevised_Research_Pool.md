# Possible Techs
## Tech Tree First Draft
* Weight and rarity
    * if is rare the weight is halved
    * the weigth is used to calculate the probability of choice from the AI
* How it works
	* Tech will be chosen based in: 1 - Tech level, 2 - Research Focus
		* 1 - tech level
			* each Tech, Major Tech and Minor tech will have a proper tier, that will decide when it will become researchable
			* e.g FTL is only researchable if FTL protopype is researched already, the same only can be researched if Particles is researched and particles is a Major Tech D11 that only become avaliable if Physics is Tier 6
            * is only possible research a tech level(stage) after the anterior tech is researched e.g only research II if I is already researched
			* Tiers and levels
				* Physics(Grand Tech): Tier 0 ~ 6
					* Major Tech: Degree 0 ~ 12
						* Minor Tech: Stage 0 ~ 6
				* Sociology(Grand Tech): Tier 0 ~ 4
					* Major Tech: Degree 0 ~ 12
						* Minor Tech: Stage 0 ~ 6
				* Engineeging(Grand Tech): Tier 0 ~ 8
					* Major Tech: Degree 0 ~ 12
						* Minor Tech: Stage 0 ~ 6
		* 2 - Research Focus
			* what will ditade the Tech Tier 
			* each Tech has a Tier that increase when the comunity(city, village, metropoly) reseach it, these research are maded in isolated from the other research
			* the research of the Grand Techs is maded by a lab and is affected by 3 statistics:
				* 1 - the minor tech science labs
				* 2 - the minor tech Lab Computers
				* 3 - the focus of each comunity
			* the focus is determent on start of each run(New Game), the focus will decide how fast each grand tech will be research
			* with the total focus of 10 it will be random divided between the three grand Techs, Focus most be 0 > Focus <= 10
			* default_focus:
				* Physics: Focus = 1 ~ 10
				* Sociology: Focus = 1 ~ 10
				* Engineeging: Focus 1 ~ 10
			* each comunity start roll a speciality, e.g city z has a focus on engineering only
				* Physics: Focus = default_focus -1
				* Sociology: Focus = default_focus -1
				* Engineeging: Focus = default_focus +2
* Specialization/Sub Tech Tree, to add to Tech Tree
    * Technology:
        * Researching: -
        * Forge Tech: -
        * Building Tech: - 
        * Engineer Tech: --
        * Mechanical Tech: --
        * Weaponry Tech: -
        * Mass Destruction Tech: -- 
    * Medicine:
        * Medicine Fabrication: ++
        * Painkiller Fabrication: ++
        * Medicine Application: ++
    * Woodworking: 
        * Woodcutting: ++
        * Carpentry: +
        * Furniture Engraving: - 
    * Forge:
        * furniture hinges, etc: + 
        * Mechanical Weaponry Forge: -- 
        * Weaponry Forge: -
        * Shields smith: --
        * light Armory: +
        * Heavy Armory: --
        * Mechanical Armory (Armored Ver.): -- 
        * Mechanical Armory (Slim Ver.): --
        * Forging Tools: -
        * Mechanical Tools: -- 
        * Building Tools: +
    * Knowledge: 
        * herb: +
        * Farming: + 
        * Tools: -
        * Weaponry: -
        * Armoury: -
        * history: --
        * Geography: -
        * Traditions: -
        * Architecture: -
        * Mechanical: --
        * Clothing: -
        * Strategy: -
    * Art:
        * Painting(Artist): --
        * Sculpture: --
        * Engraving: --
    * Architecture: 
        * Painting(Painter): -
    * sociality: -
    * farm:
        * Slaughterhouse: +
        * cold climate Animals farm: --
        * hot climate Animals farm: -
        * Temperate climate Animals farm: +
        * cold climate vegetables farm: --
        * hot climate vegetables farm: -
        * Temperate climate vegetables farm: ++
        * cold climate herbs farm: --
        * hot climate herbs farm: -
        * Temperate climate herbs farm: ++
        * rare and unique herbs farm: +
## First Draft
* Physics
	* Computing
		* Science Labs
		* Personal Computers
			* * Lab Computers I
			* Servers Computers
				* Advanced Computers
					* Lab Computers II
					* Ship Computers
						* Lab Computers III
		* AI Prototype
			* Base AI
				* AI(for automatas)
		* Sensors
	* Field Manipulation
		* Power plants
		* Energy Generation
		* Pollution
		* Energy Shield
	* Particles
		* reactors
		* Energy Weapons
		* FTL Prototype
			* FTL
* Society
	* Biology
		* Food Production
		* Food quality
		* Lifespan
		* Medicine
	* Military Theory
		* Fleet Formation
			* Fleet command
			* Fleet Standard Equip.	I
				* Fleet Standard Equip. II
					* Fleet Standard Equip. III
			* Fleet Capacity
		* Army Formation
			* Army command
			* Army Standard Equip.	I
				* Army Standard Equip. II
					* Army Standard Equip. III
			* Army Capacity
		* Naval Formation
			* Naval command
			* Naval Standard Equip.	I
				* Naval Standard Equip. II
					* Naval Standard Equip. III
			* Fleet Capacity
	* Colonization
		* Terraforming
	* Statecraft
		* Edicts
		* Policies
		* Capitals
		* Governments
	* Archaeology
		* Excavations
		* Expeditions
		* Dungeon catalogue
		* Artefacts
* Engeneering
	* Industry
		* Minerals Extraction (iron, copper, silver, to define)
			* Rare Minerals Extraction (mercury, To define)
				* Unique Minerals Extraction (to define)
		* Mineral Storage (iron, copper, silver, gold, to define)
			* Unique Mineral Storage (minerals that need special environment to store, like mercury)
			* Hazard Mineral Storage (radioactive materials like uranium, etc)
		* Archtecture
			* Efficient Building Materials(Lower Cost)
				* Eficient Building 
			* Robust Building Materials(Durable Buildings)
				* Robust Building
			* Elegant Building Material(Pretty Buildings)
				* Elegant Building
		* Automatization
			* Automatic Industry
				* Android(pre-programed, restricted robots)
					* Automatas(expansive, self-suficient robots)[need AI research(physics.Computing.AI)]
	* Production
		* Armors
		* Cold Weapons
		* Shields
		* Clothes
		* Strategic Resources(valueble and rare assets that is difficult to imitate and nonsubtitutable, e.g ceramic plates from tang dinasty)
			* Unvaliable ceramic creation
			* Inspiring Paints
			* Marvelous Woodwork
			* Otherwordly Forge
	* Propulsion
		* Kinect Weapons
		* Explosive Artefacts(Explosives, mines, etc)
		* Thrusters
	* Spacecraft
		* Satelite
			* Space Station
				* Starbase
					* Starhold
						* Spacial Citadel
		* Space ship Hull
			* Space Ship Shields [need energy shields research(Physics.Field_manipulation.energy_shields)]
				* Space Ship Prototype
					* Functional Space Ship
* locomotion
    * naval
        * wooden boat
            * wooden ship
                * wooden warship
                    * steam boat
                        * steam ship
                            *  steam warship
                            *  steam carrier ship
                                * diesel boat
                                * diesel ship
                                    * diesel warship
                                        * eletric ships 
                                        * eletric warship
                                            * fusion ships
                                            * fusion warship
                                                * fission ship
                                                * fission warship
    * land
        * wagon
            * steam train
            * steam car
                * diesel train
                * diesel car
                * diesel subway
                    * eletric car
                    * electric train
                    * eletric subway
	                    * magnetic moved subway
	                        * fusion car
	                        * fusion train
	                        * fusion subway
	                            * fission car
	                            * fission train
	                            * fission subway


## Physics
* [Hyperspace Travel]
    * Tech Level: Base
    * Area: Particles
    * Branch: Base
    * Cost:
    * Weight:
    * Requirements: 
    * Unlock Component: Hyper Drive I
    * Possible Technology: Hyperlane Breach Points
    * Description:
        > ...
    
    * [Hyperlane Breach Points]
        * Tech Level: II
        * Area: Particles
        * Branch: FTL
        * Cost: 2000
        * Weight: 75
        * Requirements:
        * Unlock Component: Hyper Drive II
        * Unlock Building: Transit Hub
        * Possible Technology:
        * Description:
            > ...
            
            * [Hyperspace Slipstream]
                * Tech Level: III
                * Area: Particles
                * Branch: FTL
                * Cost: 6000
                * Weight: 50
                * Requirements:
                * Unlock Component: Hyper Drive III
                * Possible Technology: Jump Drive
                * Description:
                    > ...

                    * [Jump Drive] (Rare) (Dangerous)
                        * Tech Level: V
                        * Area: Particles
                        * Branch: FTL
                        * Cost: 15,000
                        * Weight: 6
                        * Weight Modfiers:
                            * --
                        * Requirements:
                            * Research: Hyperspace Slipstream
                        * Effects:
                            * Unlock Component: Jump Drive
                        * Possible Technology: None
                        * Description:
                            > ...

            * [Hyper Relay]
                * Tech Level: II
                * Area: Particles
                * Branch: Warp Gate
                * Cost: 2500
                * Weight: 35
                * Requirement:
                    * Tech: Hyperlane Breach Points
                * Unlock Building: Hyper Relay
                * Unlock Edict: Relay Construction
                * Unlock Edict: Relay Activation 
                * Possible Technology:
                * Description:
                    > ...
                    
                    * [Gateway Construction]
                        * Tech Level: V
                        * Area: Particles
                        * Branch: Warp Gate
                        * Cost: 20,000
                        * Weight: 10
                        * Requirements:
                            * Tech: Mega-Engineering
                            * Tech: Hyper Relay
                        * Unlock Edict: Gateway Activation
                        * Unlock Building: Gateway
                        * Possible Technology:
                        * Description:
                            > ...
    * [FTL Inhibition]
        * TODO                      

* [Scientific Method]
    * Tech Level: Base
    * Area: Computing
    * Branch: 
    * Cost:
    * Weight:
    * Weight Modfiers:
        * None
    * Requirements:
        * None
    * Effects:
        * Unlock Building: Research Labs
        * Unlock Edict: Automatic Tech Research 
    * Possible Technology: Self-Evolving Logic, Basic AI, Exotic Material Lab, Zero-G Laboratories
    * Description:
        > ...

        * [Self-Evolving Logic]
            * Tech Level: II
            * Area: Computing
            * Branch: ALgorithms
            * Cost: 2000
            * Weight: 75
            * Requirements:
                * Research Scientific Method
                * Basic AI
            * Research Speed: +7%
            * Possible Technology: Specialized Computers, Market Analysis Algorithms
            * Description:
                > ...

                * [Specialized Computers]
                    * Tech Level: I
                    * Area: Computing
                    * Branch: Algorithms
                    * Cost: 1000
                    * Weight: 90
                    * Requirements:
                        * Research: Self-Evolving Logic
                    * Unlock Component: Efficient AI Chip  
                    * Possible Technology: Extended Algorithms
                    * Description:
                        > ...

                        * [Extended Algorithms]
                            * Tech Level: III
                            * Area: Computing
                            * Branch: Algorithms
                            * Cost: 4000
                            * Weight: 65
                            * Requirements:
                                * Research: Specialized Computers
                                * Research: Self-Evolving Logic
                            * Unlock Component: Efficient AI Chip II
                            * Possible Technology: Sapient Simulations
                            * Description:
                                > ...

                                * [Sapient Simulations](Rare, Dangerous)
                                    * Tech Level: IV
                                    * Area: Computing
                                    * Branch: Algorithms
                                    * Cost: 10,000
                                    * Weight: 20
                                    * Requirements:
                                        * Research: Extended Algorithms
                                        * Positronic AI
                                    * Unlock Component: Sapient AI Theory  
                                    * Description:
                                        > ...
                * [Market Analysis Algorithms]
                    * Tech Level: II
                    * Area: Computing
                    * Branch: Algorithms
                    * Cost: 1500
                    * Weight: 170
                    * Weight Modifiers:
                        * ...
                    * Requirements:
                        * Research: Self-Evolving Logic
                        * Research: Nano-Circuit Assembly
                        * Research: Administrative AI
                    * Effects:
                        * Unlock Component: Market Output +10%
                    * Possible Technology: Predictive Consumerism
                    * Description:
                        > ...

                        *  [Predictive Consumerism]
                            * Tech Level: II
                            * Area: Computing
                            * Branch: Algorithms
                            * Cost: 1500
                            * Weight: 170
                            * Weight Modifiers:
                                * ...
                            * Requirements:
                                * Research: Replicator Kiosks
                                * Research: Market Analysis Algorithms
                            * Effects:
                                * Apply Modifier: Market Output +15%
                                * Apply Modifier: Market Consume -5%
                            * Possible Technology: None
                            * Description:
                                > ...
        * [Basic AI]
            * Tech Level: 0
            * Area: Computing
            * Branch: AI
            * Cost: 400
            * Weight: 100
            * Requirements:
                * Research: Scientific Method 
            * Unlock component: Basic AI chip
            * Possible Technology: Specialized Computers, Administrative AI, Ship AI
            * Description:
                > ...

                * [Administrative AI]
                    * Tech Level: I
                    * Area: Computing
                    * Branch: AI
                    * Cost: 500
                    * Weight: 100
                    * Requirements:
                        * Research: Basic AI
                        * Self-Evolving Logic
                    * Effects:
                        * Reseach Speed: +5%
                    * Possible Technology: Positronic AI
                    * Description:
                        > ...

                        * [Positronic AI]
                            * Tech Level: IV
                            * Area: Computing
                            * Branch: AI
                            * Cost: 8000
                            * Weight: 45
                            * Requirements:
                                * Research: Self-Evolving Logic
                                * Research: Administrative AI
                            * Effects:
                                * Research Speed: +7%
                            * Possible Technology: Sapient AI
                            * Description:
                                > ...

                                * [Sapient AI](Rare, Dangerous)
                                    * Tech Level: V
                                    * Area: Computing
                                    * Branch: AI
                                    * Cost: 100,000
                                    * Weight: 10
                                    * Requirements:
                                        * Research: Sapient Simulations
                                        * Research: Autonomous Ship Intellect
                                        * Research: Positronic AI
                                    * Effects:
                                        * Unlock Edict: Sintetic Life Form Creation
                                        * Unlock Component: Sapient AI Core
                                        * Unlock Building: Automata Factory
                                        * Unlock Fabrication: Automata
                                    * Description:
                                        > We Now Have the ability to create LIfe, Sintetic Life energy powered
                * [Ship AI]
                    * Tech Level: I
                    * Area: Computing
                    * Branch: AI
                    * Cost: 500
                    * Weight: 100
                    * Requirements:
                        * Research: Basic AI
                    * Effects:
                        * Unlock Components: Basic Ship AI
                    * Possible Technology: AI-Controled Ships
                    * Description:
                        > ...

                        * [AI-Controled Ships]
                            * Tech Level: I
                            * Area: Computing
                            * Branch: AI
                            * Cost: 1000
                            * Weight: 90
                            * Requirements:
                                * Research: Ship AI
                            * Effects:
                                * Unlock Components: Ship AI Chip
                                * Possible Technology: Self-Aware Ships
                            * Description:
                                > ...

                                * [Self-Aware Ships]
                                    * Tech Level: III
                                    * Area: Computing
                                    * Branch: AI
                                    * Cost: 2500
                                    * Weight: 70
                                    * Requirements:
                                        * Research: AI-Controled Ships
                                        * Research: Self-Evolving Logic
                                    * Effects:
                                        * Unlock Components: Sentient Ship AI Chip
                                        * Unlock Ship Class: Sentient Ship
                                        * Possible Technology: Autonomous Ship Intellects
                                    * Description:
                                        > ...

                                        * [Autonomous Ship Intellects](Rare, Dangerous)
                                            * Tech Level: IV
                                            * Area: Computing
                                            * Branch: AI
                                            * Cost: 10,000
                                            * Weight: 20
                                            * Requirements:
                                                * Research: Self-Aware Ships
                                                * Research: Positronic AI
                                                * Research: Extended Algorithms
                                            * Effects:
                                                * Unlock Component: Autonomous AI Chip
                                                * Unlock Component: Starbase Autonomous Control Room
                                                * Unlock Ship Class: Autonomous Ship
                                                * Possible Technology: None
                                            * Description:
                                                > ...
        * [Exotic Material Lab]
            * Tech Level: I
            * Area: Computing
            * Branch: Research
            * Cost: 1000
            * Weight: 90
            * Weight Modifiers:
                * ...
            * Requirements
                * Research: Scientific Method
            * Effect:
                * Unlock Building: Research Complexes
            * Possible Technology: Multi-Dimensional Studies
            * Description:
                > ...

                * [Multi-Dimensional Studies]
                    * Tech Level: III
                    * Area: Computing
                    * Branch: Research
                    * Cost: 4000
                    * Weight: 130
                    * Weight Modifiers:
                        * ...
                    * Requirements
                        * Research: Exotic Material Lab
                        * Research: Colonial Centralization
                    * Effect:
                        * Unlock Building: Advanced Research Complexes
                    * Possible Technology: Interplanetary Research Initiative, Quantum Neuro-Links
                    * Description:
                        > ...
                        * [Interplanetary Research Initiative]
                            * Tech Level: III
                            * Area: Computing
                            * Branch: Research
                            * Cost: 5000
                            * Weight: 98
                            * Weight Modifiers:
                                * ...
                            * Requirements
                                * Research: Multi-Dimensional Studies
                                * Research: Colonial Centralization
                            * Effect:
                                * Unlock Building: Planetary Supercomputer
                                * Unlock Building: Research Institute
                            * Possible Technology: None
                            * Description:
                                > ...

                        * [Quantum Neuro-Links]
                            * Tech Level: III
                            * Area: Computing
                            * Branch: Cybernetics
                            * Cost: 5000
                            * Weight: 88
                            * Weight Modifiers:
                                * ...
                            * Requirements
                                * Research: Multi-Dimensional Studies
                                * Research: Integrated Cybernetics
                            * Effect:
                                * Unlock Implant: quantum Neuro-Link Implant
                            * Possible Technology: None
                            * Description:
                                > ...
        * [Zero-G Laboratories]
            * Tech Level: I
            * Area: Computing
            * Branch: Laboratories
            * Cost: 500
            * Weight: 100
            * Requirements:
                * Research: Scientific Method
            * Effects:
                * Unlock Room: Zero-G Laboratory(for research labs)
            * Possible Technology: Miniature Containment Fields
            * Description:
                > ...

                * [Miniature Containment Fields]
                    * Tech Level: I
                    * Area: Computing
                    * Branch: Laboratories
                    * Cost: 1,000
                    * Weight: 90
                    * Requirements:
                        * Research: Zero-G Laboratories
                    * Effects:
                        * Unlock Component: Miniature Containment Fields(for Zero-G Laboratory)
                    * Possible Technology: Quantum Probes
                    * Description:
                        > ...

                        * [Quantum Probes]
                            * Tech Level: II
                            * Area: Computing
                            * Branch: Laboratories
                            * Cost: 1,500
                            * Weight: 85
                            * Requirements:
                                * Research: Miniature Containment Fields
                            * Effects:
                                * Unlock Component: Quantum Probes(for Zero-G Laboratory)
                            * Possible Technology: Autonomous Station
                            * Description:
                                > ...

                                * [Autonomous Station Protocols]
                                    * Tech Level: II
                                    * Area: Computing
                                    * Branch: Laboratories
                                    * Cost: 2,500
                                    * Weight: 70
                                    * Requirements:
                                        * Research: Quantum Probes
                                        * Research: Specialized Computers
                                    * Effects:
                                        * Unlock Room: Laboratory Automation Control Center 
                                    * Possible Technology: Multi-Dimensional Analysis
                                    * Description:
                                        > ...
                                        
                                        * [Multi-Dimensional Analysis]
                                            * Tech Level: III
                                            * Area: Computing
                                            * Branch: Laboratories
                                            * Cost: 4,000
                                            * Weight: 65
                                            * Requirements:
                                                * Research: Autonomous Station Protocols
                                                * Research: Extended Algorithms
                                            * Effects:
                                                * Unlock Project: Multi-Dimension Pespective Research(research speed +10%) 
                                            * Possible Technology: None
                                            * Description:
                                                > ...

* [Bio-Reactor]
    * Tech Level: Base
    * Area: Particles
    * Branch: Power Generation
    * Cost:
    * Weight:
    * Weight Modfiers:
        * None
    * Requirements:
        * None
    * Effects:
        * Unlock Component: Bio-Reactor
    * Possible Technology: Fission Power, Reactor Boosters
    * Description:
        > ...

        * [Fission Power]
            * Tech Level: I
            * Area: Particles
            * Branch: Power Generation
            * Cost: 550
            * Weight: 200
            * Weight Modfiers:
                * None
            * Requirements:
                * Research: Bio-Reactor
            * Effects:
                * Unlock Component: Fission Reactor
            * Possible Technology: Fusion Power
            * Description:
                > ...

                * [Fusion Power]
                    * Tech Level: I
                    * Area: Particles
                    * Branch: Power Generation
                    * Cost: 750
                    * Weight: 190
                    * Weight Modfiers:
                        * --
                    * Requirements:
                        * Research: Fission Power
                    * Effects:
                        * Unlock Component: Fusion Reactor
                    * Possible Technology: Cold Fusion Power
                    * Description:
                        > ...

                        * [Cold Fusion Power]
                            * Tech Level: II
                            * Area: Particles
                            * Branch: Power Generation
                            * Cost: 2,000
                            * Weight: 150
                            * Weight Modfiers:
                                * --
                            * Requirements:
                                * Research: Fusion Power
                            * Effects:
                                * Unlock Component: Cold Fusion Reactor
                            * Possible Technology: --
                            * Description:
                                > ...
        * [Reactor Boosters]
            * Tech Level: I
            * Area: Particles
            * Branch: Power Generation
            * Cost: 750
            * Weight: 150
            * Weight Modfiers:
                * None
            * Requirements:
                * Research: Bio-Reactor
            * Effects:
                * Unlock Component: Reactor Boosters 
            * Possible Technology: Improved Reactor Boosters
            * Description:
                > ...

                * [Improved Reactor Boosters]
                    * Tech Level: I
                    * Area: Particles
                    * Branch: Power Generation
                    * Cost: 1,000
                    * Weight: 135
                    * Weight Modfiers:
                        * None
                    * Requirements:
                        * Research: Reactor Boosters
                        * Research: Fusion Power
                    * Effects:
                        * Unlock Component: Improved Reactor Boosters 
                    * Possible Technology: Improved Reactor Boosters
                    * Description:
                        > ...

                        * [Advanced Reactor Boosters]
                            * Tech Level: I
                            * Area: Particles
                            * Branch: Power Generation
                            * Cost: 6,000
                            * Weight: 75
                            * Weight Modfiers:
                                * None
                            * Requirements:
                                * Research: Improved Reactor Boosters
                                * Research: Cold Fusion
                            * Effects:
                                * Unlock Component: Advanced Reactor Boosters 
                            * Possible Technology: None
                            * Description:
                                > ...

## Society

## Engineering
* [Spacefaring Industrial Base]
    * Tech Level: Base
    * Area: Industry
    * Branch: 
    * Cost: 
    * Weight: 
    * Weight Modfiers:
        * None
    * Requirements:
        * None
    * Effects:
        * Unlock Building: Alloy Foundries
        * Unlock Building: Resource Silos
    * Possible Technology: Geothermal Fracking, Powered Exoskeletons, Nano-Circuit Assembly, Holographic Cast, Exotic Gas Refining, Rare Crystal Manufacturing
    * Description:
        > ...

        * [Geothermal Fracking]
            * Tech Level: I
            * Area: Industry
            * Branch: Mining
            * Cost: 500
            * Weight: 100
            * Weight Modfiers:
                * None
            * Requirements:
                * Research: Spacefaring Industral Base
            * Effects:
                * Unlock Component: Geothermal Fracking Mines
            * Possible Technology: Deep Core Mining, Mineral Purification
            * Description:
                > ...

        * [Powered Exoskeletons]
            * Tech Level: I
            * Area: Industry
            * Branch: Cybernetics
            * Cost: 500
            * Weight: 150
            * Weight Modfiers:
                * None
            * Requirements:
                * Research: Spacefaring Industral Base
            * Effects:
                * Unlock Armor: Powered Exoskeleton
            * Possible Technology: Robotic Workers, Machine Template System, Integrated Cybernetics
            * Description:
                > ...