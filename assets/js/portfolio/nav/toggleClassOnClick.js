export function toggleClassOnClick(linkClass, activeClass, defaultColor, clickedColor) {
    const sectionLinks = document.querySelectorAll(linkClass);

    sectionLinks.forEach(sectionLink => {
        sectionLink.addEventListener('click', function(event) {
            sectionLinks.forEach(link => {
                link.classList.remove(activeClass);
                link.style.color = defaultColor; 
                link.style.borderBottom = ''; 
            });

            this.classList.add(activeClass);
            this.style.color = clickedColor;
            this.style.borderBottom = `0.15rem solid ${defaultColor}`;
        });
    });
}
