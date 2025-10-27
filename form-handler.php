<?php
// Simple form-handler.php - reminder: configure mail on server
if($_SERVER['REQUEST_METHOD']==='POST'){
  $name = htmlspecialchars($_POST['name'] ?? '');
  $email = htmlspecialchars($_POST['email'] ?? '');
  $message = htmlspecialchars($_POST['message'] ?? '');
  $to = 'you@yourshop.com';
  $subject = 'Contact form: ' . ($name?:'Customer');
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = 'From: noreply@yourshop.com' . "\r\n" .
    'Reply-To: ' . $email;
  // Note: mail() may not work on all hosts; use transactional provider in production.
  if(mail($to, $subject, $body, $headers)){
    header('Location: thankyou.html');
    exit;
  } else {
    echo 'Mail failed. Configure server or use Formspree.';
  }
}
?>