<?php

	ini_set("display_errors",1);
	ini_set("display_startup_errors",1);
	error_reporting(-1);

	include_once("C:/inetpub/wwwroot/UofTHacks/public/php/twilio.php");
	
	$account_sid = "AC101630b8459ce2526b575abd7457c725"; 
	$auth_token = "600166b367db1a88faff6cc23a6cbc1d"; 
	$client = new Services_Twilio($account_sid, $auth_token); 
	$client->http->debug = true;
	
	try {	
		$client->account->messages->create(array( 
			"To" => "16479380885", 
			"From" => "+16476910522", 
			"Body" => "Hi IIIIII",   
		));
	}
	catch (Services_Twilio_RestException $e) {
		echo $e->getMessage();
	}

?>