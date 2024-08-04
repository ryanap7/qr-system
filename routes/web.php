<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CaptchaController;
use App\Http\Controllers\ReferensiController;

Route::get('/', function () {
    return view('index');
});

Route::get('/ping', function () {
    return response()->json((object)[
        'semantic' => '82.0.1',
        'major' => 82,
        'minor' => 0,
        'patch' => 1,
        'state' => '',
        'ip_client' => request()->ip(),
    ]);
});

Route::get('Terpusat/Pindai/NII3578_018dfd9e-ff5c-fb0e-a5fa-ba651523a93d', function () {
    return view('scan');
});

Route::get('Terpusat/apps/generateCaptcha', [CaptchaController::class, 'generate']);
Route::post('Terpusat/Pindai/procData', [CaptchaController::class, 'processData'])->name('terpusat.pindai.procData');

Route::get('referensi/wni', [ReferensiController::class, 'wni']);
Route::get('referensi/wna', [ReferensiController::class, 'wna']);
