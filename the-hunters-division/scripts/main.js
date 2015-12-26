function changeImage() {
	var image = document.getElementById('myImage');
	if (image.src.match("bulbon")) {
		image.src = "images/Testing/pic_bulboff.gif";
	} else {
		image.src = "images/Testing/pic_bulbon.gif";
	}
}

function myFunction() {
	var x = document.getElementById("demo3");
	x.style.fontSize = "25px";
	x.style.color = "red";
	
	var x, text;
	// Get the value of the input field with id="numb"
	x = document.getElementById("numb").value;
	//If x is Not a Number or less than one or greater than 10
	if (isNaN(x) || x<1 || x>10 ) {
		text = "Input not valid";
	} else {
		text = "Input OK";
	}
	document.getElementById("demo4").innerHTML = text;
}

function myFunction() {
	document.getElementById("demo5").innerHTML = "Paragraph changed.";
}