const btns = document.querySelectorAll('.btn--director')

function toggleData(e: any) {
   const target = e.target
   const aria = target.setAttribute('aria-selected', 'true')
   console.log(aria)
   //    traverse to hidden data
}

btns.forEach((btn) => btn.addEventListener('click', toggleData))
