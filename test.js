'use strict'
// var arr=[10,20,1,2];
// var dsa=arr.sort(function (x,y) {
//         if (x < y) {
//             return 1;
//         }
//         if(x>y){
//             return -1;
//         }
//         return 0;
//     }
// );
// console.log(dsa);
//1.
// function sum(arr){
//     return arr.reduce(function (x,y) {
//               return x+y;
//     });
// }
// var a=sum([1,2,3,4,5]);
// console.log(a);

//2.
// function lazy_sum(arr) {
//     var sum=function () {
//         return arr.reduce(function (x,y) {
//             return x+y;
//         })
//     };
//     return sum;
// }
// var f=lazy_sum([1,2,3]);
// var f2=lazy_sum([1,2,3]);
//
// console.log(f()+'-'+f2());


//3.
// function count() {
//     var arr=[];
//     for(let i=1;i<=3;i++){
//         arr.push(function () {
//             return i*i;
//         });
//     }
//     return arr;
// }
// var result=count();
// console.log(result[1]+result[0]);

//4.
// function count() {
//     var arr=[];
//     for(let i=1;i<=3;i++){
//         arr.push((function (n) {
//             return function () {
//                 return n*n;
//             }
//         })(i));
//     }
//     return arr;
// }
// var res=count();
// var f1=res[0];
// console.log(f1());

//5.创建一个函数并立即执行
// (function (x) { return x * x })(3);

//6.闭包计数
// function create_count(init) {
//     var count=init||0;
//     return {
//         x:function () {
//             count++;
//             return count;
//         }
//     }
// }
// var f=create_count(10);
// console.log(f['x']());
// console.log(f['x']());

//7.减少调用参数
// function make_pow(n) {
//     return function (x) {
//         return Math.pow(x,n);
//     }
// }
// var make_pow2=make_pow(2);
// var x=make_pow2(2);
// console.log(x);

//8.主要看加法,对应的是一种叠加
// var one = function (f) {
//     return function (x) {
//         return f(x);
//     }
// };
// // 定义加法:
// function add(n, m) {
//     return function (f) {
//         return function (x) {
//             return m(f)(n(f)(x));
//         }
//     }
// }
//
// var two=add(one,one);
// var four=add(two,two);
// console.log(four);

// var f=x=>({foo:x});
// console.log(f(1));

//9.
// function* fib(max) {
//     var
//         t,
//         a = 0,
//         b = 1,
//         n = 1;
//     while (n < max) {
//         yield a;
//         t = a + b;
//         a = b;
//         b = t;
//         n ++;
//     }
//     return a;
// }
//
// function* sum() {
//     var count=0;
//     count++;
//     yield count;
//     return count;
// }
//
// var f=sum();
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());


//10

// var now=new Date();
// console.log(now);
// console.log(now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate());
// console.log(now.getHours()+'-'+now.getMinutes()+'-'+now.getSeconds());

// var d = new Date(1435146562875);
// d.toLocaleString(); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
// d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时
//
// console.log(d);


//11.reg
// var num='010-68880533';
// var re=/^\d{3}\-\d{8}/;
// var flag=re.test(num);
// console.log(flag);
// var s='a,b, ;; dsad';
// console.log(s.split(/[\s|;|,]+/));

//12.reg Group
// var reg=/^(\d{3})-(\d{8})$/;
// var res=reg.exec('01068880533');
// console.log(res);

//13.gradle

// var re=/^(\d+?)(0*)$/;
// var res=re.exec('123000');
// console.log(res);

//14.
// var s = 'JavaScript, VBScript, JScript and ECMAScript';
// var reg=/[a-zA-Z]+Script/g;
// console.log(reg.exec(s));
// console.log(reg.lastIndex);
// console.log(reg.exec(s));
// console.log(reg.lastIndex);
// console.log(reg.exec(s));
// console.log(reg.lastIndex);
// console.log(reg.exec(s));
// console.log(reg.lastIndex);
// console.log(s.length);
// console.log(reg.exec(s));

//15.验证邮箱的正则
var should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'];
var should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
// var reg=/^[a-z]+[[\.[a-z]+\@[a-z]+\.[a-z]+]|[\@[a-z]+\.[a-z]+]]$/;
// var reg1=/^[a-z]+\@[a-z]+\.[a-z]+]$/;
// var flag=reg1.test('someone@gmail.com');
// // console.log(flag);
// var res=reg1.exec('someone@gmail.com');
// // console.log(res);
//
// var reg2=/^[a-z]+\@[a-z]+\.[a-z]+/;
// // console.log(reg2.test('adsadsab@apple.com'));
// var reg3=/^[a-z]+\.[a-z]+@+[a-z]+\.[a-z]+/;
// // console.log(reg3.test('bill.gates@microsoft.com'));
// var reg4=/^[a-z]+\d+@\d+\.[a-z]+/;
// // console.log(reg4.test('bob2015@163.com'));
// var reg=/^[a-z]+\@[a-z]+\.[a-z]+$|^[a-z]+\.[a-z]+@+[a-z]+\.[a-z]+$|^[a-z]+\d+@\d+\.[a-z]+$/;
// // console.log(reg.test('test#gmail.com'));
//
// should_fail.forEach(function (s) {
//     console.log(reg.test(s));
// });


// var s='<Tom Paris> tom@voyager.org';
// console.log(s+'-'+typeof s);

// var reg=/<([a-zA-Z]+ [a-zA-Z]+)> ([a-zA-Z]+@[a-z]+\.[a-z]+)/;
// console.log(reg.exec(s));

//JSON
// var obj={"name":'wang',"age":10,"sex":true};
// var x=JSON.stringify(obj,null,"\t");
// var y=JSON.stringify(obj,['name','sex']," " );
// var res=JSON.parse(y,function (key,value) {
//     if(key=='name'){
//         return  value=value+'tx';
//     }
//     return value;
// });
// console.log(res);


//prototype

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}


// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 空函数F:
function F() {
}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // '小明'
xiaoming.grade; // 2

// 验证原型:
console.log(xiaoming.__proto__ === PrimaryStudent.prototype); // true
xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true



class Student1 {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

var xiaoming=new Student1('chen');
xiaoming.hello();

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    say(){
        console.log('Hello,'+this.name+'!');
    }
}
var cat1=new Cat("m");
cat1.say();