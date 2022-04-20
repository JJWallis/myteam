const form = document.querySelector('form')
const email: HTMLInputElement = form.querySelector('#input-email')
const btnSubmit = form.querySelector('button[type="submit"]')
const regex =
   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function validate(e: Event) {
   const userData: HTMLInputElement[] = Array.from(
      form.querySelectorAll('[data-required="true"]')
   )
   const errors = userData.filter(({ value }) => value === '' || value === null)
   if (
      !regex.test(email.value) &&
      !errors.find(({ id }) => id === 'input-email')
   ) {
      errors.push(email)
   }
   if (errors.length) {
      e.preventDefault()
      errors.forEach((input) => createErrorMsg(input))
   }
}

function createErrorMsg(errorInput: HTMLInputElement) {
   const label = errorInput.previousElementSibling
   const errorMsg = document.createElement('div')
   errorMsg.classList.add(
      errorInput.tagName === 'TEXTAREA'
         ? 'form--error--text-area'
         : 'form--error'
   )
   errorMsg.innerText =
      errorInput.id === 'input-email'
         ? 'Correct email format is required'
         : 'This field is required'
   label.append(errorMsg)
   errorInput.setAttribute('data-error', 'true')
}

form.addEventListener('submit', validate)
