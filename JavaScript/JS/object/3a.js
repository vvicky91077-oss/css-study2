// 
// 说到发布订阅模式，它其实是一种对象间一对多的依赖关系(不是综艺节目以一敌百那种)，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知


// apply  bind call 的作用是什么 区别是什么
// key :13
// let  Listeners = { key:()=>{} }  // forEach 

// let neLis = Listeners+ 1

let corp = {
    // on:  ()=>{  this.corp.list.push(fn)}
    // emit:


    };   // 自定义一个公司对象
// corp.list = [] //  存内容
// /posSal:[],sillHobby:[]
corp.list = {dome:[] };



corp.on = function(key,fn) {
    // 收到的事件存到列表里面
    // corp.list.push(fn)
    // console.log(2333, corp.list);
    if(!corp.list[key]) {
        corp.list[key] = []  // 
        console.log(111111);
        
    } 
        corp.list[key].push(fn)   //{baseMsg:[posSal] }
        console.log(2222222);
        
     console.log(30,corp.list, );
     console.log(31,corp.list[key]);
     
     
// console.log(2333444, corp.list);
    
    
}

corp.emit = function(){

    //corp.list[key]

    let  key = [].shift.call(arguments)
    fns = corp.list[key] // corp.list.baseMsg // [ ]
    if(!fns || fns.length == 0){
        return false
    }
        fns.forEach(fn => {
                    console.log(2999,fn,arguments);
                fn.apply(corp,arguments)  // cb()
            });


//    corp.list.forEach(cb => {
//             console.log(2999,cb);
//          cb.apply(corp,arguments)  // cb()
//      });
}


corp.remove = function(key,fn) {
    let fns = corp.list[key] // corp.list[baseMsg]
    if(!fns){return }
    if(!fn){
        fns &&( fns.length==0)
    } else{
        fns.forEach((item,index=>{
            if(item==fn){
                fns.splice(index,1)
            }
        }))
    }
}

function  posSal (position, salary) {
    console.log('你的职位是：' + position);
    console.log('期望薪水：' + salary);
}


function sillHobby (skill, hobby) {
    console.log('你的技能有： ' + skill);
    console.log('爱好： ' + hobby);
}
corp.on('baseMsg',posSal);
corp.on('baseMsg2',sillHobby);
// corp.on('baseMsg',()=>{});

// corp.on(sillHobby);

corp.emit('baseMsg', '前端',1000);
corp.emit('baseMsg2','cv crtl', '足球');

corp.remove('baseMsg',posSal)


// function callBind(fn){


//     fn()
// }
// function afterCallBind(){
//     console.log('afterCallBind');
    
// }
// callBind(afterCallBind),