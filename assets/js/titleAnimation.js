function titleTextAnimation(elementId, typeItems) {
    const typedElement = document.getElementById(elementId);
    const typedItems = typedElement.getAttribute(typeItems).split(',').map(item => item.trim());
    let currentItemIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let isWaiting = false;
    let typingSpeed = 50; // Adjust typing speed as needed

    function type() {
        const item = typedItems[currentItemIndex];
        
        if (!isDeleting && currentText === item) {
            isWaiting = true;
            setTimeout(() => {
                isDeleting = true;
                isWaiting = false;
                currentText = item;
            }, 2000); // Wait for 3 seconds before deleting
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentItemIndex = (currentItemIndex + 1) % typedItems.length;
            typingSpeed = 70; // Typing speed after deletion
        }
        
        if (isDeleting) {
            currentText = currentText.substring(0, currentText.length - 1);
        } else {
            currentText = item.substring(0, currentText.length + 1);
        }
        
        typedElement.textContent = currentText;
        setTimeout(type, typingSpeed);
    }
    type(); // Start typing animation
}
