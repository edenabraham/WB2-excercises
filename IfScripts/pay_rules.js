//Calculator for Gross Pay
//       If the person worked more than 40 hrs, pay the 
//        overtime hours at 1.5 times the rate of reg hrs
var payRate= 10.00; var hoursWorked= 45;
var overtime=1.5; var grossPay;

if (hoursWorked<40) {
    grossPay=payRate*hoursWorked;
    console.log(grossPay)
}

if (hoursWorked=40) {
    grossPay=payRate*hoursWorked;
    console.log(grossPay)
}

if (hoursWorked>40) {
    grossPay=(payRate*overtime)*hoursWorked;
    console.log(grossPay)
}
