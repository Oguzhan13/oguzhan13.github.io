import { resetProgressBars } from './resetProgressBars.js';
import { animateProgressBars } from './animateProgressBars.js';

export function handleSkillSection() {
    const sections = document.querySelectorAll('section');
    const sectionLinks = document.querySelectorAll('.section-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
            const sectionId = section.getAttribute('id');

            if (sectionId === 'skill') {
                animateProgressBars();
            } else {
                resetProgressBars();
            }            
        }
    });
}
