// Existing image paths for the original gallery
const posterImages = [
  '/static/images/portfolio/rubiks_poster.jpg',
  '/static/images/portfolio/pentablet.jpg',
  '/static/images/portfolio/ipad.jpg',
  // Add more image paths as needed
];

// New image paths for the Logo Gallery
const logoImages = [
  '/static/images/portfolio/PARCEEMONI_logo-100.jpg',
  '/static/images/portfolio/inpaqt-white.jpg',
  '/static/images/portfolio/pcb_white_bsy.jpg',
  // Add more logo paths if needed
];

// Combine both arrays into a single array for use in the overlay
// You won't combine these anymore for the purpose of keeping galleries closed
const images = {
  poster: posterImages,
  logo: logoImages
};

let currentImageIndex = 0;
let currentGallery = 'poster';  // Default gallery

const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');

// Open overlay function
function openOverlay(index, gallery) {
  currentGallery = gallery;  // Update current gallery
  currentImageIndex = index; // Set the starting index for the selected gallery

  // Set the overlay image source
  overlayImage.src = images[currentGallery][currentImageIndex];

  // Debugging: Check if image path is correctly set
  console.log("Opening image from", currentGallery, "gallery:", overlayImage.src);

  // Show the overlay
  overlay.style.display = 'flex';
}

// Navigate to the next image in the current gallery
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images[currentGallery].length;  // Loop within the current gallery
  overlayImage.src = images[currentGallery][currentImageIndex];
}

// Navigate to the previous image in the current gallery
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images[currentGallery].length) % images[currentGallery].length;  // Loop within the current gallery
  overlayImage.src = images[currentGallery][currentImageIndex];
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
