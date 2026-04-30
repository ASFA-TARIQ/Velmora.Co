const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("show");
    });
  }

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!question || !answer) return;

    if (item.classList.contains("faq-open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = "1";
      question.setAttribute("aria-expanded", "true");
    } else {
      answer.style.maxHeight = "0px";
      answer.style.opacity = "0";
      question.setAttribute("aria-expanded", "false");
    }

    question.addEventListener("click", function () {
      const isOpen = item.classList.contains("faq-open");

      faqItems.forEach((otherItem) => {
        const otherQuestion = otherItem.querySelector(".faq-question");
        const otherAnswer = otherItem.querySelector(".faq-answer");

        otherItem.classList.remove("faq-open");

        if (otherAnswer) {
          otherAnswer.style.maxHeight = "0px";
          otherAnswer.style.opacity = "0";
        }

        if (otherQuestion) {
          otherQuestion.setAttribute("aria-expanded", "false");
        }
      });

      if (!isOpen) {
        item.classList.add("faq-open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  window.addEventListener("resize", function () {
    faqItems.forEach((item) => {
      const answer = item.querySelector(".faq-answer");

      if (answer && item.classList.contains("faq-open")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});