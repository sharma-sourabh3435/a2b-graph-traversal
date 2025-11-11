let map;
let selectedPoints = [];
let markers = [];

export function initMap() {
    map = L.map('map').setView([44.6488, -63.5752], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    map.on('click', e=> {
        if(selectedPoints.length < 2) {
            const { lat, lng } = e.latlng;
            selectedPoints.push({ lat, lng });
            const marker = L.marker([lat, lng]).addTo(map);
            markers.push(marker);
        }
    });

    return map;
}

export function getSelectedPoints() {
    return selectedPoints;
}

export function clearMarkers() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];
}