export function resetProgressBars() {
    const progressBarElements = document.querySelectorAll('.progress-bar');
    progressBarElements.forEach(progressBar => {
        progressBar.style.width = '0%';
    });    
}