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
      if (answer.result === true) {
        alert("Twoja wiadomość została wysłana. Dziękuję!");
        $('#email_form').trigger('reset');
      } else {
        alert("Nie można wysłać wiadomość. Sprawdź ponownie wypełnione pola.");
      }
    }).fail(function () {
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