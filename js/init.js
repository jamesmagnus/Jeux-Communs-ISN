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
    /* On initialise toutes les variables dont on va avoir besoin */
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
