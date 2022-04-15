/* BCM Skript */
// einzeiliger Kommentar
    var map = L.map('map', {
        fullscreenControl: true,
        fullscreenControlOptions: {
        position: 'topleft'}
        }).setView([47.456, 11.254], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    
    }).addTo(map);
    
    let popup = `
        <h3> BCM Season Opener 2022 </h3>
        <ul>
            <li> 23.04.2022 | AB 11 UHR | PARKPLATZ LUTTENSEELIFTE</li>
            <li> Luttensee-Parkplatz, Kranzberg </li>
            <li><a href="https://ibkrob.github.io/routenverlauf/"target="BCM Tour">Information zur geführten Tour</a></li>
            <li><a href="https://ibkrob.github.io/detailmap/" target="BCM Expo">Informationen zur Expo</a></li>
            <li><a href="https://ibkrob.github.io/BCM/printmap.html" target="BCM Printmap">Informationen als Printmap zum Download</a></li>
        </ul>
`;
    
L.marker([47.45611661151047, 11.254835822971142]).addTo(map)
    
        .bindPopup(popup)
    
        .openPopup();

        //<li> <a href="" > Link zur Detailkarte </a></li>
         //   <li> <a href="" > Link zum Flyerdownload </a></li>