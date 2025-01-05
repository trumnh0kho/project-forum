// JavaScript function to filter cards
function filterCards() {
  const searchInput = document.getElementById("searchBar").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    // Combine all text inside the card (title + description)
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchInput)) {
      card.style.display = ""; // Show card
    } else {
      card.style.display = "none"; // Hide card
    }
  });
}
