<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>SIAK Integrasi</title>
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
    <link rel="stylesheet" type="text/css" href="{{ asset('css/siak.min.css') }}" />

    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon/favicon-16x16.png') }}">
    <link rel="mask-icon" href="{{ asset('img/favicon/safari-pinned-tab.svg') }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>

<body style="background-image: url('../../../img/bg-welcome-3.jpeg'); background-size: cover; background-repeat: no-repeat; background-attachment:fixed;" class="m-page--fluid m-body--fixed m-header--static m-aside--offcanvas-default">
    <div id="SIAKPage" class="m-grid m-grid--hor m-grid--root m-page">
        <!-- BEGIN::Header -->
        <header id="m_header" class="m-grid__item m-grid m-grid--desktop m-grid--hor-desktop m-header ">
            <div class="m-grid__item m-grid__item--fluid m-grid m-grid--desktop m-grid--hor-desktop m-container m-container--fluid m-container--responsive">
                <div class="m-grid__item m-grid__item--fluid m-grid m-grid--desktop m-grid--ver-desktop m-header__wrapper">
                    <div class="m-grid__item m-brand">
                        <div class="m-stack m-stack--ver m-stack--general m-stack--inline">
                            <div class="m-stack__item m-stack__item--middle m-brand__logo">
                                <a href="/" class="m-brand__logo-wrapper">
                                    <img alt="logo" src="{{ asset('img/logo_dukcapil_lighter.png') }}" style="height: 50px; width: auto;">
                                </a>
                            </div>
                            <div class="m-stack__item m-stack__item--middle m-brand__tools">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- End::Header -->

        <div class="m-grid__item m-grid__item--fluid m-grid m-grid m-grid--hor m-container m-container--fluid m-container--responsive">
            <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor-desktop m-grid--desktop m-body" style="background: rgba(229, 236, 236, .73);">
                <div class="m-grid__item m-grid__item--fluid m-grid m-grid--desktop m-grid--ver-desktop m-body__content">
                    <div id="siakContent" class="m-grid__item m-grid__item--fluid m-wrapper">
                        <!-- BEGIN::Subheader -->
                        <div class="m-subheader m--padding-top-5">
                            <div class="d-flex align-items-center">
                                <div class="mr-auto">
                                    <h3 class="m-subheader__title m--regular-font-size-lg4"><i class="la la-qrcode m--icon-font-size-"></i>&nbsp;SIAK Terpusat</h3>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <!-- END::Subheader -->

                        <div class="m-content">
                            <div class="row m--row-no-padding">
                                <div class="col-lg-6 ml-auto mr-auto">
                                    <div class="m-portlet m-portlet--bordered-semi m-portlet--full-height m-portlet--rounded">
                                        <div class="m-portlet__head">
                                            <div class="m-portlet__head-caption">
                                                <div class="m-portlet__head-title">
                                                    <h3 class="m-portlet__head-text">
                                                        Validasi
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="m-portlet__head-tools">&nbsp;</div>
                                        </div>
                                        <form action="Terpusat/Pindai/procData" method="POST" id="form_terpusat_pindai" class="m-form m-form--state m-form--fit m-form--label-align-right form_default" autocomplete="off" data-target="siakContentHandlebar" data-hidden="siakContent" data-server="true">
                                            @csrf
                                            <div class="m-portlet__body">
                                                <div class="form-group m-form__group row rapat captchaInputContainer">
                                                    <label for="CAPTCHA" class="col-4 col-form-label">
                                                        CAPTCHA <span class="required">*</span>
                                                    </label>
                                                    <div class="col-3">
                                                        <img src="{{ asset('img/captcha.jpg') }}" class="captchaImage" />
                                                    </div>
                                                    <div class="col-8 ml-auto">
                                                        <div class="input-group input-group-md">
                                                            <input type="text" name="table[CAPTCHA]" id="CAPTCHA" class="form-control mask-captcha captchaInput" autocomplete="none" placeholder="CAPTCHA" data-rule-required="true" data-msg-required="CAPTCHA wajib di-isi" />
                                                            <div class="input-group-append">
                                                                <input type="hidden" name="table[CAPTCHA_VALIDATOR]" class="captchaValidator" />
                                                                <button class="btn btn-default captchaRefresh" type="button"><i class="fa fa-refresh"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x"></div>
                                                <div class="form-group m-form__group row rapat">
                                                    <div class="col-8 ml-auto">
                                                        <input type="hidden" name="table[inKey]" id="inKey" />
                                                        <button type="submit" class="btn btn-accent m-btn m-btn--air m-btn--icon">
                                                            <i class="flaticon-squares-4 m--icon-font-size-sm3"></i>&ensp;Tampilkan&ensp;
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="siakContentHandlebar" class="m-grid__item m-grid__item--fluid m-wrapper view_templ" data-id-template="siakContentHbs" style="display: none;margin-top:2rem;">
                        <div class="row m--row-no-padding">
                            <div class="col-lg-12 ml-auto mr-auto">
                                <div class="m-portlet m-portlet--bordered-semi m-portlet--skin-light m-portlet--full-height m-portlet--rounded">
                                    <div class="m-portlet__head">
                                        <div class="m-portlet__head-caption">
                                            <div class="m-portlet__head-title">
                                                <span class="m-portlet__head-icon m--font-tosca">
                                                    <i class="flaticon-folder"></i>
                                                </span>
                                                <h3 class="m-portlet__head-text m--font-tosca">
                                                    KARTU KELUARGA WNI
                                                    <small>
                                                        <span class="m--font-bold">Pindai Dokumen</span>
                                                        &nbsp;<span class="m-badge m-badge--info m-badge--dot m-badge--dot-small"></span>&nbsp;
                                                        <span class="m--font-tosca m--font-bold">Terpusat</span>
                                                    </small>
                                                </h3>
                                            </div>
                                        </div>
                                        <div class="m-portlet__head-tools">&nbsp;</div>
                                    </div>
                                    <div class="m-portlet__body">
                                        <div class="m-invoice-2">
                                            <div class="m-invoice__wrapper">
                                                <div class="m-invoice__head">
                                                    <div class="m-invoice__container m-invoice__container--centered">
                                                        <div class="m-invoice__logo m-padding--topless m--align-center m--padding-bottom-5">
                                                            <img src="{{ asset('img/Checked.png')}}" class="m--image-centered" />
                                                        </div>
                                                        <div class="m-invoice__items m-padding--topless m-padding--bottomless">
                                                            <div class="m-invoice__item m--padding-top-5 m--padding-bottom-5">
                                                                <span class="m-invoice__subtitle m--font-inverse-light m-padding--bottomless">Status dokumen</span>
                                                                <span class="m-invoice__text m--font-bold" style="color:#489e81">AKTIF</span>
                                                            </div>
                                                            <div class="m-invoice__item m--padding-top-5 m--padding-bottom-5">
                                                                <span class="m-invoice__subtitle m--font-inverse-light m-padding--bottomless">No.KK</span>
                                                                <span class="m-invoice__text sembunyikan font-ocra m--regular-font-size-lg1 m--font-boldest">
                                                                    3578130301085<span class="m--font-info">***</span>
                                                                </span>
                                                            </div>
                                                            <div class="m-invoice__item m--padding-top-5 m--padding-bottom-5">
                                                                <span class="m-invoice__subtitle m--font-inverse-light m-padding--bottomless">Nama Kepala Keluarga</span>
                                                                <span class="m-invoice__text">JOENISOEJATININGSIH</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="m-invoice__head">
                                                    <div class="m-invoice__container m-invoice__container--centered">
                                                        <strong style="color:#333399">Info Penandatangan</strong>
                                                        <div class="m-invoice__items m-padding--topless m-padding--bottomless">
                                                            <div class="m-invoice__item m--padding-top-5 m--padding-bottom-5">
                                                                <span class="m-invoice__subtitle m--font-inverse-light m-padding--bottomless">Daerah</span>
                                                                <span class="m-invoice__text">PEMERINTAH JAWA TIMUR</span>
                                                            </div>
                                                            <div class="m-invoice__item m--padding-top-5 m--padding-bottom-5">
                                                                <span class="m-invoice__subtitle m--font-inverse-light m-padding--bottomless">Penandatangan</span>
                                                                <span class="m-invoice__text">MUHAMMAD FACHRY</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="m-invoice__head m--padding-top-10">
                                                    <div class="m-invoice__container m-invoice__container--centered">
                                                        <strong style="color:#333399">Informasi</strong>
                                                        <div class="m-invoice__items m-padding--topless m-padding--bottomless">
                                                            <div class="m-invoice__item m--padding-top-5 m--padding-bottom-5">
                                                                <span class="m-invoice__subtitle m--font-inverse-light m-padding--bottomless">Tanggal Pindai</span>
                                                                <span class="m-invoice__text">
                                                                    <i class="fa fa-calendar"></i>&nbsp;04-08-2024
                                                                    &ensp;<i class="fa fa-clock-o m--margin-left-10"></i>&nbsp;12:30:01
                                                                </span>
                                                            </div>
                                                            <div class="m-invoice__item m--padding-top-5 m--padding-bottom-5">
                                                                <span class="m-invoice__subtitle m--font-inverse-light m-padding--bottomless">Tgl. Penandatanganan</span>
                                                                <span class="m-invoice__text">
                                                                    <i class="fa fa-calendar"></i>&nbsp;13-12-2023
                                                                    &ensp;<i class="fa fa-clock-o m--margin-left-10"></i>&nbsp;09:12:22
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-subheader m--align-center m--padding-top-5">
                                    <div class="d-flex align-items-center">
                                        <div class="mr-auto ml-auto">
                                            <h3 class="m-subheader__title m--align-left m--regular-font-size-lg3">
                                                Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE), BSSN
                                            </h3>
                                        </div>
                                        <div class="mr-auto ml-auto">
                                            <img src="{{ asset('img/logo_bsre.png')}}" style="width: 122px;height:auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- BEGIN::Header -->
        <footer class="m-grid__item m-footer ">
            <div class="m-container m-container--fluid m-container--responsive">
                <div class="m-footer__wrapper">
                    <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                        <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                            <span class="m-footer__copyright">
                                <b>Ditjen Dukcapil Kemendagri</b>&nbsp;<a href="javascript:;" class="m-link m--font-orange m--font-bolder">SIAK Integrasi</a>
                            </span>
                        </div>
                        <div class="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
                            <ul class="m-footer__nav m-nav m-nav--skin-dark m-nav--inline m--pull-right my-info m--hide">
                                <li class="m-nav__item">
                                    <span class="m-nav__link">
                                        <span class="m-nav__link-text"><b class="m--font-light">Alamat IP</b></span>&nbsp;<code class="my-info-ip"></code>
                                    </span>
                                </li>
                                <li class="m-nav__item">
                                    <span class="m-nav__link">
                                        <span class="m-nav__link-text"><b class="m--font-light">Versi</b></span>&nbsp;<code class="my-info-version"></code>
                                    </span>
                                </li>
                                <li class="m-nav__item m-nav__item--last my-info-stage">
                                    <a href="javascript:;" class="m-nav__link m--font-light">
                                        <i class="m-nav__link-icon m--icon-font-size- m--font-light"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- End::Header -->
    </div>
    <!-- END::Page -->

    <!-- BEGIN::bootstrap_modal -->
    <div class="modal fade in konfirmasi-simpan" id="modal_gagal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-dialog-centered modal-md" role="document">
            <div class="modal-content" style="background-color: transparent;border-radius: .55rem;">
                <div class="modal-header m--bg-fill-danger m--padding-top-5 m--padding-bottom-5" style="border-top-left-radius: .55rem;border-top-right-radius: .55rem;">
                    <h5 class="modal-title m--icon-font-size-lg3 m--font-inverse-danger"><i class="la la-exclamation-circle  m--icon-font-size-lg2 m--font-boldest2"></i>&nbsp;Pesan
                    </h5>
                </div>
                <div class="modal-body m--bg-fill-light m--marginless m--padding-10">
                    <div class="row m--padding-left-5 m--padding-top-10">
                        <div id="modal_gagal_tulisan" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
                        <div id="modal_gagal_hidden" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style="display: none">
                            <ul></ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer m--bg-fill-light m--padding-top-5 m--padding-bottom-5" style="border-top:1px solid rgba(244,81,108,.19);border-bottom-left-radius: .55rem;border-bottom-right-radius: .55rem;">
                    <button type="button" class="btn btn-danger m-btn--air btn-focus" data-dismiss="modal">&nbsp;Tutup&nbsp;</button>
                </div>
            </div>
        </div>
    </div>
    <!-- END::bootstrap_modal -->

    <div id="m_scroll_top" class="m-scroll-top">
        <i class="la la-arrow-up"></i>
    </div>
    <div id="modal-esign-container" class="m--clearfix"></div>

    <script type="text/javascript" src="{{ asset('js/base/vendors.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/base/scripts.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/kjua-0.9.0.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/jquery.serializejson.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/siak-dev.bundle.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/siakApp.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/siakLocalStorage.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/siakClient.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/terpusat.min.js') }}"></script>
    <script type="text/javascript">
        $(function() {
            integrasi_terpusat.initPindai();
        })
    </script>

    <script type="text/javascript">
        $(document).ready(function() {
            $('#form_terpusat_pindai').on('submit', function(event) {
                event.preventDefault();

                $.ajax({
                    url: 'http://159.223.58.9//Terpusat/Pindai/procData',
                    method: 'POST',
                    data: $(this).serialize(),
                    success: function(response) {
                        console.log(response)
                        if (response) {
                            $('#siakContentHandlebar').show();
                        } else {
                            $('#siakContentHandlebar').hide();
                        }
                    },
                    error: function(xhr) {
                        console.error('An error occurred:', xhr);
                    }
                });
            });
        });
    </script>
</body>

</html>