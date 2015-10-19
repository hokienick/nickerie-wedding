<?php

// Define some constants
// On Second parameter add your email
define( "RECIPIENT_EMAIL", "ashik.mdashikurrahman@gmail.com" );

// Read the form values
$success = false;
$name = $_POST['name'];
$email = $_POST['email'];
$events = $_POST['events'];
$peoples = $_POST['peoples'];

// Setting up Email Subject
$subject = 'A mail Sended by ' . $name ;
// Setting Up Email Message
$message = $name . ' will attend with  ' . $peoples . ' peoples in ' . $events ;

// If all values exist, send the email
if ( $name && $email && $events && $peoples ) {
  $recipient = RECIPIENT_EMAIL;
  $headers = "From: " . $name . " <" . $email . ">";
  $success = mail( $recipient, $subject, $message, $headers );

  echo "<p class='output'>Thanks For attending!</p>";
}

?>