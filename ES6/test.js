//箭头函数中的this代表函数的定义，而不是函数的调用
function foo() {
  console.log(this);
  setTimeout(() => {
    console.log(this.a);
  }, 100);
}
// foo();
foo.call({a: 1}); //call的调用使得函数的 this 指向call中第一个参数

let testArgs = (...params) => {
  console.log(params);
}

testArgs(1, 2, 'a', {b:3});