<?php
    include('class_email.php');

    $subjectEmail = "Новое сообщение";
    $messageEmail = "Сообщение с сайта";
    $email = "fraukompania@gmail.com";
    $pathToImg = 'https://handfrau.ru/mail/';

    $title = $_POST['titleModal'];

    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $subjectEmail = "Заявка с сайта HandFrau!";
    $messageEmail = $title . "<br><br>";

    if ($name) {
        $messageEmail .= '<strong>Имя:</strong> ' . $name . "<br>";
    }
    if ($phone) {
        $messageEmail .= '<strong>Телефон:</strong> ' . $phone . "<br>";
    }
    #проверяем тип заявки
    if ($_FILES['files']['name']) {



        #заявка на оценку работы



        $image = $_POST['pic'];

        //Stores the filename as it was on the client computer.

        $imagename = $_FILES['files']['name'];

        //Stores the filetype e.g image/jpeg

        $imagetype = $_FILES['files']['type'];

        //Stores any error codes from the upload.

        $imageerror = $_FILES['files']['error'];

        //Stores the tempname as it is given by the host when uploaded.

        $imagetemp = $_FILES['files']['tmp_name'][0];



        $image = getimagesize($fileTmpName);



        //The path you wish to upload the image to

        $imagePath = "images/";



        $destination = $imagePath . time().$imagename[0];



        if (is_uploaded_file($imagetemp)) {

            if (move_uploaded_file($imagetemp, $destination)) {

                echo "Sussecfully uploaded your image.";



                $messageEmail .= "<strong>Ссылка на фото:</strong> " . $pathToImg.$destination . "<br>";



                new Email(array(

                    'subject'   =>  $subjectEmail,

                    'body'      =>  $messageEmail,

                    'from'      =>  $email

                ), Email::TYPE_TO_ADMIN,true);



            } else {

                echo "Failed to move your image.";

            }

        } else {

            echo "Failed to upload your image.";

        }



    }
    else {
        #заявка на уборку

        $type_clean = $_POST['type_clean'];

        if (!$type_clean) {
            new Email(array(
                'subject' => $subjectEmail,
                'body' => $messageEmail,
                'from' => $email
            ), Email::TYPE_TO_ADMIN, true);
        }
        else {
            #заявка с калькулятора

            $messageEmail .= '<strong>Тип уборки:</strong> ' . $_POST['type_clean']  . "<br>";
            $messageEmail .= '<strong>Площадь:</strong> ' . $_POST['square'] . "<br>";
            $messageEmail .= '<strong>График:</strong> ' . $_POST['schedule']  . "<br>";
            $messageEmail .= '<strong>Дополнительно:</strong> ' . $_POST['service'] . "<br>";

            new Email(array(
                'subject' => $subjectEmail,
                'body' => $messageEmail,
                'from' => $email
            ), Email::TYPE_TO_ADMIN, true);

        }


    }
?>
