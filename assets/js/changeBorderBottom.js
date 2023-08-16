export function changeBorderBottom(borderParentClass, borderClass, borderBottomStyle) {
    function changeBorderBottomStyle(borderId) {
        var targetBorder = document.getElementById(borderId);
        
        if (!targetBorder) {
            console.error("Target border element not found.");
            return;
        }
        
        var allBorders = document.querySelectorAll(borderClass);
        allBorders.forEach(border => {
            border.style.borderBottom = "none";
            border.classList.remove("active");
        });

        targetBorder.style.borderBottom = borderBottomStyle;
        targetBorder.classList.add("active");
    }

    const navigationLinks = document.querySelectorAll(`.${borderParentClass}`);
    navigationLinks.forEach(link => {
        link.addEventListener("click", () => {
            const hrefValue = link.getAttribute("href");
            if (hrefValue) {
                const linkId = hrefValue.substring(1) + "-border";
                changeBorderBottomStyle(linkId);
            }
        });
    });
}
