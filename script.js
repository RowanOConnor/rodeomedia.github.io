// Paste your Formspree endpoint here (e.g. "https://formspree.io/f/abcdwxyz")
// to actually receive the emails. While this is empty, the page only shows
// the confirmation message and does NOT store anything.
const FORM_ENDPOINT = "";

const form = document.getElementById("signup");
const input = document.getElementById("email");
const status = document.getElementById("status");

function show(message) {
  status.textContent = message;
  status.classList.add("show");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input.checkValidity() || input.value.trim() === "") {
    show("Enter a valid email address.");
    input.focus();
    return;
  }

  if (FORM_ENDPOINT) {
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email: input.value.trim() })
      });
      if (!response.ok) throw new Error("Request failed");
    } catch (error) {
      show("Something went wrong. Please try again.");
      return;
    }
  }

  show("Confirmed, we'll be in touch.");
  form.reset();
});
