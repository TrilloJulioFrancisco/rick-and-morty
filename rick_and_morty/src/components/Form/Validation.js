const validation = (userData, errors, setErrors) =>{
    if(!userData.email){
        setErrors({...errors, email:"Completar este campo"})
    } else if(userData.email.length > 35) {
        setErrors({...errors,email:"No puede superar los 35 caracteres."}) 
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)){
        setErrors({...errors,email:"Email invalido"})
    } else {
        setErrors({...errors,email:""})
    }
    
    if (userData.password.length < 6){
        setErrors ({...errors, password: "Short password."})
    } else if (userData.password.length > 10){
        setErrors ({...errors, password: "Long password."})
    } 
    else if(!/\d/.test(userData.password)){
        setErrors ({...errors, password: "La contraseña debe incluir al menos un numero."})
    }else {
        setErrors ({...errors, password: ""})
    }
};

export default validation;