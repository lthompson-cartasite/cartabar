Install
===
`npm install`

Run
===
run with 
* `node script.js`
* ???
* profit

Run by going to `localhost:3000` in your web browser.

To run local, comment out rpi specific code in the pour method inside `script.js` and comment out the `pi-gpio` module require

Routes
===

* `/flood/:amount` Pour x amount with all of the pumps, used for priming and flushing the tubes

* `/:pin/:amount` 0 - 7 for the pin value ( relay 1 - 8 ) and the amount in oz to run through the lines
