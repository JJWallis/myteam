const form = document.querySelector('form')
const email = form.querySelector('#input-email')
const btnSubmit = form.querySelector('button[type="submit"]')

function validate(e: any) {
   const userData = Array.from(form.querySelectorAll('.form'))
   const errors = userData.filter(
      (input: any) => input.value === '' || input.value === null
   )
   //    email regex
   if (errors.length) {
      e.preventDefault()
      errors.forEach((input: any) => createErrorMsg(input))
   }
}

function createErrorMsg(errorInput: any) {
   const label = errorInput.previousElementSibling
   const errorMsg = document.createElement('div')
   errorMsg.classList.add('form--error')
   errorMsg.innerText = 'This field is required'
   label.append(errorMsg)
}

form.addEventListener('submit', validate)
