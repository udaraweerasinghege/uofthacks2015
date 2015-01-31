<!DOCTYPE html>
<html ng-app>
	<?php
		echo "hiasfasdf";
		if (session_status() == PHP_SESSION_NONE) {
			session_start();
		}
		echo "SSSS";
	?>
	<head>
		<link rel="stylesheet" href="styles/css/index.css"/>
		<!-- JQuery scripts, and scripts that use JQuery. -->
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script src="controllers/phoneNumberValidation.js" />
		
		<!-- Angular scripts, and scripts that use Angular. -->
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28/angular.min.js"></script>
		<script src="controllers/controller.js"></script>
	</head>
	<body>
		<header>
			<h1>Candyman</h1>
		</header>
		<main>
			<div class="container" ng-controller="AppCtrl">
				<form id="candygramForm">
					<div>
						<div>Type your name: </div>
						<input required type="text" ng-model="contact.sender"></input>
					</div>
					<div>
						<div>Type your lovely's name: </div>
						<input required type="text" ng-model="contact.receiver"></input>
					</div>
					<div>
						<div>Type your lovely's phone number: </div>
						<input pattern="[0-9]{10}" maxlength=10 required title="Phone number must have 10 characters!" type="tel" ng-model="contact.receiverPhoneNumber"></input>
					</div>
					<div>
						<div>Type your University of Toronto email: </div>
						<input  required type="email" ng-model="contact.email"></input>
					</div>
					<div id="candygramMessage">
						<div>Type message (up to 200 characters inclusive): </div>
						<textarea required type="text" maxlength=200 ng-model="contact.message"></textarea>
					</div>
					<!--<input type="submit" value="Submit" ng-click="sendMessage();addContact()"></input>-->
					<input type="submit" value="Submit" ng-click="addContact()"></input>
					
<!-- 					<input type="submit" value="Submit" ng-click="sendMessage();"></input> -->
				</form>
			</div>
		</main>
	</body>
</html>