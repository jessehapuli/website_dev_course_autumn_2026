var timeLeft = 120;
let timeReducer;
document.getElementById("Add").style.display = "none";
function movepage(page) {
    var seuraavaSivu = page;
    console.log(seuraavaSivu)
    var sivut = ["index.html", 'page2.html'];
    var loops = sivut.length + 1;
    for (let i = 0; i <= loops; i++) {
        console.log("loop activated")
        if (seuraavaSivu == sivut[i -1]) {
            console.log("page found", seuraavaSivu, "/", sivut[i-1])
            window.location.href = seuraavaSivu;
        } else if (i == loops) {
            console.log("page not found")
        }

    }
    console.log("function activated");
}

function reduceTime() {
    if (timeLeft == 0) {
        clearInterval(timeReducer);
        document.getElementById("Add").style.display = "block";
        
    } else {
        timeLeft -= 1;
    }
}

function AddPopup() {
timeReducer = setInterval(reduceTime, 100);
}
AddPopup();