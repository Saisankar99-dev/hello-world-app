fetch('/api/hello')
    .then(response => response.text())
    .then(data => {
        document.getElementById('message').innerText = data;
    })
    .catch(error => console.error('Error fetching data:', error));
