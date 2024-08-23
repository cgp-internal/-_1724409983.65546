L.Map = new L.Map('map', {
  center: [40, -74.50],
  zoom: 12
});

L.Map.addLayer(L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
}));

function sendFlightRequest(polygon) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/flightRequests', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ polygon: polygon }));
}

L.Map.on('click', function (e) {
  var latlng = e.latlng;
  var polygon = [
    [latlng.lat, latlng.lng],
    [latlng.lat + 0.01, latlng.lng],
    [latlng.lat + 0.01, latlng.lng + 0.01],
    [latlng.lat, latlng.lng + 0.01],
    [latlng.lat, latlng.lng]
  ];
  sendFlightRequest(polygon);
});

L.Map.on('moveend', function () {
  var bounds = L.Map.getBounds();
  var polygon = [
    [bounds.getNorthEast().lat, bounds.getNorthEast().lng],
    [bounds.getNorthEast().lat, bounds.getSouthWest().lng],
    [bounds.getSouthWest().lat, bounds.getSouthWest().lng],
    [bounds.getSouthWest().lat, bounds.getNorthEast().lng],
    [bounds.getNorthEast().lat, bounds.getNorthEast().lng]
  ];
  sendFlightRequest(polygon);
});