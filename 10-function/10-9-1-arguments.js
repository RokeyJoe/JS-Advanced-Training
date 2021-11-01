/** arguments.callee 是一个指向arguments对象所在函数的指针 
 *  注意： 严格模式下访问 arguments.callee 会报错
 *  使用arguments.callee 可以让函数逻辑与函数名解耦
 *  以下是例子
*/
function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        // return num * factorial(num - 1);     // 函数逻辑与函数名紧密耦合
        return num * arguments.callee(num - 1); // 函数逻辑与函数名解耦
    }
}


let trueFactorial = factorial;
factorial = function() {
    return 0;
} 

console.log(trueFactorial(5));
console.log(factorial(5));
