function changeNavLinkBorderStyle(borderId) {    
    var targetBorder = document.getElementById(borderId);
    var isActive = targetBorder.classList.contains("active");

    var allBorders = document.querySelectorAll('.nav-border');
    for (var i = 0; i < allBorders.length; i++) {  
        allBorders[i].style.borderBottom = "none";
        allBorders[i].classList.remove("active");
    }
    
    var targetBorder = document.getElementById(borderId);
    if (targetBorder) {
        targetBorder.style.borderBottom = "0.15rem solid var(--navbar-color)";
        targetBorder.style.borderRadius = "1rem";
        targetBorder.classList.add("active");                            
    }
}
