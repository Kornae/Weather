$('#search-bar').hide();
$('#search-bar').addClass('hidden');
$('.card').addClass('hidden');


//Function to play Thunder Sound & Move to next Screen by Click
var audio = new Audio('Thunder.mp3');
$('.heading-text').click(function () {
    audio.play();
    $('#search-bar').css('opacity', 1);
    $('h1').html('Search City')
    $('#search-bar').show();
    $('#search-bar').removeClass('hidden');
})

//Function Move to next Screen by KeyPress
if ($(document).keypress(function (event) {
    if (event.keyCode === 13) {
        $('#search-bar').css('opacity', 1);
        $('h1').html('Search City')
        $('#search-bar').show();
        $('#search-bar').removeClass('hidden');

    }
}));

