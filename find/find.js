function find(arr, test, ctx) {
  var result = null;
  arr.some(function(el, i) {
    return test.call(ctx, el, i, arr) ? ((result = el), true) : false;
  });
  return result;
}

function isNull(el, index) {
  return el == null;
}

const arr = [1,2,3,undefined]

var result = find(arr, isNull)
console.log(result)