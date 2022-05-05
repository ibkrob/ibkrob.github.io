/* Neuseelandreise Skript */
// einzeiliger Kommentar
let coords = [
    ETAPPEN[11].lat,
    ETAPPEN[11].lng
];

let zoom = 11;

// Baselayer 
let startLayer = L.tileLayer.provider("Stadia.Outdoors");


let map = L.map('map').setView(coords, zoom);

startLayer.addTo(map);

// Maßstab hinzufügen
L.control.scale({
    imperial: false
}).addTo(map);

L.control.fullscreen().addTo(map);

let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("Stadia.Outdoors")
).addTo(map);
//console.log(coords);
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);

//console.log("text");
//console.log('text');
//console.log('id="map"');
//console.log(`latitude = ${lat}`);

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr)
//console.log(ETAPPEN[0].github)
//console.log(ETAPPEN[0].titel)
//console.log(ETAPPEN[0].wikipedia)
//console.log(ETAPPEN[0].lat)
//console.log(ETAPPEN[0].lng)

for (let etappe of ETAPPEN) {
    let popup = `
        <h3> ${etappe.titel}  (Etappe ${etappe.nr}) </h3>
        <ul>
            <li> geogr. Länge: ${etappe.lng}</li>
            <li> geogr. Breite: ${etappe.lat} </li>
            <li> <a href="${etappe.wikipedia}" > Link zur Wikipediaseite </a></li>
            <li> <a href="https://${etappe.github}.github.io/nz/" > Link zur Etappenseite </a></li>
        </ul>
        `;
    //console.log(etappe);
    let navClass = "etappenLink";
    let mrk = L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup)
    if (etappe.nr == 11) {
        mrk.openPopup();
        navClass = "etappenLink etappeAktuell";
    }

    //Etappennavigation erweitern
    let link = `<a href="https://${etappe.github}.github.io/nz" class="{navClass}" title="${etappe.titel}">${etappe.nr}</a>`;
    document.querySelector("#navigation").innerHTML += link;
};



//DOC Hütten anzeigen 
for (let hut of HUTS) {
    let popup = `
        <h3> ${hut.name}</h3>
        <h4> ${hut.region} </h4>
        <hr>
        <p> ${hut.info} </p>
        <img src="${hut.image}" alt="Vorschaubild">
        <hr>
        <a href="${hut.link}" target="Neuseeland" >Link zur Hütte </a>
    `;
    let statuscolor;
    if (hut.open == true) {
        statuscolor = "green"
    } else {
        statuscolor = "red"
    }

    L.circleMarker([hut.lat, hut.lng], {
        color: statuscolor,
        radius: 50
    }).addTo(map).bindPopup(popup);

};

// Weitere (weltweiten) Baselayer 
let layerControl = L.control.layers({
    "OSM Standard": startLayer,
    "OpenTopoMap": L.tileLayer.provider("OpenTopoMap"),
    "Stadia Outdoors": L.tileLayer.provider("Stadia.Outdoors"),
    "Thunderforest SpinalMap": L.tileLayer.provider("Thunderforest.SpinalMap"),
    "Thunderforest Landscape": L.tileLayer.provider("Thunderforest.Landscape"),
    "Stamen Watercolor": L.tileLayer.provider("Stamen.Watercolor"),

}).addTo(map);

layerControl.expand()

let sightLayer = L.featureGroup();
layerControl.addOverlay(sightLayer, "Etappen");

let mrk = L.marker([etappe.lat, etappe.lng]).addTo(sightLayer);

sightLayer.addTo(map);