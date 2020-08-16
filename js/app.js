/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const nav = document.getElementById('navbar__list');
const select = document.querySelectorAll('section');


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const createNav = ()=> {
    let ui = ``;

    select.forEach(section =>{
        const id = section.id;
        const dataNav = section.dataset.nav;


        ui += `<li><a class="menu__link" href="#${id}">${dataNav}</a></li>`;
        });
        nav.innerHTML = ui;

};
createNav();

// Add class 'active' to section when near top of viewport

const effect = (section)=> {
     return Math.floor(section.getBoundingClientRect().top);
};

const remove = (section)=> {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

};

const add = (condition , section)=> {
    if(condition){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color : yellow;";
    };
};

const activation = ()=> {
    select.forEach(section => {
        const elementEffect = effect(section);
        inviewport = () => elementEffect < 100 && elementEffect >= -100;
    
        remove(section);
        add(inviewport(),section);
    });
};

window.addEventListener('scroll' ,activation);

// Scroll to anchor ID using scrollTO event

const scroll = ()=> {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click' , ()=>{
            for(i = 0 ; i<select ; i++){
                select[i].addEventListener('click' , scroll(link))
            }
        })
    })
}

scroll();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


