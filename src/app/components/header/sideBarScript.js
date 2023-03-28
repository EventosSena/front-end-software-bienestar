$(document).click(function() {
    var obj = $("#cont-menu");
    if (!obj.is(event.target) && !obj.has(event.target).length) {
        alert("Outside click detected!");
        console.log("a");
    }
    else {
        alert("Inside click detected!");
        console.log("b");
    }
});

document.addEventListener("mouseup", function(event) {
    var obj = document.getElementById("cont-menu");
    if (!obj.contains(event.target)) {
        alert("Outside click detected!");
    }
    else {
        alert("Inside click detected!");
    }
});