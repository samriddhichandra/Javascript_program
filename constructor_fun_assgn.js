// Step 1: Constructor function
function bank(BankName, loc, ifscode, branchcode) {
    this.BankName = BankName;
    this.loc = loc;
    this.ifscode = ifscode;
    this.branchcode = branchcode;
}

// Step 2: Creating objects
const yesBank = new bank("Yes Bank", "Mumbai", "YESB0000001", "001");
const sbiBank = new bank("State Bank of India", "Delhi", "SBIN0000001", "002");
const mahBank = new bank("Bank of Maharashtra", "Pune", "MAHB0000001", "003");
const axisBank = new bank("Axis Bank", "Bangalore", "UTIB0000001", "004");

// Step 3 & 4: Add prototype properties
bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";

// Step 2: Log all bank details
console.log(`Bank Details: ${yesBank.BankName}, ${yesBank.loc}, ${yesBank.ifscode}, ${yesBank.branchcode}`);
console.log(`Bank Details: ${sbiBank.BankName}, ${sbiBank.loc}, ${sbiBank.ifscode}, ${sbiBank.branchcode}`);
console.log(`Bank Details: ${mahBank.BankName}, ${mahBank.loc}, ${mahBank.ifscode}, ${mahBank.branchcode}`);
console.log(`Bank Details: ${axisBank.BankName}, ${axisBank.loc}, ${axisBank.ifscode}, ${axisBank.branchcode}`);

// Step 5
console.log(`SBI Bank Open Time: ${sbiBank.openTime}, Close Time: ${sbiBank.closeTime}`);

// Step 6
console.log(`Axis Bank Name: ${axisBank.BankName}, Close Time: ${axisBank.closeTime}`);

// Step 7
console.log(`YES Bank Name: ${yesBank.BankName}, Branch Code: ${yesBank.branchcode}, Open Time: ${yesBank.openTime}`);
