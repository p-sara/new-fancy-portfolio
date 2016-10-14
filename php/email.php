<?php

require '../vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mainEmail = 'sara.pstrowska@gmail.com';
    $myEmail = 'saru00@wp.pl';

    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        $name = $_POST['name'];
        $emailAddress = $_POST['email'];
        $message = $_POST['message'];

        $mail = new PHPMailer;

        $mail->isSMTP();
        $mail->Host = 'smtp.wp.pl'; // adres smtp
        $mail->SMTPAuth = true;
        $mail->Username = 'saru00@wp.pl'; // login do wp.pl
        $mail->Password = 'kopciuszek2';    // hasło
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;


        $mail->setFrom($myEmail, 'My portfolio site.');
        $mail->addAddress($mainEmail, 'Sara Pstrowska');
        $mail->addReplyTo($emailAddress, $name);

        $mail->isHTML(true);

        $mail->Subject = 'Message from my portfolio';
        $mail->Body = $message;
        $mail->AltBody = $message;

        $result = $mail->send();

        echo json_encode(['result' => $result]);

    }
}
