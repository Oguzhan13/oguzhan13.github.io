export function changeLinkListStyle(borderParentClass, borderClass, borderBottomStyle, defaultColor, clickedColor) {

    function changeBorderAndColor(borderId) {
        var targetBorder = document.getElementById(borderId);        
    
        var allBorders = document.querySelectorAll(borderClass);
        allBorders.forEach((border, index) => {
            border.style.borderBottom = "none";
            border.classList.remove("active");
        });     
    
        targetBorder.style.borderBottom = borderBottomStyle;
        targetBorder.classList.add("active");

        // Get the associated header element
        var targetHeader = document.getElementById(borderId + "-header");
        console.log(targetBorder.id + " <=> " + targetHeader.id);
        // Reset the color of all headers to default
        var allHeaders = document.querySelectorAll(borderClass + "-header");
        allHeaders.forEach((header) => {
            if(header === targetHeader) {
                header.style.color = clickedColor;
            }
            else {
                header.style.color = defaultColor;
            }
        });
    }
    
    
    
    function updateBorderBottom(){
        const sections = document.querySelectorAll('section');
        const borders = document.querySelectorAll(borderClass);

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            // const viewportHeight = window.innerHeight;

            const scrollPosition = window.scrollY;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                
                const sectionId = section.getAttribute('id');   
                    const linkBorderId = `${borderClass.substring(1)}-${sectionId}`;
                    borders[index].setAttribute('id', linkBorderId);
                    changeBorderAndColor(linkBorderId);  
            }
        });
    }
    
    window.addEventListener('scroll', updateBorderBottom);
    const links = document.querySelectorAll(`.${borderParentClass}`);
    links.forEach(link => {        
        link.addEventListener("click", () => {
            const hrefValue = link.getAttribute("href");

            if (hrefValue) {
                const linkId = borderClass.substring(1) + "-" + hrefValue.substring(1);                
                changeBorderAndColor(linkId);                            
            }
        });        
    });
}
