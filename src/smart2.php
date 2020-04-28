<?php 

// Здесь нужно сделать все проверки передаваемых файлов и вывести ошибки если нужно
 
// Переменная ответа
$name  = $_POST['evaName'];
$phone = $_POST['evaTel'];
$path = $_SERVER['HTTP_REFERER'];
$data = array();

if( isset( $_FILES[0] ) ){
  $error = false;
  $files = array();
  $uploaddir = 'uploads/'; // . - текущая папка где находится submit.php
  // Создадим папку если её нет
  if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );
  // переместим файлы из временной директории в указанную
  foreach( $_FILES as $file ){
    if( move_uploaded_file( $file['tmp_name'], $uploaddir . basename($file['name']) ) ){
      $files[] = realpath( $uploaddir . $file['name'] );
    }
    else{
      $error = true;
    }
  }
  $data = $error ? array('error' => 'Ошибка загрузки файлов.') : array( 'evaName' => $name, 'evaTel' => $phone, 'files' => $files );
  
  echo json_encode( $data );
  

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
  
  
  // $mail->addReplyTo(EMAIL);
  // print_r($_FILES['file']); exit;
  // $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
  
  
  $mail->isHTML(true);                                  // Set email format to HTML
  
  $mail->Subject = 'Заявка с сайта';
  $mail->Body    = '
  Клиент оставил свои контактные данные<br>
  Имя клиента : <strong> ' . $name . ' </strong><br>
  Его телефон: <strong> ' . $phone . ' </strong><br>
  Прикрепленные файлы: <strong> ' . $path . $uploaddir . $file['name'] . ' </strong><br>';
  $mail->AltBody = 'Это альтернативный текст';
  
  if(!$mail->send()) {
  
    return false;
  }
  else {
    
  }
}

		// if(isset($_POST['evaSubmit'])) {
		// }
?>