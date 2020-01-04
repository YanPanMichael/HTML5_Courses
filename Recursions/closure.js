function createFunctions() {
  var result = new Array();
  for (let i = 0; i < 10; i++) {
    result[i] = function() {
      return i;
    }();
  }
  return result;
}

console.log(createFunctions());

function createFunctions2() {
  var result = new Array();
  for (let i = 0; i < 10; i++) {
    result[i] = (function(num) {
      return num;
    })(i);
  }
  return result;
}

console.log(createFunctions2());

function F() {
  var a = 100
  return function() {
    console.log(a)
  }
}