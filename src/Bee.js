class Bee extends Grub {
  constructor() {
    super()
    this.age = 5;
    this.color = 'yellow';
    this.food = 'jelly';
    this.eat = function() {
      return `Mmmmmmmmm ${this.food}`;
    }
    this.job = `Keep on growing`;
  }
};

