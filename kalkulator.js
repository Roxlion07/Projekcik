function wpisz(znak){
    document.getElementById('wpis').value += znak;
}

function czysc(){
    document.getElementById('wpis').value = "";
}

function wynik(){
    try{
        document.getElementById('wpis').value = eval(document.getElementById('wpis').value);
        if(document.getElementById('wpis').value=="Infinity"){
            document.getElementById('wpis').value="Nie dziel przez zero!";
        }
    }
    catch(error){
        document.getElementById('wpis').value = "Błąd";
    }
    }
