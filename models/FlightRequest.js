const mongoose = require('mongoose');

const polygonSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Polygon'],
    default: 'Polygon'
  },
  coordinates: {
    type: [[Number]],
    required: true
  }
});

const flightRequestSchema = new mongoose.Schema({
  polygon: {
    type: polygonSchema,
    required: true
  }
});

const FlightRequest = mongoose.model('FlightRequest', flightRequestSchema);

module.exports = { FlightRequest };