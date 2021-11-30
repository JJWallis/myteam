const form = document.querySelector('form')
const email: HTMLInputElement = form.querySelector('#input-email')
const btnSubmit = form.querySelector('button[type="submit"]')
const regex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function validate(e: Event) {
   const userData: HTMLInputElement[] = Array.from(
      form.querySelectorAll('[data-required="true"]')
   )
   const errors = userData.filter(
      (input: HTMLInputElement) => input.value === '' || input.value === null
   )
   if (
      !regex.test(email.value) &&
      !errors.find((input) => input.id === 'input-email')
   )
      errors.push(email)
   if (errors.length) {
      e.preventDefault()
      errors.forEach((input) => createErrorMsg(input))
   }
}

function createErrorMsg(errorInput: Element) {
   const label = errorInput.previousElementSibling
   const errorMsg = document.createElement('div')
   if (errorInput.tagName === 'TEXTAREA') {
      errorMsg.classList.add('form--error--text-area')
      errorMsg.innerText = 'This field is required'
   } else if (errorInput.id === 'input-email') {
      errorMsg.classList.add('form--error')
      errorMsg.innerText = 'Correct email format is required'
   } else {
      errorMsg.classList.add('form--error')
      errorMsg.innerText = 'This field is required'
   }
   label.append(errorMsg)
   errorInput.setAttribute('data-error', 'true')
}

form.addEventListener('submit', validate)

// refactor - inner text only set to email one if email (ternary post beefy conditions)
// same for classList - only add textarea one if ...
