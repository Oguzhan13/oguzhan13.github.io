function toggleIconById(showId, hideId, contentId) {
    const showElement = document.getElementById(showId);
    const hideElement = document.getElementById(hideId);
    
    if (!showElement || !hideElement) {
        console.error("One or both of the provided IDs are invalid.");
        return;
    }

    showElement.addEventListener("click", async () => {
        hideElement.style.display = "block";
        showElement.style.display = "none";
        document.getElementById(contentId).style.display = "flex";
    });

    hideElement.addEventListener("click", async () => {
        showElement.style.display = "block";
        hideElement.style.display = "none";
        document.getElementById(contentId).style.display = "none";
    });
}

export default toggleIconById;
