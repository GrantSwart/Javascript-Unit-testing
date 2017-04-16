// Assign an event to the element button1
var event1 = document.getElementById("submit");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', main, false);

//Initialise TAX Array
var tax_values = [];
var parameters = ["Salary","TaxFree","Tax20","Tax40","NetSalary"];


// Add a function to respond to event listener
function main(){
    //INPUT variables: 
    var GrossSalary = document.getElementById("salary").value;
    var taxFreeAllowance = 10000;
	var taxAt20 = 0;
	var taxAt40 = 0;
	var NetSalary = 0;
	
	//PROCESS: Pass in 5 parameters to calculate tax 
//	calculatetax(GrossSalary,taxFreeAllowance, taxAt20,taxAt40, NetSalary);
	taxAt20 = calculateTaxAt20(GrossSalary);
	taxAt40 = calculateTaxAt40(GrossSalary);
	NetSalary = calculateNetSalary(GrossSalary, taxAt20, taxAt40, NetSalary); 

	tax_values.push(GrossSalary, taxFreeAllowance, taxAt20, taxAt40, NetSalary);
	
	// OUTPUT: Do a loop to populate the results on table from returned values
    for (var i = 0; i < parameters.length; i++) {
    document.getElementById(parameters[i]).innerHTML = tax_values[i];
    }
}


// Function to calculate tax from a single parameter of gross salary input
function calculatetax(GrossSalary, taxFreeAllowance, taxAt20, taxAt40, NetSalary) {
   			
	taxAt20 = calculateTaxAt20(GrossSalary);
	taxAt40 = calculateTaxAt40(GrossSalary);
	NetSalary = calculateNetSalary(GrossSalary, taxAt20, taxAt40, NetSalary); 

	tax_values.push(GrossSalary, taxFreeAllowance, taxAt20, taxAt40, NetSalary);
	return tax_values;
}



// Function to calculate Tax at 20%
function calculateTaxAt20(GrossSalary) {
	switch(true) {
	case (GrossSalary < 10600):
	 taxAt20 = 0;
	 return taxAt20;
	
	case (GrossSalary >= 10600 && GrossSalary <= 31000):  
	taxAt20 = ((GrossSalary - 10600) * 20 / 100);
	return taxAt20;
	
    case (GrossSalary > 31000):
	taxAt20 = (21000 * 20 / 100);
	return taxAt20;
}
}

// Function to calculate Tax at 40%
function calculateTaxAt40(GrossSalary) {
	switch(true) {
	case (GrossSalary < 10600):
	 taxAt40 = 0;
	return taxAt40;
	
	case (GrossSalary >= 10600 && GrossSalary <= 31000):  
	taxAt40 = 0;
	return taxAt40;
	
    case (GrossSalary > 31000):
	taxAt40 =  ((GrossSalary - 31000) * 40 / 100);
	return taxAt40;
}
}


function calculateNetSalary(GrossSalary, taxAt20, taxAt40, NetSalary) {

	if (GrossSalary < 10600) {
        NetSalary = GrossSalary;
	    return NetSalary;
    } else {
     	NetSalary = (GrossSalary - (taxAt20 + taxAt40));
		return NetSalary;
    }
			
}


	