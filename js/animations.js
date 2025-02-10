// Heart animation
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';

    // Position heart at the clicked location
    heart.style.position = 'fixed';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    // Remove heart after animation completes
    heart.addEventListener('animationend', () => heart.remove());
}

function showHeartAnimation(element = null) {
    if (element) {
        // Get element's position and dimensions
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create more hearts around the center point
        for (let i = 0; i < 12; i++) {
            // Add some randomness to starting position
            const offsetX = centerX + (Math.random() - 0.5) * 60;
            const offsetY = centerY + (Math.random() - 0.5) * 60;
            setTimeout(() => createHeart(offsetX, offsetY), i * 200);
        }
    } else {
        // Fallback to original bottom animation
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                createHeart(Math.random() * window.innerWidth, window.innerHeight);
            }, i * 200);
        }
    }
}

// Card selection animation
function animateCardSelection(element) {
    element.classList.add('card-selected');
    showHeartAnimation(element);
} 