let mainNav = document.getElementById('main-nav')
let navBarToggle = document.getElementById('navbar-toggle')

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('show')
})