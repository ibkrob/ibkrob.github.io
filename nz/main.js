/* Neuseelandreise Skript */
// einzeiliger Kommentar

var map = L.map('map').setView([-41.290, 174.006], 5);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);



L.marker([-41.290, 174.006]).addTo(map)

    .bindPopup('Picton')

    .openPopup();