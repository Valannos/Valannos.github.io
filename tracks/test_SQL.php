<?php
session_start();
define('SQL_DSN', 'mysql:host=localhost;dbname=Test;charset=utf8');
define('SQL_USER', 'root');
define('SQL_PASSWORD', 'admin');

$pdo = new PDO(SQL_DSN, SQL_USER, SQL_PASSWORD);
?>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="../master.css"/>
        <title>title</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

    </head>
    <body>
        <table class="table table-striped ">
            <caption><h2 class="text-center">Tracklist</h2></caption>
            <thead>
                <tr class="info ">
                    <th class="text-center">Track Name</th>
                    <th class="text-center">Author</th>
                    <th class="text-center">Year</th>
                    <th class="text-center">Duration</th>
                </tr>
            </thead>
            <tbody>

                <?php
                $reponse = $pdo->prepare("SELECT * FROM track WHERE year > :year");
                $reponse->bindValue("year", 0000);
                $reponse->execute();

                while ($donnees = $reponse->fetch()) {
                    echo '<tr>';
                    echo '<td class="text-center"><strong>' . $donnees['title'] . '</td>';
                    echo '<td class="text-center">' . $donnees['author'] . '</td>';
                    echo '<td class="text-center">' . $donnees['year'] . '</td>';
                    echo '<td class="text-center">' . $donnees['duration'] . '</td>';
                    if ($_SESSION['currentUser'] === 'admin') {
                        ?>
                    <td><a class="btn btn-danger" href="supress.php?id=<?php echo $donnees['id'] ?>">Remove</a></td>
                    <td><a class="btn btn-warning" href="edit.php?id=<?php echo $donnees['id'] ?>">Edit</a></td> 

                    <?php
                }
                echo '</tr>';
            }
            ?>

        </tbody>
    </table>
    <?php
    if ($_SESSION['currentUser'] === 'admin') {
        ?>
        <a class="btn btn-primary" href="accueil.php"><i class="fa fa-user-md" aria-hidden="true"></i> Back to formular</a>
        <?php
    }
    ?>
    <a class="btn btn-default" href="logon.php"><i class="fa fa-home" aria-hidden="true"></i> Back to homepage</a>
</body>
</html>



