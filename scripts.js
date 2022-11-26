// Siit algab Joosepi kood (Kui lisate upgrade vms, siis pange enda nimi sinna taha)

let kohukesed = 0; // Kohukeste arv 
function lisakohukesi(amount) {
    kohukesed = kohukesed + amount;
    document.getElementById("kohukesed").innerHTML = kohukesed;
}

// Upgradid

// Clickimisega seotud upgradid
let hiireupgrade = [25, ] // Hind, tootmis modifier 

// Automaatsed upgradid

let vabrik = [25, 0, 1.15, 1, "vabrikuKogus", "vabrikuHind"]; // Hind, koguarv, hinnatõus, tootmis modifier, koguse ID, hinna ID

function ostaUpgrade(upgrade) {
    if (kohukesed >= upgrade[0]) {
        kohukesed = kohukesed - upgrade[0];
        upgrade[0] = Math.round(upgrade[0] * upgrade[2]);
        upgrade[1] = upgrade[1] + 1;
        document.getElementById(upgrade[4]).innerHTML = upgrade[1];
        document.getElementById(upgrade[5]).innerHTML = upgrade[0];
        document.getElementById("kohukesed").innerHTML = kohukesed;
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
    kohukesed = kohukesed + vabrik[1]*vabrik[3]; // Lisab kohukestele vabriku toodetud kohukesed
    document.getElementById("kohukesed").innerHTML = kohukesed;
}, 1000) // Iga 1000ms (1 sekund)
// Siit lõppeb Joosepi kood