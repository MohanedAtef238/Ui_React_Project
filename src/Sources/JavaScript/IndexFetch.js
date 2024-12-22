fetch('http://127.0.0.1:5500/Pages/index.html') // Load the index.html file
    .then(response => response.text())
    .then(data => {

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
                
        const navbarTemplate = tempDiv.querySelector('#navbar-template');
        if (navbarTemplate) {
            document.getElementById('navbar-container').appendChild(navbarTemplate.content.cloneNode(true));
        }
    });