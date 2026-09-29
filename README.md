# SpendWise Budget Tracker

SpendWise is a personal budget and expense tracker designed to help users organize and monitor their financial expenses.

## Week 5–6: JavaScript Foundation

For Week 5–6, I added JavaScript functionality to transform SpendWise from a static dashboard into an application that can process budgeting data.

The JavaScript foundation allows users to enter their monthly budget and different expense amounts. The application then calculates the total expenses and remaining balance and displays the results in the browser console.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

- Variables
- Numbers and strings
- User input
- Type conversion
- Conditional validation
- Functions
- Calculations
- Console output
- Template literals

## Variables

Variables are used to store important budgeting information.

Examples include:

- `monthlyBudget`
- `foodExpense`
- `transportExpense`
- `rentExpense`
- `entertainmentExpense`
- `utilitiesExpense`
- `savingsAmount`

The variables store numerical values that are used in the budget calculations.

## User Input

SpendWise collects user information using JavaScript `prompt()`.

The user enters:

- Monthly budget
- Food expenses
- Transport expenses
- Rent expenses
- Entertainment expenses
- Utilities expenses
- Savings amount

The `Number()` function converts the input from text into numerical values so that JavaScript can perform calculations.

## Input Validation

A reusable `getNumberInput()` function checks whether the user enters a valid number.

If the user enters invalid data or a negative number, the application asks the user to enter the information again.

## Budget Calculations

SpendWise calculates the total expenses by adding all expense categories together.

The application then calculates the remaining balance by subtracting total expenses from the monthly budget.

For example:

```text
Remaining Balance = Monthly Budget - Total Expenses