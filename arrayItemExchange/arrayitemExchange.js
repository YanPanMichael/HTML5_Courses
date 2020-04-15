const list = [{name:'',id:1}]

list.unshift(list.splice(list.findIndex(item => item.id === event.target.value.id), 1)[0])