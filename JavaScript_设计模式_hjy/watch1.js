//主题保存状态  状态变化之后促发所有的观察者对象---->多个观察者观察同一个主题(一个状态发生改变对应多个订阅者促发)
class Subject {
  constructor(state){
    this.state = state||0;
    this.observers = [];
  }
  setState(state){
    this.state = state;
    this.notifyAllObservers();
  }
  getState(){
    return this.state;
  }
  notifyAllObservers(){

    this.observers.forEach(observer=>{
      observer.update();
    })
  }
  attach(observer){
    this.observers.push(observer)
  }
}

//观察者
class Observer{
  constructor(name,subject){
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update(){
    console.log(`${this.name} update,state: ${this.subject.getState()}`);
  }
}

//测试 主题传入观察者
let s = new Subject();

let ob1 = new Observer('obsj1',s);
let ob2 = new Observer('obsj2',s);
let ob3 = new Observer('obsj3',s);


/** 
 * 1,
 * {
 *   name:'obsj1',
 *   subject:s,
 *   updtae:()=>{
 *        console.log(`${this.name} update,state: ${this.subject.getState()}`);
 *   }
 * }
 * 2,s中的observers塞入ob1
 * */

s.setState(1);

s.setState('liuyifei');
//主题变化 












