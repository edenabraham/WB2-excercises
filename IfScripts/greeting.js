
var currentHour= 18 ;var greeting;
if (currentHour< 10 && currentHour < 12) {
    greeting="Good morning!";
    console.log(greeting)
}
else if (currentHour>=10 && currentHour<17) {
    console.log("Good Day!");
}
else if (currentHour>17) {
    console.log("Good Evening!")
} 