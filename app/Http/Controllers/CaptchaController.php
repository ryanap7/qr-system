<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class CaptchaController extends Controller
{
    public function generate()
    {
        $captchaLength = 5; // Adjust as needed

        // Generate a valid CAPTCHA string that does not match the excluded string
        $captchaString = $this->generateUniqueCaptcha($captchaLength);

        // Generate a base64-encoded captcha image
        $captchaImage = $this->generateCaptchaImage($captchaString);

        return response()->json([
            'captchaImg' => $captchaImage,
            'captchaLength' => $captchaLength,
            'captchaValidator' => $captchaString,
            'captchaMime' => 'png'
        ]);
    }

    private function generateUniqueCaptcha($length)
    {
        $allowedCharacters = 'abdefghjkmnpqrty2345678';
        $captchaString = '';

        while (strlen($captchaString) < $length) {
            $randomCharacter = $allowedCharacters[random_int(0, strlen($allowedCharacters) - 1)];
            $captchaString .= $randomCharacter;
        }

        return $captchaString;
    }

    public function processData(Request $request)
    {
        // Validasi input dari request
        $validated = $request->validate([
            'table.CAPTCHA' => 'required|string',
            'table.CAPTCHA_VALIDATOR' => 'required|string',
            'table.inKey' => 'required|string',
        ]);

        // Ambil data dari request
        $captchaInput = $validated['table']['CAPTCHA'];
        $captchaValidator = $validated['table']['CAPTCHA_VALIDATOR'];
        $inKey = $validated['table']['inKey'];

        // Validasi CAPTCHA
        if ($captchaInput !== $captchaValidator) {
            return response()->json(['error' => 'Invalid CAPTCHA'], 400);
        }

        // Contoh data response (ganti dengan logika Anda sendiri)
        $responseData = [
            'status_pindai' => 0,
            'hasil' => [
                'URL_DOKUMEN' => '3175/20221017/NII3175_018dfd9e-ff5c-fb0e-a5fa-ba651523a93d_sign.pdf',
                'CERT_STATUS' => 4,
                'NO_DOC' => 3175031503110056,
                'NAMA_KEP' => 'YULI AGUS PRASETYO,SH.,MH',
                'TIPE' => 1,
                'ACTIVE_DATE' => '17-10-2022 08:50:03',
                'NAMA_DAERAH' => 'PEMERINTAH JAKARTA TIMUR',
                'PEJABAT_NAMA_LGKP' => 'SELVIYANTI YUSNITASARI',
                'NO_DATA' => '3175031503110056',
                'JENIS_DATA' => 'BSRE_KARTU_KELUARGA',
                'SEQN_ID_DETAIL' => 'NII3175_018dfd9e-ff5c-fb0e-a5fa-ba651523a93d',
                'NO_PROV' => 31,
                'NO_KAB' => 75,
                'PRINTED_EMAIL' => '',
                'PRINTED_DATE' => now()->format('d-m-Y H:i:s'),
                'TYPE_DOCUMENT' => 'K',
                'DISTRIBUSI_PUSAT' => 'P',
                'PRINTED_SMS_PHONE' => '6285888208706',
                'ID_TABLE' => 'NII3175_018dfd9e-ff5c-fb0e-a5fa-ba651523a93d_1ED866BCD9178860E0633E23A8C0B3D1_04082024',
                'kode' => 'NI',
                'key' => 'NII3175_018dfd9e-ff5c-fb0e-a5fa-ba651523a93d',
                'modul' => 'dafduk'
            ],
            'tgl_pindai' => now()->format('d-m-Y H:i:s'),
            'siakExecTime' => 17
        ];

        return response()->json($responseData);
    }

    private function generateCaptchaImage($captchaString)
    {
        // Create an image resource
        $image = imagecreatetruecolor(150, 50);
        $bgColor = imagecolorallocate($image, 255, 255, 255);
        $textColor = imagecolorallocate($image, 0, 0, 0);

        // Fill the background
        imagefilledrectangle($image, 0, 0, 150, 50, $bgColor);

        // Add the captcha text to the image
        imagettftext($image, 20, 0, 10, 30, $textColor, public_path('fonts/OCRAExtended.ttf'), $captchaString);

        // Capture the image output
        ob_start();
        imagepng($image);
        $imageData = ob_get_contents();
        ob_end_clean();

        // Destroy the image resource
        imagedestroy($image);

        // Encode the image in base64
        return base64_encode($imageData);
    }

    public function generateQrCode()
    {
        $image = QrCode::size(300)->generate('http://159.223.58.9//Terpusat/Pindai/NII3578_018dfd9e-ff5c-fb0e-a5fa-ba651523a93d');

        return view('qrCode', ['image' => $image]);
    }
}
