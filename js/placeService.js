'use strict';


const LOCATIONS = 'user-locations';
var gLocationList = [];


function createNewLocation(id, lat, lng, name){
    gLocationList.push({
        id,
        lat,
        lng,
        name
    });
    _saveLocationsToStorage();
    renderLocationList();
}

function getLocationId(){
    if(!gLocationList || !gLocationList.length) return 1;
    var lastId = getLastId(gLocationList);
    return lastId;
}

function getLastId(locations){
    locations.sort(function(location1,location2){return location1.id-location2.id});
    return locations[locations.length-1].id + 1;
}

function loadLocationsFromStorage(){
    _loadLocationsFromStorage();
}

function getLocationList(){
    return gLocationList;
}

function deleteLocation(id){
    var idx = gLocationList.findIndex(location => location.id === id);
    gLocationList.splice(idx,1);
    _saveLocationsToStorage();
}