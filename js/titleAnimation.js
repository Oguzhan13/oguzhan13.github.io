export function titleAnimation(typedElementId, titleItemsAttribute) {    
    const typedElement = document.getElementById(typedElementId);
    const titleItems = typedElement.getAttribute(titleItemsAttribute).split(', ');
    let currentItemIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = titleItems[currentItemIndex];
        const text = currentText.substring(0, currentCharIndex);

        typedElement.textContent = text;

        if (isDeleting) {
            currentCharIndex--;
        } else {
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === currentText.length + 1) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentItemIndex = (currentItemIndex + 1) % titleItems.length;
            currentCharIndex = 0; // Sıradaki kelimeye geçildiğinde karakter indeksini sıfırla
            setTimeout(type, 2000);
        } else {
            const typingSpeed = isDeleting ? 100 : 150;
            setTimeout(type, typingSpeed);
        }
    }

    type();
}
