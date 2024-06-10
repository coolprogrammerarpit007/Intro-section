`use strict`;

const dropdown = document.querySelectorAll(`.dropdown-block`);
const menuBtn = document.querySelector(`.menu-btn`);
const closeBtn = document.querySelector(`.close-btn`);
const sidebar = document.querySelector(`.sidebar`);
// Adding event listener to the dropdown 

dropdown.forEach((menu,i)=>{
    menu.addEventListener(`mouseover`,(e)=>{
        document.getElementById(`dropdown-content-${i+1}`).classList.remove(`hidden`);
    })
})
dropdown.forEach((menu,i)=>{
    menu.addEventListener(`mouseleave`,(e)=>{
        document.getElementById(`dropdown-content-${i+1}`).classList.add(`hidden`);
    })
})


// Adding dropdown to the mobile  view

const dropdownMobile = document.querySelectorAll(`.dropdown-mobile`);


// Event to the mobile

dropdownMobile.forEach((menu,i)=>{
    menu.addEventListener(`mouseover`,(e)=>{
        document.getElementById(`dropdown-content-${i+3}`).classList.remove(`hidden`);
    })
})
dropdownMobile.forEach((menu,i)=>{
    menu.addEventListener(`mouseleave`,(e)=>{
        document.getElementById(`dropdown-content-${i+3}`).classList.add(`hidden`);
    })
})


// Adding event listener to the menu btn

menuBtn.addEventListener(`click`,function(e){
    menuBtn.classList.add(`hidden`);
    sidebar.classList.remove(`hidden`);
})

closeBtn.addEventListener(`click`,function(e){
    menuBtn.classList.remove(`hidden`);
    sidebar.classList.add(`hidden`);
})