// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(drivers, string) {
    let result = drivers.filter(name => name.toUpperCase() === string.toUpperCase());
    return result;
}

drivers.filter(name => name === "Bobby")

// str.substring(1,3); 
// str.indexOf

function fuzzyMatch(drivers, substring) {
    return drivers.filter(match => match.toUpperCase().indexOf(substring.toUpperCase()) === 0)
}


//const drivers = [{name:'Bobby'}, {name:'Sammy'}, {name:'Sally'}, {name:'Annette'}, {name:'Sarah'}, {name:'Bobby'}];

function matchName(drivers, string) {
    return drivers.filter(match => match["name"] === string)
}


// objects; using filter