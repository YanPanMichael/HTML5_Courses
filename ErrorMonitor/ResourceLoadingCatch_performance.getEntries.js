//List all resource loading includeing loading time
window.performance.getEntries().forEach(item=>{console.log(item)});

//List all img tag elements which should be loaded
document.getElementsByTagName('img');
//compare two array list above
