function validarFormulario() {
  var rut = document.getElementById("rut").value;
  var calle = document.getElementById("calle").value;
  var ciudad = document.getElementById("ciudad").value;
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var contraseña = document.getElementById("contraseña").value;
  var RepetirContraseña = document.getElementById("RepetirContraseña").value;

  var expresionRegular = /^([a-zA-Z0-9]+-)*[a-zA-Z0-9]+$/;
  if(!expresionRegular.test(rut)){

alert("Por favor, ingresa un rut válido");

  }

  
  if (calle===""){
    alert("Ingrese una dirección");
    return false;
  }

  if(ciudad===""){
    alert("Ingresa una ciudad");
    return false;
  }
  

  if (nombre === "") {
    alert("Por favor, ingresa tu nombre");
    return false;
  }


  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido");
    return false;
  }
  
  var expresionRegular = /^.{8,}$/;

  if (!expresionRegular.test(contraseña)) {
    return false;
  }
  
  if (contraseña !== RepetirContraseña) {
    return false;
  }

  
  alert("Formulario válido");
  return true;
}
