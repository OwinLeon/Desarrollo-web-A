//botones de los card para abrir una ventana modal

let botones = document.querySelectorAll(".btn-modal");

botones.forEach(boton =>{
 boton.addEventListener("click", function(){
    let modal = new bootstrap.Modal(document.getElementById("miModal"));
    modal.show();

 })

})

//validación del formulario

document.getElementById("loginForm").addEventListener("submit", function(e){
   e.preventDefault()
   let email = document.getElementById("email").value
   let password = document.getElementById("password").value
   let message = document.getElementById("message")

   //valores didacticos para esta actvidad

    const USER_DEFAULT = "prueba@gmail.com";
    const PASSWORD_DEFAULT = "123456";

    if (email === "" || password ===""){
        message.innerHTML = "Todo los campos son obligatorios";
        message.className = "text-warning";
        
    } else if(email ===USER_DEFAULT && password === PASSWORD_DEFAULT) {
        
        message.innerHTML = "Bienvenido al sistema"
        message.className = "text-success"

    }else{
        message.innerHTML = "Error: usuario o contraseña incorrecta"
        message.className = "text-danger"
    }


    
})



