//职责链模式
const defaultFunciton = ()=>{return true}
class action {
  constructor(name,callback){
    !!name?this.name = name : console.error( '请上传职责名' );
    !!callback?this.callback = callback : defaultFunciton;
    this.nextAction = ()=>{console.log('审批通过')};
  }
  setNextAction(action){
    this.nextAction = action
  }
  handle(ev){
    if(!ev)return;
    if(this.callback(ev)){
      console.log(`${this.name} 审批 ${ev.evName} 通过`);
      this.nextAction.handle(ev);
    }else{
      console.log(`${this.name} 审批 ${ev.evName} 不通过`);
    }
  }
}

let a1 = new action('组长',(ev)=>{
  return ev.time<15;
})
let a2 = new action('经理',(ev)=>{
  return ev.time<10;
})
let a3 = new action('总监',(ev)=>{
  return ev.time<8;
})

a1.setNextAction(a2);
a2.setNextAction(a3);

a1.handle({evName:'彭于晏请假',time:8});

