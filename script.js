document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Message received! We will contact you shortly.");
      form.reset();
    });
  }
});
