let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++; /* ist dasselbe wie n=n+1*/
    //console.log(document.getElementById("element"))
    document.getElementById("element").style.left = (n * 5) + "px";
}

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}