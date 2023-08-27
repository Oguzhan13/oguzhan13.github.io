export function toggleHiddenContent(displayIconId, hideIconId, hiddenContentId, display) {
    const displayIcon = document.getElementById(displayIconId);
    const hideIcon = document.getElementById(hideIconId);
    const hiddenContent = document.getElementById(hiddenContentId);

    displayIcon.addEventListener('click', () => {
        displayIcon.style.display = 'none';
        hideIcon.style.display = 'block';
        hiddenContent.style.display = display;
    });

    hideIcon.addEventListener('click', () => {
        displayIcon.style.display = 'block';
        hideIcon.style.display = 'none';
        hiddenContent.style.display = 'none';
    });
}
