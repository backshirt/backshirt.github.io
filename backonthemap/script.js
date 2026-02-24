// Select all pins
const pins = document.querySelectorAll('.pin');

// Select the details section elements
const nameElement = document.getElementById('location-name');
const imageElement = document.getElementById('location-image');
const descElement = document.getElementById('location-desc');
const linkElement = document.getElementById('location-link');

// Add click event listeners to each pin
pins.forEach(pin => {
  pin.addEventListener('click', () => {
    // Get data attributes from the pin
    const name = pin.getAttribute('data-name');
    const desc = pin.getAttribute('data-desc');
    const image = pin.getAttribute('data-image');
    const url = pin.getAttribute('data-url');

    // Update the details section
    nameElement.textContent = name;
    descElement.textContent = desc;
    if (image) {
      imageElement.style.backgroundImage = 'url(' + image + ')';
      imageElement.style.display = 'block';
    } else {
      imageElement.style.backgroundImage = '';
      imageElement.style.display = 'none';
    }
    if (url) {
      linkElement.href = url;
      linkElement.style.display = 'inline';
    } else {
      linkElement.style.display = 'none';
    }
  });
});
