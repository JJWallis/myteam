const btns = document.querySelectorAll('.btn--director')

function toggleData(e: any) {
   const { target } = e
   const isVisible = target.getAttribute('aria-selected')
   const hiddenData = target.nextElementSibling
   if (isVisible === 'true') {
      target.setAttribute('aria-selected', 'false')
      hiddenData.setAttribute('data-visible', 'false')
   } else {
      target.setAttribute('aria-selected', 'true')
      hiddenData.setAttribute('data-visible', 'true')
   }
}

btns.forEach((btn) => btn.addEventListener('click', toggleData))
