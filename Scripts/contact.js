const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("show");
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  formMessage.textContent = "Your message has been sent successfully.";
  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 4000);
});