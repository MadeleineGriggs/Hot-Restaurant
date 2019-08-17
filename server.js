var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
    name: 'testing table',
    phone: '867 5309',
    email: 'Jenny@jenny.com',
    id: 'bday'
  }];

  var waitlist = [{
    name: 'testing table waitlist',
    phone: '867 5309',
    email: 'Jenny@jenny.com',
    id: 'bday'
  }]


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});



app.post("/api/tables", function(req, res) {
    console.log(tables.length)

    if (tables.length < 5) {
        var newReservation = req.body;
        newReservation.routeName = newReservation.name;
        tables.push(newReservation);
        res.json(true);

    } else{
        var newReservation = req.body;
        newReservation.routeName = newReservation.name;
        waitlist.push(newReservation)
        res.json(false);
    }

  });





            
    app.post("/api/waitlist", function(req, res) {

        var newReservation = req.body;
  
        newReservation.routeName = newReservation.name;
    
        waitlist.push(newReservation);
        res.json(newReservation)

  });




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// Setup server using express

// Figure out which variables we want to store

// Create routes for getting and posting data to the table

// Create routes for the html

//  Use jQuery to run AJAX calls to GET and POST data from users to the Express server