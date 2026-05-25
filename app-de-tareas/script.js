addEventListener("DOMContentLoaded", () => {
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista-tareas");
const input = formulario.querySelector("input[name='tarea']");
const contador = document.getElementById("contador");

let contadorTareas = 0;

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const textoTarea = input.value.trim();

    if (textoTarea !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;

        lista.appendChild(nuevaTarea);

        input.value = "";


        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = " Eliminar";
        botonEliminar.type = "button";

    
        botonEliminar.addEventListener("click", function() {
            nuevaTarea.remove();
        });
        nuevaTarea.appendChild(botonEliminar);

        contadorTareas++;
        contador.textContent = `Tarea: ${contadorTareas}`;
        console.log(`Tarea agregada: ${textoTarea}`, `Total de tareas: ${contadorTareas}`); 
    }  

});

});