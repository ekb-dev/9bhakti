const scriptURL = 'https://script.google.com/macros/s/AKfycbyCYzWu_F2GKxOhLb-yf9NSA_e97Bl-u5Q4aLurIUYbqNnlhqwO8M2z2Hd5MKWktHRO/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})