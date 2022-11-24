let kohukesed = 0; // Kohukeste arv 
function lisakohukesi(amount) {
    kohukesed = kohukesed + amount;
    document.getElementById("kohukesed").innerHTML = kohukesed;
}

// Upgradid


// Automaatsed upgradid

let vabrik = [10, 0, 1.15, 10, "vabrikuKogus", "vabrikuHind"]; // Hind, koguarv, hinnatõus, tootmis modifier, koguse ID, hinna ID

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
setInterval(function() {
    kohukesed = kohukesed + vabrik[1]*vabrik[3] // Lisab kohukestele vabriku toodetud kohukesed
    document.getElementById("kohukesed").innerHTML = kohukesed;
}, 1000) // Iga 1000ms (1 sekund)