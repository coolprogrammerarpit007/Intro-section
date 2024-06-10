`use strict`;

const dropdown = document.querySelectorAll(`.dropdown-block`);

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