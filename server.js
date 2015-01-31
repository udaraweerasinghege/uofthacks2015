var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 



// assuming POST: name=foo&color=red            <-- URL encoding
//
// or       POST: {"name":"foo","color":"red"}  <-- JSON encoding

app.post('/test-page', function(req, res) {
    var name = req.body.name,
        color = req.body.color;
    // ...
});

app.listen(3000);
console.log("Server running on port 3000");
