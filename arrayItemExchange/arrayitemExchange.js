const list = [
  {name:'a',id:1},
  {name:'s',id:2},
  {name:'d',id:3},
  {name:'f',id:4},
  {name:'g',id:5},
  {name:'h',id:6},
  {name:'j',id:7},
  {name:'k',id:8},
  {name:'l',id:9},
]

function moveToFront(list, seed) {
  const tarId =  Math.floor(Math.random(seed)*10);
  list.unshift(list.splice(list.findIndex(item => item.id === tarId), 1)[0]);
  console.log(`result ${seed}: ${tarId} - `, list);
}

for (let i = 0; i < 5; i++) {
  (function(seed){
    setTimeout(() => {
      moveToFront(list, seed)
    }, 1000)
  })(i)
}