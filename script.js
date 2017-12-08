var gpio = require('pi-gpio');
var path = require('path');
const express = require('express');
const app = express();

var ozDuration = 900;
var initialState = 0;
var port = 3000;

var pins = [40, 38, 36, 37, 35, 33, 31, 29];

function pour(pin, ounces) {

    var oz = ounces * ozDuration;

    console.log('pouring from pin:', pin, "oz:", oz);
    gpio.open(pin, "output", function(err) {
    	gpio.write(pin, initialState, function() {
    		setTimeout(function() {
    			gpio.write(pin, !initialState, function() {
    				gpio.close(pin)
    			});
    		}, oz) ;
    	});
    });
}

app.use('/scripts', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/media', express.static(path.join(__dirname, 'media')));

app.get('/', function(req, res)  {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/credits', function(req, res) {
    res.sendFile(path.join(__dirname + '/credits.html'));
});

app.get('/flood/:amount', function(req, res) {
    var params = req.params,
        amount = params.amount;

    pins.forEach(function (value, index) {
        console.log(value, index);
        pour(pins[index], amount);
    });

    res.send("flooding tubes with: " + amount + " oz");
});

app.get('/:pin/:amount', function(req, res) {
    var params = req.params,
        pin = params.pin,
        amount = params.amount;

    pour(pins[pin], amount);
    res.send("Pouring", pin, "of", amount);
});

app.listen(port, function() {  console.log("Port", port)});
