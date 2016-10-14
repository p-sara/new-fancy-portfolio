$(document).ready(function () {

    $('#email_form').submit(function (event) {
        event.preventDefault();
        fillUpEmail();
        console.log(toJSON());
    });

    function fillUpEmail() {
        $.ajax({
            type: 'POST',
            url: 'php/email.php',
            data: toJSON(),
            dataType: 'json'
        }).done(function (answer) {
            if(answer.result === true) {
                 /*$('#msg').fadeIn(500, function () {
                     $(this).append('<p style="color: green"><strong>Message has been sent.</strong></p>');
                     $(this).fadeOut(2500);
                     $('#email_form').trigger('reset');
                 });*/
                alert("Twoja wiadomość została wysłana. Dziękuję!");
                $('#email_form').trigger('reset');
            /*} else {
                 $('#msg').fadeIn(500, function () {
                     $(this).append('<p style="color: red"><strong>Cannot send message!</strong></p>');
                     $(this).fadeOut(2500);
                 })*/
                alert("Nie można wysłać wiadomość. Sprawdź ponownie wypełnione pola.");
            }
        /*}).fail(function () {
             $('#msg').fadeIn(500, function () {
                 $(this).append('<p style="color: red"><strong>Server problems. Try again later...</strong></p>');
                 $(this).fadeOut(2500);
             });*/
            alert("Wystąpił problem z serwerem. Spróbuj ponownie później");
        });
    }


    function toJSON() {
        return {
            'name': $('.name').val(),
            'email': $('.from_email').val(),
            'message': $('.message').val()
        };
    }


});