export default function validate(userData){
    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
    if(!userData.username){
      errors.username = "Por favor, complete este campo";
    }
  
    if(!regexEmail.test(userData.username)){
      errors.email = "El email es incorrecto";
    }
  
    if(userData.username.length > 35){
      errors.message = "El email no puede superar los 35 caracteres";
    }

    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe incluir al menos un número";
      }

    if(userData.password.length<6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
      }
  
    return errors;
  }