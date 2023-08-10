let map;
let previousButton = document.getElementsByClassName("on")[0];

window.onload = function loadContent() {
    const fileURL = '/basic.scaffolding';

    fetch(fileURL)
        .then(response => response.json())
        .then(data => {
            map = data.map;
            console.log('Map data: ', map);
        })
        .catch(error => {
            console.error('Error fetching file content:', error);
        });
}

function switchMap(index) {
    const iframe = document.getElementById('map');
    if (map.hasOwnProperty(index)) {
        iframe.src = map[index];
        if (previousButton) {
            previousButton.classList.remove('on');
            console.log(previousButton);
        }

        const clickedButton = document.querySelector(`[onclick="switchMap(${index})"]`);
        debugger;
        clickedButton.classList.add('on');
        previousButton = clickedButton;
    } else {
        console.error('Invalid map index');
    }
}