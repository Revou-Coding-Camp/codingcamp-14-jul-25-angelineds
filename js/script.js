// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const bodInput = document.getElementById('birth-input');
    const genderInputs = document.getElementsByName('gender'); // multiple radios
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
    const popup = document.getElementById('popupMenu');
    popup.classList.toggle('hidden');
}

function closePopup() {
  document.getElementById('popupMenu').classList.add('hidden');
}
