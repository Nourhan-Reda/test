//navbar
//!*back-to-top 
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});


//* script for underline in navbar
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-link')) {
    document.querySelectorAll('.nav-link').forEach(item => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
  }
});
////////////////////////////////////////////////