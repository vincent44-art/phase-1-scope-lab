// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declares a global variable without var, let, or const
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// Function attempting to change leastFavoriteCustomer (will cause an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another person'; // This will cause an error
}
