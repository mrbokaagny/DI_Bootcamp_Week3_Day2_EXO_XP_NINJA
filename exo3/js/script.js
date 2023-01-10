var show_position = document.getElementById("showPosition");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    show_position.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    show_position.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}