'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function _saveToStorage() {
    saveToStorage(KEY, gUserData);
}

function _loadFromStorage() {
    gUserData = loadFromStorage(KEY);
}

function _saveLocationsToStorage() {
    saveToStorage(LOCATIONS, gLocationList);
}

function _loadLocationsFromStorage() {
    var localList = loadFromStorage(LOCATIONS);
    if(!localList || !localList.length) return;
    gLocationList = localList; 
}