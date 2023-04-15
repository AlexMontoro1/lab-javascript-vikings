// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (theDamage) => {
    this.health -= theDamage;
  };
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage = (theDamage) => {
    this.health -= theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  };
  battleCry = () => {
    return "Odin Owns You All!";
  };
}

// Saxon
class Saxon extends Soldier {
  receiveDamage = (theDamage) => {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else return `A Saxon has died in combat`;
  };
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking = (viking) => {
    this.vikingArmy.push(viking);
  };
  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon);
  };
  vikingAttack = () => {
    let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonNumber];
    let randomViking = this.vikingArmy[randomVikingNumber];
    if (randomViking.strength >= randomSaxon.health) {
      this.saxonArmy.splice(randomSaxon);
    }
    return randomSaxon.receiveDamage(randomViking.strength);
  };
  // Para usar las variables que uso por duplicado, deberia declararlas en el constructor de war y asi poder usarlas dentro de toda la clase, pero no tengo muy claro como hacerlo.
  saxonAttack = () => {
    let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonNumber];
    let randomViking = this.vikingArmy[randomVikingNumber];
    if (randomSaxon.strength >= randomViking.health) {
      this.vikingArmy.splice(randomViking);
    }
    return randomViking.receiveDamage(randomSaxon.strength);
  };
  showStatus = () => {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else return "Vikings and Saxons are still in the thick of battle.";
  };
}
