const iss_api = "https://api.wheretheiss.at/v1/satellites/25544";

async function getInfo() {

    const response = await fetch(iss_api);
    const data = await response.json();

    console.log(response)

    document.getElementById('value2').textContent = data.latitude
    document.getElementById('value3').textContent = data.longitude

    var latitude_val = parseFloat(data.latitude);
    var longitude_val = parseFloat(data.longitude);

    map.setView([latitude_val, longitude_val], 5);

    var issMarker = L.marker([latitude_val, longitude_val]).addTo(map);
    issMarker.openPopup();

}

getInfo();



