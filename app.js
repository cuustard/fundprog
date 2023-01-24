// Get referrence to spans
var textPercentage = document.getElementById("percentage");
var textFundsGained = document.getElementById("money");

// Declare fundsGoal and fundsGained variables
var fundsGoal = 3000;
var fundsGained = 1000.9;

// Calculate percentage of fundsgained out of 3000
var percentagedone = (fundsGained / fundsGoal) * 100;

// Get reference to thermometer-goal element
var thermometerGoal = document.getElementById("thermometer-goal");
// Set height of thermometer-goal based on percentage
thermometerGoal.style.height = percentagedone + "%";
var moneyMade = 300; // updated as needed
var percentageFilled = (moneyMade / 3000) * 100;

// Change text saying how much out of 3000 we have raised
percentage.innerHTML = percentagedone.toFixed(2) + "%";
money.innerHTML = "£" + fundsGained.toFixed(2);
