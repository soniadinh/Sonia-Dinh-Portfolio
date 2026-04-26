

// ----- 7 -----
function showPreview() {
    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    // Validate form
    if (!firstName || !lastName || !email || !comment) {
        alert('Please fill in all fields');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Update preview content
    document.getElementById('previewName').textContent = `${firstName} + ${lastName}`;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewComment').textContent = comment;

    // Show preview overlay
    document.getElementById('previewOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hidePreview() {
    // Hide preview overlay
    document.getElementById('previewOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function sendMessage() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    // Create success message
    const message = `Message sent successfully!\n\nFrom: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${comment}`;

    alert(message);

    // Clear form
    document.getElementById('contactForm').reset();

    // Hide preview
    hidePreview();
}

// Close preview with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        hidePreview();
    }
});