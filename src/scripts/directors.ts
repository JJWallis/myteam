const btns = document.querySelectorAll('.btn--director')

function toggleData(e: any) {
   const target = e.target
   const isVisible = target.getAttribute('aria-selected')
   if (isVisible === 'true') {
      target.setAttribute('aria-selected', 'false')
   } else {
      target.setAttribute('aria-selected', 'true')
   }
   //    traverse to hidden data
}

btns.forEach((btn) => btn.addEventListener('click', toggleData))
