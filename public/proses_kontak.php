<?php
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $nama = strip_tags(trim($_POST["nama"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $jenis_proyek = trim($_POST["jenis_proyek"]);
    $pesan = trim($_POST["pesan"]);

    if (empty($nama) || empty($pesan) || empty($jenis_proyek) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Gagal: Harap isi semua kolom dengan format yang benar."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = gethostbyname('smtp.gmail.com');
        $mail->SMTPAuth   = true;
        
        $mail->Username   = 'mohammadranggairghivya@gmail.com'; 
        
        $mail->Password   = 'htap ufww zrju bsmm'; 
        
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
        $mail->Port       = 587; // 

        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        $mail->setFrom('mohammadranggairghivya@gmail.com', 'Website BIP');
        
        $mail->addAddress('m.ranggairghivya@gmail.com'); 
        
        $mail->addReplyTo($email, $nama); 

        $mail->isHTML(false);
        $mail->Subject = "Proyek Baru [$jenis_proyek] dari $nama";
        
        $email_content = "Halo Tim Bandung Indah Pertiwi,\n\nAnda menerima pesan baru dari form kontak website.\n\n";
        $email_content .= "Detail Pengirim:\nNama: $nama\nEmail: $email\nProyek: $jenis_proyek\n\n";
        $email_content .= "Pesan:\n$pesan\n\n-------------------------------------------\nDikirim dari Website BIP.";
        
        $mail->Body = $email_content;

        $mail->send();
        
        echo json_encode(["status" => "success", "message" => "Pesan berhasil terkirim! Tim kami akan segera merespons email Anda."]);
        
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Maaf, pesan gagal dikirim. Error Server: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Akses ditolak."]);
}
?>