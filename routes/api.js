const express = require('express');
const router = express.Router();
const { getFlightRequests, createFlightRequest } = require('./controllers/flightRequests');

router.get('/flight-requests', getFlightRequests);
router.post('/flight-requests', createFlightRequest);

module.exports = router;