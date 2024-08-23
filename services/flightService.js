const { db } = require('./db');

async function savePolygon(flightRequest) {
  const query = `INSERT INTO flight_requests (id, polygon) VALUES (?, ?)`;
  const params = [flightRequest.id, JSON.stringify(flightRequest.polygon)];
  await db().run(query, params);
}

async function getPolygons() {
  const query = 'SELECT * FROM flight_requests';
  const result = await db().all(query);
  return result.map((row) => ({ id: row.id, polygon: JSON.parse(row.polygon) }));
}

module.exports = { savePolygon, getPolygons };