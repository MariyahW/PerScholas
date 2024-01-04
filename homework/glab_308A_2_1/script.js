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
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
      }
     

    //Part 3
    class Adventurer extends Character {
        constructor (name, role) {
          super(name);
          // Adventurers have specialized roles.
          this.role = role;
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
    //   robin.inventory = ["sword", "potion", "artifact"];
    robin.companion = new Companion("Leo", 'Cat');
      robin.companion.companion=new Companion("Frank", 'Flea');
    console.log( robin.companion.companion.inventory)
    //  .push('small hat', 'sunglasses');
    //   robin.companion.companion.inventory = ["small hat", "sunglasses"];
    // console.log(robin);