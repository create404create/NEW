// Search Bar Functionality
document.getElementById('submit').addEventListener('click', function () {
    const input = document.getElementById('input').value;
    if (input) {
        alert(`You searched for: ${input}`);
        // Add backend API call here to fetch results
    } else {
        alert('Please enter a search term.');
    }
});

// Example: Update Blacklist Status
const tcpaValues = document.querySelectorAll('.tcpa-value');
tcpaValues.forEach(value => {
    value.textContent = 'Loading...';
});

setTimeout(() => {
    tcpaValues.forEach(value => {
        value.textContent = 'Not Found';
    });
}, 2000);
