<?php 
		if(isset($_POST['evaSubmit'])) {
			require 'phpmailer/PHPMailerAutoload.php';

			$mail = new PHPMailer;

			// $mail->SMTPDebug = 4;                               // Enable verbose debug output

			$mail->CharSet = 'utf-8';

      //$mail->SMTPDebug = 3;                               // Enable verbose debug output

      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = 'alex00796@mail.ru';                // Наш логин                 
      $mail->Password = 'Cgb652hfA';                           // Наш пароль от ящика
                                
      $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 465;      

      $mail->setFrom('alex00796@mail.ru', 'Заявка с сайта ');   // От кого письмо 
      $mail->addAddress('kurp96@yandex.ru');     // Add a recipient

      $name  = $_POST['evaName'];
      $phone = $_POST['evaTel'];

			// $mail->addReplyTo(EMAIL);
      // print_r($_FILES['file']); exit;
      $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
      
		
			$mail->isHTML(true);                                  // Set email format to HTML

			$mail->Subject = 'Заявка с сайта';
			$mail->Body    = '
      Клиент оставил свои контактные данные<br>
      Имя клиента : <strong> ' . $name . ' </strong><br>
      Его телефон: <strong> ' . $phone . ' </strong><br>';
			$mail->AltBody = 'Это альтернативный текст';

			if(!$mail->send()) {
	
        return false;
      }
      else {
        
      }
		}
	 ?>