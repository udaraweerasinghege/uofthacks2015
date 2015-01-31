var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.get('/public/contactlist', function(req, res){
    console.log("got get req");
    db.contactlist.find(function(err, docs){
       console.log(docs);
       res.json(docs);
    });
});

app.post('/public/contactlist', function(req, res) {
    console.log(req.body);
    count = Object.size(req.body);
    
    if (count == 4) {
        console.log(db.contactlist.find({email: {"$in": req.body.email}}).count());
        db.contactlist.insert(req.body, function(err, doc){
            res.json(doc);
    
        });
    }
    
    else {
        console.log("Invalid parameters, db not updated");
    }
});
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
app.listen(3000);
console.log("Server running on port 3000");
