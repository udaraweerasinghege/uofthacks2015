var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
var unirest = require('unirest');


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
                 //wait for confirmation
                if (check_domain(req.body.email)) {
                    unirest.get("https://ajith-Verify-email-address-v1.p.mashape.com/varifyEmail?email="+ req.body.email)
                    .header("X-Mashape-Key", "fNUFY5piDUmsh1T322jQvt1PpQxvp1vxDzojsnHjcBBOqk4hJ3")
                    .header("Accept", "application/json")
                    .end(function (result) {
                        console.log(result.status, result.headers, result.body);
                   
                        if(result.body.exist === 'true'){
                            //debug
                                                        
                            sendmsg(req.body.receiverPhoneNumber, req.body.sender);
                                          
    }
    else{
        console.log("Shitty email address, not uoft or timeout");
        return res.send("1");
    }
});                    
                }
                else {
                    console.log("Bad email domain");
                    return res.send("1");
                }
            }
            else {
                console.log("Email already in database");
                return res.send("0");
            }
    
        });
        
    function sendmsg(num, name){
    error = null;
    client.messages.create({ 
		to: "+1" + num, 
		from: "+16476910744", 
		body: "Hey you got a candygram from " + name + ". If you'd like to accept, reply with when and where our Cupids can find you on Campus to deliver your candy and Valentine's note(e.g:Sidney Smith February 4th 2pm). If you do not want it, reply 'No'. \n -Thank You, \n UofT CandyMan \n www.uoftcandy.com"   
	}, function(err, message) {
            if (err === null)
            {
              console.log("messgae went thorugh");
              db.contactlist.insert(req.body, function(err, doc){
                  res.json("111");
            });
              
            }
            else{
                console.log("Shiitty phone num");
                res.send("999");
            }

	});
 }; 
    }
    else{
        console.log("not all fields were filled");
        res.send("2");
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
function check_phone(number){
    
}



// Twilio Credentials 
var accountSid = 'ACb5b8b7aaf585513d108ebd6b8fa1ae0d'; 
var authToken = '37f96779f221e582a513f4c1438dc01c'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

/**
function sendmsg(num, name){
    error = null;
    client.messages.create({ 
		to: "+1" + num, 
		from: "+16476910744", 
		body: "Hey you got a candygram from " + name + ". If you'd like to accept, reply with when and where our Cupids can find you on Campus to deliver your candy and Valentine's note(e.g:Sidney Smith February 4th 2pm). If you do not want it, reply 'No'. \n -Thank You, \n UofT CandyMan \n www.uoftcandy.com"   
	}, function(err, message) {
            if (err === null)
            {
              
            }
            else{
                
                error = err.status;
                console.log("err status is : " + error);
            }

	});
 
};
**/


/**
function validate(email){
    var x = -1;

console.log("step 1 passed");
return x==='true';
}**/

    

app.listen(3000);
console.log("Server running on port 3000");

