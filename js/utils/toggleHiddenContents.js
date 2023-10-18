export function toggleHiddenContents(displayIconId, hideIconId, display, hiddenContentIds) {
    const displayIcon = document.getElementById(displayIconId);
    const hideIcon = document.getElementById(hideIconId);
    const hiddenContents = hiddenContentIds.map(id => document.getElementById(id));

    displayIcon.addEventListener('click', () => {
        displayIcon.style.display = 'none';
        hideIcon.style.display = 'block';
        hiddenContents.forEach(content => content.style.display = display);
    });

    hideIcon.addEventListener('click', () => {
        displayIcon.style.display = 'block';
        hideIcon.style.display = 'none';
        hiddenContents.forEach(content => content.style.display = 'none');
    });
}
