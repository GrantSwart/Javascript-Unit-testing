// Assign an event to the element button1
var event1 = document.getElementById("submit");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', display, false);
var tax_values = [];
var parameters = ["Salary","TaxFree","Tax20","Tax40","NetSalary"];

// Add a function to display the results by calling calculatetax function
function display(){
    // Assign the variable salary to user input
    var salary = document.getElementById("salary").value;
    // Execute the function to calculate tax with parameters of input salary
    calculatetax(salary);
    // Do a loop to populate the results on table from returned values
    for (var i = 0; i < parameters.length; i++) {
        document.getElementById(parameters[i]).innerHTML = tax_values[i];
    }
}

// Function to calculate tax from a single parameter of gross salary input
function calculatetax(gross_salary) {
    // Assign a switch parameter to check the range of gross salary
    switch(true) {
        // On the case of gross salary being lower than 10600, there is not tax, hence the gross salary is equal to net salary
        case (gross_salary < 10600):
            // Push the values calculated for gross salary below 10600 and assign them to tax_values array
            tax_values.push(gross_salary, gross_salary, "No Tax", "No Tax", gross_salary);
            // Return the tax_values array to display function
            return tax_values;
        case (gross_salary >= 10600 && gross_salary <= 31000):
            // Push the values calculated for gross salary between 10600 and 31000 and assign them to tax_values array
            tax_values.push(gross_salary, "10000", ((gross_salary-10600) * 20 / 100), "No Tax", (gross_salary - ((gross_salary-10000) * 20 / 100)));
            // Return the tax_values array to display function
            return tax_values;
        case (gross_salary > 31000):
            // Push the values calculated for gross salary above 31000 and assign them to tax_values array
            tax_values.push(gross_salary, "10000", (21000 * 20 / 100), ((gross_salary-31000) * 40 / 100), (gross_salary - (21000 * 20 / 100) - ((gross_salary-31000) * 40 / 100)));
            // Return the tax_values array to display function
            return tax_values;
    }
}