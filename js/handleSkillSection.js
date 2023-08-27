import { resetProgressBars } from './resetProgressBars.js';
import { animateProgressBars } from './animateProgressBars.js';

export function handleSkillSection() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');

            if (sectionId === 'about') {
                const aboutSectionVisibleHeight = sectionTop + sectionHeight - scrollPosition;
                const aboutSectionThreshold = 0.5 * sectionHeight;

                if (aboutSectionVisibleHeight <= aboutSectionThreshold) {
                    animateProgressBars();
                } else {
                    resetProgressBars();
                }
            } else if (sectionId === 'skill'){
                animateProgressBars();
            } else if (sectionId === 'project') {
                resetProgressBars();
            } else {
                resetProgressBars();
            }            
        }
    });
}
