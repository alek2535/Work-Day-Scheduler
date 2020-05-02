$(document).ready(function() {
    //Moment Date
    var currentDay = moment().format("dddd MMMM Do YYYY");
        $("#currentDay").text(currentDay);
    //Current Time for Present, Past, Future    
    var currentHour = moment().format('H');

    //GetItem and display
    $('#user-input-1').html(localStorage.getItem('user-input-1'));
    $('#user-input-2').html(localStorage.getItem('user-input-2'));
    $('#user-input-3').html(localStorage.getItem('user-input-3'));
    $('#user-input-4').html(localStorage.getItem('user-input-4'));
    $('#user-input-5').html(localStorage.getItem('user-input-5'));
    $('#user-input-6').html(localStorage.getItem('user-input-6'));
    $('#user-input-7').html(localStorage.getItem('user-input-7'));
    $('#user-input-8').html(localStorage.getItem('user-input-8'));
    $('#user-input-9').html(localStorage.getItem('user-input-9'));

    timeColor();


    //$("#").append(localStorage.getItem(""));

//Timeblock Colors
    function timeColor() {
        $('.text-block').each(function () {
            let time = parseInt($(this).siblings().attr('value'));
            if (time == currentHour) {
                $(this).addClass('present');
                } else if (time < currentHour) {
                    $(this).addClass('past');
                } else if (time > currentHour) {
                    $(this).addClass('future');
                }
            })
    }

    //Save Button
    $('.saveBtn').on('click', function() {
        localStorage.setItem('user-input-1', ($('#user-input-1').val()));
        $('#user-input-1').html(userInputSet);
        localStorage.setItem('user-input-2', ($('#user-input-2').val()));
        $('#user-input-2').html(userInputSet);
        localStorage.setItem('user-input-3', ($('#user-input-3').val()));
        $('#user-input-3').html(userInputSet);
        localStorage.setItem('user-input-4', ($('#user-input-4').val()));
        $('#user-input-4').html(userInputSet);
        localStorage.setItem('user-input-5', ($('#user-input-5').val()));
        $('#user-input-5').html(userInputSet);
        localStorage.setItem('user-input-6', ($('#user-input-6').val()));
        $('#user-input-6').html(userInputSet);
        localStorage.setItem('user-input-7', ($('#user-input-7').val()));
        $('#user-input-7').html(userInputSet);
        localStorage.setItem('user-input-8', ($('#user-input-8').val()));
        $('#user-input-8').html(userInputSet);
        localStorage.setItem('user-input-9', ($('#user-input-9').val()));
        $('#user-input-9').html(userInputSet);
    });

    // $('.saveBtn').on('click', function() {
    //     let userText = $(this).siblings('.text-block').children('.text');
    //     localStorage.setItem('user input', (userText.val()));
    //     // $('#user-input-1').html(userInputSet);
    //     console.log(userText);
    // });



});