> 单独开一个文集,讲设计模式的文集.第一节,讲一些概念上的东西,和两个比较简单的设计模式.

# appetizer

#1 面向对象

## 1.1 什么是面向对象?(类,实例)

- 百度百科

  > 面向对象程序设计作为一种新方法，其本质是以建立模型体现出来的抽象思维过程和面向对象的方法。模型是用来反映现实世界中事物特征的。任何一个模型都不可能反映客观事物的一切具体特征，只能对事物特征和变化规律的一种抽象，且在它所涉及的范围内更普遍、更集中、更深刻地描述客体的特征。通过建立模型而达到的抽象是人们对客体认识的深化。

- 个人理解

个人对 js 来说面向对象: 把具有 共性的事物,抽象成一个一个类,通过类可以创建一个一个的属性,方法进行代码编程. 所以说可以常用一句话**"类是对象事务的一个抽象，对象是类的具体表现"**;

编程方式: 面向过程(c js)， 面向对象(c++ java js)， 面向协议(Swift)， 面向机器(汇编语言 面向处理器 Processor)

js 有两种开发模式：1.函数式(过程化)，2.面向对象(OOP) js 是一个弱面向对象语言

## 1.2 面向对象三要素(继承,封装,多态)

- 继承：子类继承父类
- 封装：数据权限和保密
- 多态：同一接口不同实现

#####1.21 继承
**代码演示**

```javaScript
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
```

_在这里 WebAcmen 继承了父类 Acmen，父类是公共的，不仅仅于服务某一个子类，前端代码封装时，可以将很多公用的方法抽离到一个父类中，提高复用性，比方说 Acmen 类定义了所有码农都会干的三件事。继承运用比较多的场景，如 React。_

##### 1.22 封装

> js 逻辑中封装体现的不是很具体，甚至我个人理解中 js 只有装，没有封。（因为其是一个弱面向对象语言）。因为封装基于三要素（public private protected），所以这里用 typeScript 进行一个案例示范。

```javaScript
class Person {
  public name: string;
  public age: number;
  private goddess: string;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.goddess = '刘亦菲';
  }
  eat() {
    console.log(`${this.name} eat`);
  }
  sleep() {
    console.log(`${this.name} sleep`);
  }
  protected getGoddess() {
    console.log(this.goddess);
  }
}

class WebJingPeople extends Person {
  public sex: string;
  private wife: string;
  constructor(name: string, age: number, sex: string) {
    super(name, age);
    this.sex = sex;
    this.wife = '刘二菲';
  }
  study() {
    console.log(`${this.name} 热爱学习`);
  }
  getSex() {
    console.log(`${this.name} 性别 ${this.sex}`);
  }
  getPersionGoddess() {
    this.getGoddess();
  }
}

let bigFairy = new WebJingPeople('hjy', 18, '男');
bigFairy.study();
bigFairy.getSex();
console.log(bigFairy.sex);
console.log(bigFairy.name);
console.log(bigFairy.wife); //报错私有private属性外部不能访问
console.log(bigFairy.getPersionGoddess());
console.log(bigFairy.getGoddess()); //protected 属性只能在其类中或者子类中能访问

```

_封装特点：减少耦合 不该外露的不外露，利于数据 接口的权限管理，在前端 js 很多代码中或者开源的库中，使用\_代表默认的 private 私有属性。_

##### 1.22 多态

**代码演示**

```javaScript
//多态 示例

class Dragon {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log('龙嘘气成云 云固弗灵于龙也.然龙乘是气 茫洋穷乎玄间');
  }
}
class Qiuniu extends Dragon {
  constructor(name) {
    super(name);
  }
  say() {
    console.log('喜欢音乐，谁在用琵琶弹奏一曲东风破');
  }
}

class Bigan extends Dragon {
  constructor(name) {
    super(name);
  }
  say() {
    console.log('形状如老虎，传说他喜欢诉讼，所以在衙门两侧都会有几个狴犴');
  }
}

let qiuniu = new Qiuniu('囚牛');
qiuniu.say();//喜欢音乐，谁在用琵琶弹奏一曲东风破

let bigan = new Bigan('狴犴');
bigan.say(); //形状如老虎，传说他喜欢诉讼，所以在衙门两侧都会有几个狴犴
```

_这里并非完全意义上的多态，只是做一个理解,保持子类的开放性和灵活性，面向接口编程，因为 js 是一层弱面向对象的语言，而且前端开发中使用多态不是很常见，所以这里只是做一个了解作用 （仅作了解）_

---

#2 设计模式

## 2.1 五大设计原则 （solid）

- **S:单一职责原则**
  single：做什么事都是分开，一块管一块。
  一个程序只做好一件事,如果功能过于复杂就拆分开，每个部分保持独立。
- **O:开放封闭原则**
  open close：扩展开放 修改封闭。
  增加新需求是，扩展新代码，而不是修改已有代码。是现今程序设计程序开发的终极目标。
- **L：李氏置换原则**
  Liskov :里氏替换原则 ：里氏替换原则 认为“程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换的”的概念。
  子类能覆盖父类，父类能出现的地方子类就能出现，JS 中使用较少。（弱类型，继承使用少）
- **I：接口独立原则**
  Interface 接口独立原则 接口隔离原则（遗憾的是 js 是一门弱类型语言）。
  保持接口的单一独立 ，避免出现 “胖接口”，js 中没有接口（ts 例外），但是 web 前端仍然使用较少。
- **D：依赖倒置原则**
  Dependency Inversion 依赖倒置原则： 依赖反转原则 认为一个方法应该遵从“依赖于抽象而不是一个实例” 的概念。依赖注入是该原则的一种实现方式。
  面向接口编程 依赖于抽象而不是依赖于具体，使用方只关注接口而不关注具体类的实现。js 中使用较少（没有接口&弱类型），web 前端使用较少。

**代码示例**

```javaScript
function loadImg(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject('图片加载失败');
    };
    img.src = src;
  });
}

let src ='https://upload-images.jianshu.io/upload_images/7280129-eef423c97a2e2f53.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240';

loadImg(src)
  .then(img => {
    console.log(img.width);
  })
  .then(img => {
    console.log(img.height);
  })
  .catch(err => console.log(err));
```

_这里遵循了的设计原则：
单一职责原则：每个 then 逻辑值做好一件事，开放封闭原则：如果新增需求了，那就扩展 then，这里就是扩展开发，修改封闭。_

## 2.2 职责链模式

> 职责链模式(cor): 一步操作可能分为多个职责角色完成-->角色拆分,用一个链串起来---> 将发起者和各个处理者进行隔离

## 2.3 观察者模式

> 观察者模式(watcher): 发布订阅 一对多

![image.png](https://upload-images.jianshu.io/upload_images/7280129-7dd944a7edb9c176.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### !important 必须刻意去训练 ----> 刻意训练 ----> 刻意训练 ----> 刻意训练
