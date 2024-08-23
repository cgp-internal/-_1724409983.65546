const { savePolygon, getPolygens } = require('../services/flightService');

async function getFlightRequests(req, res) {
  try {
    const flightRequests = await getPolygons();
    res.json(flightRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve flight requests' });
  }
}

async function createFlightRequest(req, res) {
  try {
    const { id, polygon } = req.body;
    await savePolygon({ id, polygon });
    res.json({ message: 'Flight request created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create flight request' });
  }
}

module.exports = { getFlightRequests, createFlightRequest };