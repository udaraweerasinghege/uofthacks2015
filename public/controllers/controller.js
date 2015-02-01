$(document).ready(function(){
    
});





function AppCtrl($scope, $http){
    console.log("Hello World");
/*
$http.get('/public/contactlist').success(function(response) {
    console.log('I got the data I requested');
    console.log(response);
});*/

	$scope.sendMessage = function() {
		$http.post("/public/twilio", {"phoneNumber" : $scope.contact.receiverPhoneNumber, 
		"message": $scope.contact.message}).success(function(data, status, headers, config) {
			$scope.data = data;
		}).error(function(data, status, headers, config) {
			$scope.status = status;
			console.log(data);
			console.log(status);
			console.log(headers);
			console.log(config);
		});
	};
	
	$scope.addContact = function() {
            alert("Please be patient while we verify your email.")
		console.log($scope.contact);
		$http.post('/public/contactlist', $scope.contact).success(function(response){
	   
			if (response === "0") {
				alert("This email has been used before to send candy. Please contact us for changes (6472982364)");
			}
			
			else if  (response === "1") {
				alert("Valid UofT Email Addresses only, if valid please ");
			}
			
			else {
				console.log(response);
				alert("Success! Candygram will be delivered soon!");
				jQuery(document).ready(function() {
					jQuery("input[type=text], textarea, input[type=tel], input[type=email]").val("");
				});
			}
			
		});
	};

}
