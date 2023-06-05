// Error y estilo invalidado
function showError(inputElement, errorMessage) {
  var errorElement = inputElement.nextElementSibling;
  errorElement.textContent = errorMessage;
  errorElement.style.display = 'block';
  inputElement.classList.add('is-invalid');
}

// Función para esconder el error del mensaje 
function hideError(inputElement) {
  var errorElement = inputElement.nextElementSibling;
  errorElement.style.display = 'none';
  inputElement.classList.remove('is-invalid');
}

// Función para validar el formato del email
function validateEmail() {
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('email-error');
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailInput.value.match(emailPattern)) {
    showError(emailInput, 'Por favor, ingresa un correo electrónico válido.');
  } else {
    hideError(emailInput);
  }
}

// Función para validar el input del password 
function validatePassword() {
  var passwordInput = document.getElementById('password');
  var passwordError = document.getElementById('password-error');

  var password = passwordInput.value;

  if (password.length < 6 || password.length > 10) {
    showError(passwordInput, 'La contraseña debe tener entre 6 y 10 caracteres.');
  } else {
    hideError(passwordInput);
  }
}

// Listeners del focus 
document.getElementById('email').addEventListener('focus', validateEmail);
document.getElementById('email').addEventListener('input', validateEmail);

document.getElementById('password').addEventListener('focus', validatePassword);
document.getElementById('password').addEventListener('input', validatePassword);

// Handler del formulario
document.getElementById('login-form').addEventListener('submit', function(event) {
  validateEmail();
  validatePassword();

  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');

  // Prevención del uso del botón si es que los datos son inválidos
  if (!emailInput.checkValidity() || !passwordInput.checkValidity() || !emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || passwordInput.value.length < 6 || passwordInput.value.length > 10) {
    event.preventDefault();
  }
});
