class HoneyMakerBee extends Bee {
  constructor() {
    super()
    this.age = 10;
    this.color = 'yellow';
    this.food = 'jelly';
    this.honeyPot = 0;
    this.eat = function() {
      return `Mmmmmmmmm ${this.food}`;
    }
    this.job = `make honey`;
    this.makeHoney = function() {
      this.honeyPot++;
    }
    this.giveHoney = function() {
      this.honeyPot--;
    }
  }
};
