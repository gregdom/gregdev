let header = document.querySelector('header .content')
let menu = document.querySelector('.menu')

header.addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'I') {
    if (e.target.classList.contains('openMenu') || e.target.classList.contains('fa-bars')) {
      menu.classList.add('active')
    } else {
      menu.classList.remove('active')
    }
  }
})