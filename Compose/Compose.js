var compose = function(...args) {
  var len = args.length
  var count = len - 1
  var result
  return function f1(...args1) {
      result = args[count].apply(this, args1)
      if (count <= 0) {
          count = len - 1
          return result
      } else {
          count--
          return f1.call(null, result)
      }
  }
}

// 这样就实现了这个compose函数。后来我发现递归这个完全可以使用迭代来实现，使用while函数看起来更容易明白，其实lodash.js就是这么实现的。

// lodash实现
// lodash的思路同上，不过是用迭代实现的，我就把它的源代码贴过来看一下

var flow = function(funcs) {
    var length = funcs.length
    var index = length
    while (index--) {
        if (typeof funcs[index] !== 'function') {
            throw new TypeError('Expected a function');
        }
    }
    return function(...args) {
        var index = 0
        var result = length ? funcs[index].apply(this, args) : args[0]
        while (++index < length) {
            result = funcs[index].call(this, result)
        }
        return result
    }
}
var flowRight = function(funcs) {
    return flow(funcs.reverse())
}
// 可以看出，lodash的本来实现是从左到右的，但也提供了从右到左的flowRight，还多了一层函数的校验，而且接收的是数组，不是参数序列,而且从这行var result = length ? funcs[index].apply(this, args) : args[0]可以看出允许数组为空，可以看出还是非常严谨的。我写的就缺少这种严谨的异常处理。

//redux compose

function compose2(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}