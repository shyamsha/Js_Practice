// Boilerplate JavaScript for handling rating logic

// Initialize data for ratings
let ratings = [0, 0, 0, 0, 0]; // To store counts for each rating
let totalRatings = 0;

// Function to update ratings and progress bars
function updateRatings() {
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    const percentage = totalRatings > 0 ? (rating / totalRatings) * 100 : 0;
    const fillElement = document.getElementById(`fill-${i + 1}`);
    const percentageElement = document.getElementById(`percentage-${i + 1}`);
    fillElement.style.width = `${percentage}%`;
    percentageElement.textContent = `${percentage.toFixed(2)}%`;
  }
}

// Function to handle click events on stars
function handleStarClick(event) {
  const ratingValue = parseInt(event.target.dataset.rating);
  ratings[ratingValue - 1]++; // Increase the count for the selected rating
  totalRatings++; // Increment total ratings
  document.getElementById(`total-ratings`).textContent = totalRatings;
  updateRatings(); // Update UI
}

// Add event listeners to stars
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll("#stars button");
  stars.forEach((star) => {
    star.addEventListener("click", handleStarClick);
  });
});
