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