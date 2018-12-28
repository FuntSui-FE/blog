class Acmen {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} eat food`);
  }
  sleep() {
    console.log(`${this.name} go to bed`);
  }
  coding() {
    console.log(`${this.name} is ${this.age} years old and still happily coding`);
  }
}

let acmenJy = new Acmen('bigfairy-Jing', 25);

acmenJy.eat(); // bigfairy-Jing eat food
acmenJy.sleep(); // bigfairy-Jing go to bed
acmenJy.coding(); //bigfairy-Jing is 25 years old and still happily coding

class WebAcmen extends Acmen {
  constructor(name, age, sex) {
    super(name, age);
    this.sex = sex;
  }
  getSex() {
    console.log(this.sex);
  }
  peculiarity() {
    console.log('勤奋，努力，长得帅颜值高，任劳任怨');
  }
}

let acmenPyy = new WebAcmen('PengYuyan', 18, '男');
acmenPyy.getSex(); //男
acmenPyy.peculiarity(); //勤奋，努力，长得帅颜值高，任劳任怨
