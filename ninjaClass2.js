function Ninja (name){
    
    const self = this;
    let speed = 3;
    let strength = 3;
    
    this.name = name;
    this.health = 100;

    this.sayName = function() {
        console.log("HiYa! I'm ninja, " + this.name);
    }

    this.showStats = function() {
        console.log("Health: " + this.health + "\n" + "Speed: " + speed + "\n" + "Strength: " + strength);
    }

    this.drinkSake = function() {
        this.health += 10;
        console.log("Health: " + this.health);
    }

    this.punch = function(ninja) {
        let n = ninja;
        if (n instanceof Ninja){
            n.health -= 5;
        }
        
        console.log(n.name + " was punched by " + this.name + "and lost 5 health");
    }

    this.kick = function(ninja) {
        let n = ninja;
        if (n instanceof Ninja){
            n.health -= 15;
            strength -= 3; 
        }
        
        console.log(n.name + " was kicked by " + this.name + "and lost 15 health");
    }

}

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);