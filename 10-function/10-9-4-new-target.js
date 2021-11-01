/** new.target 检测函数是否使用 new 关键字 */
function King() {
    if (!new.target) {
        throw 'King must be instantiated using "new"'
    }
    console.log("King instantiated using 'new'");
}


new King();
King();

console.log('666');