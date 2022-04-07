/* Neuseelandreise Skript */
// einzeiliger Kommentar
let lat = -41.290
let lng = 174.006
let zoom = 5
let map = L.map('map').setView([lat, lng], zoom);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);



L.marker([lat, lng]).addTo(map)

    .bindPopup('Picton')

    .openPopup();