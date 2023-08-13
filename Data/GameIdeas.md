# Time
* day: 24 RL minutes
* month: 10 ~ 15 GT days
* year: 8 GT months

* building an archtectures takes months or years to finish, 
* making possible a more realistic time period for building and crafting

*NT1: RL: Real Life
*NT2: GT: Game Time

# quots and books phases
1. "From the appearance of chaos, through the obedience of a set of rules, comes the appearance of order."
2. "My disappointment is immeasurable, and my day is ruined"
3. "Once is a chance, Twice is a Coincidence, but the third time is a pattern"
4. " If it look like a fish and smell like a fish,  it's probably a fish" - behaviorism 
5. The strongest Emotion of mankind is Fear, and the Strongest kind of Fear is the fear of the unknown" - H.P Lovecraft 
6. "if you want something done right, do it yourself"

# AI and story telling Generation
* Storyteling is based on context, each 'entity' will have a context, or concept relative to the world around it

* Object Concept
	* Is a:
	* Is Used For:
	* Is Made of:
	* Has a:
	* Has Property:
	* Motivated by Goal:

* Behavior
	* entities will have
	* the entities will have a list of knowledge they have and they behavior, choices and reactions 
	* the actions will be defined(filtered) based on the presence or absence of a specific knowledge
		* e.g.: has_FishingKnowledge (true or false)
			* if the char haven't the fishing knowledge all actions dependent of this will not be available 
			
# Function
int negativeToZero(int n) {
return n + abs(n);.     //e.g  -5 + 5 = 0
}
# Ideas Stage
## Biomes
### Naturals
* Underground Cave System
	* filled with mold, poisonous mushrooms and toxic spores filled air
### Artificial


## Mechanics
### Game Modes
* Easy mode
	* autodave on sleep,
	* on death the player character will wake up from the last save(last night) as from a nightmare
	* character creation
	
* Iroman Mode
	* As the game is projected to be played
	* autosave on exiting
	* perma death
	* auto character creation
	* allow achievements
	
### Character Creation
* Easy Mode
	* ref kenshi
	
* Ironman Mode
	* created automatically
	* Random Name from pool
	* Random Age
		* Penalty for too young or too old
	* Select Gender or Random
	* Random Appearence
	* Random Job
	* Random Habilities, based on Job
	
	* Depending on Game Start:
		* Date(Year) of Start may varies:
			* Depending on Date:
				* Tech will be different
					* Some techs only appear after determined year
					* Some tech disappears after determined year
				* Clothes Will be different
					* some clothes only appear after determined year
					* some clothes disappears after determined year
				* Buildings will be different
					* some buildings design only appear after determined year
					* some buildings design disappears after determined year
				* Equipments will be different
					* some equipments only appear after determined year
					* some equipments disappears after determined year
	
### Equipping
* Armor and Clothes
	* Only when using a Full body mirror(the equip menu(UI) will appear when interaction with a fullbody mirror)
	* Equips whill depend on Armors or CLothes on character backpack(and similars) or on close storages

### Actor Anatomy
#### Humanoid
* Head			(isBodyPart=True)
	* brain
	* ear.l
	* ear.r
	* eye.l
	* eye.r
	* nose
	* mouth
* Neck			(isBodyPart=True)
	* throat
	* vocal chords
* Torso			(isBodyPart=True)
	* heart
	* lung.l
	* lung.r
	* liver
	* pancreas
	* kidney.l
	* kidney.r
	* stomach
	* Arm.L		(isBodyPart=True)
		* arm_bone.l
		* Hand.L	(isBodyPart=True)
			* hand_bone.l
	* Arm.R		(isBodyPart=True)
		* arm_bone.r
		* Hand.R	(isBodyPart=True)
			* hand_bone.r
* Hips			(isBodyPart=True)
	* hips_bone
	* Leg.L		(isBodyPart=True)
		* leg_bone.l
		* Foot.L	(isBodyPart=True)
			* foot_bone.l
	* Leg.R		(isBodyPart=True)
		* leg_bone.r
		* Foot.R	(isBodyPart=True)
			* foot_bone.r

* NT*: Body Parts is just a storage, the damage will be done and calculated based on what they contain, empty body parts(limbs) get the damage calculated in a bone variable
* NT*: if isBodyPart=True then, enter the child component and continue to perform the action inside

### Actors
* NT*: exemple of basic info
* Organization:
	* Entity
		* Actor(subclass of Entity)
			* Reptilia(subclass of Actor)
				* Squamata(subclass of Reptilia)
					* Mamba(subclass of Squamata)
			* Mammalia(subclass of Actor)
				* Rodentia(subclass of Mammalia)
					* Rat(subclass of Rodentia)


#### Rodentia
* Rat
	* Classe: Mammalia
	* Order: Rodentia
	* Preys: cheese
	* Predators: owl, cat
	* Attack
		* Attack Types
			* Claws
			* Bite
		* Raw Damage: 0.1
		* Cause Bleeding
		* cause Leptospirosis(Infection)
	* Behavior
		* usualy neutral entity, unless triggered
		* trigger: food(especific types), hunger
		* when triggered: attacking(50 ~ 100% chance) any entity between location and source(trigger) 
		* Behaviorism [hidden][AI]
			* Search for cheese
			* Run from Predators 
			* Walk in groups
			* Attack in groups 
#### Squamata
* Mamba
	* Classe: Reptilia
	* Order: Squamata
	* Attack
	* Behavior
	
### Effects
* NT*: exemple of effects

* Bleeding
	* Durate 5 minutes
	* increase chance of infection
	* stack
	* bleeding rate is based on wound size, wound size: depend on hp% loosed in one attack and creature or item size 

* Infection
	* Don't pass over time
	* difficult to find cure(antidote)
	* stack
	* multiple side effects(debuff)
	* increase chance of infection
	
