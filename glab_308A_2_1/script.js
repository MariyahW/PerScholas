//Part 1
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ['small hat', 'sunglasses']
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

    //Loop that logs inventory
    adventurer.inventory.forEach(item =>{
        console.log(item);
    });

    //Part 2
    class Character {
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        }
        static MAX_HEALTH = 100;
        static ROLES = ['Fighter', 'Healer', 'Wizard', 'Swordsman'];
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            return result;
            }
      }
     

    //Part 3
    class Adventurer extends Character {
        constructor (name, role) {
          super(name);
          // Adventurers have specialized roles.
          super.ROLES.forEach(element => {
            if(role==element) this.role = role;
          })
          
          // Every adventurer starts with a bed and 50 gold coins.
          this.inventory.push("bedroll", "50 gold coins");
        }
        // Adventurers have the ability to scout ahead of them.
        scout () {
          console.log(`${this.name} is scouting ahead...`);
          super.roll();
        }
        //Adventurers can deal damage
        damage (opp){
            console.log(`${this.name} has dealt ${opp} ${super.roll*2} damage.`);
        }
        //Part 6
        duel (Adventurer, adventurer){
          let adv1 =super.roll();
          let adv2 = super.roll();
          while(Adventurer.health>=50||adventurer.health>=50){
          if(adv1<adv2){
            Adventurer.health-=1;
            console.log(`${Adventurer.name} has dealt ${adv1} while ${adventurer.name} has dealt ${adv2}.`);
            console.log(`${Adventurer.name} health is ${Adventurer.health} while ${adventurer.name} health sits at ${adventurer.health}.`)
            adv1 =super.roll();
           adv2 = super.roll();
          }else if (adv2<adv1){
            adventurer.health-=1;
                console.log(`${Adventurer.name} has dealt ${adv1} while ${adventurer.name} has dealt ${adv2}.`);
            console.log(`${Adventurer.name} health is ${Adventurer.health} and ${adventurer.name} health sits at ${adventurer.health}.`)
            adv1 =super.roll();
           adv2 = super.roll();
          }
        } if(Adventurer.health<50){
          console.log(`${Adventurer.name} has lost the due}`);
        } else if (adventurer.health<50){
          `${adventurer.name} has lost the due}`
        }
        }
      }

      class Companion extends Character {
        constructor (name, type){
            super(name);
            this.type=type;
        }
        //Companions can sniff out danger
        sniff (){
            console.log(`${this.name} is sniffing ahead ...`);
            super.roll();
        }

      }

      const robin = new Adventurer("Robin", 'Swordsman');
      robin.inventory.push("sword", "potion", "artifact");
    
    robin.companion = new Companion("Leo", 'Cat');
      robin.companion.companion=new Companion("Frank", 'Flea');
      robin.companion.companion.inventory.push("small hat", "sunglasses");
    // console.log( robin.companion.companion.inventory)
    
    //Part 5
    class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}