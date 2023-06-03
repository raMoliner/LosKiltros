$(document).ready(function() {
    $('#login-form').submit(function(event) {
      event.preventDefault();

      var email = $('#email').val();
      var password = $('#password').val();

      if (email === '') {
        $('#email').addClass('is-invalid');
        $('#email-error').show();
        return;
      } else {
        $('#email').removeClass('is-invalid');
        $('#email-error').hide();
      }

      var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(email)) {
        $('#email').addClass('is-invalid');
        $('#email-error').show();
        return;
      } else {
        $('#email').removeClass('is-invalid');
        $('#email-error').hide();
      }

      if (password === '') {
        $('#password').addClass('is-invalid');
        $('#password-error').show();
        return;
      } else {
        $('#password').removeClass('is-invalid');
        $('#password-error').hide();
      }

    });
  });