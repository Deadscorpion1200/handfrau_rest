<?php

    include('class_email.php');
    
    $subjectEmail = "Новое сообщение";
    $messageEmail = "Тестовое сообщение";
    $email = "a.pogr@yandex.ru";


    $title = $_POST['titleModal'];

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $text = $_POST['text'];

    $subjectEmail = "Новое сообщение с сайта IQEngeneers!";
    $messageEmail = $title . "<br><br>";
    $messageEmail .= '<strong>Телефон:</strong><br> ' . $phone ."<br>";

    if ($name) {
        $messageEmail .= '<strong>Имя:</strong> ' . $name . "<br>";
    }
    if ($email) {
        $messageEmail .= '<strong>Email:</strong> ' . $email . "<br>";
    }

    if ($text) {
        $messageEmail .= '<strong>Сообщение:</strong> ' . $text . "<br>";
    }
    
    print_r(new Email(array(
        'subject'	=>	$subjectEmail,
        'body'		=>	$messageEmail,
        'from'      =>  $email
    ), Email::TYPE_TO_ADMIN,true));
    
?>