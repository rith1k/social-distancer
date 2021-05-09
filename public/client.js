window.onload = function check() {
	if (sessionStorage["loggedin"] == "True") {
		document.getElementById('lg').innerHTML = '<a class="nav-link" onclick="signup()" id="navbarDropdownMenuLink-4" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false"> Account </a>';

	}
	else {
		document.getElementById("lg").innerHTML = '	<a class="nav-link" onclick="signup()" id="navbarDropdownMenuLink-4" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false"> Account </a>';


	}
}
function logout() {
	sessionStorage.removeItem("loggedin");
	sessionStorage.removeItem("username");
	alert('Logged Out');
	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			if (sessionStorage['loggedin'] === 'True') {
				var docBody = document.getElementById('a');
				docBody.style.background="url('main2.jpg')";

				profile();
			}
			else {
				var docBody = document.getElementById('a');
				docBody.innerHTML = this.responseText;
				docBody.style.background="url('main2.jpg')";

			}
		}
		else
			alert("Error Communicating");
	}
	req.open("get", "/signup", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send();
	
}
function login() {

	var user = document.getElementById("user").value;
	var pwd = document.getElementById("pass").value;

	var req = new XMLHttpRequest();

	req.onload = function () {
		if (req.status === 200) {
			if (req.responseText === "OK") {
				sessionStorage["loggedin"] = "True";
				sessionStorage["username"] = user;
				profile();
				document.getElementById('a').innerHTML = '';
			}
			else
				alert(req.responseText);
		}
		else
			alert("error communicating");


	}

	var queryString = "user=" + user + "&pass=" + pwd;
	console.log(queryString);


	req.open("POST", "/login", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(queryString);

}

function about() {
	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			var docBody = document.getElementById('a');
			docBody.innerHTML = this.responseText;
		}
		else
			alert("Error Communicating");
	}
	req.open("get", "/about", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send();
}
function explore() {
	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			var docBody = document.getElementById('a');
			if (sessionStorage['loggedin']==="True"){
			var explore = '<script src="jquery.js"></script>			<script src="//code.jquery.com/jquery-1.11.1.min.js"></script><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script><!------ Include the above in your HEAD tag ----------><nav class="navbar navbar-expand-lg navbar-light"    style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);">    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>    </button>    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">        <a class="navbar-brand" onclick="home()"><img src="logo.png" width="35%" height="35%"                class="d-inline-block align-top" alt=""> </a>        <ul class="navbar-nav  mt-2 mt-lg-0">            <li class="nav-item active mr-3">                <a class="nav-link" onclick="home()">Home <span class="sr-only">(current)</span></a>            </li>            <li class="nav-item mr-3">                <a class="nav-link" onclick="explore()">Explore!</a>            </li>            <li class="nav-item mr-3">                <a class="nav-link" onclick="upload()">Upload a photo!</a>            </li>            <li class="nav-item mr-3">                            </li>        </ul>        <div class="form-inline my-2 my-lg-0 mr-3 ml-5">            <input class="form-control mr-sm-2 mr-3 ml-5" type="search" id="hell" style="width: 260px;" placeholder="Search"                aria-label="Search">            <button class="btn btn-light my-2 my-sm-0" type="submit"onclick="search()"><i class="fa gr fa-search"></i></button>        </div>        <ul class="navbar-nav ml-5 pl-5"            style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">            <li class="nav-item dropdown" id="lg">   <a class="nav-link" onclick="signup()" id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown"                    aria-haspopup="true" aria-expanded="false"> Account </a> </li></div>                </ul>    </div></nav><div class="container">    <div class="row">        <div class="gallery col-lg-10 mt-2" id="gallery">              </div>        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none;">            <symbol id="close" viewBox="0 0 18 18">                <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507			S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0			l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507			c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0			s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z" />            </symbol>        </svg>        <script>             </script>    </div></div>';

			docBody.innerHTML = explore;
			document.getElementById("gallery").innerHTML = this.responseText;

			}
			else {
				var upload='<nav class="navbar navbar-expand-lg navbar-light"	style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);"> <button		class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"		aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"> <span			class="navbar-toggler-icon"></span> </button>	<div class="collapse navbar-collapse" id="navbarTogglerDemo01"> <a class="navbar-brand" onclick="home()"><img				src="logo.png" width="35%" height="35%" class="d-inline-block align-top" alt=""> </a>		<ul class="navbar-nav  mt-2 mt-lg-0">			<li class="nav-item active mr-1"> <a class="nav-link" onclick="home()">Home <span						class="sr-only">(current)</span></a> </li>			<li class="nav-item mr-1"> <a class="nav-link" onclick="explore()">Explore!</a> </li>			<li class="nav-item mr-1"> <a class="nav-link" onclick="upload()">Upload a photo!</a> </li>			<li class="nav-item mr-1"> </li>		</ul>		<div class="form-inline my-2 my-lg-0 mr-1 ml-5"> <input class="form-control mr-sm-2 mr-1 ml-5" type="search"				id="hell" style="width: 260px;" placeholder="Search" aria-label="Search"> <button				class="btn btn-light my-2 my-sm-0" type="submit" onclick="search()"><i					class="fa gr fa-search"></i></button> </div>		<ul class="navbar-nav ml-5 pl-5"			style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">			<li class="nav-item dropdown" id="lg"> <a class="nav-link" onclick="signup()"					id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">					Account </a> </li>	</div>	</ul>	</div></nav><div class="row ">	<div class="col-md-12  text-center">		<form action="fileupload" id="" style="border: solid 2px black;" class="gallery mt-5 pt-5 p-5 m-5 card"			method="post" enctype="multipart/form-data"> <label for="post"				style="font-weight: bolder; font-size:22px;">You need to login to view the posts!</label>				<a class="btn btn-light m-5" style="border:black solid 2px;" onclick="signup()"><div class="gr">Click here to make an Account!</div></a> <br> 		</form>	</div></div>';
				docBody.innerHTML = upload;

			}
		}
		else
			alert(this.responseText);
	}
	req.open("post", "/explore", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send();
}
function search() {
	var user = document.getElementById("hell").value;

	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			if (req.responseText === "OK") {
				alert("Not such user found");
			} else {

				var docBody = document.getElementById('a');
				if (sessionStorage['loggedin']==="True"){
					var explore = '<script src="jquery.js"></script>			<script src="//code.jquery.com/jquery-1.11.1.min.js"></script><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script><!------ Include the above in your HEAD tag ----------><nav class="navbar navbar-expand-lg navbar-light"    style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);">    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>    </button>    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">        <a class="navbar-brand" onclick="home()"><img src="logo.png" width="35%" height="35%"                class="d-inline-block align-top" alt=""> </a>        <ul class="navbar-nav  mt-2 mt-lg-0">            <li class="nav-item active mr-3">                <a class="nav-link" onclick="home()">Home <span class="sr-only">(current)</span></a>            </li>            <li class="nav-item mr-3">                <a class="nav-link" onclick="explore()">Explore!</a>            </li>            <li class="nav-item mr-3">                <a class="nav-link" onclick="upload()">Upload a photo!</a>            </li>            <li class="nav-item mr-3">                            </li>        </ul>        <div class="form-inline my-2 my-lg-0 mr-3 ml-5">            <input class="form-control mr-sm-2 mr-3 ml-5" type="search" id="hell" style="width: 260px;" placeholder="Search"                aria-label="Search">            <button class="btn btn-light my-2 my-sm-0" type="submit"onclick="search()"><i class="fa gr fa-search"></i></button>        </div>        <ul class="navbar-nav ml-5 pl-5"            style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">            <li class="nav-item dropdown" id="lg">   <a class="nav-link" onclick="signup()" id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown"                    aria-haspopup="true" aria-expanded="false"> Account </a> </li></div>                </ul>    </div></nav><div class="container">    <div class="row">        <div class="gallery col-lg-10 mt-2" id="gallery">              </div>        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none;">            <symbol id="close" viewBox="0 0 18 18">                <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507			S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0			l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507			c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0			s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z" />            </symbol>        </svg>        <script>             </script>    </div></div>';
		
					docBody.innerHTML = explore;
					document.getElementById("gallery").innerHTML = this.responseText;
		
					}
					else {
						var upload='<nav class="navbar navbar-expand-lg navbar-light"	style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);"> <button		class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"		aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"> <span			class="navbar-toggler-icon"></span> </button>	<div class="collapse navbar-collapse" id="navbarTogglerDemo01"> <a class="navbar-brand" onclick="home()"><img				src="logo.png" width="35%" height="35%" class="d-inline-block align-top" alt=""> </a>		<ul class="navbar-nav  mt-2 mt-lg-0">			<li class="nav-item active mr-1"> <a class="nav-link" onclick="home()">Home <span						class="sr-only">(current)</span></a> </li>			<li class="nav-item mr-1"> <a class="nav-link" onclick="explore()">Explore!</a> </li>			<li class="nav-item mr-1"> <a class="nav-link" onclick="upload()">Upload a photo!</a> </li>			<li class="nav-item mr-1"> </li>		</ul>		<div class="form-inline my-2 my-lg-0 mr-1 ml-5"> <input class="form-control mr-sm-2 mr-1 ml-5" type="search"				id="hell" style="width: 260px;" placeholder="Search" aria-label="Search"> <button				class="btn btn-light my-2 my-sm-0" type="submit" onclick="search()"><i					class="fa gr fa-search"></i></button> </div>		<ul class="navbar-nav ml-5 pl-5"			style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">			<li class="nav-item dropdown" id="lg"> <a class="nav-link" onclick="signup()"					id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">					Account </a> </li>	</div>	</ul>	</div></nav><div class="row ">	<div class="col-md-12  text-center">		<form action="fileupload" id="" style="border: solid 2px black;" class="gallery mt-5 pt-5 p-5 m-5 card"			method="post" enctype="multipart/form-data"> <label for="post"				style="font-weight: bolder; font-size:22px;">You need to login to view the posts!</label>				<a class="btn btn-light m-5" style="border:black solid 2px;" onclick="signup()"><div class="gr">Click here to make an Account!</div></a> <br> 		</form>	</div></div>';
						docBody.innerHTML = upload;
		
					}
					}
		}
	}
	var queryString = "usern=" + user;

	req.open("post", "/search", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(queryString);

}
function home() {
	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			var docBody = document.getElementById('a');
			docBody.innerHTML = this.responseText;
		}
		else
			alert("Error Communicating");
	}
	req.open("get", "/home", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send();
}
function profile() {


	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			if (req.responseText === "OK") {
				alert("Not such user found");
			} else {

				var docBody = document.getElementById('a');
				var explore = '<script src="jquery.js"></script>			<script src="//code.jquery.com/jquery-1.11.1.min.js"></script><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script><!------ Include the above in your HEAD tag ----------><nav class="navbar navbar-expand-lg navbar-light"    style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);">    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>    </button>    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">        <a class="navbar-brand" onclick="home()"><img src="logo.png" width="35%" height="35%"                class="d-inline-block align-top" alt=""> </a>        <ul class="navbar-nav  mt-2 mt-lg-0">            <li class="nav-item active mr-3">                <a class="nav-link" onclick="home()">Home <span class="sr-only">(current)</span></a>            </li>            <li class="nav-item mr-3">                <a class="nav-link" onclick="explore()">Explore!</a>            </li>            <li class="nav-item mr-3">                <a class="nav-link" onclick="upload()">Upload a photo!</a>            </li>            <li class="nav-item mr-3">                            </li>        </ul>        <div class="form-inline my-2 my-lg-0 mr-3 ml-5">            <input class="form-control mr-sm-2 mr-3 ml-5" type="search" id="hell" style="width: 260px;" placeholder="Search"                aria-label="Search">            <button class="btn btn-light my-2 my-sm-0" type="submit"onclick="search()"><i class="fa gr fa-search"></i></button>        </div>        <ul class="navbar-nav ml-5 pl-5"            style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">            <li class="nav-item dropdown" id="lg">                <a class="nav-link" onclick="signup()" id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown"                    aria-haspopup="true" aria-expanded="false"> Account </a> </li></div>                </ul>    </div></nav><div class="container">    <div class="row">        <div class="gallery col-lg-10 mt-2" id="gallery">              </div>        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none;">            <symbol id="close" viewBox="0 0 18 18">                <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507			S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0			l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507			c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0			s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z" />            </symbol>        </svg>         <script>           </script> <div class="col-lg-2">  <a class="btn btn-light m-5" style="border:black solid 2px;" onclick="logout()"><div class="gr"<i class="fa fa-power-off"></i> Logout</div></a></div>   </div></div> ';

				docBody.innerHTML = explore;
				document.getElementById("gallery").innerHTML = this.responseText;
			}
		}
	}
	var user = sessionStorage.getItem('username');
	var queryString = "usern=" + user;
	console.log(user);
	req.open("post", "/profile", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(queryString);

}
function signup() {
	var req = new XMLHttpRequest();
	req.onload = function () {
		var docBody = document.getElementById('a');

		if (req.status === 200) {
			if (sessionStorage['loggedin'] === 'True') {
				docBody.innerHTML = this.responseText;
				docBody.style.background="url('main2.jpg')";

				profile();
			}
			else {
				var docBody = document.getElementById('a');
				docBody.innerHTML = this.responseText;
				docBody.style.background="url('main2.jpg')";docbody.style.backgroundSize=" cover";
			}
		}
		else
			alert("Error Communicating");
	}
	req.open("get", "/signup", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send();
}
function upload() {

	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			var docBody = document.getElementById('a');
			if (sessionStorage['loggedin']==="True"){
				docBody.innerHTML = this.responseText;

			}
			else {
				var upload='<nav class="navbar navbar-expand-lg navbar-light"	style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);"> <button		class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"		aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"> <span			class="navbar-toggler-icon"></span> </button>	<div class="collapse navbar-collapse" id="navbarTogglerDemo01"> <a class="navbar-brand" onclick="home()"><img				src="logo.png" width="35%" height="35%" class="d-inline-block align-top" alt=""> </a>		<ul class="navbar-nav  mt-2 mt-lg-0">			<li class="nav-item active mr-1"> <a class="nav-link" onclick="home()">Home <span						class="sr-only">(current)</span></a> </li>			<li class="nav-item mr-1"> <a class="nav-link" onclick="explore()">Explore!</a> </li>			<li class="nav-item mr-1"> <a class="nav-link" onclick="upload()">Upload a photo!</a> </li>			<li class="nav-item mr-1"> </li>		</ul>		<div class="form-inline my-2 my-lg-0 mr-1 ml-5"> <input class="form-control mr-sm-2 mr-1 ml-5" type="search"				id="hell" style="width: 260px;" placeholder="Search" aria-label="Search"> <button				class="btn btn-light my-2 my-sm-0" type="submit" onclick="search()"><i					class="fa gr fa-search"></i></button> </div>		<ul class="navbar-nav ml-5 pl-5"			style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">			<li class="nav-item dropdown" id="lg"> <a class="nav-link" onclick="signup()"					id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">					Account </a> </li>	</div>	</ul>	</div></nav><div class="row ">	<div class="col-md-12  text-center">		<form action="fileupload" id="" style="border: solid 2px black;" class="gallery mt-5 pt-5 p-5 m-5 card"			method="post" enctype="multipart/form-data"> <label for="post"				style="font-weight: bolder; font-size:22px;">You need to login to make a post!</label>				<a class="btn btn-light m-5" style="border:black solid 2px;" onclick="signup()"><div class="gr">Click here to make an Account!</div></a> <br> 		</form>	</div></div>';
				docBody.innerHTML = upload;

			}

		}
		else
			alert("Error Communicating");
	}
	req.open("get", "/upload", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send();
}
function submitForm() {
	var post = document.getElementById("post").value;
	var user = sessionStorage.getItem("username");
	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			if (req.responseText === "OK") {
				alert("Post submitted successfully ");
			}
			else
				alert(req.responseText);
		}
		else
			alert(req.responseText);
	}
	var queryString = "user=" + user + "&post=" + post;
	console.log(queryString);
	req.open("POST", "/uploadPost", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(queryString);
}

function uploadComment(){
	var post = document.getElementById("post").value;
	var user = sessionStorage.getItem("username");
	var req = new XMLHttpRequest();
	req.onload = function () {
		if (req.status === 200) {
			if (req.responseText === "OK") {
				alert("Post submitted successfully ");
			}
			else
				alert(req.responseText);
		}
		else
			alert(req.responseText);
	}
	var queryString = "user=" + user + "&post=" + post;
	console.log(queryString);
	req.open("POST", "/uploadPost", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(queryString);	
}
function register() {
		var password = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	var user = document.getElementById("username").value;
	if (!password || !email || !user) {
		alert("Enter all details on register")
	}
	else {
		var req = new XMLHttpRequest();
		req.onload = function () {
			if (req.status === 200) {
				if (req.responseText === "OK") {
					alert("Account Registered Successfully");
				} else
					alert(req.responseText);
			} else
				alert("error communicating");
		}
		var queryString = "user=" + user + "&pass=" + password + "&email=" + email;
		console.log(queryString);
		req.open("POST", "/register", true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		req.send(queryString);
	}
}