/*
Q39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.
*/

function city_country(nameofcity:string, nameofcountry:string) {
    return `${nameofcity}, ${nameofcountry}`
}

let citya = city_country("Karachi","Pakistan")
let cityb = city_country("Dubai","UsE")
let cityc = city_country("Colambia","Caneda")
let cityd = city_country("Sudia Arab","USA")
console.log(citya);
console.log(cityb);
console.log(cityc);
console.log(cityd);
