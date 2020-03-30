var Bee = function() {
  //this = Object.create(Bee.prototype);
  Grub.call(this);

  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";

  // re turn this;
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;