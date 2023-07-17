
import './styles/normalize.css'
import './styles/style.css'
import './styles/components/header.css'
import './styles/components/hero.css'
import './styles/components/about.css'
import './styles/components/work.css'
import './styles/components/contact.css'
import './styles/utils.css'

// window.addEventListener("scroll", rotateSvg);
// function rotateSvg () {
//   const rotationAngle = window.scrollY * 0.2;
//   logoEl.style.transform = `rotate(${rotationAngle}deg)`;
// }



// unblur on scroll
const blurredEl = document.querySelectorAll(".hidden-blur");
const blurObserver = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("unblur")
    } else {
      entry.target.classList.remove("unblur")
    }
  })
})

blurredEl.forEach((el)=>blurObserver.observe(el))
//

// slide from left onscroll
const hiddenLeftEl = document.querySelectorAll(".hidden-left");
const hiddenLeftObserver = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

hiddenLeftEl.forEach((el)=>hiddenLeftObserver.observe(el));


const hiddenRightEl = document.querySelectorAll(".hidden-right");
const hiddenRightObserver = new IntersectionObserver((entries)=> {
  entries.forEach((entry=> {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  }))
})

hiddenRightEl.forEach((el)=>hiddenRightObserver.observe(el));


const hiddenTopEl = document.querySelectorAll(".hidden-top");
const hiddenTopObserver = new IntersectionObserver((entries)=> {
  entries.forEach((entry=> {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  }))
})

hiddenTopEl.forEach((el)=>hiddenTopObserver.observe(el));





const headerAboutEL = document.getElementById("header_about");
const aboutImg = document.querySelector(".about__img");

headerAboutEL.addEventListener("click", (e)=>{
  e.preventDefault()
  aboutImg.scrollIntoView({ behavior: "smooth",inline: "nearest" });
})



const headerWorkEl = document.getElementById("header_work");
const workTitleEl = document.querySelector(".work__wrapper");

headerWorkEl.addEventListener("click", (e)=>{
  e.preventDefault()
  workTitleEl.scrollIntoView({ behavior: "smooth", inline: "start" });

})




