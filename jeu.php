<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="jeu.css" />
    <script src="jeu.js"></script>
    <script src="affichage.js"></script>
</head>
<body onkeyup="Clavier(event)">

    <audio loop preload="metadata">
        <source src="musique/lv1.mp3" type="audio/mpeg">
        ca ne marche pas ?
    </audio>

    <span id="aff_score" class="aff_global">

    </span>

    <canvas id="mon_canvas" width="1000" height="500" onclick="Souris(event)">Votre navigateur ne supporte pas les "canvas"
    </canvas>

    <span id="aff_info" class="aff_global">
        <img class="aff_fusil" src="img/fusil_1.png" />
        <img class="aff_fusil" src="img/fusil_2.png" />
        <img class="aff_fusil" src="img/fusil_3.png" />

        <span id="aff_balle">
            <div id="nb_balle"></div>

            <img class="aff_fusil" src="img/balles.png" width="75px" height="75px"/>
        </span>

    </span>

</body>
</html>
