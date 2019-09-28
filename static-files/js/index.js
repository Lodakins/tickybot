let button = document.querySelector('.go-up');
const navbarLinks =document.querySelectorAll('.site-header__link-container a');
const buttonlink= document.querySelector('.go-up a');

window.onscroll=function(){
    if(window.pageYOffset > 300){
        button.classList.remove('add--item');
        button.classList.add('show--item');
    }else{
        button.classList.remove('show--item');
        button.classList.add('hide--item');
    }
}; // function for the go-up button


navbarLinks.forEach(element=>element.addEventListener('click',navbarLinkClick));


function navbarLinkClick(event){
    smoothScrolling(event);  // calls the smoothscrolling function
}


//smoth scrolling
function smoothScrolling(event){
    event.preventDefault();
    const targetId= event.currentTarget.getAttribute('href');
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    });
}

buttonlink.addEventListener('click',gotoTop);

function gotoTop(event){
    event.preventDefault();
    const targetId= event.currentTarget.getAttribute('href');
    console.log(targetId);
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior:'smooth'
    });
}