//BUBBLES
var bubbleCount = 40;
var bubbleField = document.getElementById("bubble-field");

for (var i = 0; i < bubbleCount; i++) {
  var randNum = Math.floor(Math.random() * 20) + 1;
  var animDur = 2 + 0.5 * randNum;
  var ranZ = Math.floor(Math.random() * (300 - 2 + 1)) + 2;
  var size = Math.floor(Math.random() * 15) + 15;
  
  // Create the bubble container element
  var moveEl = document.createElement("div");
  moveEl.setAttribute("class", "bubble-rise");  
  moveEl.setAttribute("style", "animation-duration: " + animDur + "s; z-index: " + ranZ + ";");

  // Create the bubble element
  var bubbleEl = document.createElement("div");
  bubbleEl.setAttribute("class", "bubble");

  // Set the random width and height to create a circle
  bubbleEl.style.width = size + "px";
  bubbleEl.style.height = size + "px";

  // Set the x-position (left) of the bubble
  var xPosition = Math.random() * 1; // Adjust this value as needed
  bubbleEl.style.left = xPosition + "vw"; // You can use vw for percentage-based positioning
  
  // Create text node and append to bubble
  var bubbleElContent = document.createTextNode("");
  bubbleEl.appendChild(bubbleElContent);

  // Append the bubble to the container
  moveEl.appendChild(bubbleEl);

  // Append the container to the bubble field
  bubbleField.appendChild(moveEl);
}

//FISH
var fishCount = 10;
var fishField = document.getElementById("fish-field");

for (var i = 0; i < fishCount; i++) {
  var randNumf = Math.floor(Math.random() * 20) + 1;
  var min = 10;
  var max = 90;
  var fishH = Math.floor(Math.random() * (max - min + 1)) + min;
  var delay = (Math.floor(Math.random() * 100) + 1) / 20;
  var animF = 1 + 1.2 * randNumf;
  var minF = 2;
  var maxF = 100;
  var ranF = Math.floor(Math.random() * (maxF - minF + 1)) + minF;

  var fishEl = document.createElement("div");
  fishEl.setAttribute("class", "fish");

  // Create an <img> element
  var imgEl = document.createElement("img");
  imgEl.src = "fish/" + i + ".png";

  // Set the width and height of the image
  imgEl.width = window.innerWidth * 0.13; // Set the desired width in pixels
  
 
  
  

  // Create a closure to capture the correct fishEl for this imgEl
  imgEl.onerror = (function (elementToHide) {
    return function () {
      elementToHide.style.display = "none";
    };
  })(fishEl);

  // Append the <img> element to the fishEl
  fishEl.appendChild(imgEl);

  fishEl.style.animation =
    "fish " +
    animF +
    "s cubic-bezier(0.9, 1, 0.3, 0.75) " +
    delay +
    "s infinite normal";
  fishEl.style.top = fishH + "vh";
  fishEl.style.zIndex = ranF; // Set the z-index
  fishField.appendChild(fishEl);
}

// FULL SCREEN

        const fullscreenButton = document.getElementById("fullscreenButton");

        fullscreenButton.addEventListener("click", function() {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().then(hideButton);
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen().then(hideButton);
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                document.documentElement.webkitRequestFullscreen().then(hideButton);
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen().then(hideButton);
            } else {
                hideButton();
            }
        });

        function hideButton() {
            fullscreenButton.style.display = "none";
        }

        // Check if fullscreen is not supported and hide the button
        if (!document.fullscreenEnabled && !document.mozFullScreenEnabled && !document.webkitFullscreenEnabled && !document.msFullscreenEnabled) {
            hideButton();
        }

// Function to refresh the page
function refreshPage() {
  location.reload();
}

// Event listener to trigger the refresh function when a keyboard shortcut is pressed
window.addEventListener('keydown', function(event) {
  // Check if the key combination matches "Command + E" on macOS or "Ctrl + E" on Windows
  if ((event.metaKey || event.ctrlKey) && event.key === 'e') {
    event.preventDefault(); // Prevent the default behavior (e.g., opening the browser's find dialog)
    refreshPage(); // Call the refresh function
  }
});
