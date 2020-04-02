'use strict';

const KEY = 'user-data';
var gUserData;
var gAstrologicalForcast = ['Our exclusive Yearly Love Horoscopes are guides to attracting and enhancing love. They include guides for each sign of the zodiac showing when, where, and how to best find or maintain love.','Our exclusive LoveScopes offer weekly love horoscopes for each sign of the zodiac, as well as explanations of key planetary energies that affect our love lives this week.','Ascendant Sign Horoscopes offer daily forecasts for the upcoming months based on the transits of the Sun through Pluto, Chiron, and the four major Asteroids to your Ascendant. Transiting midpoints are also included.']

function saveUserData(backgroundColor, textColor, dateOfBirth, age, email) {
    gUserData = {
        backgroundColor,
        textColor,
        dateOfBirth,
        age,
        email
    }
}


function getBackgroundColor(){
    if(gUserData) return gUserData.backgroundColor;
}

function getTextColor(){
    console.log(gUserData);
    if(gUserData) return gUserData.textColor;
}

function getAstrologicalForcast(){
    return gAstrologicalForcast[getRandomInt(0, 2)];
}

function getBirthOfDate(){
    if(gUserData) return gUserData.dateOfBirth;
}