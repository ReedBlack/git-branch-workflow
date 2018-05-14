console.log("Herrrooooo");

const form = document.querySelector("form")
const loadingMessage = document.querySelector("#loadingMessage")
const API_URL = "https://slowpoke-api.now.sh/say"
const serverMessage = document.querySelector("#serverMessage")
const serverWaited = document.querySelector("#serverWaited")

hideElement(loadingMessage)

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Form was submitted!!!!");
    hideElement(form)
    showElement(loadingMessage)
    const formData = new FormData(form)
    const message = formData.get("message")
    // console.log(message);

    const data = {
        message
    }

    postData(data)
        .then(showResponse)
})

function postData(data) {
    // VERY IMPORTANT
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())
}

function showResponse(response) {
    console.log(response);
    serverMessage.textContent = response.message
    serverWaited.textContent = response.waited
    showElement(serverMessage)
    showElement(serverWaited)

    hideElement(loadingMessage)
    showElement(form)
}

function hideElement (element) {
    element.style.display = "none"
}

function showElement (element) {
    element.style.display = ''
}
