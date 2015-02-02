


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
            sweetAlert("Please be patient while we verify your email.", "May take upto 30 seconds.\n              Press Ok");
		console.log($scope.contact);
		$http.post('/public/contactlist', $scope.contact).success(function(response){
	   
			if (response === "0") {
				swal("This email has been used before to send Candy.", "Please contact us for changes to the CandyGram or to request support at (+1 647 298 2364)", "error");
			}
			
			else if  (response === "1") {
				swal("You entered an invalid or non-existing E-mail. Please enter a valid UofT email", "If you think we're mistaken contact us at (+1 647 298 2364)", "error");
			}
			
			else {
				console.log(response);
				swal("Success!Your CandyGram will be delivered soon!", "success");
				
			}
			
		});
	};

}
