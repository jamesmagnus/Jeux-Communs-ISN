var PAYSAGE = couleur.MULTI + 1;

function Affichage(cibles, image) {

    var canvas = document.getElementById('mon_canvas');
    if (!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    var context = canvas.getContext('2d');
    if (!context) {
        alert("Impossible de récupérer le contexte du canvas");
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(image[PAYSAGE].img, 0, 0, 1680, 1050, 0, 0, canvas.width, canvas.height);

    for (var i = 0; i < nb; i++) {
        if (cibles[i].active == true) {
            context.drawImage(image[cibles[i].type].img, 0, 0, 453, 453, cibles[i].position, (cibles[i].tapis * 100), 80, 80);
        }
    }

    setTimeout(function () { Affichage(cibles, image); }, 1000 / 80);
}

function ChargementAffichage(image) {

    for (var i = couleur.ROUGE; i <= couleur.MULTI; i++) {
        image.push({
            img: new Image()
        });

        image[i].img.src = "img/cible_" + i + ".png";
    }

    image.push({
        img: new Image()
    });

    image[PAYSAGE].img.src = "img/paysage.jpg";
}
