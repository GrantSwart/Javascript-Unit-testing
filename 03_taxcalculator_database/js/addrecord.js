function addrecord(FName, FYear, NetSalary, GrossSalary, totalTax) {
//document.getElementById("status").innerHTML = "NET SAL is " + NetSalary + "GRO SAL is " + GrossSalary + "Total Tax is " + totalTax;
	
// Create our XMLHttpRequest object
var hr = new XMLHttpRequest();

//PHP file to call on server
//var url = "addrecord.php";
var url = "include.php";  
	
//Javascript variables to send to PHP as name/value pairs;
var str = "GS="+GrossSalary+"&NS="+NetSalary+"&TT="+totalTax+"&TheName="+FName+"&TheYear="+FYear;
window.alert(str);    

hr.open("POST", url, true);
// Set content type header information for sending url encoded variables in the request
hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// Access the onreadystatechange event for the XMLHttpRequest object
hr.onreadystatechange = function() {
if(hr.readyState == 4 && hr.status == 200) {
var return_data = hr.responseText;
document.getElementById("status2").innerHTML = return_data;
	    }
}

// Send the data to PHP
hr.send(str); // Actually execute the request

	
}