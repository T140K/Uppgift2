function createElementH1() {
    element = document.createElement('h1')
    element.innerHTML = inputa;
    document.appendChild(inputa);
}

fetch('js/cv.JSON').then (function (response) {
    return response.json();
})
.then(function () {
    
})