const nombre = document.querySelector("#nombre"); 
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto"); 
const mensaje = document.querySelector("#mensaje"); 
const formulario = document.querySelector("form"); 
const msjError = document.querySelector(".msj-error")

const validar = (e)=>{
    
    let alerta = "";
    let errorValidacion = false; 

    //nombre
    if(nombre.value.length< 4){
        alerta += "Probá con tu nombre completo ;)<br>" 
        errorValidacion = true;
    }

    //asunto
    if (asunto.value.length < 4){
        alerta +="Podrias ingresar un asunto mas descriptivo?<br>"
        errorValidacion = true; 
        e.preventDefault();
    }

    //mensaje
    if(mensaje.value.length < 6){
        alerta +="El comentario es algo corto para mi gusto...<br> "
        errorValidacion = true; 
        e.preventDefault();
    }

    ///////////////////////////////////////////////////////////
    if(errorValidacion){
        msjError.style.display = "block"; 
        msjError.innerHTML = "Parece que algo no anda bien... <br>" + alerta;
        // msjError.innerHTML = alerta;
        e.preventDefault(); 
    }else{
        msjError.style.color = "green"; 
        msjError.innerHTML = "Enviado!"
    }
}

formulario.addEventListener("submit", validar); 
