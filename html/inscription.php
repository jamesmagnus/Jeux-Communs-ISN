<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="#" />
    <script src="#"></script>
</head>
<body>

    <?php 

    if (isset($_POST['submit']))
    {
        $pseudo = $_POST['pseudo'];
        $mail = $_POST['mail'];
        $mdp = $_POST['mdp'];
        $mdpconfirm = $_POST['mdpconfirm'];

        mysql_connect();
        mysql_select_db();

        $sql = mysql_query('SELECT mail,pseudo FROM ');
        $rows = mysql_num_rows($sql);
        if($rows > 0)
        {
            echo "Erreur : Un compte possédent déjà".$pseudo.$mail."existe déjà...";
        }
        else
        {

        }
    }
    ?>
</body>
</html>
