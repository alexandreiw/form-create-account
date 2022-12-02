const form = document.getElementById('form');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const userNameValue = userName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (userNameValue === '') {
    setErrorFor(userName, 'Preencha o nome do usuário');
  } else {
    setSuccesFor(userName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'E-mail é necessário');
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Por favor, digite um e-mail válido');
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Senha é necessária.');
  } else if (passwordValue.length < 5) {
    setErrorFor(password, 'Sua senha precisa ter no minimo 5 caracteres');
  } else {
    setSuccesFor(password);
  }

  if (passwordConfirmationValue === '') {
    setErrorFor(passwordConfirmation, 'Confirme a senha');
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, 'As senhas não conferem');
  } else {
    setSuccesFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll('.form__control');

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === 'form__control success';
  });

  formIsValid && console.log('Formulario valido');
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  //   Adicionar a mensagem de erro
  small.innerText = message;
  //   Adicionar classe de erro
  formControl.className = 'form__control error';
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  //   Adicionar a classe de sucesso
  formControl.className = 'form__control success';
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
