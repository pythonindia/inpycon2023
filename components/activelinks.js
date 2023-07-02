const li = document.querySelectorAll(".nav-item");
const sec = document.querySelectorAll("section");

function activeMenu(){
  let len = sec.length;
  while(--len && window.scrollY+ 97 < sec[len].offsetTop){}
  li.forEach(ltx => lts.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEvenListener("scroll",activeMenu);

