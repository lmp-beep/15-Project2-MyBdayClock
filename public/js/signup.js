const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // const birthday = document.querySelector('#birthday-signup').value.trim();
    const birthdayMonth = document.querySelector('#month-signup').value.trim();
    const birthdayDay = document.querySelector('#day-signup').value.trim();
  
    if (name && password && birthdayMonth && birthdayDay) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ name, password, birthdayMonth, birthdayDay }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
  