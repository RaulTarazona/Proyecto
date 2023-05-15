import { newUSer } from "./Apiconection.js";

const formulario = document.querySelector('.formulario__register')
formulario.addEventListener('submit', validateUser)

function validateUser(e){
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const usuario = document.querySelector('#usuario').value;
    const password = document.querySelector('#password').value;

    const users = {
        nombre,
        email,
        usuario,
        password
    }

    if(validate(users)){
        alert('Todos los campos son obligatorios')
        return
    }
    newUSer(users)

}

function validate(objeto){
    return !Object.values(objeto).every(element => element !=='')
}