export function updateNavLinkStyle() {
    const sections = document.querySelectorAll('section');
    const sectionLinks = document.querySelectorAll('.section-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');
            
            sectionLinks.forEach(link => {
                if (link.getAttribute('id') === `${sectionId}-section-link`) {
                    link.classList.add('section-link-active');                    
                } else {
                    link.classList.remove('section-link-active');                  
                }
            });
        }
    });
}
