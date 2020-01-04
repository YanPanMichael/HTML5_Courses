// function createFunctions() {
//   var result = new Array();
//   for (let i = 0; i < 10; i++) {
//     result[i] = function() {
//       return i;
//     }();
//   }
//   return result;
// }

// console.log(createFunctions());

// function createFunctions2() {
//   var result = new Array();
//   for (let i = 0; i < 10; i++) {
//     result[i] = (function(num) {
//       return num;
//     })(i);
//   }
//   return result;
// }

// console.log(createFunctions2());

function F() {
  var a = 100
  return function() {
    console.log(a)
  }
}

var f = F();
var a = 200;
f(); // 100
//根据定义 而非 运行时的作用域链 a在定义时父级成员a的值是100