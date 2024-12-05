document.querySelectorAll(".vote").forEach((button) => {
  button.addEventListener("click", () => {
    const countElement =
      button.nextElementSibling || button.previousElementSibling;
    let currentCount = parseInt(countElement.textContent);
    if (button.classList.contains("upvote")) {
      countElement.textContent = currentCount + 1;
    } else {
      countElement.textContent = currentCount - 1;
    }
  });
});

const content = document.getElementById("content");
const toggleBtn = document.getElementById("toggle-btn");

//input
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", (e) => {
  textarea.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});
