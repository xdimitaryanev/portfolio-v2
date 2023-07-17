
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




const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el)=>observer.observe(el));

const headerAboutEL = document.getElementById("header_about");
const aboutImg = document.querySelector(".about__img");

headerAboutEL.addEventListener("click", (e)=>{
  e.preventDefault()
  aboutImg.scrollIntoView({ behavior: "smooth",inline: "nearest" });
})



const headerWorkEl = document.getElementById("header_work");
const workTitleEl = document.querySelector(".work__title");

headerWorkEl.addEventListener("click", (e)=>{
  e.preventDefault()
  workTitleEl.scrollIntoView({ behavior: "smooth", inline: "start" });

})


