//创建一个event事件对象
let event ={
    //创建一个 保存订阅信息的对象
    list:{},
    //保存订阅事件的信息
    on(key,fn){
        //如果订阅key值不存在，先加上key值 付上一个空数组
        if(!this.list[key]){
            this.list[key]= [];
        }
        //如果已经存在了 直接push 把value值加进去对应的key里面
        this.list[key].push (fn);
    },
    //发布订阅消息内容
    emit(){
        //利用[]数组的 shift(这方法删除前面的函数 并🔙返回删除的元素)方法
        // 再用 call把要截取的对象 this 指向 传参的第一个参数。
        //也可以这样写成 Array.prototype.shift.call(arguments)

        let key = [].shift.call(arguments),
        //拿到key值之后 再去爸爸event里面的对象里 拿到key的所有 value 赋值给 fns
        //上面的 let第一行用逗号 等同于还未结束 所以下面的变量不用写 let 或者 var ，同样是let 
        fns = this. list[key]  //fns = [key:"Allvalue"]

        //如果没有任何订阅者 为0 的时候直接❌取消发布动作 停止
        if(!fns || fns.length===0){
            return false;
        }

        //如果传进来的key 有的话 按顺序执行所有里面的 value
        fns.forEach(fn=>{

            //这里this 因为fn调用了会自动改，不会再指向外部的event
            //为了改变this执行 和 传递下去 就使用apply 改变this指向
            fn.apply(this , arguments);

            //传进去的所有参数 如果子集不利用 就作废
        })

    },
    //取消订阅
    remove(key,fn){
        let fns = this.list[key];
        if (!fns) return false
        //如果没传第二参数 value值，只给了key 那就把整个key 清空
        if (!fn){
            //fns 存在为 true 才会 继续下一步 清空为 0
            fns && (fns.length=0);
        }else{
            fns.forEach((value,index)=>{
                if (value=== fn){
                    fns.splice(index,1);
                }
            });
        }
    }
};




//定义一个cat 函数
function cat (){
    console.log('小猫咪爱吃 '+ arguments[0][0])
    console.log('它喜欢 '+ arguments[0][1])
    
}
//定义一个dog 函数
function dog (){
    console.log('狗狗的名字叫 '+ arguments[0])
    console.log('它很 '+ arguments[1])
    
}
//定义一个匿名函数
var anonymous = function (data) {
    console.log('接受数据..........................');
    console.log('打印数据 '+ data );
}




//订阅 3个值存到订阅对象里的第一个数组里。
event.on('pet',anonymous);
event.on('pet',cat);
event.on('pet1',dog);



//发布订阅
event.emit('pet',['鱼🐟️','睡觉']);
event.emit('pet1','阿拉斯加','调皮')



