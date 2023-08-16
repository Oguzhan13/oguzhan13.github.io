export function changeBorderBottom(borderParentClass, borderClass, borderBottomStyle, defaultColor, clickedColor) {
    function changeBorderBottomStyle(borderId) {
        var targetBorder = document.getElementById(borderId);
        var targetHeader = document.getElementById(borderId + "-header");

        if (targetBorder && targetHeader) {
            var allBorders = document.querySelectorAll(borderClass);
            var allHeaders = document.querySelectorAll(borderClass + "-header");

            allBorders.forEach(border => {
                border.style.borderBottom = "none";
                border.classList.remove("active");
            });

            allHeaders.forEach((header, index) => {
                if (header === targetHeader) {
                    console.log("targetHeader eşleşti");
                    header.style.color = clickedColor;
                } else {
                    header.style.color = defaultColor;
                }
            });

            targetBorder.style.borderBottom = borderBottomStyle;
            targetBorder.classList.add("active");
        }        
    }
    
    function updateBorderBottom(){
        const sections = document.querySelectorAll('section');
        const navBorders = document.querySelectorAll(borderClass);

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            // const viewportHeight = window.innerHeight;

            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                const visiblePercentage = ((scrollPosition - sectionTop) / sectionHeight) * 100;

                if (visiblePercentage >= 10 || section.getAttribute('id') === 'contact') {
                    const sectionId = section.getAttribute('id');   
                    const navBorderId = `${borderClass.substring(1)}-${sectionId}`;
                    navBorders[index].setAttribute('id', navBorderId);
                    changeBorderBottomStyle(navBorderId);                
                } else if (index + 1 < sections.length) {
                    const nextSection = sections[index + 1];
                    const nextSectionId = nextSection.getAttribute('id');
                    const navBorderId = `${borderClass.substring(1)}-${nextSectionId}`;                    
                    navBorders[index].setAttribute('id', navBorderId);
                    changeBorderBottomStyle(navBorderId);          
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateBorderBottom);
    const navigationLinks = document.querySelectorAll(`.${borderParentClass}`);
    navigationLinks.forEach(link => {        
        link.addEventListener("click", () => {
            const hrefValue = link.getAttribute("href");

            if (hrefValue) {
                const linkId = borderClass.substring(1) + "-" + hrefValue.substring(1);                
                changeBorderBottomStyle(linkId);                            
            }
        });        
    });
}
