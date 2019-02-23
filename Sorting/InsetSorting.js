var list1 = [2,3,1,4,3,3,6,9,8,7,1,5,-1,0];
var list2 = [2,3,1,4,3,3,6,9,8,7,1,5,-1,0];

function insertSortingByWhile(list) {
  for (let i = 0; i < list.length; i++) {
    var key = list[i];
    var j = i - 1;
    while(j>-1 && list[j]>key) {
      list[j+1] = list[j];
      j--;
    }
    list[j+1] = key;
  }
  return list;
}

function insertSortingByFor(list) {
  for (var i = 0; i < list.length; i++) {
    var key = list[i];
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && list[j] > key; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      list[j + 1] = list[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    list[j + 1] = key
  }
  return list;
}

console.log(insertSortingByWhile(list1));
console.log(insertSortingByFor(list2));