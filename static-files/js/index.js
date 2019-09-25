console.log("Hello Lolade first server website");

let button = document.querySelector('.go-up');

let pageOffsetY= window.pageYOffset;

window.onscroll=function(){
    if(window.pageYOffset > 300){
        button.classList.remove('add--item');
        button.classList.add('show--item');
    }else{
        button.classList.remove('show--item');
        button.classList.add('hide--item');
    }
};
