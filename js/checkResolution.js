export function checkResolution() {
    var sectionLinksId = document.getElementById("nav-section-links");
    var menuIconId = document.getElementById("nav-menu-icon");
    var closeIconId = document.getElementById("nav-close-icon");
    var langDropdownId = document.getElementById("nav-lang-dropdown");
    var displayIconId1 = document.getElementById("lang-display-icon");
    var hideIconId1 = document.getElementById("lang-hide-icon");
    var mobileLangDropdownId = document.getElementById("mobile-nav-lang-dropdown");
    var displayIconId2 = document.getElementById("mobile-lang-display-icon");
    var hideIconId2 = document.getElementById("mobile-lang-hide-icon");

    if (window.innerWidth >= 1023) {
        sectionLinksId.style.display = "flex";
        menuIconId.style.display = "block";
        closeIconId.style.display = "none"; 
        langDropdownId.style.display = "none";
        displayIconId1.style.display = "block";
        hideIconId1.style.display = "none";
        mobileLangDropdownId.style.display = "none";
        displayIconId2.style.display = "block";
        hideIconId2.style.display = "none";
    } else {
        sectionLinksId.style.display = "none";
        menuIconId.style.display = "block";
        closeIconId.style.display = "none";
        langDropdownId.style.display = "none";
        displayIconId1.style.display = "block";
        hideIconId1.style.display = "none";
        mobileLangDropdownId.style.display = "none";
        displayIconId2.style.display = "block";
        hideIconId2.style.display = "none";
    }
  }
  