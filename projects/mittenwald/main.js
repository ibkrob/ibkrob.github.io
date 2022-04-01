/* Neuseelandreise Skript */
// einzeiliger Kommentar

var map = L.map('map').setView([47.442, 11.258], 5);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);



L.marker([47.442, 11.258]).addTo(map)

    .bindPopup('Mittenwald')

    .openPopup();

var map = new L.Map('map', {
fullscreenControl: true,
fullscreenControlOptions: {
position: 'topleft'}
});