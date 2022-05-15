let history;
let count = 0;

//Bild speichern wenn S gedrückt
function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "chrome_history.json"; //json laden
    loadJSON(url, loaded);
    background(0);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    frameRate(1);
}

//json geladen
function loaded(data) {
    history = data;
    //Zugriff auf Eigenschaften
    //console.log(history[0].title);
    //console.log(history[1].lastVisitTimeLocal);
}

function draw() {
    background(0);
    //Historyinhalte nacheinander einblenden
    text(history[count].title, width / 2, height / 2);
    count++;
    if (count > Object.keys(history).length) {
        count = 0;
    }
    //let aktuellestunde = 15;
    //let deckungsgrad = map(aktuellestunde, 0, 23, 0, 255);
    textSize(map(history[count].visitCount, 1, 20, 14, 36)); //Textgrösse nach Anzahl Aufrufe
}