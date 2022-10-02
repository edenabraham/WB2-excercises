// calculate fedseral tax based on values of annual 
//  gross income and a filing status (single,joint)
let payRate= 10.00; let hoursWorked=40;
let overtime=1.5; let grossPay ;

if (hoursWorked<40) {
    grossPay=payRate*hoursWorked;
    //console.log(grossPay)
}

if (hoursWorked=40) {
    grossPay=payRate*hoursWorked;
    //console.log(grossPay)
}

if (hoursWorked>40) {
    grossPay=(payRate*overtime)*hoursWorked;
    //console.log(grossPay)
}

let annualGrosspay=grossPay*52;

 let filingStatus= "single"; 
 let taxRate; let taxWitheld=grossPay*taxRate;
 let netPay=grossPay-taxWitheld;
 
if (filingStatus="single" && annualGrosspay<12000) {
    taxRate="5%";
    //console.log(taxRate)
}
else if (filingStatus="single" && annualGrosspay>=12000 && annualGrosspay<25000) {
    taxRate="10%";
    //console.log(taxRate)
}
else if (filingStatus="single" && annualGrosspay>=25000 && annualGrosspay<75000) {
    taxRate="15%";
    //console.log(taxRate)   
}
else if (finilingStatus="single") {
    taxRate="20%";
    //console.log(taxRate)
}

if (filingStatus="joint" && annualGrosspay<12000) {
    taxRate="0%";
   // console.log(taxRate)
}
else if (filingStatus="joint" && annualGrosspay>=12000 && annualGrosspay<25000) {
    taxRate="6%";
    //console.log(taxRate)
}
else if (filingStatus="joint" && annualGrosspay>=25000 && annualGrosspay<75000) {
    taxRate="11%";
    //console.log(taxRate)
}
else if (filingStatus="joint") {
    taxRate="20%";
    //console.log(taxRate)
}

//from weekly gross pay
console.log("you worked "+hoursWorked+" hours this period.");
console.log("Because you earn $"+payRate+" per hour, your gross pay is $"+grossPay);
console.log("Your filing status is "+filingStatus+" ");
console.log("your tax withholdings this period is $"+taxWitheld);
console.log("Your Net pay is $"+netPay);