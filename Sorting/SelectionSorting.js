function selectionSort(arr) {
  let minIndex;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) { // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([2,4,3,3,6,3,10,1,7,5]));