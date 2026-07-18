<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

function field($name) {
  return trim($_POST[$name] ?? '');
}

$name = field('name');
$phone = field('phone');
$email = field('email');
$service = field('service');
$location = field('location');
$message = field('message');

if ($name === '' || $phone === '' || $email === '' || $service === '' || $location === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Missing required fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid email']);
  exit;
}

$to = 'Gary@CandBMechanical.com, Kalichristensen0610@gmail.com';
$subject = 'New C&B estimate request from ' . $name;
$body = implode("\n", [
  'New website estimate request',
  '',
  'Name: ' . $name,
  'Phone: ' . $phone,
  'Email: ' . $email,
  'Service requested: ' . $service,
  'Property/project location: ' . $location,
  'Submitted: ' . date('F j, Y g:i A'),
  '',
  'Message:',
  $message,
]);

$headers = [
  'From: C&B Website <no-reply@candbmechanicalandgas.com>',
  'Reply-To: ' . $email,
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(['error' => 'Email delivery failed']);
  exit;
}

echo json_encode(['ok' => true]);
