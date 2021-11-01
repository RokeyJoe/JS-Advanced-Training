/** caller 这个属性引用的是调用当前函数的函数 
 *  严格模式下 访问 arguments.callee 、 arguments.caller 会报错
 *  这是为了分清arguments.caller和函数的caller而故意为之的
 *  严格模式下 不能给函数的caller属性赋值
*/
function outer() {
    inner();
}

function inner() {
    console.log(inner.caller);  // 为了降低耦合度，可以使用arguments.callee.caller 来引用该值
    console.log(arguments.callee.caller);
}

outer();