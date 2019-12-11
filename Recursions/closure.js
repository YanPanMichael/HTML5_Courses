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