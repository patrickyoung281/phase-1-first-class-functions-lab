

function sayHello () {
  return "Hello!"
}

function receivesAFunction (callBack) {
  return callBack();
}



































/*

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers (drivers) {
  return drivers.slice (0, 2);
};

function returnLastTwoDrivers (drivers) {
  return drivers.slice (2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
  return function (value) {
    return fareMultiplier*value};
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, whichDrivers) {
  return whichDrivers(drivers);
};




*/

















/*

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
  }

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuintupler = createFareMultiplier(4);

const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers)};

    */