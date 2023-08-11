function changeNavLinkBorderStyle(borderId) {    
    var targetBorder = document.getElementById(borderId);
    if (targetBorder) {
        targetBorder.style.borderBottom = "0.3rem solid var(--navbar-color)";
        targetBorder.style.transition = "border-bottom 0.5s ease-in-out";                        
    }

    
}
