if(window.innerWidth > 600){
    luxy.init()
}


let navbar = document.getElementsByClassName('navlinks')[0];
let burger = document.getElementsByClassName('burger')[0];
let active =  false;
burger.addEventListener('click',()=>{
    active = !active;
    if(active){
        burger.innerHTML = "<img src='./images/icon-close.svg'/>";
    }
    else{
        burger.innerHTML = "<img src='./images/icon-hamburger.svg'/>";
    }
    navbar.classList.toggle("active");
})