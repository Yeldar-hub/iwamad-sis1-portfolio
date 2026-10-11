const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");
const result = document.getElementById("result");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        result.textContent = "Please fill in all fields!";
        result.style.color = "#ef4444";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        result.textContent = "Please enter a valid email address!";
        result.style.color = "#ef4444";
        return;
    }

    result.textContent = "Thank you, " + name + "! Your message is ready.";
    result.style.color = "#16a34a";

    contactForm.reset();
});
