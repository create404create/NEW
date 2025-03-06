// Search Bar Functionality
document.getElementById('submit').addEventListener('click', function () {
    const input = document.getElementById('input').value;
    if (input) {
        fetchData(input);
    } else {
        alert('Please enter a search term.');
    }
});

// Fetch Data from API
function fetchData(phoneNumber) {
    const apiUrl = `https://tcpa.api.uspeoplesearch.net/tcpa/v1?x=${phoneNumber}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            updateUI(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch data. Please try again.');
        });
}

// Update UI with API Data
function updateUI(data) {
    document.getElementById('phone').querySelector('.tcpa-value').textContent = data.phone || 'N/A';
    document.getElementById('state').querySelector('.tcpa-value').textContent = data.state || 'N/A';
    document.getElementById('dnc-national').querySelector('.tcpa-value').textContent = data.dncNational || 'N/A';
    document.getElementById('dnc-state').querySelector('.tcpa-value').textContent = data.dncState || 'N/A';
    document.getElementById('cases').querySelector('.tcpa-value').textContent = data.litigator || 'N/A';
    document.getElementById('listed').querySelector('.tcpa-value').textContent = data.blacklist || 'N/A';
}
