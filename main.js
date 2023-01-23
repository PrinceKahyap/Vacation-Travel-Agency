// sticky navbar 
window.addEventListener("scroll",function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >50)
})
// CounterUp
const counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 200
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 50)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
});

// footer date 
const year = document.querySelector("#current-year")
year.innerHTML = new Date().getFullYear();

// owlCarousel 
$(".carousel").owlCarousel({
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
     0:{
         items: 1,
         nav: false
     },
     768:{
         items: 2,
         nav: false
     },
     1000:{
         items: 3,
         nav: false
     },
    }
 });

//  hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click",mobileMenu);
function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        };