var debounce = function(func, wait, immediate) {
  var timeout, result;

  var later = function(context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };
  var debounced = function(args) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    if (immediate) {
      // var callNow = !timeout;
      // timeout = setTimeout(later, wait);
      // if(callNow) result = func.apply(this, args);
    } else {
      timeout = setTimeout(() => {
        // console.log(this);
        later(this, arguments);
      }, wait);
    }
    return result;
  };
  debounced.prototype.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
};
var input = "aaa";
var fff = () => {
  console.log("aa");
};
debounce(fff, 1000)();
debounce(() => {
  console.log(input);
}, 1000)(input);


function debounce2(fn, delay) {
  let timer = null;

  return function() {
    let args = arguments;
    let context = this;
    if (timer) {
      clearTimeout(timer);

      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    }
  };
}
debounce2(() => {
  console.log("bb");
}, 2000)();

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// _.debounce = function(func, wait, immediate) {
//   var timeout, result;

//   var later = function(context, args) {
//     timeout = null;
//     if (args) result = func.apply(context, args);
//   };

//   var debounced = restArguments(function(args) {
//     if (timeout) clearTimeout(timeout);
//     if (immediate) {
//       var callNow = !timeout;
//       timeout = setTimeout(later, wait);
//       if (callNow) result = func.apply(this, args);
//     } else {
//       timeout = _.delay(later, wait, this, args);
//     }

//     return result;
//   });

//   debounced.cancel = function() {
//     clearTimeout(timeout);
//     timeout = null;
//   };

//   return debounced;
// };
