const validation = (userData, errors, setErrors) =>{
    let error = {};
    if(!userData.email){
        //setErrors({...errors, email:"Completar este campo"})
        error.email = "Completar este campo";
    } else if(userData.email.length > 35) {
        //setErrors({...errors,email:"No puede superar los 35 caracteres."}) 
        error.email = "No puede superar los 35 caracteres.";
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)){
        //setErrors({...errors,email:"Email invalido"})
        error.email = "Email invalido";
    } else {
        //setErrors({...errors,email:""})
        error.email = "";
    }
    
    if (userData.password.length < 6){
        //setErrors ({...errors, password: "Short password."})
        error.password = "Short password.";
    } else if (userData.password.length > 10){
        //setErrors ({...errors, password: "Long password."})
        error.password = "Long password.";
    } 
    else if(!/\d/.test(userData.password)){
        //setErrors ({...errors, password: "La contraseña debe incluir al menos un numero."})
        error.password = "La contraseña debe incluir al menos un numero.";
    }else {
        //setErrors ({...errors, password: ""})
        error.password = "";
    }
    return error;
};

export default validation;