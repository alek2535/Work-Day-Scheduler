$(document).ready(function() {
    //Moment Date
    var currentDay = moment().format("dddd MMMM Do YYYY");
        $("#currentDay").text(currentDay);
    //Current Time for Present, Past, Future    
    var currentHour = moment().format('H');
    console.log(currentHour);


    timeColor();

    let userInputGet = localStorage.getItem('user input');
    $('#user-input-1)').html(userInputGet);

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
    $('.saveBtn').on('click', function() {
        let userInputSet = localStorage.setItem('user input', ($('#user-input-1').val()));
        $('#user-input-1').html(userInputSet);
    });

    // function changeText() {
        
        // 
    // };

});