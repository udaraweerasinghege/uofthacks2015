<?php

	ini_set("display_errors",1);
	ini_set("display_startup_errors",1);
	error_reporting(-1);

	include_once("C:/inetpub/wwwroot/UofTHacks/public/php/twilio.php");
	
	$account_sid = "AC101630b8459ce2526b575abd7457c725"; 
	$auth_token = "600166b367db1a88faff6cc23a6cbc1d"; 
	
	$http = new Services_Twilio_TinyHttp('https://api.twilio.com', array('curlopts' => array(         CURLOPT_SSL_VERIFYPEER => true,         CURLOPT_SSL_VERIFYHOST => 2,     )));
	$client = new Services_Twilio($account_sid, $auth_token, "2010-04-01", $http); 
	$client->http->debug = true;
	
	// try {	
		// $client->account->messages->create(array( 
			// "To" => $_SESSION["phoneNumber"], 
			// "From" => "+16476910522", 
			// "Body" => $_SESSION["message"],   
		// ));
	// }	
	try {	
		$client->account->messages->create(array( 
			"To" => "+16479380885", 
			"From" => "+16476910522", 
			"Body" => "I'm sick of this black widow baby",   
		));
	}
	catch (Services_Twilio_RestException $e) {
		echo $e->getMessage();
	}

?>