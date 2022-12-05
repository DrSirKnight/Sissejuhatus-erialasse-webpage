// Siit algab Joosepi kood (Kui lisate upgrade vms, siis pange enda nimi sinna taha)

let kohukesed = 0; // Kohukeste arv 
let kohukesedSekundis = 0;
let hiiretugevus = 1;
if (localStorage.getItem("kohukesed") != null) {
    kohukesed = parseFloat(localStorage.getItem("kohukesed")); // Laeb kohukeste arvu
}

if (localStorage.getItem("hiiretugevus") != null) { // Laeb hiiretugevuse
    hiiretugevus = parseFloat(localStorage.getItem("hiiretugevus"));
}
let kohukesedHTML = kohukesed;

function lisakohukesi(amount) { // Lisab kohukesi
    kohukesed = kohukesed + amount;
    kohukesedHTML = (kohukesed).toFixed(1);
    document.getElementById("kohukesedHTML").innerHTML = kohukesedHTML;
}

// Upgradid

function updateUpgrade(upgrade) {
    document.getElementById(upgrade[4]).innerHTML = upgrade[1]; // Muudab koguse HTMLis
    document.getElementById(upgrade[5]).innerHTML = upgrade[0]; // Muudab hinda HTMLis
    document.getElementById("kohukesedHTML").innerHTML = kohukesedHTML; // Muudab kohukeste arvu HTMLi
}

// Clickimisega seotud upgradid
let hiir = [25, 0, 1.2, 0.5, "hiireKogus", "hiireHind", "hiir"]; // Hind, koguarv, hinnatõus, tootmis modifier, koguse ID, hinna ID
let hiir2 = [500, 0, 1.2, 5, "hiireKogus2", "hiireHind2", "hiir2"]; // Hind, koguarv, hinnatõus, tootmis modifier, koguse ID, hinna ID

// Laeb kõik upgradi väärtused eelmisest korrast

if (localStorage.getItem("hiir") != null) {
    hiir[0] = parseFloat(localStorage.getItem("hiir").split(",")[0]);
    hiir[1] = parseFloat(localStorage.getItem("hiir").split(",")[1]);
}

if (localStorage.getItem("hiir2") != null) {
    hiir2[0] = parseFloat(localStorage.getItem("hiir2").split(",")[0]);
    hiir2[1] = parseFloat(localStorage.getItem("hiir2").split(",")[1]);
}

function ostaUpgradeHiirel(upgrade) { // Upgradide ostmise funktsioon
    if (kohukesed >= upgrade[0]) { // Kas on küllalt kohukesi?
        kohukesed = kohukesed - upgrade[0]; // Lahutab kohukesed
        kohukesedHTML = (kohukesed).toFixed(1); // Ümardab kohukesed
        upgrade[0] = Math.round(upgrade[0] * upgrade[2]); // Tõstab hinda
        upgrade[1] = upgrade[1] + 1; // Tõstab koguarvu
        hiiretugevus += upgrade[3]; // Tõstab hiiretugevust
        updateUpgrade(upgrade); // Uuendab upgradi väärtusi HTMLis
        localStorage.setItem("hiiretugevus",hiiretugevus);
        localStorage.setItem(upgrade[6],upgrade[0].toString() + "," + upgrade[1].toString());
    }
}

// Automaatsed upgradid

let käsitööline = [20, 0, 1.1, 0.1, "käsitöölisteKogus", "käsitöölisteHind", "käsitööline"]; // Hind, koguarv, hinnatõus, tootmis modifier, koguse ID, hinna ID, muutuja nimi
let talu = [100, 0, 1.15, 1, "taluKogus", "taluHind", "talu"];
let vabrik = [800, 0, 1.2, 5, "vabrikuKogus", "vabrikuHind", "vabrik"];
let kaevandus = [12000, 0, 1.2, 50, "kaevanduseKogus", "kaevanduseHind", "kaevandus"];
let duplikaator = [100000, 0, 1.2, 250, "duplikaatoriKogus", "duplikaatoriHind", "duplikaator"];
let portaal = [1000000, 0, 1.2, 1500, "portaaliKogus", "portaaliHind", "portaal"]; 
let nõid = [25000000, 0, 1.2, 10000, "nõidadeKogus", "nõidadeHind", "nõid"];
let planeet = [100000000, 0, 1.2, 100000, "planeediKogus", "planeediHind", "planeet"];

// Laeb kõik upgradi väärtused eelmisest korrast

if (localStorage.getItem("käsitööline") != null) {
    käsitööline[0] = parseFloat(localStorage.getItem("käsitööline").split(",")[0]);
    käsitööline[1] = parseFloat(localStorage.getItem("käsitööline").split(",")[1]);
}
if (localStorage.getItem("talu") != null) {
    talu[0] = parseFloat(localStorage.getItem("talu").split(",")[0]);
    talu[1] = parseFloat(localStorage.getItem("talu").split(",")[1]);
}
if (localStorage.getItem("vabrik") != null) {
    vabrik[0] = parseFloat(localStorage.getItem("vabrik").split(",")[0]);
    vabrik[1] = parseFloat(localStorage.getItem("vabrik").split(",")[1]);
}
if (localStorage.getItem("kaevandus") != null) {
    kaevandus[0] = parseFloat(localStorage.getItem("kaevandus").split(",")[0]);
    kaevandus[1] = parseFloat(localStorage.getItem("kaevandus").split(",")[1]);
}
if (localStorage.getItem("duplikaator") != null) {
    duplikaator[0] = parseFloat(localStorage.getItem("duplikaator").split(",")[0]);
    duplikaator[1] = parseFloat(localStorage.getItem("duplikaator").split(",")[1]);
}
if (localStorage.getItem("portaal") != null) {
    portaal[0] = parseFloat(localStorage.getItem("portaal").split(",")[0]);
    portaal[1] = parseFloat(localStorage.getItem("portaal").split(",")[1]);
}
if (localStorage.getItem("nõid") != null) {
    nõid[0] = parseFloat(localStorage.getItem("nõid").split(",")[0]);
    nõid[1] = parseFloat(localStorage.getItem("nõid").split(",")[1]);
}
if (localStorage.getItem("planeet") != null) {
    planeet[0] = parseFloat(localStorage.getItem("planeet").split(",")[0]);
    planeet[1] = parseFloat(localStorage.getItem("planeet").split(",")[1]);
}


updateTehtud = true // Hiljem kasutatakse, et vältida korduvaid uuendusi

function updateiUpgradid() { // Uuendab upgradide väärtusi HTMLis
    updateUpgrade(hiir);
    updateUpgrade(hiir2);
    updateUpgrade(käsitööline);
    updateUpgrade(talu);
    updateUpgrade(vabrik);
    updateUpgrade(kaevandus);
    updateUpgrade(duplikaator);
    updateUpgrade(portaal);
    updateUpgrade(nõid);
    updateUpgrade(planeet);
    updateTehtud = false
}

function ostaUpgrade(upgrade) { // Upgradide ostmise funktsioon
    if (kohukesed >= upgrade[0]) { // Kas on küllalt kohukesi?
        kohukesed = kohukesed - upgrade[0]; // Lahutab kohukesed
        kohukesedHTML = (kohukesed).toFixed(1); // Ümardab kohukesed
        upgrade[0] = Math.round(upgrade[0] * upgrade[2]); // Tõstab hinda
        upgrade[1] = upgrade[1] + 1; // Tõstab koguarvu
        updateUpgrade(upgrade); // Uuendab upgradi väärtusi HTMLis
        localStorage.setItem(upgrade[6],upgrade[0].toString() + "," + upgrade[1].toString());
    }
}

// Tootmine
setInterval(function() { // Uuendab lehe laadimisel upgradi väärtused HTMLis
    if (updateTehtud == true) {
        updateiUpgradid();
    }
    kohukesedSekundis = ((käsitööline[1] * käsitööline[3]) + (talu[1] * talu[3]) + (vabrik[1] * vabrik[3]) + (kaevandus[1] * kaevandus[3]) + (duplikaator[1] * duplikaator[3]) + (portaal[1] * portaal[3]) + (nõid[1] * nõid[3]) + (planeet[1] * planeet[3])); // Lisab kohukestele iga upgradei toodetud kohukesed
    kohukesed = kohukesed + kohukesedSekundis/10; // Lisab kohukestele poest ostetud asjade toodetud kohukesed
    kohukesedHTML = (kohukesed).toFixed(1); // Ümardab kohukesed
    localStorage.setItem("kohukesed",kohukesed) // Salvestab kohukesed
    document.getElementById("kohukesedHTML").innerHTML = kohukesedHTML; // Uuendab infot HTMLis
    document.getElementById("kohukesedSekundis").innerHTML = (kohukesedSekundis).toFixed(1);
    document.getElementById("hiireTugevus").innerHTML = (hiiretugevus).toFixed(1);
}, 100) // Iga 100ms (0.1 sekund)
// Siit lõppeb Joosepi kood