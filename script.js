var projects = {
    address: "Final Project",
    languages: ["HTML", "CSS", "JS"],
    project: [
        {name: "To Do List"},
        {name: "Movies App"},
        {name: "Scroll Animation"}
    ]
}

for (var i = 0; i<projects.project.length - 2; i++) {
    document.getElementById("first").innerHTML=projects.project[i].name;
}
for (var i = 0; i<projects.project.length - 1; i++) {
    document.getElementById("second").innerHTML=projects.project[i].name;
}
for (var i = 0; i<projects.project.length; i++) {
    document.getElementById("third").innerHTML=projects.project[i].name;
}




const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const menu = document.querySelector('nav .container ul')

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block'
    menuBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

closeBtn.addEventListener('click', () =>{
    menu.style.display = 'none'
    menuBtn.style.display = 'inline-block'
    closeBtn.style.display = 'none'
})

const navItems = menu.querySelectorAll('li')

const changeActiveItem = () =>{
    navItems.forEach(item => {
        const link = item.querySelector('a')
        link.classList.remove('active')
    })
}
navItems.forEach(item => {
    const link = item.querySelector('a')
    link.addEventListener('click', () => {
        changeActiveItem()
        link.classList.add('active')
    })
})



const skillItems = document.querySelectorAll('section.skills .skill')

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items')
    })
})