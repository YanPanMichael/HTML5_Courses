function myFunction1(){
	document.getElementById("demo").innerHTML="My First External JavaScript";
}

function myFunction(a,b){
	alert(a*b);
	document.getElementById("demo").innerHTML=a*b;
	return a*b;
}
