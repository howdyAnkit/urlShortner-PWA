// information to reach API
//jshint esversion:6
const apiKey = '57792bae64654393ad50e0f26dfac797';
const url = 'https://api.rebrandly.com/v1/links';
// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');


// AJAX functions
// Code goes here
const shortenUrl = async () => {
    let urlToShorten = inputField.value;
    var prefix = 'https://';
    var httpPrefix = 'http://';

    if(urlToShorten.substr(0, prefix.length) !== prefix){
        urlToShorten = prefix + urlToShorten;
    }

    const data = JSON.stringify({
        destination: urlToShorten
    });
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);

        }
    } catch (error) {
        console.log(error);
    }
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
            // const qrCode = jsonResponse.shortUrl.concat('.qr');
            // renderResponse(qrCode);
    shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

if("serviceWorker" in navigator){
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log("SW Registered!");
            console.log(registration);
        }).catch(error => {
        console.log("SW Registration Failed");
        console.log(error);
    });
}
