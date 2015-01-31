// Twilio Credentials 
var accountSid = 'AC101630b8459ce2526b575abd7457c725'; 
var authToken = '600166b367db1a88faff6cc23a6cbc1d'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({  
	from: "+16476910522", 
	to: "+16479380885",
	body: "She sits alone, waiting for suggestions, he's acting shy, avoiding all her questions?",   
}, function(err, message) { 
	console.log(message.sid); 
});