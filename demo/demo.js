//----- DEMO ------
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
function handleNo() { window.location.href = 'p0.html'; }

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
