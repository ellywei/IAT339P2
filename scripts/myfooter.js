//LOAD FOOTER
document.addEventListener("DOMContentLoaded", function (event) {
    var element = document.getElementById('homepic');
    var height = element.offsetHeight;
    if (height < screen.height) {
        document.getElementById("footer").classList.add('stikybottom');
    }
}, false);