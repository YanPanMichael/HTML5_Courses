var arr = [7, 6, 3, 5, 6, 4, 2, 3, 3, 2, 1];
//需求：冒泡排序。
//理论：1.比较轮数n-1。  2.比较次数n-1。  3.符合某个条件交换位置。
//核心：双重for循环。
//步骤：
//1.双重for循环。
//2.指定轮数和次数
//3.判断是否符合标准。如果符合标准交换位置。
console.log(arr);

var m = 0;
var n = 0;

//1.双重for循环。(外循环控制轮数)
for (var i = 0; i < arr.length - 1; i++) {
  //2.指定轮数和次数（内循环控制次数）
  for (var j = 0; j < arr.length - 1; j++) {
    //3.判断是否符合标准。如果符合标准交换位置。
    //从小到大排列顺滑，如果前面的比后面的大，那么交换位置。
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
    m++;
  }
  n++;
}
console.log("Babel sorting: Version 1 ", arr);
console.log(m);
console.log(n);

// Method 2
var arr = [ 1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 7 ];
//需求：冒泡排序。
//理论：1.比较轮数n-1。  2.比较次数n-1。  3.符合某个条件交换位置。
//核心：双重for循环。
//步骤：
//1.双重for循环。
//2.指定轮数和次数
//3.判断是否符合标准。如果符合标准交换位置。
console.log(arr);

//每轮比较少比较一次。（每一轮都会比较出一个最大值，然后后一轮没有必要再比较了，所以每比较一轮，就少比较一次。。。）
var m = 0;
var n = 0;

//1.双重for循环。(外循环控制轮数)
for(var i=0;i<arr.length-1;i++){
    //2.指定轮数和次数（内循环控制次数）
    for(var j=0;j<arr.length-1-i;j++){
        //3.判断是否符合标准。如果符合标准交换位置。
            //从小到大排列顺滑，如果前面的比后面的大，那么交换位置。
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
        m++;
    }
    n++;
}

console.log("Babel sorting: Version 2 ", arr);
console.log(m);
console.log(n);


// Method 3
var arr = [ 1, 2, 2, 3, 3, 3, 4, 6, 6, 5, 7 ];
//需求：冒泡排序。
//理论：1.比较轮数n-1。  2.比较次数n-1。  3.符合某个条件交换位置。
//核心：双重for循环。
//步骤：
//1.双重for循环。
//2.指定轮数和次数
//3.判断是否符合标准。如果符合标准交换位置。
console.log(arr);

//如果比较完备提前结束比较。（判断，如果本次比较没有移动任何元素，那么说明已经比较完成）
var m = 0;
var n = 0;

//1.双重for循环。(外循环控制轮数)
for(var i=0;i<arr.length-1;i++){
    //开闭原则。（写在第一个for循环里，是为了，每轮比较初始化bool变量变为true。）
    var bool = true;
    //2.指定轮数和次数（内循环控制次数）
    for(var j=0;j<arr.length-1-i;j++){
        //3.判断是否符合标准。如果符合标准交换位置。
            //从小到大排列顺滑，如果前面的比后面的大，那么交换位置。
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            bool = false;
        }
        m++;
    }
    n++;
    //bool这个变量默认值为true;如果本轮比较有一对元素相互交换位置，那么也不能跳出循环。
    //但是，如果本轮比较没有任何元素相互交换位置，那么说明已经比较完成，可以跳出循环。
    if(bool){
        break;
    }
}

console.log("Babel sorting: Version 3 ", arr);
console.log(m);
console.log(n);

// do help myself
var a = [2,3,1,4,3,3,6,9,8,7,1,5]
var m = 0;
var n=0;
console.log(a);

for (var i = 0; i < a.length -1; i++) {
    var flag = true;
    for (let j = 0; j < a.length-1-i; j++) {
        if(a[j]>a[j+1]){
            var temp = a[j+1]
            a[j+1]=a[j]
            a[j]=temp
            flag = false
        }
        n++;
    }
    m++;
    // if(flag) break;
}
console.log(a);
console.log(m, n);