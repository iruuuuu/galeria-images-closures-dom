export function createFavouritesCounter(initialCount = 0) {
    const counterContainer = document.createElement("div");
    counterContainer.className =
        "my-6 p-4 bg-purple-200 rounded-lg shadow-md text-center transition-all duration-300";

    const counterText = document.createElement("h2");
    counterText.className = "text-xl font-bold text-purple-800";
    counterText.textContent = "Imágenes Favoritas: ";

    const countSpan = document.createElement("span");
    countSpan.id = "fav-counter";
    countSpan.textContent = initialCount;

    counterText.appendChild(countSpan);
    counterContainer.appendChild(counterText);

    function updateCount(newCount) {
        countSpan.textContent = newCount;
    }

    return {
        element: counterContainer,
        updateCount,
    };
}