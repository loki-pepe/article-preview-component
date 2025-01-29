let shareButton = document.getElementById('share');
let shareOverlay = document.getElementById('footer-overlay');

shareButton.addEventListener('click', () => toggleShareOverlay());
function toggleShareOverlay() {
    shareButton.classList.toggle('selected');
    shareOverlay.classList.toggle('active');
}