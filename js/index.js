const $el = document.getElementById('please-scroll-down');
const $announcement = document.getElementById("announcement");
let fadeEffect;

function closeAnnouncement() {
    $announcement.style["display"] = "none";
    $announcement.remove();
    setCookie("seen-event-announcement", "true", 1);
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Check for the cookie when the page loads
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

if (getCookie("seen-event-announcement") === "true") {
    $announcement.style["display"] = "none";
    $announcement.remove();
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        // If the user has scrolled down, fade out the element
        clearInterval(fadeEffect);
        fadeEffect = setInterval(function() {
            if (!$el.style.opacity) {
                $el.style.opacity = "1";
            }
            if ($el.style.opacity > 0) {
                $el.style.opacity -= "0.1";
            } else {
                clearInterval(fadeEffect);
                $el.style.display = 'none';
            }
        }, 50);
    } else {
        // If the user is at the top of the page, fade in the element
        clearInterval(fadeEffect);
        $el.style.opacity = "1";
        $el.style.display = 'block';
    }
});