// Wait for HTML to load
document.addEventListener("DOMContentLoaded", () => {
    // Connect to the HTML
    const image = document.getElementById("spin-image");
    let angle = 0;
    let x = 1;
    // Rotate Function that constantley spins image using W3 schools https://www.w3schools.com/jsref/prop_style_transform.asp
    function rotateImage() {
        // If the angle is greater than 50 make it switch the rotation
        if (angle == 50)
        {
            x *= -1;
        }
        if (angle == -50)
        {
            x *= -1;
        }
        angle += x;
        // Apply the css tranfromation to the image and `rotate(${angle}deg)` to insert the angle value into the css
        image.style.transform = `rotate(${angle}deg)`;
        // Keeps repeating help from: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        //https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate

        window.requestAnimationFrame(rotateImage);
    }
    window.requestAnimationFrame(rotateImage);
});