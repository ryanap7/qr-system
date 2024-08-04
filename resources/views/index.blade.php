<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Integrasi SIAK Terpusat</title>
    <meta name="description" content="Web integrasi mandiri Sistem Informasi Administrasi Kependudukan">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="preload" href="{{ asset('fonts/OCRAExtended.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-Light.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-LightItalic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-Medium.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-MediumItalic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-Black.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-BlackItalic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-Bold.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-BoldItalic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-Italic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Poppins-Regular.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-Light.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-LightItalic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-Medium.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-MediumItalic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-Black.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-BlackItalic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-Bold.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-BoldItalic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-Italic.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="{{ asset('fonts/Roboto-Regular.woff2') }}" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.min.css') }}" />

    <link rel="stylesheet" type="text/css" href="{{ asset('css/base/vendors.bundle.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/base/style.bundle.css') }}" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/login.min.css') }}" />

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon/favicon-16x16.png') }}">
    <link rel="mask-icon" href="{{ asset('img/favicon/safari-pinned-tab.svg') }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>

<body class="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-aside-left--hide m-footer--push m-aside--offcanvas-default">
    <div class="m-grid m-grid--hor m-grid--root m-page">
        <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1" id="m_login" style="background-color: #fff;background-size: cover; background-repeat: no-repeat; background-attachment:fixed;">
            <div class="m-grid__item m-grid__item--fluid m-login__wrapper" style="padding-top: 8%;">
                <div class="m-login__container">
                    <div class="m-login__logo">
                        <a href="javascript:;">
                            <img src="{{ asset('img/GARUDA_logo_white.png') }}">
                        </a>
                    </div>
                    <div class="m-login__signin">
                        <div class="m-login__head">
                            <h3 class="m-login__title">Integrasi Mandiri</h3>
                        </div>
                    </div>
                    <div class="m-login__signup">&nbsp;</div>
                    <div class="m-login__forget-password"></div>
                    <div class="m-login__account">
                        <span class="m-login__account-msg m--font-light m--regular-font-size-lg3">
                            Sistem Informasi Administrasi Kependudukan
                        </span>
                        <span class="m--clearfix"></span>
                        <span class="m-login__account-msg m--font-light m--regular-font-size-lg5">
                            SIAK Terpusat
                        </span>
                        <span class="m--clearfix"></span>
                        <span class="m-login__account-msg">
                            <img src="{{ asset('img/logo_dukcapil_light.png') }}" style="width:auto;height:55px;">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="{{ asset('js/base/vendors.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/base/scripts.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/kjua-0.9.0.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/jquery.serializejson.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/siak-dev.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/siakApp.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/siakLocalStorage.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/siakClient.min.js') }}"></script>
</body>

</html>