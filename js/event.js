function Souris(event) {
    
    clic = true;
    
    coord_souris_X = event.clientX - document.getElementById("mon_canvas").offsetLeft;
    coord_souris_Y = event.clientY - document.getElementById("mon_canvas").offsetTop;
    
    /* DEBUG */
    document.getElementById("debug").innerHTML = document.getElementById("debug").innerHTML + "Position: " + coord_souris_X + ", " + coord_souris_Y + "<br>";
}

function GestionSouris(information){
    if(clic){
        information.detente = true;
        clic = false;
    }
}

function Clavier(event) {

    toucheCode = event.keyCode;
}

function GestionClavier(information){
    
    if(toucheCode != -1){
        
    //Initialisation de la sélection avant le changement de fusil (sauf si on recharge le fusil actuel)
    if (toucheCode != 82)
    {
        var skill = document.getElementsByClassName("aff_fusil");
        for (var i=0; i<3; i++)
        {
            skill[i].style.borderColor = "black";
        }
    }
    
    if (toucheCode == 65) // touche A --> bleu
    {
        information.colorFusil = couleur.BLEUE;
        skill[0].style.borderColor = "red";
    
    }
    
    if (toucheCode == 90) // touche Z --> vert
    {
        information.colorFusil = couleur.VERT;
        skill[1].style.borderColor = "red";
        
    }
    
    if (toucheCode == 69) // touche E --> rouge
    {
        information.colorFusil = couleur.ROUGE;
        skill[2].style.borderColor = "red";
    }
    
    if (toucheCode == 82) // touche R --> recharge
    {
        information.chargeur = true;
    }
    
    toucheCode = -1;
    }
}

