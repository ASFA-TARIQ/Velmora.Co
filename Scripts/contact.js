const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("show");
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  formMessage.style.color = "#ffffff";
  formMessage.textContent = "Sending...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();

    if (response.status === 200) {
      formMessage.style.color = "lightgreen";
      formMessage.textContent = "Message sent successfully!";
      form.reset();
    } else {
      formMessage.style.color = "red";
      formMessage.textContent = result.message || "Something went wrong.";
    }
  } catch (error) {
    formMessage.style.color = "red";
    formMessage.textContent = "Network error. Please try again.";
  }
});