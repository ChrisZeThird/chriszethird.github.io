const images = [
  '/static/images/portfolio/rubiks_poster.jpg',
  '/static/images/portfolio/pentablet.jpg',
  '/static/images/portfolio/ipad.jpg',
  // Add more image paths as needed
];

let currentImageIndex = 0;
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');

// Open overlay function
function openOverlay(index) {
  currentImageIndex = index;
  overlayImage.src = images[currentImageIndex];
  // Debugging: Check if image path is correctly set
  console.log("Opening image:", overlayImage.src);
  overlay.style.display = 'flex';
}

// Navigate to the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;  // Loop back to the first image
  overlayImage.src = images[currentImageIndex];
}

// Navigate to the previous image
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;  // Loop to the last image
  overlayImage.src = images[currentImageIndex];
}

// Close overlay function
function closeOverlay() {
  overlay.style.display = 'none';
}

// Close on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeOverlay();
  }
});
