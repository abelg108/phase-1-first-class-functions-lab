// Code your solution in this file!
function returnFirstTwoDrivers (){['Antonia', 'Nuru', 'Amari', 'Mo']
    return(['Antonia', 'Nuru'])
}
function returnLastTwoDrivers () {['Antonia', 'Nuru','Amari','Mo']
    return (['Amari','Mo'])
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fareMultiplier) {
     return function (value) {
         return fareMultiplier * value
     }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (arrayOfDrivers,func){
    return func(arrayOfDrivers)
}
