function Souris(event) {
    
    clic = true;
    
    coord_souris_X = event.clientX - document.getElementById("mon_canvas").offsetLeft + window.pageXOffset;
    coord_souris_Y = event.clientY - document.getElementById("mon_canvas").offsetTop + window.pageYOffset;
    
    /* DEBUG */
    document.getElementById("debug").innerHTML = document.getElementById("debug").innerHTML + "Position: " + coord_souris_X + ", " + coord_souris_Y + "<br>";
    /* */
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
        
        var skill = document.getElementsByClassName("aff_fusil");
        for (var i=0; i<3; i++)
        {
            skill[i].style.borderColor = "black";
        }
        
        switch(toucheCode)
        {
            case 65:    // touche A --> bleu
            information.colorFusil = couleur.BLEUE;
            skill[0].style.borderColor = "red";
            break;
            
            case 90:    // touche Z --> vert
            information.colorFusil = couleur.VERT;
            skill[1].style.borderColor = "red";
            break;
            
            case 69:    // touche E --> rouge
            information.colorFusil = couleur.ROUGE;
            skill[2].style.borderColor = "red";
            break;
            
            case 82:    // touche R --> recharge
            information.chargeur = true;
            break;
            
            default:
            break;
        }
    
    toucheCode = -1;
    }
}

