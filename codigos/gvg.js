const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.Value;
    const emailValue = email.Value;
    const passwordValue = password.Value;
    const passwordConfirmationValue = passwordConfirmation.Value;

    if (usernameValue === " ") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(username)
    }

    if (usernameValue === "") {
        setErrorFor(email, 'O email é obrigatórrio.')
    }  else if( !checkEmail(emailValue)) { 
         setErrorFor(email, "Por favor, insira um email válido.")
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, " A senha é obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, " A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, " A confirmação de senha é obrigatório");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, " As senhas não conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }


    const formControl = form.querySelectorAll('.form-contro')

    const formIsValid = [ ... formControl].every((formControl) => {
        return formControl.className === " form-control success";
    })
}

function setErrorFor(input, message) {
    const formControl = input.parenElement;
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a class de erro
    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parenElement;

    // Adionar a classe dde sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
}