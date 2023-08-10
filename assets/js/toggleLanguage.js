function toggleLanguage(languageOptionClass, dataLang, englishContentClass, turkishContentClass) {
    function getLanguage() {
        var buttons = document.querySelectorAll(languageOptionClass);
        var userLang = navigator.language || navigator.userLanguage; // Tarayıcının dili
        var selectedLang = userLang.startsWith("tr") ? "tr" : "en"; // Varsayılan olarak Türkçe mi İngilizce mi ayarlanacak
    
        // Dil seçeneği butonları
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                selectedLang = button.getAttribute(dataLang);
                setLanguage(selectedLang);
            });
        });
    
        // Lang değerini ve içerik görünürlüğünü ayarla
        setLanguage(selectedLang);
    }
    
    function setLanguage(lang) {
        document.documentElement.lang = lang;
    
        document.querySelectorAll(englishContentClass).forEach(function(elem) {
            elem.style.display = lang === "en" ? "block" : "none";
        });
    
        document.querySelectorAll(turkishContentClass).forEach(function(elem) {
            elem.style.display = lang === "tr" ? "block" : "none";
        });
    }

    // Dil seçeneği butonlarına event dinleyici ekleme
    var buttons = document.querySelectorAll(languageOptionClass);
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var selectedLang = button.getAttribute(dataLang);
            
            if (selectedLang === "en") {
                setLanguage("en");
            } else if (selectedLang === "tr") {
                setLanguage("tr");
            }
        });
    });
    
    // Sayfa yüklendiğinde dil ayarını yapma
    getLanguage();
}
