<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Process the data (in this example, just echoing it)
    echo "Thank you, $name! Your email ($email) has been recorded.";
} else {
    // Handle the case where the form is not submitted properly
    echo "Form not submitted!";
}
?>
