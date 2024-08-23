const express = require('express');
const app = express();

const { router: apiRouter } = require('./routes/api');
const { FlightRequest } = require('./models/FlightRequest');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});