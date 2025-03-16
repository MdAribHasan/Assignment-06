// scroll
document.getElementById("faqButton").addEventListener("click", function () {
  document.getElementById("faq").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("learnbtn").addEventListener("click", function () {
  document.getElementById("learnarea").scrollIntoView({ behavior: "smooth" });
});

// Login
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("hero");
  const navbar = document.getElementById("nav");
  const faqSection = document.getElementById("faq");
  const getStartedBtn = document.getElementById("getStart-btn");
  const vocabulary = document.getElementById("learnarea");

  navbar.style.display = "none";
  faqSection.style.display = "none";
  vocabulary.style.display = "none";

  getStartedBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const accountUsername = document.getElementById("username").value;
    const pin = document.getElementById("pin").value;

    if (accountUsername.length >= 1) {
      if (pin === "123456") {
        heroSection.style.display = "none";
        navbar.style.display = "flex";
        faqSection.style.display = "block";
        vocabulary.style.display = "block";
      } else {
        alert("Pin Thik Nai");
      }
    } else {
      alert("Input Valid Username And Password");
    }
  });
});

// Logout
const logOutBtn = document.getElementById("log-out");

logOutBtn.addEventListener("click", function (event) {
  const heroSection = document.getElementById("hero");

  const navbar = document.getElementById("nav");
  const faqSection = document.getElementById("faq");

  const vocabulary = document.getElementById("learnarea");

  heroSection.style.display = "block";
  navbar.style.display = "none";
  faqSection.style.display = "none";
  vocabulary.style.display = "none";
});
