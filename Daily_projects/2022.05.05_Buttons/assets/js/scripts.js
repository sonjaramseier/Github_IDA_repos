let n = 0;

function neuesBild() {
    n++;
    let versatz = 20; /* um wieviel das bild jedesmal nach rechts rückt*/
    let myImage = new Image(100, 100);
    myImage.src = 'assets/img/Teppich.png';
    myImage.classList.add('bild');
    myImage.style.left = Math.random() * window.innerWidth + "px";
    myImage.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(myImage);
}