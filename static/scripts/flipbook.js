let currentFlipIndex = 0;

function showFlipPage(index) {
  const flipbook = document.getElementById('flipbook');
  const totalPages = document.querySelectorAll('.flip-page').length;
  currentFlipIndex = (index + totalPages) % totalPages; // Loop pages
  flipbook.style.transform = `translateX(-${currentFlipIndex * 100}%)`;
}

function nextFlipPage() {
  showFlipPage(currentFlipIndex + 1);
}

function prevFlipPage() {
  showFlipPage(currentFlipIndex - 1);
}

// Initialize first page
showFlipPage(currentFlipIndex);
