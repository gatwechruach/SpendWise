// ===== SpendWise Budget Data =====

let monthlyBudget = 50000;

// Array storing expense data
let expenses = [
    { category: "Food", amount: 8500 },
    { category: "Transport", amount: 4200 },
    { category: "Rent", amount: 15000 },
    { category: "Entertainment", amount: 3000 },
    { category: "Utilities", amount: 5500 },
    { category: "Savings", amount: 5000 }
];


// ===== Calculate Total Expenses =====

function calculateTotalExpenses() {
    let total = 0;

    expenses.forEach(function(expense) {
        total += expense.amount;
    });

    return total;
}


// ===== Calculate Remaining Balance =====

function calculateRemainingBalance() {
    let totalExpenses = calculateTotalExpenses();

    return monthlyBudget - totalExpenses;
}


// ===== Update Category Cards =====

function updateCategoryCards() {

    let categoryTotals = {
        Food: 0,
        Transport: 0,
        Rent: 0,
        Entertainment: 0,
        Utilities: 0,
        Savings: 0
    };

    expenses.forEach(function(expense) {
        categoryTotals[expense.category] += expense.amount;
    });

    document.getElementById("food-total").textContent =
        `KSh ${categoryTotals.Food.toLocaleString()}`;

    document.getElementById("transport-total").textContent =
        `KSh ${categoryTotals.Transport.toLocaleString()}`;

    document.getElementById("rent-total").textContent =
        `KSh ${categoryTotals.Rent.toLocaleString()}`;

    document.getElementById("entertainment-total").textContent =
        `KSh ${categoryTotals.Entertainment.toLocaleString()}`;

    document.getElementById("utilities-total").textContent =
        `KSh ${categoryTotals.Utilities.toLocaleString()}`;

    document.getElementById("savings-total").textContent =
        `KSh ${categoryTotals.Savings.toLocaleString()}`;
}


// ===== Update Budget Summary =====

function updateBudgetSummary() {

    let totalExpenses = calculateTotalExpenses();
    let remainingBalance = calculateRemainingBalance();

    document.getElementById("budget-total").textContent =
        `KSh ${monthlyBudget.toLocaleString()}`;

    document.getElementById("total-expenses").textContent =
        `KSh ${totalExpenses.toLocaleString()}`;

    document.getElementById("remaining-balance").textContent =
        `KSh ${remainingBalance.toLocaleString()}`;


    // ===== Conditional Statements =====

    let message = document.getElementById("budget-message");

    if (remainingBalance < 0) {

        message.textContent =
            "Warning: You have exceeded your budget.";

    } else if (remainingBalance === 0) {

        message.textContent =
            "Your budget has been fully used.";

    } else {

        message.textContent =
            `You have KSh ${remainingBalance.toLocaleString()} remaining.`;
    }
}


// ===== Update Everything =====

function updateDashboard() {
    updateCategoryCards();
    updateBudgetSummary();
}


// ===== Handle Form Submission =====

const budgetForm = document.getElementById("budget-form");

budgetForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let budgetInput =
        Number(document.getElementById("budget-input").value);

    let category =
        document.getElementById("category-input").value;

    let amount =
        Number(document.getElementById("amount-input").value);


    // Update monthly budget
    monthlyBudget = budgetInput;


    // Add new expense to the array
    expenses.push({
        category: category,
        amount: amount
    });


    // Update the webpage
    updateDashboard();


    // Clear the form
    budgetForm.reset();
});


// ===== Display Initial Data =====

updateDashboard();