class Acmen{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  eat(){
    console.log(`${this.name} eat food`);
  }
  sleep(){
    console.log(`${this.name} go to bed`);
  }
  coding(){
    console.log(`${this.name} is ${this.age} years old and still happily coding`)
  }
}

const acmen = new Acmen('bigfairy-Jing',25);

acmen.eat();   // bigfairy-Jing eat food
acmen.sleep();  // bigfairy-Jing go to bed
acmen.coding(); //bigfairy-Jing is 25 years old and still happily coding