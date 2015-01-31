<!DOCTYPE html>
<html ng-app>
	<?php
		if (session_status() == PHP_SESSION_NONE) {
			session_start();
		}
		
		include_once("C:/inetpub/wwwroot/UofTHacks/public/php/sendSMS.php");
	?>


	<head>
		<link rel="stylesheet" href="styles/css/index.css"/>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28/angular.min.js"></script>
		<script src="controllers/controller.js"></script>
	</head>
	<body>
		<header>
			<h1>Candyman</h1>
		</header>
		<main>
			<div class="container" ng-controller ="AppCtrl">
				<form>
					<div>
						<div>Type your name: </div>
						<input  type="text" ng-model="contact.sender" ></input>
					</div>
					<div>
						<div>Type your lovely's name: </div>
						<input type="text" ng-model="contact.receiver"></input>
					</div>
					<div>
						<div>Type your lovely's phone number: </div>
						<input type="tel"></input>
					</div>
					<div>
						<div>Type your University of Toronto email: </div>
						<input type="email" ng-model="contact.email"></input>
					</div>
					<div id="candygramMessage">
						<div>Type message (up to 200 characters inclusive): </div>
						<textarea required type="text" maxlength=200 ng-model="contact.message"></textarea>
					</div>
					<input type="submit" value="Submit" ng-click="addContact()"></input>
				</form>
			</div>
		</main>
	</body>
</html>