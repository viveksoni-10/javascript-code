let dynamic_div = document.querySelector(".emoji-container");
let btns = document.querySelectorAll(".btn");
let search_field = document.getElementById("input-text");

// Event listener for the search input field
search_field.addEventListener("keyup", (e) => {
    let searchQuery = e.target.value.toLowerCase();
    displayEmojis(searchQuery);
});

// Event listener for each button
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let btn_clicked = e.target.innerText.toLowerCase();
        displayEmojis(btn_clicked);
    });
});

// Function to filter and display emojis based on search or category
function displayEmojis(searchQuery = " ") {
    let filtered_emojis = emojiList.filter((emoji) => {
        if (searchQuery === " " || searchQuery === "all") {
            return true;
        }
        if (
            emoji.description.includes(searchQuery) ||
            emoji.category.includes(searchQuery) ||
            emoji.aliases.includes(searchQuery)
        ) {
            return true;
        }
        return false;
    });

    dynamic_div.innerHTML = ""; // Clear previous emojis

    filtered_emojis.forEach((emoji) => {
        let emoji_div = document.createElement("div");
        emoji_div.innerText = emoji.emoji;
        emoji_div.style.cursor = "pointer";
        emoji_div.style.fontSize = "2rem"; 
        emoji_div.style.position = "relative";
        dynamic_div.appendChild(emoji_div);

        // Add event listener to copy emoji to clipboard directly on click
        emoji_div.addEventListener("click", () => {
            navigator.clipboard.writeText(emoji.emoji);

            // Provide feedback by changing emoji temporarily
            let originalEmoji = emoji_div.innerText;
            emoji_div.innerText = "Copied! ✅";
            emoji_div.style.fontSize = "0.5rem";

            // Revert back to the original emoji after a short delay
            setTimeout(() => {
                emoji_div.innerText = originalEmoji;
                emoji_div.style.fontSize = "2rem";
            }, 1000);
        });
    });
}

// Initialize with all emojis displayed on page load
window.addEventListener("load", () => displayEmojis());
