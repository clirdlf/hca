const center = [5.65, 26.17]; // @see https://africathistime.wordpress.com/2015/12/06/planning-to-visit-the-center-point-of-africa-not-an-easy-task-wherever-it-is/

let map = L.map('map').setView(center, 3);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

function onEachFeature(feature, layer) {
    console.log(feature.properties.name);
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}

// L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
// 	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	subdomains: 'abcd',
// 	minZoom: 0,
// 	maxZoom: 18,
// 	ext: 'png'
// }).addTo(map);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(map);

// L.marker(center).addTo(map);

L.geoJSON(north_africa, {
    style: {
        "color": "#D1E79B",
        "fillOpacity": 0.65
    },
    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(sahel, {
    style: {
        "color": "#A4AD7D",
        "fillOpacity": 0.65
    },
    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(west_africa, {
    style: {
        "color": "#5EA470",
        "fillOpacity": 0.65
    },
    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(central_africa, {
    style: {
        "color": "#A78379",
        "fillOpacity": 0.65
    },
    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(east_africa, {
    style: {
        "color": "#DB6D69",
        "fillOpacity": 0.65
    }
}).addTo(map);

L.geoJSON(east_african_islands, {
    style: {
        "color": "#FF0080"
    },
    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(southern_africa, {
    style: {
        "color": "#E2D774",
        "fillOpacity": 0.65
    },
    onEachFeature: onEachFeature
}).addTo(map);