function handleLanguageOptions(dataLangAttr, languageOptionClass, redirectHref, redirectHrefTr) {
    document.addEventListener("DOMContentLoaded", function() {
        const htmlLang = document.documentElement.lang;
        const languageOptions = document.querySelectorAll(`.${languageOptionClass}`);
        
        languageOptions.forEach(function(option) {
            option.addEventListener("click", function() {
                const selectedLang = option.getAttribute(dataLangAttr);                                
                if((htmlLang === "tr" && selectedLang === "en")){
                    window.location.href = redirectHref;
                }
                else if((htmlLang === "en" && selectedLang === "tr")){
                    window.location.href = redirectHrefTr;
                }
            });
        });
    });
}
