function wpisz(znak){
    document.getElementById('wpis').value += znak;
}

function czysc(){
    document.getElementById('wpis').value = "";
}

function wynik(){
    try{
        document.getElementById('wpis').value = eval(document.getElementById('wpis').value);
    }
    catch(error){
        document.getElementById('wpis').value = "Błąd";
    }
    }
