/* Enumérations */
var etat = { JEU_EN_COURS: 0, JEU_GAGNE: 1, JEU_PERDU: 2 };
var couleur = { ROUGE: 0, BLEUE: 1, VERT: 2, MULTI: 3 };

/* Variables globales */
var nb = 10;
var color_fusil = couleur.BLEUE;
var coord_souris_X;
var coord_souris_Y;
var detente = false;
var chargeur = false;
var left_marge = 0;

/* Fonction du jeu */

/* Cette fonction initialise les éléments du jeu */
function InitialisationJeu(cibles, fusil) {
    for (var i = 0; i < nb; i++) {
        cibles.push({
            active: true,
            position: -110 * i,
            tapis: 1,
            sens: true,
            type: Math.floor(Math.random() * 4)
        });
    }

    for (var i = 0; i < 3; i++) {
        fusil.push({
            recharge: 10,
            bonus: false
        });
    }

    var information = { nom: "", score: 0, etat: etat.JEU_EN_COURS, nbCibleTouche: 0, vie: 5 };

    return information;
}

window.onload = function Jeu() {
    /* On initialie toutes les variables dont on va avoir besoin */
    var cibles = [];
    var fusil = [];
    var image = [];
    var information = InitialisationJeu(cibles, fusil);

    ChargementAffichage(image);

    /* Cette fonction affiche les cibles */
    Affichage(cibles, image);

    /* Cette fonction augmente puis diminue la position de chaque cible */
    Defilement(cibles, information);

    Souris_Cibles(cibles, fusil, information);
}


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

        if (cibles[i].position > 1 && !cibles[i].sens) {
            cibles[i].position -= 2;
        }
        else if (!cibles[i].sens) {
            cibles[i].sens = true;
            cibles[i].position += 2;
            cibles[i].tapis++;
        }

    }

    setTimeout(function () { Defilement(cibles, information); }, 1000 / 70);
}


function Souris(event) {

    detente = 1;

    coord_souris_X = event.clientX - document.getElementById("mon_canvas").offsetLeft;
    coord_souris_Y = event.clientY - document.getElementById("mon_canvas").offsetTop;
}

function Clavier(event) {

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

function Souris_Cibles(cibles, fusil, information) {
    var detection_cibles_Xmin = 0;
    var detection_cibles_Xmax = 0;

    var detection_cibles_Ymin = 0;
    var detection_cibles_Ymax = 0;

    var centre_cibles_X = 0;
    var centre_cibles_Y = 0;

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

    if (detente) {
        if (fusil[color_fusil].recharge > 0) {
            fusil[color_fusil].recharge--;

        }

        detente = false;
    }

    coord_souris_Y = -1;
    coord_souris_X = -1;

    if (chargeur) {
        fusil[color_fusil].recharge = 10;
        chargeur = false;
    }

    //On a gagné le jeu
    if (information.nbCibleTouche == nb) {

        information.etat = etat.JEU_GAGNE;
        alert('Gagné !');
        return;
    }
    
    //document.getElementById("nb_balles").value = recharge;
    
    setTimeout(function () { Souris_Cibles(cibles, fusil, information); }, 1000 / 90);
}



