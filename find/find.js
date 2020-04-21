function find(arr, test, ctx) {
  var result = null;
  arr.some(function(el, i) {
    return test.call(ctx, el, i, arr) ? ((result = el), true) : false;
  });
  return result;
}

var result = find()