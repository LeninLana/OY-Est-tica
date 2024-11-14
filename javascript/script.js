function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('show');
  }

function rotateImage (element) {
  const img = element.querySelector("img");
  img.classList.add("rotate");

  img.addEventListener("transitionend" , () => {
    img.classList.remove("rotate");
  }, {once: true});
}