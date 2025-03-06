// Search Bar Functionality
document.getElementById('search-button').addEventListener('click', function () {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`You searched for: ${query}`);
        // Add backend API call here to fetch results
    } else {
        alert('Please enter a search term.');
    }
});

// Map Widget (Static for now)
const mapElement = document.getElementById('map');
mapElement.innerHTML = "<p>Map will be displayed here.</p>";
