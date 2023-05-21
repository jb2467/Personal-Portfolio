const menuBtn = document.getElementById('menu')
const navList = document.getElementById('navMenu')

function toggleBtn(){
    navList.classList.toggle('show')
}

menuBtn.addEventListener('click',toggleBtn)