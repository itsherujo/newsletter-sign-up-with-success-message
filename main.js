const formPendaftaran = document.getElementById('form-pendaftaran');
const form = document.getElementById('my-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const successMessage = document.getElementById('pesan-sukses');
const emailConfirmation = document.getElementById('email-confirmation');


form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const email = emailInput.value.trim();
  if (isValidEmail(email)) {
    emailError.style.display = 'none'; 
    emailInput.classList.remove('invalid')
    showSuccessMessage(email);
  } else {
    emailError.style.display = 'inline'; 
    emailInput.classList.add('invalid')
  }
});

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function showSuccessMessage(email) {
  emailConfirmation.textContent = email; 
  successMessage.classList.add('show'); 
  formPendaftaran.style.display = 'none';
  form.reset(); 
}

const dismissButton = successMessage.querySelector('button');
    dismissButton.addEventListener('click', function() {
    successMessage.classList.remove('show'); 
    formPendaftaran.style.display = 'grid';
});

