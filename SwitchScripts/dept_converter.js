let x="<unknown>";
switch (x) {
    case 1:
        text="Marketing";
        
    case 5:
        text="Human Resources";

    case 10:
        text="Accounting";

    case 12:
        text="Legal";

    case 18:
        text="IT";

    case 20:
        text="Customer Relations";

        break;
    default:
        text="<Unknown>";
        break;
}
console.log("if your department code number is 5, the department is "+x);