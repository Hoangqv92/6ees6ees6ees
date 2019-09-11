class RetiredForagerBee extends ForagerBee {
  constructor() {
    super()
    this.age = 40;
    this.color = 'grey';
    this.food = 'jelly';
    this.eat = function() {
      return `Mmmmmmmmm ${this.food}`;
    }
    this.job = `gamble`;
    this.canFly = false;
    this.treasureChest = [];
    this.forage = function(treasure) {
      return `I am too old, let me play cards instead`
    }
    this.gamble = function(treasure) {
      this.treasureChest.push(treasure);
    }
  }
};


