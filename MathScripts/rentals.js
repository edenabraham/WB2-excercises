//charter van seats 15.how many vans. van cost 250
// how muhc is it for the vans? how much per person?
var numberOfPeople=42;
var vansSeat=15;
var vansNeeded=numberOfPeople/vansSeat;

console.log("If "+numberOfPeople+" people go on this tour, we need 3 vans.");

var costPerVan=250;
var costPerPerson=costPerVan/numberOfPeople;
console.log("It would cost everyone $"+costPerPerson.toFixed(2)+" if the cost was split evenly")