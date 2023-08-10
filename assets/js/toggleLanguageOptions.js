function toggleLanguageOptions(languageContentClass, languageOptionsClass) {
    const languageContents = document.querySelectorAll('.' + languageContentClass);
    const languageOptions = document.querySelectorAll('.' + languageOptionsClass);

    languageContents.forEach((languageContent, index) => {
        languageContent.addEventListener('click', () => {
            languageOptions[index].classList.toggle('show-language-options');
        });
    });
}