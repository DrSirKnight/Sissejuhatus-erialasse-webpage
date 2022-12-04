// Siit algab Joosepi kood (Kui lisate upgrade vms, siis pange enda nimi sinna taha)

let kohukesed = 1000; // Kohukeste arv 
let kohukesedHTML = kohukesed;
let kohukesedSekundis = 0;
function lisakohukesi(amount) {
    kohukesed = kohukesed + amount;
    kohukesedHTML = (kohukesed).toFixed(1);
    document.getElementById("kohukesedHTML").innerHTML = kohukesedHTML;
}

// Upgradid

// Clickimisega seotud upgradid
let hiireupgrade = [25, ] // Hind, tootmis modifier 

// Automaatsed upgradid

let käsitööline = [20, 0, 1.1, 0.1, "käsitöölisteKogus", "käsitöölisteHind"]; // Hind, koguarv, hinnatõus, tootmis modifier, koguse ID, hinna ID
let talu = [100, 0, 1.15, 1, "taluKogus", "taluHind"];
let vabrik = [800, 0, 1.2, 5, "vabrikuKogus", "vabrikuHind"]; 



function ostaUpgrade(upgrade) {
    if (kohukesed >= upgrade[0]) {
        kohukesed = kohukesed - upgrade[0];
        kohukesedHTML = (kohukesed).toFixed(1);
        upgrade[0] = Math.round(upgrade[0] * upgrade[2]);
        upgrade[1] = upgrade[1] + 1;
        document.getElementById(upgrade[4]).innerHTML = upgrade[1];
        document.getElementById(upgrade[5]).innerHTML = upgrade[0];
        document.getElementById("kohukesedHTML").innerHTML = kohukesedHTML;
    }
}

// Effektid

/* Kui keegi soovib seda koodi kuidagi tööle saada siis siin see on, aga ma ei soovita seda. Pigem tee scratchist
function pop(pildiID, imgWidth, imgOGWidth, change) {
    var pilt = document.getElementById(pildiID);
    if (imgOGWidth - imgWidth >= change || (muutusToimub == true && imgOGWidth - imgWidth != 0)) {
        console.log("Putsis")
        muutusToimub = true
        pilt.style.width = (imgWidth + 1).toString() + "px";
        return imgWidth + 1
    } else {
        muutusToimub = false
        console.log(pildiWidth)
        pilt.style.width = (imgWidth - 1).toString() + "px";
        return imgWidth - 1
    }
}
*/

// Tootmine
setInterval(function() {
    kohukesedSekundis = ((käsitööline[1] * käsitööline[3]) + (talu[1] * talu[3]) + (vabrik[1] * vabrik[3]))
    kohukesed = kohukesed + kohukesedSekundis/10; // Lisab kohukestele poest ostetud asjade toodetud kohukesed
    kohukesedHTML = (kohukesed).toFixed(1);
    document.getElementById("kohukesedHTML").innerHTML = kohukesedHTML;
    document.getElementById("kohukesedSekundis").innerHTML = (kohukesedSekundis).toFixed(1);
}, 100) // Iga 100ms (0.1 sekund)
// Siit lõppeb Joosepi kood