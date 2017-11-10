# cartabar
Lunch and Learn: Cartabar code repository for Raspberry Pi

### Sample express application
This application listens on port 3000. It uses express and node.js to serve web content.

#### controllers
A folder for holding controllers. Controllers are a way to separate the responsibilities of your code into logical components.
By convention, controllers are named for their routes. Controllers are the brains of the app, interpreting the requests, pulling the necessary
data from the models, assembling the data with one or more views and returning the result.

#### controllers/drinks.js
A simple controller with three endpoints.
This controller serves 3 endpoints:

/ - returns all drinks from the model

/:drinkId - returns one drink from the model based on its drink id

/names - returns the names of all the drinks in an array

Because this controller is mapped to the /drinks route (see index.js above), the actual endpoints for this controller
are:

/drinks/
/drinks/:drinkKey
/drinks/names

#### models
A folder for holding either data or code designed to access data. An application uses models to hide the implementaion details
of a particular data source from its controllers. This allows a future revision to be made to the model without changing the
controller code.

When the server controls hardware such as pumps and relays, one would typically create a model that presents a restricted set of functions
to use that hardware while hiding the details about how that hardware is actually controlled. For example, a model called pumps.js might expose
methods called on(), off() and status() that turn pumps on, turns them off, and reports their state (on, off, disabled). By using this model, the
controller doesn't have to worry about HOW a pump turns on and off, only that it can do so when required.

#### drinks.json
This is a simple json file contianing a single JavaScript object. Each drink recipe is stored under a key that can be used to uniquely identify this particular
recipe. In the future, this file should be expanded to include the liquor type required to pour this drink as well as how many ounces of each liquor should be used.

#### config.json
This empty file can be used to hold configuration information about the drink machine, such as the number of bottles and the contents of each bottle.

#### public
A folder for holding static web content that can be served directly to a browser, such as complete html pages, stylesheets, images, etc. This folder is currently mapped to the root path.
Everything in this folder is avaliable to the public so don't put private info here

#### views
A folder for holding full or partial web pages that render data from a model into a pretty format.

#### index.js
Sets up the express server, installs middleware and error handlers, then sets up the routes to controllers and starts listening for connections.
Note that the /public folder is mapped to the root ('/') route, and the drinks controller is mapped to the '/drinks' route.

#### package.json
A file containing all of the npm modules used by the application. You should not edit this file directly. Instead, use npm with the *--save* option to add
your packages to the file.