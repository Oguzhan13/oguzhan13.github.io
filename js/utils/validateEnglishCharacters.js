export function validateEnglishCharacters(errorMessage) {
    var textarea = document.getElementById("message");
    
    textarea.addEventListener("input", function() {
        var inputValue = textarea.value;
        var englishOnly = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        
        if (!englishOnly.test(inputValue)) {
            // İngilizce karakter dışında karakter bulundu
            alert(errorMessage);
            // İstenmeyen karakterleri temizle
            textarea.value = inputValue.replace(/[^A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "");
        }
    });
}
