// addition
const addition = function () {
    // declaration variable
    var valeur1 = parseInt (document.getElementById('nombre1').value) ;
    var valeur2 = parseInt (document.getElementById('nombre2').value);

    // calcul des valeur 
    var somme = valeur1+valeur2;

    // resultat calcul
     document.getElementById('resultat').value = somme;
}
addition()


// soustraction
function soustraction() {
    // declaration variable
    var valeur3 = parseInt (document.getElementById('n1').value) ;
    var valeur4= parseInt (document.getElementById('n2').value);

    // calcul des valeur 
    var soustraction = valeur3-valeur4;

    // resultat calcul()
     document.getElementById('calcul').value = soustraction;
}


//multiplication 
function multiplication() {
    // declaration variable
    var valeur5 = parseInt (document.getElementById('saisi1').value) ;
    var valeur6= parseInt (document.getElementById('saisi2').value);

    // calcul des valeur 
    var multiplication = valeur5*valeur6;

    // resultat calcul()
     document.getElementById('resultat1').value = multiplication;
}

// division
function division() {
    // declaration variable
    var valeur7 = parseInt (document.getElementById('saisi3').value) ;
    var valeur8= parseInt (document.getElementById('saisi4').value);

    // calcul des valeur 
    var division = valeur7/valeur8;

    // resultat calcul()
     document.getElementById('resultat2').value = division;
}