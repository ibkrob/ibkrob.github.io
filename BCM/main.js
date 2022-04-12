/* Neuseelandreise Skript */
// einzeiliger Kommentar

var map = L.map('map', {
    fullscreenControl: true,
    fullscreenControlOptions: {
    position: 'topleft'}
    }).setView([47.442, 11.258], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);



L.marker([47.442, 11.258]).addTo(map)

    .bindPopup('Mittenwald')

    .openPopup();


    var map = L.map('map', {
        fullscreenControl: true,
        fullscreenControlOptions: {
        position: 'topleft'}
        }).setView([47.442, 11.258], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    
    }).addTo(map);
    
    let popup = `
        <h3> BCM Season Opener 2022 </h3>
        <ul>
            <li> 23.04.2022 | AB 11 UHR | PARKPLATZ LUTTENSEELIFTE</li>
            <li> Luttensee-Parkplatz, Kranzberg </li>
            <li> <a href="${ETAPPEN[0].wikipedia}" > Link zur Detailkarte </a></li>
            <li> <a href="${ETAPPEN[0].github}" > Link zum Flyerdownload </a></li>
</ul>
`;
    
    L.marker([47.442, 11.258]).addTo(map)
    
        .bindPopup(popup)
    
        .openPopup();