var index = localStorage.getItem("index") == null ? 0 : localStorage.getItem("index"),
    min = 0,
    max = 12;

display_slide(-1);

function display_slide(slide_path) {
    if (slide_path == 0) index++;
    if (slide_path == 1) index--;

    if ( index >= min && index < max ) {
        for (let i = min; i < max; i++) {
            document.getElementById(`slide_0${i}`).style.display = "none";
        }
        document.getElementById(`slide_0${index}`).style.display = "block";
    } else {
        if (slide_path == 1) index++;
        if (slide_path == 0) index--;
    }
    localStorage.setItem("index", index);
}

window.addEventListener("click", function(event) {

    if (event.clientX > (window.screen.width / 2)) {
        display_slide(0);
    } else {
        display_slide(1);
    }

});
