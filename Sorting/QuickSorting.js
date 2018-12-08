// 先从数列中取出一个数作为“基准”。
// 分区过程：将比这个“基准”大的数全放到“基准”的右边，小于或等于“基准”的数全放到“基准”的左边。
// 再对左右区间重复第二步，直到各区间只有一个数。
function quickSort(arr) {
  if (arr.length <= 1) { return arr; }
  // const pivotIndex = arr.length / 2;
  const pivotIndex = Math.floor(arr.length / 2); //基准位置（理论上可任意选取）
  const pivot = arr.splice(pivotIndex, 1)[0]; //基准数
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (elem <= pivot) {
      left.push(elem);
    } else {
      right.push(elem);
    }
  }
  return quickSort([...left]).concat(pivot, quickSort([...right])); //链接左数组、基准数构成的数组、右数组
}

console.log(quickSort([]));
console.log(quickSort([2,4,5,1,12,0]));