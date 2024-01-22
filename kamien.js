function wybor(wybor){
    wynik = document.getElementById('rezultat');
    wybor_oponenta = document.getElementById('wybor_oponenta');
    wybor_op = Math.ceil(Math.random() * 3);
    if(wybor==1 && wybor_op==3){
        wynik.innerHTML = "Wygrał przeciwnik!";
        wybor_oponenta.innerHTML = "✌";
    }
    if(wybor==1 && wybor_op==1){
        wynik.innerHTML = "Remis!";
        wybor_oponenta.innerHTML = "✋";
    }
    if(wybor==1 && wybor_op==2){
        wynik.innerHTML = "Wygrałeś!";
        wybor_oponenta.innerHTML = "✊";
    }
    if(wybor==2 && wybor_op==1){
        wynik.innerHTML = "Wygrał przeciwnik!";
        wybor_oponenta.innerHTML = "✋";
    }
    if(wybor==2 && wybor_op==2){
        wynik.innerHTML = "Remis!";
        wybor_oponenta.innerHTML = "✊";
    }
    if(wybor==2 && wybor_op==3){
        wynik.innerHTML = "Wygrałeś!";
        wybor_oponenta.innerHTML = "✌";
    }
    if(wybor==3 && wybor_op==2){
        wynik.innerHTML = "Wygrał przeciwnik!";
        wybor_oponenta.innerHTML = "✊";
    }
    if(wybor==3 && wybor_op==3){
        wynik.innerHTML = "Remis!";
        wybor_oponenta.innerHTML = "✌";
    }
    if(wybor==3 && wybor_op==1){
        wynik.innerHTML = "Wygrałeś!";
        wybor_oponenta.innerHTML = "✋";
    }
}