// JavaScript Document

$('.slide').slick({ //クラス名fadeにslickを実行
    arrows: false,//切り替え用矢印なし
    autoplay: true, //自動再生：する
    dots: true, //ドットのページネーション表示：する
    infinite: true, //繰り返し：する
    speed: 1000, //切り替わる時間：1000ミリ秒
    fade: true, //フェード切り替え:する
    cssEase: 'linear' //イージングの設定：等速

});


$('.fade-right').on('inview', function () {
    $(this).addClass('fade-in');
});

$('.fade-left').on('inview', function () {
    $(this).addClass('fade-in');
});

$('.fade').on('inview', function () {
    $(this).addClass('fade-in2');
});


$('.button').on('click', function () {
    $('.popup').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup').fadeOut();
});

$('.button2').on('click', function () {
    $('.popup2').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup2').fadeOut();
});

$('.button3').on('click', function () {
    $('.popup3').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup3').fadeOut();
});

$('.button4').on('click', function () {
    $('.popup4').addClass('show').fadeIn();
});

$('.close').on('click', function () {
    $('.popup4').fadeOut();
});



// ハンバーガーメニュー //
$(function () {

    $('.humberger-icon').on('click', function () { //humberger-iconをクリックしたら
        $(this).toggleClass('active'); //.humberger-iconにクラス名active追加（既に付いている場合は削除）
        $(".nav").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
        $(".fullscreen-cover").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
    })

    $('.nav li a').on('click', function () { //.navの中のliの中のaをクリックしたら（この対象を変えれば閉じるボタン以外のタップすれば閉じれる対象を変えれる）
        $('.nav').toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
        $(".humberger-icon").toggleClass('active'); //.humberger-iconにクラス名active追加（既に付いている場合は削除）
        $(".fullscreen-cover").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
    })

    $('.fullscreen-cover').on('click', function () { //humberger-iconをクリックしたら
        $(this).toggleClass('active'); //.humberger-iconにクラス名active追加（既に付いている場合は削除）
        $(".nav").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
        $(".humberger-icon").toggleClass('active'); //.navにクラス名active追加（既に付いている場合は削除）
    })

});

//モバイルポップアップ//

$('.button-mobile').on('click', function () {
    $('.popup-mobile').addClass('show').fadeIn();
});

$('.close-mobile').on('click', function () {
    $('.popup-mobile').fadeOut();
});

$('.button-mobile2').on('click', function () {
    $('.popup2-mobile').addClass('show').fadeIn();
});

$('.close-mobile').on('click', function () {
    $('.popup2-mobile').fadeOut();
});

$('.button-mobile3').on('click', function () {
    $('.popup3-mobile').addClass('show').fadeIn();
});

$('.close-mobile').on('click', function () {
    $('.popup3-mobile').fadeOut();
});

$('.button-mobile4').on('click', function () {
    $('.popup4-mobile').addClass('show').fadeIn();
});

$('.close-mobile').on('click', function () {
    $('.popup4-mobile').fadeOut();
});





//マップポップアップ//

$('.map-button').on('click', function () {
    $('.map-popup').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup').fadeOut();
});

$('.map-button2').on('click', function () {
    $('.map-popup2').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup2').fadeOut();
});

$('.map-button3').on('click', function () {
    $('.map-popup3').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup3').fadeOut();
});

$('.map-button4').on('click', function () {
    $('.map-popup4').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup4').fadeOut();
});

$('.map-button5').on('click', function () {
    $('.map-popup5').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup5').fadeOut();
});

$('.map-button6').on('click', function () {
    $('.map-popup6').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup6').fadeOut();
});

$('.map-button7').on('click', function () {
    $('.map-popup7').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup7').fadeOut();
});

$('.map-button8').on('click', function () {
    $('.map-popup8').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup8').fadeOut();
});

$('.map-button9').on('click', function () {
    $('.map-popup9').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup9').fadeOut();
});

$('.map-button10').on('click', function () {
    $('.map-popup10').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup10').fadeOut();
});

$('.map-button11').on('click', function () {
    $('.map-popup11').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup11').fadeOut();
});

$('.map-button12').on('click', function () {
    $('.map-popup12').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup12').fadeOut();
});

$('.map-button13').on('click', function () {
    $('.map-popup13').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup13').fadeOut();
});

$('.map-button14').on('click', function () {
    $('.map-popup14').addClass('show').fadeIn();
});

$('.map-close').on('click', function () {
    $('.map-popup14').fadeOut();
});