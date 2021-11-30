const btns = document.querySelectorAll('.btn--director')

function toggleData(e: Event) {
   const target: Element = e ? (e.target as Element) : null
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
