function valid(form){	
	var fail = false;
	var checkEmail = /[0-9a-z_-]+@[a-z_-]+\.[a-z]{2,5}/i;
	var name = form.name.value;
	var email = form.email.value;
	var password = form.password.value;
	var rePassword = form.rePassword.value;
	
	
	if (name == "" || name == " "){
		fail = "Enter your name, please"
	}
	else if (checkEmail.test(email) == false){
		fail = "Wrong email"
	}
	else if (password == "" || password == " "){
		fail = "Enter your password, please"
	}
	else if (rePassword != password){
		fail = "Passwords don't match"
	}
	if(fail){
		alert(fail);
	}
	else{
		window.location = "http://google.com"
	}
}

var validForm = document.getElementById("form");
var btnSubmit = document.getElementById("submit");

btnSubmit.onclick = function(){
	valid(validForm);
}