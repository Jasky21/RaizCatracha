const loginForm = document.getElementById("loginForm");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const alertEmail = document.getElementById("alertEmail");
const alertPassword = document.getElementById("alertPassword");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const imprimirErrores = (errores) => {
    errores.forEach(error => {
        error.tipo.textContent = error.msg;
    });
}

const imprimirValido = () => {
    alert("Datos validos");
    loginEmail.value = "";
    loginPassword.value = "";
}

function evaluar(event) {
    const errores = [];

    //Validar Email
    if (loginEmail.value == "") {
        errores.push(
            {
                tipo: alertEmail,
                msg: "El campo Email es requerido."
            }
        );
    }
    else if (!loginEmail.value.match(regexEmail)) {
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

    if (loginPassword.value == "") {
        errores.push(
            {
                tipo: alertPassword,
                msg: "El campo Password es requerido."
            }
        );
    }
    else {
        alertPassword.textContent = "";
    }


    if (errores.length > 0) {
        imprimirErrores(errores);
        event.preventDefault(event);
        return false;
    } else if (errores.length == 0) {
        return true;
    }
}