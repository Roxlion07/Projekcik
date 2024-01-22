var kolorek;
function wybierz(kolor){
    kolorek = kolor;
}

function zamaluj(id){
    document.getElementById(id).style.backgroundColor = kolorek;
}
