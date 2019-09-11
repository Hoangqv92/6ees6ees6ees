class ForagerBee extends Bee {
  constructor() {
    super()
    this.age = 10;
    this.color = 'yellow';
    this.food = 'jelly';
    this.eat = function() {
      return `Mmmmmmmmm ${this.food}`;
    }
    this.job = `find pollen`;
    this.canFly = true;
    this.treasureChest = [];
    this.forage = function(treasure) {
      this.treasureChest.push(treasure);
    }
  }
};
