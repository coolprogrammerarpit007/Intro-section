`use strict`;

const dropdown = document.querySelectorAll(`.dropdown-block`);
const menuBtn = document.querySelector(`.menu-btn`);
const closeBtn = document.querySelector(`.close-btn`);
const sidebar = document.querySelector(`.sidebar`);
// Adding event listener to the dropdown 

dropdown.forEach((menu,i)=>{
    menu.addEventListener(`click`,(e)=>{
        document.getElementById(`dropdown-content-${i+1}`).classList.toggle(`hidden`);
    })
})



// Adding dropdown to the mobile  view

const dropdownMobile = document.querySelectorAll(`.dropdown-mobile`);


// Event to the mobile

dropdownMobile.forEach((menu,i)=>{
    menu.addEventListener(`click`,(e)=>{
        document.getElementById(`dropdown-content-${i+3}`).classList.toggle(`hidden`);
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

