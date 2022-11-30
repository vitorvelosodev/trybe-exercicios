const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  return Math.floor(Math.random() * (dragon.strength + 1 - 15)) + 15;
};

const warriorDamage = () => {
  const wMaxDam = Math.floor(warrior.strength * warrior.weaponDmg);
  return Math.floor(Math.random() * (wMaxDam - warrior.strength + 1));
};

const mageDamage = () => {
  const damageCalc = () => {
    if (mage.mana < 15) {
      console.log('Não possui mana suficiente');
      return 0;
    }
    return Math.floor(Math.random() * (2 * mage.intelligence - mage.intelligence) + mage.intelligence + 1);
  }
  const damage = damageCalc();
  const manaCalc = () => {
    if (mage.mana < 15) {
      return mage.mana;
    }
    return mage.mana - 15;
  }
  const mana = manaCalc();
  return {damage, mana};
}

const gameActions = {
  warriorsTurn: (warriorDamage) => {
    warrior.damage = warriorDamage();
    dragon.healthPoints -= warrior.damage;
    console.log(`Warrior attacks. Hits ${warrior.damage} points on Dragon.
Dragon's HP is now ${dragon.healthPoints}`);
  },
  magesTurn: (mageDamage) => {
    mage.damage = mageDamage().damage;
    dragon.healthPoints -= mage.damage;
    console.log(`Mage attacks. Hits ${mage.damage} points on Dragon.
Dragon's HP is now ${dragon.healthPoints}`);
  },
  dragonsTurn: (dragonDamage) => {
    dragon.damage = dragonDamage();
    warrior.healthPoints -= dragon.damage;
    console.log(`Dragon attacks. Hits ${dragon.damage} points on Warrior.
Warrior's HP is now ${warrior.healthPoints}`);
    dragon.damage = dragonDamage();
    mage.healthPoints -= dragon.damage;
    console.log(`Dragon attacks. Hits ${dragon.damage} points on Mage.
Mage's HP is now ${mage.healthPoints}`);
  }
};

gameActions.warriorsTurn(warriorDamage);
gameActions.magesTurn(mageDamage);
gameActions.dragonsTurn(dragonDamage);