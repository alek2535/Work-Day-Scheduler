$(document).ready(function() {
    //Moment Date
    var currentDay = moment().format("dddd MMMM Do YYYY");
        $("#currentDay").text(currentDay);
    //Current Time for Present, Past, Future    
    var currentHour = moment().format('H');
    console.log(currentHour);

    let userInput = '';

    timeColor();

    localStorage.getItem(JSON.stringify(userInput));

//Timeblock Colors
    function timeColor() {
        if ($('.time').attr('value') === currentHour) {
            $('.text-block').addClass('present');
            } else if ($('.time').attr('value') > currentHour) {
                $('.text-block').addClass('past');
            } else if ($('.time').attr('value') < currentHour) {
                $('.text-block').addClass('future');
            }
            console.log($('.time').attr('value'));
    }

    //Save Button
    $('.saveBtn').on('click', changeText())

    function changeText() {
        userInput = $('#user-input-1').val();
        $('#user-input-1').html(userInput);
        localStorage.setItem(JSON.parse('userInput'));
    }

})