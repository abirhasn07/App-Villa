AOS.init({
  once: true,
  delay:100,
});
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2000,
      },
  });
  

const handleMenu=()=>{
    document.querySelector('.menu-icon').classList.toggle('active')
    document.querySelector('.open-menu').classList.toggle('active')
    document.querySelector('.nav-list').classList.toggle('active')
}

window.addEventListener("scroll", () => {
    let header = document.querySelector(".navbar");
    header.classList.toggle("active", window.scrollY > 0);
  });
  

 const loader=document.querySelector(".preloader")
 window.addEventListener("load",vanish)
 function vanish() {
  loader.style.display="none"

 }

