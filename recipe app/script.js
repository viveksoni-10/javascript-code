// Select DOM elements
let searchButton = document.querySelector(".btn"); // Search button
let searchBox = document.querySelector(".form-control"); // Search input box
let searchResults = document.querySelector(".search-result"); // Container for search results
let text = document.querySelector(".text"); // Text for status messages
let recipeDetails = document.querySelector(".recipe-details"); // Recipe details modal
let recipeCloseBtn = document.querySelector(".recipe-close-btn"); // Close button for modal
let recipeDetailsContent = document.querySelector(".recipe-details-content"); // Content inside the modal

// Fetch data from API based on user search query
async function fetchData(searchQuery) {
  // Make an API call
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
  let data = await response.json();

  // Clear previous results
  text.innerHTML = ""; // Clear status text
  searchResults.innerHTML = "";
  data.meals.forEach((meal) => {
    // Create a card for each meal
    let mealCard = document.createElement("div");
    mealCard.classList.add("card");
    mealCard.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h2>${meal.strMeal}</h2>
    <p><span>${meal.strArea}</span> Dish</p>
    <p>Belong to <span>${meal.strCategory}</span> Category</p>`;
    
    // Add to search results
    searchResults.appendChild(mealCard);
    
    // Add 'View Recipe' button
    let button = document.createElement("button");
    button.classList.add("recipeBtn");
    button.textContent = "View Recipe";
    
    // Attach event listener to open modal on button click
    button.addEventListener("click", () => {
      openRecipePopup(meal); // Pass meal data to openRecipePopup function
    });
    mealCard.append(button);
  });
}

// Get the list of ingredients and measurements for a recipe
const fetchIngredients = (meal) => {
  let ingredientList = "";
  for (let i = 1; i <= 20; i++) {
    let ingredient = meal[`strIngredient${i}`]; // Dynamic property access
    if (ingredient) {
      let measure = meal[`strMeasure${i}`];
      ingredientList += `<li>${measure} ${ingredient}</li>`;
    } else {
      break; // Stop if no more ingredients
    }
  }
  return ingredientList; // Return as a string
};

// Open the recipe modal with details
const openRecipePopup = (meal) => {
  // Populate modal content
  recipeDetailsContent.innerHTML = `
    <h1 class="recipeName">${meal.strMeal}</h1>
    <h3>Ingredients:</h3>
    <ul class="recipeIngredients">${fetchIngredients(meal)}</ul>
    <div class="recipeInstructions">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>`;
  recipeDetailsContent.parentElement.style.display = "block"; // Show modal
};

// Close the modal when the close button is clicked
recipeCloseBtn.addEventListener("click", () => {
  recipeDetailsContent.parentElement.style.display = "none"; // Hide modal
});

// Handle search button click
searchButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent page reload
  text.innerHTML = "Please wait fetching recipes..."; // Status message
  let searchQuery = searchBox.value.trim(); // Get search query
  if (!searchQuery) {
    text.innerHTML = "Please enter a search query"; // Validation message
    return;
  }
  fetchData(searchQuery); // Call fetchData with user input
});
