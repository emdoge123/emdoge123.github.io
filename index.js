// Wait for HTML to load
document.addEventListener("DOMContentLoaded", function(){
    // Connects to the image on HTML
    const image = document.getElementById('spin-image');

    // Spin Image Function
    function spin() {
        // Uses the css to edit the rotation of the image
        // https://livefiredev.com/requestanimationframe-example-the-optimal-way-to-animate/
        image.style.transform = `rotate(${angle}deg)`;
        // Limmits the rotation so it bounces back and fourth
        if (angle == 50)
        {
            x *= -1;
        }
        if (angle == -50)
        {
            x *= -1;
        }
        // Modify the Rotation of the image
        angle += x;

        // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        //https://livefiredev.com/requestanimationframe-example-the-optimal-way-to-animate/
        // I used these two sources to help this rotation code especially the second one
        requestAnimationFrame(spin);
    }
    let angle = 0;
    let x = 1

    spin();
});





