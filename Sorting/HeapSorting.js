//堆排序  resource: https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php
(function(){
  var a = "a";
  console.log("我是匿名函数", a)
})() //我是自执行函数

// console.log(a); //不在var a 的块作用域 undefind

var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max]) {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);





//调整函数
function headAdjust(elements, pos, len){
  //将当前节点值进行保存
  var swap = elements[pos];

  //定位到当前节点的左边的子节点
  var child = pos * 2 + 1;

  //递归，直至没有子节点为止
  while(child < len){
    //如果当前节点有右边的子节点，并且右子节点较大的场合，采用右子节点
    //和当前节点进行比较
    if(child + 1 < len && elements[child] < elements[child + 1]){
      child += 1;
    }

    //比较当前节点和最大的子节点，小于则进行值交换，交换后将当前节点定位
    //于子节点上
    if(elements[pos] < elements[child]){
      elements[pos] = elements[child];
      pos = child;
      child = pos * 2 + 1;
    }
    else{
      break;
    }

    elements[pos] = swap;
  }
}

//构建堆
function buildHeap(elements){
  //从最后一个拥有子节点的节点开始，将该节点连同其子节点进行比较，
  //将最大的数交换与该节点,交换后，再依次向前节点进行相同交换处理，
  //直至构建出大顶堆（升序为大顶，降序为小顶）
  for(var i=elements.length/2; i>=0; i--){
    headAdjust(elements, i, elements.length);
  }
}

function sort(elements){
  //构建堆
  buildHeap(elements);

  //从数列的尾部开始进行调整
  for(var i=elements.length-1; i>0; i--){
    //堆顶永远是最大元素，故，将堆顶和尾部元素交换，将
    //最大元素保存于尾部，并且不参与后面的调整
    var swap = elements[i];
    elements[i] = elements[0];
    elements[0] = swap;

    //进行调整，将最大）元素调整至堆顶
    headAdjust(elements, 0, i);
  }
}

var elements = [3, 1, 5, 7, 2, 4, 9, 6, 10, 8];
console.log('before: ' + elements);
sort(elements);
console.log(' after: ' + elements);