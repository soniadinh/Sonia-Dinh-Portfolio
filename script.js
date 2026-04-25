// ----- DEMO ------
function toggleCheck(rowNumber) {
    const checkbox = document.getElementById(`check${rowNumber}`);
    const checkboxLabel = checkbox.nextElementSibling;
    const rightBox = document.getElementById(`right${rowNumber}`);

    // Toggle checkbox state
    checkbox.checked = !checkbox.checked;

    // Toggle visual states
    if (checkbox.checked) {
        checkboxLabel.classList.add('checked');
        rightBox.classList.add('revealed');
    } else {
        checkboxLabel.classList.remove('checked');
        rightBox.classList.remove('revealed');
    }
}

function handleYes() { window.location.href = 'p1.html'; }
function handleNo() { window.location.href = '0.html'; }

// Click anywhere on the row to toggle
document.querySelectorAll('.comparison-row').forEach((row, index) => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', (e) => {
        // Only trigger if not clicking directly on the checkbox
        if (!e.target.classList.contains('custom-checkbox') && !e.target.closest('.custom-checkbox')) {
            toggleCheck(index + 1);
        }
    });
});



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