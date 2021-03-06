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

    // //Save Button
    $('#saveBtn1').on('click', function() {
        let userInputSet1 = localStorage.setItem('user-input-1', ($('#user-input-1').val()));
        $('#user-input-1').html(userInputSet1);
    });

    $('#saveBtn2').on('click', function() {
        let userInputSet2 = localStorage.setItem('user-input-2', ($('#user-input-2').val()));
        $('#user-input-2').html(userInputSet2);
    });

    $('#saveBtn3').on('click', function() {
        let userInputSet3 = localStorage.setItem('user-input-3', ($('#user-input-3').val()));
        $('#user-input-3').html(userInputSet3);
    });

    $('#saveBtn4').on('click', function() {
        let userInputSet4 = localStorage.setItem('user-input-4', ($('#user-input-4').val()));
        $('#user-input-4').html(userInputSet4);
    });

    $('#saveBtn5').on('click', function() {
        let userInputSet5 = localStorage.setItem('user-input-5', ($('#user-input-5').val()));
        $('#user-input-5').html(userInputSet5);
    });

    $('#saveBtn6').on('click', function() {
        let userInputSet6 = localStorage.setItem('user-input-6', ($('#user-input-6').val()));
        $('#user-input-6').html(userInputSet6);
    });

    $('#saveBtn7').on('click', function() {
        let userInputSet7 = localStorage.setItem('user-input-7', ($('#user-input-7').val()));
        $('#user-input-7').html(userInputSet7);
    });

    $('#saveBtn8').on('click', function() {
        let userInputSet8 = localStorage.setItem('user-input-8', ($('#user-input-8').val()));
        $('#user-input-8').html(userInputSet8);
    });

    $('#saveBtn9').on('click', function() {
        let userInputSet9 = localStorage.setItem('user-input-9', ($('#user-input-9').val()));
        $('#user-input-9').html(userInputSet9);
    });

    // $('.saveBtn').on('click', function() {
    //     let userText = $(this).siblings('.text-block').children('.text');
    //     localStorage.setItem('user input', (userText.val()));
    // });



});