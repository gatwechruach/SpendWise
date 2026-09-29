// ===== SpendWise Budget Data =====

// Monthly budget
let monthlyBudget = 50000;

// Expenses
let foodExpense = 8500;
let transportExpense = 4200;
let rentExpense = 15000;
let entertainmentExpense = 3000;
let utilitiesExpense = 5500;
let savingsAmount = 5000;

// ===== Input Function =====

function getNumberInput(message) {
    let value = Number(prompt(message));

    while (isNaN(value) || value < 0) {
        alert("Please enter a valid number greater than or equal to 0.");
        value = Number(prompt(message));
    }

    return value;
}

// ===== User Input =====

monthlyBudget = getNumberInput("Enter your monthly budget:");

foodExpense = getNumberInput("Enter your food expenses:");
transportExpense = getNumberInput("Enter your transport expenses:");
rentExpense = getNumberInput("Enter your rent expenses:");
entertainmentExpense = getNumberInput("Enter your entertainment expenses:");
utilitiesExpense = getNumberInput("Enter your utilities expenses:");
savingsAmount = getNumberInput("Enter your savings amount:");

// ===== Budget Calculation =====

function calculateTotalExpenses() {
    return foodExpense +
           transportExpense +
           rentExpense +
           entertainmentExpense +
           utilitiesExpense +
           savingsAmount;
}

// Calculate remaining balance
function calculateRemainingBalance() {
    let totalExpenses = calculateTotalExpenses();
    return monthlyBudget - totalExpenses;
}

// ===== Display Budget Results =====

let totalExpenses = calculateTotalExpenses();
let remainingBalance = calculateRemainingBalance();

console.log("====================================");
console.log("       SPENDWISE BUDGET SUMMARY");
console.log("====================================");
console.log(`Monthly Budget: KSh ${monthlyBudget}`);
console.log(`Total Expenses: KSh ${totalExpenses}`);
console.log(`Remaining Balance: KSh ${remainingBalance}`);
console.log("====================================");