$(document).ready(function () {
    $("#view_button").click(getPicture);
});

const url = 'https://api.nasa.gov/planetary/apod?';
function getPicture () {
    fetch(url+ new URLSearchParams({
            api_key: "DEMO_KEY",
            date: $("#date").val() 
        }), {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => showPicture(data))
    .catch((error) => {
        noPicture(error);
    });
};
function showPicture(data) {
    $("#pic").attr({src: data.url, title: data.title});
};
function noPicture(error) {
    alert(error.responseText);
};