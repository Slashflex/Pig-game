// When click on menu...
$('.navigation').click(function(){
    // changes background color 
    $('.navigation__menu').css('background-color','#3d3d44');
    // hides Game container + button 'rules'
    $('.btn-rules').slideUp('fast');
    $('.wrapper').slideUp('slow');
    // and displays dropdown menu
    $('.navigation__dropDown').slideDown('slow');
});

// When mouse leaving menu...
$('nav').mouseleave(function(){ 
    // changes background color 
    $('.navigation__menu').css('background-color','#2f3131');
    // hides dropdown menu
    $('.navigation__dropDown').slideUp('slow', function(){
        $(this).fadeOut(2000);
    });
    // displays Game container + button 'rules'
    $('.wrapper').slideDown('slow');
    $('.btn-rules').slideDown('fast');
});

// On click on btn-rules
$('.btn-rules').click(function(){
    // hides this button
    $(this).hide();
    // hides Game container
    $('.wrapper').slideUp('slow');
    // displays game rules popup
    $('.popup__close').show();
});

// On click on popup's cross
$('.popup__close').click(function(){
    // hides this cross
    $(this).hide();
    // displays Game container + button 'rules'
    $('.wrapper').slideDown('slow');
    $('.btn-rules').slideDown(900);
});