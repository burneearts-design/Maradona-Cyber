// Simple form interaction
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent! We will contact you soon.");
      form.reset();
    });
  }
});
