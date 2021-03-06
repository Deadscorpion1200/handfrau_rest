
<?php
ini_set('error_reporting', E_ALL);
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Запрос на чек-лист";
$body = "
<h2>Поступил новый запрос на чек-лист</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>email:</b> $email<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail -> SMTPDebug = 2;
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'handfraucompany'; // Логин на почте
    $mail->Password   = 'nhbwthfnjgc75'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('handfraucompany@yandex.ru', 'Handfrau.ru'); // Адрес самой почты и имя отправителя

    // Получатель письма
    // $mail->addAddress('fraukompania@gmail.com');
    $mail->addAddress('fraukompania@gmail.com');     // Add a recipient
    $mail->addAddress('adsmanagertest2020@gmail.com');     // Add a recipient
    // $mail->addAddress('fraukompania@gmail.com');
    // $mail->addAddress('kurp96@ya.ru');

    // $mail->addAddress('kurp96@ya.ru');
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
