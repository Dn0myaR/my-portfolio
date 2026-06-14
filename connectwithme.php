<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Adjust these paths based on where you put the PHPMailer files
require 'vendor/autoload.php'; // Use this line if you installed via Composer
// OR if you downloaded manually, uncomment these:
// require 'PHPMailer/src/Exception.php';
// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';

// Check if the form was actually submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize user inputs to prevent vulnerabilities
    $visitorName    = strip_tags(trim($_POST["name"]));
    $visitorEmail   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $visitorMessage = htmlspecialchars(trim($_POST["message"]));

    // Simple validation check
    if (empty($visitorName) || empty($visitorMessage) || !filter_var($visitorEmail, FILTER_VALIDATE_EMAIL)) {
        echo "Please complete the form correctly and try again.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP Server Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'cer.rhei@gmail.com'; // Your Gmail address
        $mail->Password   = 'cpjn ojio xpfo ntbs';             // Your Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;    // Crucial fix for your 530 error
        $mail->Port       = 587;

        // Email Headers & Recipients
        // Note: Gmail usually forces the 'From' address to be your Username, 
        // so we put the visitor's email inside 'Reply-To' so you can reply directly to them.
        $mail->setFrom('cer.rhei@gmail.com', 'Portfolio Contact Form');
        $mail->addAddress('cer.rhei@example.com'); // Where you want to RECEIVE the messages
        $mail->addReplyTo($visitorEmail, $visitorName);

        // Email Content Layout
        $mail->isHTML(true);
        $mail->Subject = "New Portfolio Message from " . $visitorName;
        $mail->Body    = "
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> {$visitorName}</p>
            <p><strong>Email:</strong> {$visitorEmail}</p>
            <p><strong>Message:</strong><br>" . nl2br($visitorMessage) . "</p>
        ";

        $mail->send();
        // Redirect back to your portfolio with a success message flag
        header("Location: index.html?status=success#contacts");
        exit;

    } catch (Exception $e) {
        // Log the actual error silently and show a clean message to the user
        // error_log($mail->ErrorInfo); 
        echo "Message could not be sent. Please try again later.";
    }
} else {
    // If someone tries to access connectwithme.php directly, redirect them back
    header("Location: index.html");
    exit;
}
?>