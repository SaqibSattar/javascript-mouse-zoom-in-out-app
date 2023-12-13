const zoomScreen = document.querySelector(".container");

let zoom = 1;
const zoomSpeed = 0.1;

document.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        zoom += zoomSpeed;
    } else {
        zoom -= zoomSpeed;
    }

    // Limit zoom to a minimum of 0.5 and a maximum of 3
    zoom = Math.min(Math.max(zoom, 0.5), 3);

    zoomScreen.style.transform = `scale(${zoom})`;
});

// Add event listener for the reset button
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
    zoom = 1; // Set zoom back to the default
    zoomScreen.style.transform = `scale(${zoom})`;
});
