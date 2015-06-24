function Souris(event) {
    
    detente = true;
    
    coord_souris_X = event.clientX - document.getElementById("mon_canvas").offsetLeft;
    coord_souris_Y = event.clientY - document.getElementById("mon_canvas").offsetTop;
}

function Clavier(event) {
    
    //Initialisation de la sélection avant le changement de fusil (sauf si on recharge le fusil actuel)
   
    if (event.keyCode != 82)
    {
        var skill = document.getElementsByClassName("aff_fusil");
        for (var i=0; i<3; i++)
        {
            skill[i].style.borderColor = "black";
        }
    }
    
    
    
    if (event.keyCode == 65) // touche A --> bleu
    {
        color_fusil = couleur.BLEUE;
        skill[0].style.borderColor = "red";
    
    }
    
    if (event.keyCode == 90) // touche Z --> vert
    {
        color_fusil = couleur.VERT;
        skill[1].style.borderColor = "red";
        
    }
    
    if (event.keyCode == 69) // touche E --> rouge
    {
        color_fusil = couleur.ROUGE;
        skill[2].style.borderColor = "red";
    }
    
    if (event.keyCode == 82) // touche R --> recharge
    {
        chargeur = true;
    }
}

