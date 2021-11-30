const form = document.querySelector('form')
const email = form.querySelector('#input-email')
const btnSubmit = form.querySelector('button[type="submit"]')
const regex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function validate(e: any) {
   const userData = Array.from(form.querySelectorAll('[data-required="true"]'))
   console.log(userData)
   const errors = userData.filter(
      (input: any) => input.value === '' || input.value === null
   )

   if (errors.length) {
      e.preventDefault()
      errors.forEach((input: any) => createErrorMsg(input))
   }
}

function createErrorMsg(errorInput: any) {
   const label = errorInput.previousElementSibling
   const errorMsg = document.createElement('div')
   if (errorInput.tagName === 'TEXTAREA') {
      errorMsg.classList.add('form--error--text-area')
   } else {
      errorMsg.classList.add('form--error')
   }
   errorMsg.innerText = 'This field is required'
   label.append(errorMsg)
   errorInput.setAttribute('data-error', true)
}

form.addEventListener('submit', validate)
