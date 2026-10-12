

let crop = {}
crop.list = {}  // { baseMsg:[fn1,fn2 fn3,],work:[fn1,fn2 fn3,],{key3:[fn1,fn2 fn3,]}}
let msg = {
    name:'vic'
} 

// console.log(msg['name']);

 msg['name'] = 'vic'
 msg['sex'] = 'girl'
 msg['age'] = 'girl'
//msg = {name:'vic} 

function getValuebyKey(key) {
    let msg = {
        name:'vic',
        age:18,
        sex:'girl'
    }
    console.log('当前捕获i的信息是',msg[key]);
    
}
getValuebyKey('name')