//速写属性
var name = "张三";
var age = 13;

//普通
var obj_1={
    name: name,
    age: age,
}
console.log(obj_1);
//速写
var obj_2={
    name,
    age,
}
console.log(obj_2);


//速写方法
//普通
var fun_1 = {
    sayHello: function(){
        console.log("你好");
    },
}
fun_1.sayHello();
//速写
var fun_2 = {
    sayHello(){
        console.log("你好");
    },
}
fun_2.sayHello();

//箭头函数
/*//错误写法
var num= {
    name: "上传",
    say(){
        setInterval(function(){
            console.log(this.name);
        },1000);
    },
}
num.say();
//箭头写法
var num= {
    name: "上传",
    say(){
        setInterval(()=>{
            console.log(this.name);
        },1000);
    },
}
num.say();*/

//普通寫法
var shu_1 = function(a,b){
    return a+b;
}
console.log(shu_1(1,2))
//箭头函数写法
var shu_2 =(a,b)=>{
    return a+b;
}
//箭头方式只有一条语句
console.log(shu_2(2,3))
var shu_3 =(a,b)=> a+b;
console.log(shu_3(3,4))
//箭头函数只有一个参数
var shu_4 =a=> a*a;
console.log(shu_4(4))


//模块化

