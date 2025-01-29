let shareButton = document.getElementById('share');
let shareOverlay = document.getElementById('footer-overlay');

shareButton.addEventListener('click', () => toggleShareOverlay());
document.addEventListener('click', (e) => {
    if (!shareOverlay.contains(e.target) && !shareButton.contains(e.target) && shareOverlay.classList.contains('active')) {
        toggleShareOverlay();
    }
})

function toggleShareOverlay() {
    shareButton.classList.toggle('selected');
    shareOverlay.classList.toggle('active');
}