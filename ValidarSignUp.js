const suForm = document.getElementById("suForm");

const suNombre = document.getElementById("suNombre");
const suApellido = document.getElementById("suApellido");
const suEmail = document.getElementById("suEmail");
const suPassword = document.getElementById("suPassword");
const suPassword2 = document.getElementById("suPassword2");

const alertNombre = document.getElementById("alertNombre");
const alertApellido = document.getElementById("alertApellido");
const alertEmail = document.getElementById("alertEmail");
const alertPassword = document.getElementById("alertPassword");
const alertPassword2 = document.getElementById("alertPassword2");

const regexLetras = /^[A-Za-z]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

const imprimirErrores = (errores) => {
    errores.forEach(error => {
        error.tipo.textContent = error.msg;
    });
}

const imprimirValido = () => {
    alert("Datos validos");
    suNombre.value = "";
    suApellido.value = "";
    suEmail.value = "";
    suUsername.value = "";
    suPassword.value = "";
    suPassword2.value = "";
}

function evaluar(event) {
    const errores = [];

    if (suNombre.value == "") {
        errores.push(
            {
                tipo: alertNombre,
                msg: "El campo Nombre es requerido."
            }
        );
    }
    else if (!suNombre.value.match(regexLetras)) {
        errores.push(
            {
                tipo: alertNombre,
                msg: "Formato inválido, solo se admiten letras.",
            }
        );
    }
    else {
        alertNombre.textContent = "";
    }

    if (suApellido.value == "") {
        errores.push(
            {
                tipo: alertApellido,
                msg: "El campo Apellido es requerido."
            }
        );
    }
    else if (!suApellido.value.match(regexLetras)) {
        errores.push(
            {
                tipo: alertApellido,
                msg: "Formato inválido, solo se admiten letras.",
            }
        );
    }
    else {
        alertApellido.textContent = "";
    }

    if (suEmail.value == "") {
        errores.push(
            {
                tipo: alertEmail,
                msg: "El campo Email es requerido."
            }
        );
    }
    else if (!suEmail.value.match(regexEmail)) {
        errores.push(
            {
                tipo: alertEmail,
                msg: "Formato inválido.",
            }
        );
    }
    else {
        alertEmail.textContent = "";
    }

    if (suPassword.value == "") {
        errores.push(
            {
                tipo: alertPassword,
                msg: "El campo Password es requerido."
            }
        );
    }
    else if (!suPassword.value.match(regexPassword)) {
        errores.push(
            {
                tipo: alertPassword,
                msg: "Al menos 8 caracteres, mayúsculas y números."
            }
        );
    }
    else {
        alertPassword.textContent = "";
    }

    if (suPassword2.value == "") {
        errores.push(
            {
                tipo: alertPassword2,
                msg: "El campo Confirmar Password es requerido."
            }
        );
    }
    if(!suPassword2.value == "" && suPassword2.value !== suPassword.value){
        errores.push(
            {
                tipo: alertPassword2,
                msg: "Los Password no coinciden."
            }
        );
    }
    else if(suPassword2.value === suPassword.value){
        alertPassword2.textContent = "";
    }

    if (errores.length > 0) {
        imprimirErrores(errores);
        event.preventDefault(event);
        return false;
    } else if (errores.length == 0) {
        return true;
    }
}

