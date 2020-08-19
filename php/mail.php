<?php
// несколько получателей
$to  = 'shapkinsib@gmail.com';

// тема письма
$subject = 'Запрос с сайта о сотрудничестве';

// текст письма меняется он!!
$message = $_POST['client-surname'] . '<br />' . $_POST['client-name'] . '<br />' . $_POST['client-middle-name'] . '<br />' . $_POST['client-number'] . '<br />' . $_POST['client-email'];

// Для отправки HTML-письма должен быть установлен заголовок Content-type
// $headers  = 'MIME-Version: 1.0' . "\r\n";
// $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Кирилл <shapkinsib@gmail.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '. $_POST['client-surname']. $_POST['client-name'] . '<' . $_POST['client-email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>