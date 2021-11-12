const hamburger = document.querySelector('.mobile-nav-toggle')
const sidebar = document.querySelector('.sidebar')

hamburger.addEventListener('click', () => {
   const isVisible = hamburger.getAttribute('aria-expanded')
   if (isVisible === 'false') {
      hamburger.setAttribute('aria-expanded', 'true')
      sidebar.setAttribute('data-visible', 'true')
   } else {
      hamburger.setAttribute('aria-expanded', 'false')
      sidebar.setAttribute('data-visible', 'false')
   }
})
