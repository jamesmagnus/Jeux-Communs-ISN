function Souris(event) {
    
    detente = true;
    
    coord_souris_X = event.clientX - document.getElementById("mon_canvas").offsetLeft;
    coord_souris_Y = event.clientY - document.getElementById("mon_canvas").offsetTop;
}

function Clavier(event) {
    
    //Initialisation de la sélection avant le changement
    /* var skill = document.getElementsByClassName("aff_fusil");
     var i;
     
     for (i=0; i<4; i++){
     skill[i].style.borderColor = "black";
     }*/
    
    
    
    if (event.keyCode == 65) // touche A --> bleu
    {
        color_fusil = couleur.BLEUE;
        
    }
    
    if (event.keyCode == 90) // touche Z --> vert
    {
        color_fusil = couleur.VERT;
        
    }
    
    if (event.keyCode == 69) // touche E --> rouge
    {
        color_fusil = couleur.ROUGE;
    }
    
    if (event.keyCode == 82) // touche R --> recharge
    {
        chargeur = true;
    }
}
