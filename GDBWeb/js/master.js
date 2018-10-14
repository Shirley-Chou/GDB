// 导航样式切换
let currentItem = $('.nav-current').index();
$('.nav-item').on('mouseover', function () {
    $(this).addClass('nav-current').siblings('li').removeClass('nav-current');
})
$('.nav-item').on('mouseout', function () {
    $('.nav-item').removeClass('nav-current').eq(currentItem).addClass('nav-current');
})

// 显示、关闭登录框
$('#showLogin').on('click', function () {
    $('.pop-container,.login-contianer').fadeIn();
})
$('#loginCloseBtn').on('click', function () {
    $('.pop-container,.login-contianer').fadeOut();
})

// 显示关闭letter
$('.letter-icon').on('click', function () {
    $('.pop-container,.letter').fadeIn();
})
$('.letter-closebtn').on('click', function () {
    $('.pop-container,.letter').fadeOut();
})

$('.produce-iot .produce-starbox').on('mouseover', function () {
    $(this).children('.produce-info').css({
        'width': '270px',
        'padding': '0 20px 0 80px'
    }).children('p').css('opacity', '1');
})
$('.produce-cloud .produce-starbox').on('mouseover', function () {
    $(this).children('.produce-info').css({
        'width': '230px',
        'padding': '0 20px 0 110px'
    }).children('p').css('opacity', '1');
})
$('.produce-vr .produce-starbox').on('mouseover', function () {
    $(this).children('.produce-info').css({
        'width': '230px',
        'padding': '0 20px 0 76px'
    }).children('p').css('opacity', '1');
})
$('.produce-bigdata .produce-starbox').on('mouseover', function () {
    $(this).children('.produce-info').css({
        'width': '230px',
        'padding': '0 20px 0px 82px'
    }).children('p').css('opacity', '1');
})
$('.produce-ai .produce-starbox').on('mouseover', function () {
    $(this).children('.produce-info').css({
        'width': '230px',
        'padding': '0 20px 0 78px'
    }).children('p').css('opacity', '1');
})
$('.produce-mi .produce-starbox').on('mouseover', function () {
    $(this).children('.produce-info').css({
        'width': '230px',
        'padding': '0 20px 0 96px'
    }).children('p').css('opacity', '1');
})

$('.produce-starbox').on('mouseout', function () {
    $(this).children('.produce-info').css({
        'width': '0',
        'padding': '0'
    }).children('p').css('opacity', '0');
})




