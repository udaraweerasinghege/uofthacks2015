var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

/*
app.get('/public/contactlist', function(req, res){
    console.log("got get req");
    db.contactlist.find(function(err, docs){
       console.log(docs);
       res.json(docs);
    });
});*/

app.post('/public/contactlist', function(req, res) {
    
    console.log(req.body);
    count = Object.size(req.body);
    console.log("count:" + count);
    if (count === 5) {
        var cursor = db.contactlist.find({email: req.body.email});
        cursor.toArray(function(err, docs){
            console.log("retrieved records:");
            console.log(docs);
            if (docs.length === 0) { //emails not already in db
                if (check_domain(req.body.email)) {
                    db.contactlist.insert(req.body, function(err, doc){
                    res.json(doc);
                    });
                    sendmsg(req.body.receiverPhoneNumber, req.body.sender);
                }
                else {
                    console.log("Bad email domain");
                    res.send("1");
                }
            }
            else {
                console.log("Email already in database");
                res.send("0");
            }
    
        });
    }  
});
            

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function check_domain(email) {
    var domain = email.slice(email.indexOf('@')+1);
    console.log(domain);
    return domain === "mail.utoronto.ca";
}
// Twilio Credentials 
var accountSid = 'AC101630b8459ce2526b575abd7457c725'; 
var authToken = '600166b367db1a88faff6cc23a6cbc1d'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

function sendmsg(num, name){
	
    client.messages.create({ 
		to: "+1" + num, 
		from: "+16476910522", 
		body: "Hey you got a candygram from " + name   
	}, function(err, message) { 
		console.log("+1" + num); 
	});
}

app.listen(3000);
console.log("Server running on port 3000");

