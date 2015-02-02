


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
            sweetAlert({title:"Please be patient while we verify the information you have provided.", text:"May take upto 30 seconds.\n              Press Ok", confirmButtonColor:"#3333FF"}); 
		//console.log($scope.contact);
		$http.post('/public/contactlist', $scope.contact).success(function(response){
             
			if (response === "0") {
				swal({title:"This email has been used before to send Candy.", text:"Please contact us for changes to the CandyGram or to request support at (+1 647 298 2364)", type:"error",
                                confirmButtonColor: "#3333FF"});
			}
			
			else if  (response === "1") {
				swal({title:"You entered an invalid or non-existing E-mail. Please enter a valid UofT email", text:"If you think we're mistaken contact us at (+1 647 298 2364)", type:"error",
                                    confirmButtonColor: '#3333FF'});
			}

			else if (response === "2"){
                            swal({title:"Please fill out all the fields properly", type:"error",
                                confirmButtonColor: "#3333FF"});
			
                        }
                        else if (response === "999"){
                            swal({title:"Please enter a valid phone number", text: "If you're sure you did, please try again later, or contact us at (647-298-2364)",type:"error",
                                confirmButtonColor: "#3333FF"});
			
                        }
                        
			else if (response ==="111"){
				//console.log(response);
				swal({title: "Success!Your CandyGram will be delivered soon!", type:"success",
                                confirmButtonColor: '#3333FF'});
				
			}
			
		});
	};

}
