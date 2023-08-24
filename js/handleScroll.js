function resetProgressBars() {
    const progressBarElements = document.querySelectorAll('.progress-bar');
    progressBarElements.forEach(progressBar => {
        progressBar.style.width = '0%';
    });
    console.log('Progress bars reset.');
}

function animateProgressBars() {
    // resetProgressBars();
    const progressBarElements = document.querySelectorAll('.progress-bar');
    progressBarElements.forEach(progressBar => {
        const percent = progressBar.getAttribute('data-percent');
        progressBar.style.width = `${percent}%`;
    });
    console.log('Progress bars animated.');
}

export function handleScroll() {
    const skillSection = document.querySelector('#skill');
    if (skillSection) {
        const rect = skillSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            animateProgressBars();
            console.log('Animate progress bars on scroll.');
        } else {
            resetProgressBars();
            console.log('Reset progress bars on scroll.');
        }
    }
    console.log('handleScroll function executed.');
}
