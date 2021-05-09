var express = require("express");

var mysql = require("mysql");

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//app.use(bodyParser.json());

app.get('/registrationlogin', handleGetRequest);
var registrationlogin = '<html> <body> <h1> Login </h1> <p>Username</p> <input type="text" placeholder="Username" name="" value="" required> <p>Password</p> <input type="text" placeholder="Password" name="" value="" required><button onclick="registrationlogin()" type="button">Signin</button></a> <h1> Register </h1> <p>Name</p> <input type="text" placeholder="Name" name="" value="" required> <p>Username</p> <input type="text" placeholder="Username" name="" value="" required> <p>Password</p> <input type="password" placeholder="Password" name="" value="" required> <p>Date of Birth</p> <input type="text" placeholder="Date of birth" name="" value="" required> <a href="/"><button type="button">Register</button></a> </body> </html>';
app.get('/about', handleGetRequest);
app.get('/home', handleGetRequest);
app.get('/upload', handleGetRequest);
app.post('/search', searchPost);
app.post('/profile', profilePost);
app.get('/signup', handleGetRequest);
app.post('/fileupload', fileUpload);
app.post('/uploadPost', postUpload);
app.post('/explore', displayPost)
app.get('/logout', handleGetRequest);
var about = '<!DOCTYPE html><html lang="en"><head>	<title> About-Us </title>	<link rel="stylesheet" href="file.css">	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>	<script src="client.js"></script></head><body id="a" style="background-image: url("main2.jpg"); background-color: (0,0,0,0.4); width: 100%; background-size: cover;">	<nav class="navbar navbar-expand-lg navbar-light"    style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);">    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>    </button>    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">        <a class="navbar-brand" onclick="home()"><img src="logo.png" width="35%" height="35%"                class="d-inline-block align-top" alt=""> </a>        <ul class="navbar-nav  mt-2 mt-lg-0">            <li class="nav-item active mr-1">                <a class="nav-link" onclick="home()">Home <span class="sr-only">(current)</span></a>            </li>            <li class="nav-item mr-1">                <a class="nav-link" onclick="explore()">Explore!</a>            </li>            <li class="nav-item mr-1">                <a class="nav-link" onclick="upload()">Upload a photo!</a>            </li>            <li class="nav-item mr-1">                            </li>        </ul>        <div class="form-inline my-2 my-lg-0 mr-1 ml-5">            <input class="form-control mr-sm-2 mr-1 ml-5" type="search" id="hell" style="width: 260px;" placeholder="Search"                aria-label="Search">            <button class="btn btn-light my-2 my-sm-0" type="submit"onclick="search()"><i class="fa gr fa-search"></i></button>        </div>        <ul class="navbar-nav ml-5 pl-5"            style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">            <li class="nav-item dropdown" id="lg">                <a  class="nav-link" onclick="signup()" id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown"                    aria-haspopup="true" aria-expanded="false"> Account </a> </li></div>                </ul>    </div></nav>    <div class="container"><center>About page content</center></div></body></html>';
var login = '<!DOCTYPE html><html><head>	<title> Home </title>	<link rel="stylesheet" href="file.css">	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>	<script src="client.js"></script></head><body id="a" style="background-image: url("main2.jpg"); background-color: (0,0,0,0.4); width: 100%; background-size: cover;">	<nav class="navbar navbar-expand-lg navbar-light"    style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);">    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>    </button>    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">        <a class="navbar-brand" onclick="home()"><img src="logo.png" width="35%" height="35%"                class="d-inline-block align-top" alt=""> </a>        <ul class="navbar-nav  mt-2 mt-lg-0">            <li class="nav-item active mr-1">                <a class="nav-link" onclick="home()">Home <span class="sr-only">(current)</span></a>            </li>            <li class="nav-item mr-1">                <a class="nav-link" onclick="explore()">Explore!</a>            </li>            <li class="nav-item mr-1">                <a class="nav-link" onclick="upload()">Upload a photo!</a>            </li>            <li class="nav-item mr-1">                            </li>        </ul>        <div class="form-inline my-2 my-lg-0 mr-1 ml-5">            <input class="form-control mr-sm-2 mr-1 ml-5" type="search" id="hell" style="width: 260px;" placeholder="Search"                aria-label="Search">            <button class="btn btn-light my-2 my-sm-0" type="submit"onclick="search()"><i class="fa gr fa-search"></i></button>        </div>        <ul class="navbar-nav ml-5 pl-5"            style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">            <li class="nav-item dropdown" id="lg">                <a  class="nav-link" onclick="signup()" id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown"                    aria-haspopup="true" aria-expanded="false"> Account </a> </li></div>                </ul>    </div></nav>	<div class="container" id="homePage" >		<div class="row">			<div class="col-lg-5" style=" ">				<div id="loginDiv"  style=" ">					<div id="abc"class="mb-2 card p-5 mt-5 bg-transparent  text-uppercase font-weight-bold shadow-lg text-light" style="box-shadow: 0px 2px 5px 4px #01baef !important;;">						<center class="mb-5" ><h2>Login Account</h2>							<hr style="width: 90%; height:2px; background-color: white; ">						</center>						<label class="center" for=""><i class="fa fa-user"></i> Username </label>						<input type="text " id="user" required> <br><br>							<label for=""><i class="fa fa-key"></i> Password </label>						<input type="password" id="pass" required> <br> <br>						<center><button class="btn btn-light" onclick="login()">								<div class="gr  text-uppercase">Login</div>							</button></center>					</div>							</div>			</div>			<div class="col-lg-2"></div>			<div class="col-lg-5" style=" ">				<div  id="abc"	 class="mb-2 card p-5 mt-3 font-weight-bold text-uppercase shadow-lg text-white" style=" box-shadow: 0px 2px 5px 4px #01baef !important; background-color	:transparent !important;">					<center class="mb-5"><h2>Register Account</h2>						<hr style="width: 90%; height:2px; background-color: white; ">					</center>					<label class="center" for=""><i class="fa fa-envelope"></i> Email </label>					<input type="text " id="email" required> <br><br>					<label class="center" for=""><i class="fa fa-user"></i> Username </label>					<input type="text " id="username" required> <br><br>					<label for=""><i class="fa fa-key"></i> Password </label>					<input type="password" id="password" required> <br> <br>					<center><button class="btn btn-light" onclick="register()">							<div class="gr  text-uppercase">Register</div>						</button></center>				</div>			</div>		</div>	</div></body></html>';
var home = '<!DOCTYPE html><html><head>	<title> Home </title>	<link rel="stylesheet" href="file.css">	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>	<script src="client.js"></script></head><body id="a" style="background:url("main2.jpg");">	<nav class="navbar navbar-expand-lg navbar-light"		style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);">		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"			aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">			<span class="navbar-toggler-icon"></span>		</button>		<div class="collapse navbar-collapse" id="navbarTogglerDemo01">			<a class="navbar-brand" onclick="home()"><img src="logo.png" width="35%" height="35%"					class="d-inline-block align-top" alt=""> </a>			<ul class="navbar-nav  mt-2 mt-lg-0">				<li class="nav-item active mr-3">					<a class="nav-link" onclick="home()">Home <span class="sr-only">(current)</span></a>				</li>				<li class="nav-item mr-3">					<a class="nav-link" onclick="explore()">Explore!</a>				</li>				<li class="nav-item mr-3">					<a class="nav-link" onclick="upload()">Upload a photo!</a>				</li>				<li class="nav-item mr-3">				</li>			</ul>			<div class="form-inline my-2 my-lg-0 mr-3 ml-5">				<input class="form-control mr-sm-2 mr-3 ml-5" id="hell" type="search" style="width: 260px;"					placeholder="Search" aria-label="Search">				<button class="btn btn-light my-2 my-sm-0" onclick="search()" onclick="search()"><i						class="fa gr fa-search"></i></button>			</div>			<ul class="navbar-nav ml-5 pl-5"				style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">				<li class="nav-item dropdown" id="lg">					<a class="nav-link" onclick="signup()" id="navbarDropdownMenuLink-4" data-toggle="dropdown"						aria-haspopup="true" aria-expanded="false"> Account </a> </li>			</ul>		</div>	</nav>	<div class="card m-5" style="border: solid black 2px;">		<center>			<h1>Welcome to Social Distancer!</h1>			<br><img src="logo.png" alt="">			<br><br><br>			<h3>Immerse yourself into amazing posts available on this website,<br> and do your self-quarantine things,				and follow up on challenges!				<br>				Make sure to stay home, stay safe.			</h3>			<a class="btn btn-light m-5" style="border:black solid 2px;" onclick="upload()">				<div class="gr">Make your first post now!</div>			</a>		</center>	</div></body></html>';

var posts = '';

var upload = '   <nav class="navbar navbar-expand-lg navbar-light"        style="background-color: #20bf55;    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);">        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"> <span                class="navbar-toggler-icon"></span> </button>        <div class="collapse navbar-collapse" id="navbarTogglerDemo01"> <a class="navbar-brand" onclick="home()"><img                    src="logo.png" width="35%" height="35%" class="d-inline-block align-top" alt=""> </a>            <ul class="navbar-nav  mt-2 mt-lg-0">                <li class="nav-item active mr-1"> <a class="nav-link" onclick="home()">Home <span                            class="sr-only">(current)</span></a> </li>                <li class="nav-item mr-1"> <a class="nav-link" onclick="explore()">Explore!</a> </li>                <li class="nav-item mr-1"> <a class="nav-link" onclick="upload()">Upload a photo!</a> </li>                <li class="nav-item mr-1">  </li>            </ul>            <div class="form-inline my-2 my-lg-0 mr-1 ml-5"> <input class="form-control mr-sm-2 mr-1 ml-5" type="search"                    id="hell" style="width: 260px;" placeholder="Search" aria-label="Search"> <button                    class="btn btn-light my-2 my-sm-0" type="submit" onclick="search()"><i                        class="fa gr fa-search"></i></button> </div>            <ul class="navbar-nav ml-5 pl-5"                style="padding: 0% !important; padding-right:0 !important; margin-right:0 !important; margin-left: 80px !important; ">                <li class="nav-item dropdown" id="lg"> <a class="nav-link" onclick="signup()"                        id="navbarDropdownMenuLink-4 acc" data-toggle="dropdown" aria-haspopup="true"                        aria-expanded="false"> Account </a> </li>        </div>        </ul>        </div>    </nav>        <div class="row " >            <div class="col-md-12  text-center">                        <form action="fileupload" id="" style="border: solid 2px black;" class="gallery mt-5 pt-5 p-5 m-5 card" method="post" enctype="multipart/form-data">                    <label for="post" style="font-weight: bolder; font-size:22px;">Enter Caption for your post</label>                    <br>                    <textarea style="border:black 2px solid;"name="" placeholder="Enter Caption here...."id="post" rows="3"></textarea>                    <br><br><center>                    <label>Select image:</label>     <br>               <input type="file" class="try try1"name="filetoupload" accept="image/*">    <br><br>            <button style="width: 30%; height:30%;   border:black 2px solid;    " class="mt-3 btn" id="submit" type="submit"  onclick="setTimeout(submitForm, 100)"><i class="fa gr fa-upload">  UPLOAD</i> </button></center>                        </form>            </div>        </div>        ';

app.use(express.static('public'));

function handleGetRequest(request, response) {
    var pathArray = request.url.split('/');
    var pathEnd = pathArray[pathArray.length - 1];

    if (pathEnd === 'upload') {
        response.send(upload);
    } else if (pathEnd === 'about') {
        response.send(about);
    } else if (pathEnd === 'signup') {
        response.send(login);
    } else if (pathEnd === 'home') {
        response.send(home);
    } else if (pathEnd === 'logout') {
        response.send('OK');
    } else response.send('NO.');
}
app.listen(8080);

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var newpath;

function fileUpload(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.filetoupload.path;

        newpath = 'C:/Users/micro/Desktop/csd/public/images/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function(err) {
            if (err) throw err;
            res.redirect("localhost:8080/fileupload");

        });
    });

}

function postUpload(request, response) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "rithik",
        password: "abcd",
        database: "website"

    });
    con.connect(
        function(err) {
            if (err) throw err;
        }
    );
    console.log(request.body.post, request.body.user);
    var path = newpath.split('/');
    var pathend = path[path.length - 1];
    var sql = "Insert into posts (path, posts, username) values ('" + pathend + "','" + request.body.post + "','" + request.body.user + "')";

    con.query(sql, function(err, result) {
        if (err) throw err;
        else {
            response.send("OK");

        }

    });
    con.end();
}

function displayPost(request, response) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "rithik",
        password: "abcd",
        database: "website"
    });
    con.connect(
        function(err) {
            if (err) throw err;

        }
    );
    var sql = "SELECT * FROM posts";

    con.query(sql, function(err, result) {

        //Check for errors
        var input = "";

        result.forEach(function(p) {

            input += '		<div class="col-md-4" onclick="signup()" id="pst">		<figure>		<center>	<img id="img" src="images/' + p.path + ' "alt="" />		</center>	<figcaption> ' + p.posts + '  <small> ' + p.username + ' </small></figcaption>		</figure>		<center> <small>Submitted By			<b class="tet"> ' + p.username + '  </b> </small> <br><small> <i> Caption:</i><i class="tet">' + p.posts + '</i>	 </small> 	</center>	</div>'
        })

        response.send(input);


    });
    con.end();
}

function searchPost(request, response) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "rithik",
        password: "abcd",
        database: "website"
    });
    con.connect(
        function(err) {
            if (err) throw err;


        }
    );
    console.log(request.body.usern);
    var sql = "SELECT * FROM posts where username ='" + request.body.usern + "'";

    con.query(sql, function(err, result) {
        //Check for errors
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
            var input = "";
            result.forEach(function(p) {
                input += '		<div class="col-md-4 m-3 rounded" id="pst">		<figure>		<center>	<img id="img" src="images/' + p.path + ' "alt="" />		</center>	<figcaption> ' + p.posts + '  <small> ' + p.username + ' </small></figcaption>		</figure>		<center> <small>Submitted By			<b class="tet"> ' + p.username + '  </b> </small> <br><small> <i> Caption:</i>   <i class="tet">' + p.posts + '</i> </small>		</center>	</div>'
            })

            response.send(input);
        } else {
            response.send("OK");
        }
    });
}

function profilePost(request, response) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "rithik",
        password: "abcd",
        database: "website"
    });
    con.connect(
        function(err) {
            if (err) throw err;
        }
    );
    console.log(request.body.usern);
    var sql = "SELECT * FROM posts where username ='" + request.body.usern + "'";
    con.query(sql, function(err, result) {
        //Check for errors
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
            var input = "";
            result.forEach(function(p) {
                input += '		<div class="col-md-4" id="pst">		<figure>		<center>	<img id="img" src="images/' + p.path + ' "alt="" />		</center>	<figcaption> ' + p.posts + '  <small> ' + p.username + ' </small></figcaption>		</figure>		<center> <small>Submitted By			<b class="tet"> ' + p.username + '  </b> </small> <br><small> <i> Caption:</i>   <i class="tet">' + p.posts + '</i> </small>		</center>	</div>'
            })
            response.send(input);
        } else {
            var input = "";
            input += '				 <center class=" m-5 pl-5 ml-5" > <h2 class="gr"> <i class="fa trt fa-exclamation-triangle"></i>   No posts found! <br> Make Posts to view them in your profile!<h2>			<a class="btn btn-light m-5" style="border:black solid 2px;" onclick="upload()"> <div class="gr">Make your first post now!</div> </a>  </center>	'
            response.send(input);
        }
    });
}

function handleLogin(request, response) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "rithik",
        password: "abcd",
        database: "website"
    });
    con.connect(
        function(err) {
            if (err) throw err;
            console.log("Connected");
        }
    );
    var username = request.body.user;
    var password = request.body.pass;

    if (username && password) {
        con.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                response.send('OK');

            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
}
app.post('/login', handleLogin);

function handleRegister(request, response) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "rithik",
        password: "abcd",
        database: "website"

    });
    con.connect(
        function(err) {
            if (err) throw err;

        }
    );
    var sql = "Insert into user (email, password, username) values ('" + request.body.email + "','" + request.body.pass + "','" + request.body.user + "')";
    con.query(sql, function(err, result) {
        if (err) {
            response.send("Username already exists")
        } else {
            response.send("OK");
        }

    });
    con.end();
}

//Close the connection


app.post('/register', handleRegister);