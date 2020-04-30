$(document).ready(function() {
    
    $('.saveBtn').on('click', function () {
        let userInput = $('.eventDescription');
        let scheduleEvent = $('.text').text(userInput);
        console.log(scheduleEvent);
    })
})