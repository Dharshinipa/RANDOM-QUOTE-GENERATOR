document.addEventListener("DOMContentLoaded", () => {
    getQuote();
});

async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        document.getElementById('quote').textContent = data.content;
        document.getElementById('author').textContent = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        document.getElementById('quote').textContent = "An error occurred while fetching the quote.";
        document.getElementById('author').textContent = "";
    }
}
