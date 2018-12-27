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
qiuniu.say();

let bigan = new Bigan('狴犴');
bigan.say();
