function updateNavBorders() {
    const sections = document.querySelectorAll('section');
    const navBorders = document.querySelectorAll('.nav-border');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            const visiblePercentage = ((scrollPosition - sectionTop) / sectionHeight) * 100;

            if (visiblePercentage >= 5) {
                const sectionId = section.getAttribute('id');
                const navBorderId = `${sectionId}-border`;

                navBorders[index].setAttribute('id', navBorderId);
                changeNavLinkBorderStyle(navBorderId);
            } else if (index + 1 < sections.length) {
                const nextSection = sections[index + 1];
                const nextSectionId = nextSection.getAttribute('id');
                const navBorderId = `${nextSectionId}-border`;

                navBorders[index].setAttribute('id', navBorderId);
                changeNavLinkBorderStyle(navBorderId);
            }
        }
    });
}

window.addEventListener('scroll', updateNavBorders);
