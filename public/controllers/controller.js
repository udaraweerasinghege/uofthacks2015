function AppCtrl($scope, $http){
    console.log("Hello World");
/*
$http.get('/public/contactlist').success(function(response) {
    console.log('I got the data I requested');
    console.log(response);
});*/

$scope.addContact = function() {
    //console.log($scope.contact);
    $http.post('/public/contactlist', $scope.contact).success(function(response){
        console.log(response);
    });
};
        
}
