function AppCtrl($scope, $http){
    console.log("Hello World");
/*
$http.get('/public/contactlist').success(function(response) {
    console.log('I got the data I requested');
    console.log(response);
});*/

	$scope.sendMessage = function() {
		$http.post("/public/php/sendSMS.php", {"phoneNumber" : $scope.contact.receiverPhoneNumber, 
		"message": $scope.contact.message}).success(function(data, status, headers, config) {
			$scope.data = data;
		}).error(function(data, status, headers, config) {
			$scope.status = status;
		});
	}
	
	$scope.addContact = function() {
		//console.log($scope.contact);
		$http.post('/public/contactlist', $scope.contact).success(function(response){
			console.log(response);
		});
	};
        
}
