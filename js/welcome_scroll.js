var blur_video = document.getElementById('welcome_blur_video');

function sleep(time) {
  return new Promise(resolve=>setTimeout(resolve, time));
}

function scroll() {
    window.scrollBy(0, 500);
}

function enable_video() {
    var video = document.getElementById('welcome_video');
    video.style.visibility = "visible";
}

function unblur() {
    current_opacity = window.getComputedStyle(blur_video).getPropertyValue('opacity');
    opacity = current_opacity - 0.001;
    blur_video.style.opacity = (opacity * 100) + '%';
}

async function unblur_video() {
    current_opacity = window.getComputedStyle(blur_video).getPropertyValue('opacity');
    while (current_opacity > 0.75) {
        unblur();
        await sleep(100);
    } 
}

window.setTimeout(scroll, 1000);
window.setTimeout(enable_video, 2000);
unblur_video();


