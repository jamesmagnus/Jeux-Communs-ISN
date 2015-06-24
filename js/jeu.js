/* Fonction du jeu */
function Defilement(cibles, information) {
    for (var i = 0; i < nb; i++) {   // On decide ici à partir de quel tapis les cibles font perdre de la vie
        if (cibles[i].tapis == 4 && cibles[i].active == true) {
            information.vie--;
            cibles[i].active = false;

            if (information.vie <= 0) {
                information.etat = etat.JEU_PERDU;
                alert('Vous avez perdu');
                return;
            }
        }

        if (cibles[i].position < 1000 && cibles[i].sens) {
            cibles[i].position += 2;
        }
        else if (cibles[i].sens) {
            cibles[i].sens = false;
            cibles[i].tapis++;
        }

        if (cibles[i].position > -100 && !cibles[i].sens) {
            cibles[i].position -= 2;
        }
        else if (!cibles[i].sens) {
            cibles[i].sens = true;
            cibles[i].position += 2;
            cibles[i].tapis++;
        }

    }

    setTimeout(function () { Defilement(cibles, information); }, 1000 / 75);
}



function Souris_Cibles(cibles, fusil, information) {
    
    var detection_cibles_Xmin = 0;
    var detection_cibles_Xmax = 0;

    var detection_cibles_Ymin = 0;
    var detection_cibles_Ymax = 0;

    var centre_cibles_X = 0;
    var centre_cibles_Y = 0;



    if (detente) {
        
        for (var i = 0; i < nb; i++) {
            detection_cibles_Xmin = cibles[i].position;
            detection_cibles_Xmax = cibles[i].position + 80;
            
            detection_cibles_Ymin = cibles[i].tapis * 100;
            detection_cibles_Ymax = cibles[i].tapis * 100 + 80;
            
            centre_cibles_X = (detection_cibles_Xmin + detection_cibles_Xmax) / 2;
            centre_cibles_Y = (detection_cibles_Ymin + detection_cibles_Ymax) / 2;
            
            //on vérifie que la cible est intact et qu'on a choisis le bon fusil
            if ((fusil[color_fusil].recharge > 0) && (cibles[i].active == true) && ((cibles[i].type == color_fusil) || (cibles[i].type == couleur.MULTI))) {
                if (Math.sqrt(((coord_souris_X - centre_cibles_X) * (coord_souris_X - centre_cibles_X)) + ((coord_souris_Y - centre_cibles_Y) * (coord_souris_Y - centre_cibles_Y))) <= 40) {
                    cibles[i].active = false;
                    information.nbCibleTouche++;
                }
            }
            
        }
        
        if (fusil[color_fusil].recharge > 0) {
            fusil[color_fusil].recharge--;

        }

        detente = false;
        coord_souris_Y = -1;
        coord_souris_X = -1;

    }

    
    if (chargeur) {
        fusil[color_fusil].recharge = 10;
        chargeur = false;
    }

    //On a gagné le jeu
    if (information.nbCibleTouche == nb) {

        //information.etat = etat.JEU_GAGNE;
        alert('Gagné !');
        boucle = false;
    
        setTimeout(function() { NiveauSupp(cibles,fusil,information)}, 1000 / 80);
        return;
    }
    
    //document.getElementById("nb_balles").value = recharge;
    
    setTimeout(function () { Souris_Cibles(cibles, fusil, information); }, 1000 / 90);
}



