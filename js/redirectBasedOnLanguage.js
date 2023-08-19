function redirectBasedOnLanguage(pathTr, pathEn) {
    var userLang = navigator.language || navigator.userLanguage;

    if (userLang === "tr" || userLang.startsWith("tr")) {
        window.location.href = pathTr;
    } else {
        window.location.href = pathEn;
    }
}