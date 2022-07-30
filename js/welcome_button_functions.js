function welcome_button_click() {
    window.scrollBy(0, 950);
}

function foo() {
    var content = document.getElementById('');

    function moveDown () {
        var top = parseInt(content.style.marginTop); // get the top margin
                                                     // we'll be using this to
                                                     // push the div down

        if (!top) {
            top = 0; // if the margin is undefined, default it to zero
        }

        top += 1; // add 20 pixels to the current margin

        content.style.marginTop = top + 'px'; // push div down

        if (top < 600) {
            // If it's not yet 200 pixels then call this function
            // again in another 100 milliseconds (100 ms gives us
            // roughly 10 fps which should be good enough):
            setTimeout(moveDown, 5);
        }
    }
    moveDown()
}

