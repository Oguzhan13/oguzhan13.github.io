export function updateNavLinkStyle(sectionLinkClass, defaultColor, activeColor, isMobile) {
    const sections = document.querySelectorAll('section');
    const sectionLinks = document.querySelectorAll(`.${sectionLinkClass}`);

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            const sectionLinkId = isMobile ? `${sectionId}-section-link-mobile` : `${sectionId}-section-link-desktop`;
            
            sectionLinks.forEach(link => {
                link.classList.remove('section-link-active');
                link.style.color = defaultColor; 
                link.style.borderBottom = ''; 
            });

            const activeLink = document.getElementById(sectionLinkId);
            if (activeLink) {
                activeLink.classList.add('section-link-active');
                activeLink.style.color = activeColor;
                activeLink.style.borderBottom = `0.15rem solid ${defaultColor}`;
            }
        }
    });
}

