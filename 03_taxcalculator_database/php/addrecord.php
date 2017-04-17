<?php 
//Javascript variables sent to PHP as name/value pairs in string
//var str = "GS="+GrossSalary+"&NS="+NetSalary+"&TT="+totalTax+"&TheName"+FName+"&TheYear"+FYear;


//test that the variables coming through from the html page
echo '<br>Thank you '. $_POST['TheName'] . ' Year ' . $_POST['TheYear'] . ', says the PHP file';
echo '<br>Gross '. $_POST['GS'] . ' Net ' . $_POST['NS'] . ' Total tax ' . $_POST['TT'] . ', says the PHP file';



//STORE DATABASE CONNECTION DETAILS
$servername = "lite-support.co.uk.mysql";
$username = "lite_support_co";
$password = "12london";
$dbname = "lite_support_co";

//CONNECT TO THE DATABASE
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//PUT POSTED variables into local variables
$a= $_POST["GS"];
$b= $_POST["NS"];
$c= $_POST["TT"];
$d= $_POST["TheName"];
$e= $_POST["TheYear"];


//SQL TO INTERACT WITH THE DATABASE
$sql = "INSERT INTO salary (GrossSalary, NetSalary, TotalTax, FullName, Year)
VALUES ('$a','$b','$c','$d','$e')";
// INSERT INTO table_name (column1, column2, column3,...)
// VALUES (value1, value2, value3,...)


//CLOSE CONNECTION GRACEFULLY
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>