function generateRandomNumber() {
	var randomNumber = Math.floor(Math.random() * 100) + 1;
	document.getElementById("result").innerHTML = "Your random number is: " + randomNumber;
}
