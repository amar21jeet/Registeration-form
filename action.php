<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Check request method
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST['name']);
    $mobile = trim($_POST['mobile']);
    $email = trim($_POST['email']);
    $address = trim($_POST['address']);

    // Validate data
    if (empty($name) || empty($mobile) || empty($email) || empty($address)) {
        die('All fields are required.');
    }

    // Database connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // check connection
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    }
    // else "connected succesfully"


    // Prepare and execute SQL statement
    $stmt = $conn->prepare("INSERT INTO registration (name, mobile, email, address) VALUES (?, ?, ?, ?)");
    // binding parameters
    $stmt->bind_param("ssss", $name, $mobile, $email, $address);
    if (!$stmt->execute()) {
        die('Execute failed: ' . $stmt->error);
    }

    

    echo "Registration Successfully...";

    $stmt->close();
    $conn->close();
} 
else {
    echo 'Invalid request method.';
}
?>
