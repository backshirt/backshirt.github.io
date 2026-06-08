// Select all pins
const pins = document.querySelectorAll('.pin');

// Select the details section elements
const nameElement = document.getElementById('location-name');
const descElement = document.getElementById('location-desc');

// Add click event listeners to each pin
pins.forEach(pin => {
  pin.addEventListener('click', () => {
    nameElement.textContent = pin.getAttribute('data-name');
    descElement.textContent = pin.getAttribute('data-desc');

    // Location photos not supplied yet — the image box (#location-image) stays
    // hidden until real images exist (see ROADMAP). The pins keep their
    // data-image filenames as a record of what to drop in; when the photos
    // arrive, restore showing them here off pin.getAttribute('data-image').
  });
});
