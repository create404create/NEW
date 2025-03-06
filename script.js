document.getElementById('simDataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('mobileNumber').value;
    fetchData(mobileNumber);
});

function fetchData(mobileNumber) {
    const apiUrl = `https://api.minahilsimdetails.com/data?number=${mobileNumber}`; // Replace with your API URL

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            if (data.error) {
                resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                resultDiv.innerHTML = `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>CNIC:</strong> ${data.cnic}</p>
                    <p><strong>Address:</strong> ${data.address}</p>
                    <p><strong>Network:</strong> ${data.network}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = `<p>An error occurred while fetching data.</p>`;
        });
}
