// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email) {
        alert('Bitte Name und E-Mail angeben.');
        return;
      }
  
      // Simuliere ein Absenden an Server
      console.log('Formulardaten:', { name, email, message });
  
      alert(`Vielen Dank, ${name}! Deine Nachricht wurde erfolgreich gesendet.`);
      form.reset();
    });
  });
  