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