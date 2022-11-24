let kohukesed = 0; // Kohukeste arv 
function lisakohukesi(amount) {
    kohukesed = kohukesed + amount;
    document.getElementById("kohukesed").innerHTML = kohukesed;
}

// Upgradid


// Automaatsed upgradid
// Kohukese vabrikud

let vabrikuHind = 10;
let vabrikud = 0;

function ostaVabrik() {
    if (kohukesed >= vabrikuHind) {
        kohukesed = kohukesed - vabrikuHind;
        vabrikuHind = Math.round(vabrikuHind * 1.1);
        vabrikud = vabrikud + 1;
        document.getElementById("vabrikuKogus").innerHTML = vabrikud;
        document.getElementById("vabrikuHind").innerHTML = vabrikuHind;
        document.getElementById("kohukesed").innerHTML = kohukesed;
    }
}
setInterval(function() {
    kohukesed = kohukesed + vabrikud
    document.getElementById("kohukesed").innerHTML = kohukesed;
}, 1000) // Iga 1000ms (1 sekund)