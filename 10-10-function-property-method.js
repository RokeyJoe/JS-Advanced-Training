/*
 * @Description: 
 * @Version: 
 * @Autor: Joe Yan
 * @Date: 2021-11-01 10:04:15
 * @LastEditors: Joe Yan
 * @LastEditTime: 2021-11-01 10:51:24
 */
function sayName(name) {
    console.log(name);
}

function sum(num1, num2) {
    return num1 + num2;
}

function sayHi() {
    console.log("hi");
}

console.log(sayName.length);
console.log(sum.length);
console.log(sayHi.length);

/** apply 、call 
 *  作用： 控制函数调用上下文即函数体内this值的能力 
 */

color = 'red';
let o = {
    color: 'blue'
};

function sayColor() {
    console.log(this.color);
}

sayColor();

sayColor.call(o); //red
