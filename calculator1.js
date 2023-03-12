function buttoclick(val){
	
	console.log(val)
	document.getElementById("calc").value+=val;
}
function clr(){
	document.getElementById("calc").value=""
}
function buttoclik(){

	var text=document.getElementById("calc").value
	var result=eval(text)
	document.getElementById("calc").value=result
	if(text=="123"){
		console.log("secret")
		window.location="persornel.html"
	}
	let lenght=text.lenght
	console.log(lenght)
}