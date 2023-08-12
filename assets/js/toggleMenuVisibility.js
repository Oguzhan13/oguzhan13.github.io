function toggleMenuVisibility() {
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    var hiddenMenu = document.getElementById('hidden-menu');

    if (menuIcon.style.display === 'none') {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        hiddenMenu.style.display = 'none';
    } else {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        hiddenMenu.style.display = 'flex';
    }
}
