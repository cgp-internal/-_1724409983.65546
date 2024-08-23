Flight Request Mapping Application
=====================================

This is a web application that allows users to visualize and interact with flight requests on a map. The application is built using Node.js, Express, and Leaflet.js.

How to Run
-----------

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open a web browser and navigate to `http://localhost:3000`

This will start the development server and open the interactive mapping application in your default web browser.

Documentation
-------------

This application consists of the following components:

* `app.js`: The main entry point for the web server application.
* `routes/api.js`: Defines API routes for handling flight requests.
* `controllers/flightRequests.js`: Handles API requests for flight requests, interacting with the database to store and retrieve polygon boundaries.
* `services/flightService.js`: Provides functions for interacting with the database, saving and retrieving polygon boundaries.
* `db.js`: Establishes a connection to the SQLite database.
* `models/FlightRequest.js`: Defines the schema for flight requests, including polygon boundaries.
* `public/index.html`: The main HTML file for the interactive mapping application, utilizing Leaflet.js.
* `public/js/index.js`: JavaScript file for handling map interactions, sending requests to the backend API.
* `public/css/index.css`: CSS file for styling the interactive mapping application.

License
-------

This application is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.