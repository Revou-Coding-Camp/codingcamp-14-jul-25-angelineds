// Custom Input Username
window.addEventListener('DOMContentLoaded', () => {
  const welcomePopup = document.getElementById('welcome-popup');
  const usernameInput = document.getElementById('username-input');
  const submitUsername = document.getElementById('submit-name');
  const welcomeUser = document.getElementById('welcome-user');

  const savedName = sessionStorage.getItem('userName');

  // Save username
  if (savedName) {
    welcomeUser.textContent = savedName;
  } else {
    welcomePopup.style.display = 'flex';
    document.body.classList.add('overflow-hidden');
  }

  function submitName() {
    const userName = usernameInput.value.trim();
    if (userName) {
      welcomeUser.textContent = userName;
      sessionStorage.setItem('userName', userName); // Simpan nama
      welcomePopup.style.display = 'none';
      document.body.classList.remove('overflow-hidden');
    } else {
      alert('Please enter your name.');
    }
  }

  submitUsername.addEventListener('click', submitName);

  usernameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      submitName();
    }
  });
});

function validateForm() {
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const bodInput = document.getElementById('birth-input');
  const genderInputs = document.getElementsByName('gender'); 
  const messageInput = document.getElementById('note-input');
  const messageOutput = document.getElementById('message-output');

  //Validate name
  if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      return;
  } else {
      document.getElementById('form-name').innerHTML = nameInput.value;
  }

  //Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
      alert('Please enter a valid email address.');
      return;
  } else {
      document.getElementById('form-email').innerHTML = emailInput.value;
  }

  //Validate date of birth
  if (bodInput.value === '') {
      alert('Please enter your date of birth.');
      return;
  } else {
      document.getElementById('form-birth').innerHTML = bodInput.value;
  }

  //Validate gender
  let genderValue = '';
  for (const gender of genderInputs) {
      if (gender.checked) {
      genderValue = gender.value;
      document.getElementById('form-gender').innerHTML = genderValue;
      break;
      } 
  }
  if (genderValue === '') {
      alert('Please select your gender.');
      return;
  }

  //Validate message
  if (messageInput.value.trim() === '') {
      alert('Please enter your message.');
      return;
  } else {
      document.getElementById('form-message').innerHTML = messageInput.value;
  }

  //Record current date & time
  const now = new Date();
  const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
  };

  const timestamp = now.toLocaleString('en-GB', options);
  document.getElementById('form-date').innerHTML = timestamp;

  messageOutput.classList.remove('hidden');
  messageOutput.innerHTML = `Thank you ${nameInput.value} for your message!`;

  // Hide the empty content and displayed the new one
  document.getElementById('hist-emptyContent').classList.toggle('hidden');
  document.getElementById('hist-fullContent').classList.toggle('hidden');

  //Clear inputs
  nameInput.value = '';
  emailInput.value = '';
  bodInput.value = '';
  for (const gender of genderInputs) {
      gender.checked = false;
  }
  messageInput.value = '';

  // --- Hide popup after 3 seconds
  setTimeout(() => {
      messageOutput.classList.add('hidden');
  }, 3000);
}

function togglePopup() {
  document.getElementById('hist-overlay').style.display = 'flex';
  document.getElementById('hist-menu').classList.toggle('hidden');
  document.body.classList.add('overflow-hidden');
}

function closePopup() {
  document.getElementById('hist-overlay').style.display = 'none';
  document.getElementById('hist-menu').classList.toggle('hidden');
  document.body.classList.remove('overflow-hidden');
}
