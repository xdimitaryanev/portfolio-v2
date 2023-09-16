
import './styles/normalize.css'
import './styles/style.css'
import './styles/components/header.css'
import './styles/components/hero.css'
import './styles/components/about.css'
import './styles/components/work.css'
import './styles/components/contact.css'
import './styles/components/footer.css'
import './styles/utils.css'

// mobile blur
const mobileEl = document.querySelectorAll(".hidden");
const mobileObserver = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("unblur")
    } else {
      entry.target.classList.remove("unblur")
    }
  })
}, {
  
},{
  threshold: 1,
})
mobileEl.forEach((el)=>mobileObserver.observe(el))

// unblur on scroll
const blurredEl = document.querySelectorAll(".hidden-blur");
const blurObserver = new IntersectionObserver((entries)=> {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("unblur")
      blurObserver.unobserve(entry.target)
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
      hiddenLeftObserver.unobserve(entry.target)
    } else {
      entry.target.classList.remove("show")
    }
  })
},{
  threshold: 1,
})

hiddenLeftEl.forEach((el)=>hiddenLeftObserver.observe(el));

const headerAboutEL = document.querySelectorAll(".header__about");
const aboutTitleEl = document.querySelector("#about");

headerAboutEL.forEach(element => {
  element.
  addEventListener("click", (e)=>{
  e.preventDefault()
  aboutTitleEl.scrollIntoView({ behavior: "smooth",inline: "nearest" });
  mobileMenuEl.style.display = "none";
  document.body.style.overflow = "";
})
  
});

const headerWorkEl = document.querySelectorAll(".header__work");
const workTitleEl = document.querySelector("#work");
headerWorkEl.forEach(element => {
  element.addEventListener("click", (e)=>{
    e.preventDefault()
    workTitleEl.scrollIntoView({ behavior: "smooth", inline: "start" });
    mobileMenuEl.style.display = "none";
    document.body.style.overflow = "";
  
  })
  
});

const headerContactEl = document.querySelectorAll(".header__contact");
const contactTitleEl = document.querySelector("#contact");
headerContactEl.forEach(element => {
  
  element.addEventListener("click", (e)=>{
    e.preventDefault()
    contactTitleEl.scrollIntoView({ behavior: "smooth", inline: "start" });
    mobileMenuEl.style.display = "none";
    document.body.style.overflow = "";
  
  })
});


const barsEl = document.querySelector(".header__bars");
const xEl = document.querySelector(".mobile__x");
const mobileMenuEl = document.querySelector(".mobile__menu")
let isMobileMenuOpen = false;
xEl.addEventListener("click", (e) => {
  mobileMenuEl.style.display = "none";
  isMobileMenuOpen = false;
  document.body.style.overflow = "";
})

barsEl.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  isMobileMenuOpen = true;
  mobileMenuEl.style.display = "flex";
})

const aboutImgEl = document.querySelector(".about__img")
const aboutImgWrapperEl = document.querySelector(".about__img__wrapper");
const linkedinEl = document.querySelector(".hidden-linkedin");

aboutImgWrapperEl.addEventListener("mouseover", ()=> {
    linkedinEl.style.opacity = 100;
    linkedinEl.style.transform = "translateX(13px)"
})

aboutImgWrapperEl.addEventListener("mouseout", ()=> {
    linkedinEl.style.opacity = 0;
    linkedinEl.style.transform = "translateX(-13px)"
})

const githubEl = document.querySelector(".hidden-github");
aboutImgWrapperEl.addEventListener("mouseover", ()=> {
  aboutImgEl.style.scale = 1.05;
    githubEl.style.opacity = 100;
    githubEl.style.transform = "translateX(-13px)"
})

aboutImgWrapperEl.addEventListener("mouseout", ()=> {
  aboutImgEl.style.scale = 1;
  githubEl.style.opacity = 0;
  githubEl.style.transform = "translateX(13px)"
})

githubEl.addEventListener("mouseover", ()=>{
  githubEl.style.scale = 1.1;
})

githubEl.addEventListener("mouseout", ()=>{
  githubEl.style.scale = 1;
})


linkedinEl.addEventListener("mouseover", ()=>{
  linkedinEl.style.scale = 1.1;
})

linkedinEl.addEventListener("mouseout", ()=>{
  linkedinEl.style.scale = 1;
})


