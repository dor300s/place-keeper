'use strict';

var gPositions = { lat: 29.554453, lng: 34.953177 };


function onInitHome() {
    _loadFromStorage();
    var backgroundColor = getBackgroundColor();
    if (backgroundColor) {
        document.querySelector('.background img').style.display = 'none';
        document.querySelector('.home-body').style.backgroundColor = backgroundColor;
    }
    var textColor = getTextColor();
    if (textColor) document.querySelector('.background h1').style.color = textColor;
    var dateOfBirth = getBirthOfDate();
    if (dateOfBirth) {
        var astrologicalForcast = getAstrologicalForcast();
        document.querySelector('.astrological').innerText = astrologicalForcast;
    }

}

function onSavePref(ev) {
    ev.preventDefault();
    var elBackgroundColor = document.querySelector('#background-color').value;
    var elTextColor = document.querySelector('#text-color').value;
    var elDob = document.querySelector('#dob').value;
    var elAge = document.querySelector('#age').value;
    var elEmail = document.querySelector('#email').value;
    saveUserData(elBackgroundColor, elTextColor, elDob, elAge, elEmail);
    _saveToStorage();
}

function onShowAge(age) {
    var userAge = document.querySelector('#sAge');
    userAge.innerText = age;
}


function onInitMapPage() {
    loadLocationsFromStorage();
    renderLocationList();
}


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 14, center: gPositions });
    var marker = new google.maps.Marker({ position: gPositions, map: map });
    google.maps.event.addListener(map, 'click', function (event) {
        gPositions.lat = event.latLng.lat();
        gPositions.lng = event.latLng.lng();
        createNewLocation(getLocationId(), gPositions.lat, gPositions.lng, prompt('Enter location name'));
        new google.maps.Marker({ position: gPositions, map: map });
    });
}

function onGetCurrLocation() {
    getPositions();
}

function getPositions() {
    navigator.geolocation.getCurrentPosition(updatePositions);
}

function updatePositions(position) {
    gPositions.lat = position.coords.latitude;
    gPositions.lng = position.coords.longitude;
    initMap();
}

function renderLocationList() {
    var locationList = getLocationList();
    var elLocationList = document.querySelector('.location-list');
    var strHTML = '';
    locationList.forEach(location => {
        strHTML += `<tr><td>${location.id}</td><td>${location.lat}</td><td>${location.lng}</td><td>${location.name}</td><td>
        <button onclick="onDeleteLocation(${location.id})">Delete</button></td></tr>`;
    });
    elLocationList.innerHTML = strHTML;
}

function onDeleteLocation(id) {
    deleteLocation(id);
    renderLocationList();
}


