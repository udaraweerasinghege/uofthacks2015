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
		//console.log($scope.contact);
         
                // $http.post('/public/contactlist', $scope.contact).success(function(response){
               
                    // if (response === "0") {
                        // alert("This email has been used before to send candy.");
                    // }
                    // else if  (response === "1") {
                        // alert("UofT Email Addresses only");
                    // }
                    // else {
                        // console.log(response);
                    // }
                // });
        };
}
