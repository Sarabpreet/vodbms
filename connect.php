



<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password,'vodbms');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else {


		$sql = "SELECT * FROM example";
		$result = mysqli_query($conn, $sql);
				if (mysqli_num_rows($result) > 0) {
		    // output data of each row
		    while($row = mysqli_fetch_assoc($result)) {

		    	echo 'id- '.$row['ssn'].' -content: '.$row['content'].'<br>';

		    }
		} else {

		    echo "0 results";
		}





}
?> 