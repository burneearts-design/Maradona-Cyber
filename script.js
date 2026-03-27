document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  const button = form.querySelector("button");
  const messageBox = document.createElement("p");

  messageBox.style.marginTop = "10px";
  form.appendChild(messageBox);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Validation
    if (!name || !email || !message) {
      messageBox.textContent = "❌ Please fill in all required fields.";
      messageBox.style.color = "red";
      return;
    }

    // Button loading state
    button.disabled = true;
    button.textContent = "Sending...";

    // Simulate sending (replace with real backend later)
    setTimeout(() => {
      messageBox.textContent = "✅ Message sent successfully! We will contact you soon.";
      messageBox.style.color = "green";

      form.reset();
      button.disabled = false;
      button.textContent = "Send Message";
    }, 1500);
  });
});
