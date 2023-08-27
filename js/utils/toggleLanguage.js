export function toggleLanguage(lang, enButtonClass, trButtonClass) {
    const enButton = document.querySelector(enButtonClass);
    const trButton = document.querySelector(trButtonClass);

    if (lang === 'tr') {
        trButton.style.backgroundColor = 'var(--dark-blue-color)';
        trButton.style.color = 'var(--navbar-color)';
        enButton.addEventListener("click", function() {
            window.location.href = "portfolio.html";
        });
        trButton.removeEventListener("click", null);
    } else {
        enButton.style.backgroundColor = 'var(--dark-blue-color)';
        enButton.style.color = 'var(--navbar-color)';        
        trButton.addEventListener("click", function() {
            window.location.href = "portfolio-tr.html";
        }); 
        enButton.removeEventListener("click", null);
    }
}
