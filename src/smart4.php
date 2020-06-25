<?php 

$name  = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];

$mail->SMTPDebug = 1;
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'handfraucompany@yandex.ru';                // Наш логин                 
$mail->Password = 'nhbwthfnjgc75';                           // Наш пароль от ящика
                           
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('handfraucompany@yandex.ru', 'Заявка с сайта ');   // От кого письмо 
$mail->addAddress('fraukompania@gmail.com');     // Add a recipient
$mail->addAddress('adsmanagertest2020@gmail.com');     // Add a recipient

// $mail->addAddress('kurp96@ya.ru');     // Add a recipient
// $mail->addAddress('gorasdo.ru@yandex.ru');  
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Запрос на чек-лист';
$mail->Body    = '
<h2>Поступил новый запрос на чек-лист</h2>
	Имя клиента : <strong> ' . $name . ' </strong><br>
	Его телефон: <strong> ' . $phone . ' </strong><br>
	Его email: <strong> ' . $email . ' </strong><br>';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
	
    return false;
}
else {
	
}



?>