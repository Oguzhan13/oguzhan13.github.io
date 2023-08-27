export function animateProgressBars() {
    const progressBarElements = document.querySelectorAll('.progress-bar');
    progressBarElements.forEach(progressBar => {
        const percent = progressBar.getAttribute('data-percent');
        progressBar.style.width = `${percent}%`;
    });
}