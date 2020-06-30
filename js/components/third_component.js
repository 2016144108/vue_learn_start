//配置组件
var template= `<div>
<p>姓名{{name}}</p>
<p>年龄{{age}}</p>
</div>`;//模板

export default {
    props: ["name","age"],//声明接收属性，别人给的
    /*data(){//数据必须是函数
        return{
            name: "葛杨",
            age: 12,
        };
    },//自己给定的*/
    template,
};
