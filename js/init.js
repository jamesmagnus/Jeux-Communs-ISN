/* Enumérations */
var etat = { JEU_EN_COURS: 0, JEU_GAGNE: 1, JEU_PERDU: 2 };
var couleur = { BLEUE: 0, VERT: 1, ROUGE: 2, MULTI: 3 };

/* Variables globales */
var coord_souris_X = -1;
var coord_souris_Y = -1;
var clic = false;
var toucheCode = -1;
var left_marge = 0;
var boucle = true;

window.onload = function Jeu() {
    /* On initialise toutes les variables dont on va avoir besoin */
    var cibles = [];
    var fusil = [];
    var image = [];
    var information = InitialisationJeu(cibles, fusil);
    
    /* Input */
    GestionSouris(information);
    GestionClavier(information);
    
    ChargementAffichage(image);
    
    /* Cette fonction affiche les cibles et se répète */
    Affichage(cibles, image, information);
    
    /* Cette fonction déplacee chaque cible et se répète */
    Defilement(cibles, information);
    
    Souris_Cibles(cibles, fusil, information);
}


/* Cette fonction initialise les éléments du jeu */
function InitialisationJeu(cibles, fusil) {
    
    var information = { nom: "", score: 0, etat: etat.JEU_EN_COURS, nbCibleTouche: 0, nbCible: 1, colorFusil: -1, detente: false, chargeur: false, vie: 5 };
    
    for (var i = 0; i < information.nbCible; i++) {
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
    
    return information;
}