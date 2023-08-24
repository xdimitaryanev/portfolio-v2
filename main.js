
import './styles/normalize.css'
import './styles/style.css'
import './styles/components/header.css'
import './styles/components/hero.css'
import './styles/components/about.css'
import './styles/components/work.css'
import './styles/components/contact.css'
import './styles/utils.css'

// unblur on scroll
const blurredEl = document.querySelectorAll(".hidden-blur");
const blurObserver = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("unblur")
      // blurObserver.unobserve(entry.target)
    } else {
      entry.target.classList.remove("unblur")
    }
  })
}, {
  
},{
  threshold: 1,
})
blurredEl.forEach((el)=>blurObserver.observe(el))


// slide from left onscroll
const hiddenLeftEl = document.querySelectorAll(".hidden-left");
const hiddenLeftObserver = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
      // hiddenLeftObserver.unobserve(entry.target)
    } else {
      entry.target.classList.remove("show")
    }
  })
},{
  threshold: 1,
})

hiddenLeftEl.forEach((el)=>hiddenLeftObserver.observe(el));




const headerAboutEL = document.getElementById("header_about");
const aboutImg = document.querySelector("#about");

headerAboutEL.addEventListener("click", (e)=>{
  e.preventDefault()
  aboutImg.scrollIntoView({ behavior: "smooth",inline: "nearest" });
})



const headerWorkEl = document.getElementById("header_work");
const workTitleEl = document.querySelector("#work");

headerWorkEl.addEventListener("click", (e)=>{
  e.preventDefault()
  workTitleEl.scrollIntoView({ behavior: "smooth", inline: "start" });

})

const headerContactEl = document.getElementById("header_contact");
const contactTitleEl = document.querySelector("#contact");

headerContactEl.addEventListener("click", (e)=>{
  e.preventDefault()
  contactTitleEl.scrollIntoView({ behavior: "smooth", inline: "start" });

})






