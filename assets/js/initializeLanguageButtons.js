function initializeLanguageButtons(enButtonId, trButtonId, enPagePath, trPagePath) {
    // Get the current language from the URL
    const currentLanguage = window.location.pathname.includes("-tr") ? "tr" : "en";

    // Get the language buttons
    const enNavLanguageButton = document.getElementById(enButtonId);
    const trNavLanguageButton = document.getElementById(trButtonId);

    // Add click event listeners to the language buttons
    enNavLanguageButton.addEventListener("click", () => {
        if (currentLanguage === "tr") {
            window.location.href = enPagePath;
        }
    });

    trNavLanguageButton.addEventListener("click", () => {
        if (currentLanguage === "en") {
            window.location.href = trPagePath;
        }
    });
}
export { initializeLanguageButtons };