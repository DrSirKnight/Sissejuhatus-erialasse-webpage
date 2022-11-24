let kohukesed = 0; // Kohukeste arv 
function lisakohukesi(amount) {
    kohukesed = kohukesed + amount;
    document.getElementById("kohukesed").innerHTML = kohukesed;
}