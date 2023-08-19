export function toggleHiddenContent(displayIconId, hideIconId, hiddenContentId) {
    const displayIcon = document.getElementById(displayIconId);
    const hideIcon = document.getElementById(hideIconId);
    const hiddenContent = document.getElementById(hiddenContentId);

    displayIcon.addEventListener('click', function() {
        hiddenContent.style.display = 'flex';
        displayIcon.style.display = 'none';
        hideIcon.style.display = 'block';
    });

    hideIcon.addEventListener('click', function() {
        hiddenContent.style.display = 'none';
        displayIcon.style.display = 'block';
        hideIcon.style.display = 'none';
    });
}
