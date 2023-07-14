
import './styles/normalize.css'
import './styles/style.css'
import './styles/components/header.css'
import './styles/components/hero.css'
import './styles/components/about.css'
import './styles/components/work.css'
import './styles/components/contact.css'
import './styles/utils.css'



const logoEl = document.querySelector(".header__logo")
window.addEventListener("scroll", rotateSvg);
function rotateSvg () {
  const rotationAngle = window.scrollY * 0.2;
  logoEl.style.transform = `rotate(${rotationAngle}deg)`;
}


