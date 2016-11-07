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

    </head>
    <body>
        <table>
            <caption>Tracklist</caption>
            <thead>
                <tr>
                    <th>Track Name</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>

                <?php
                $reponse = $pdo->prepare("SELECT * FROM track WHERE year > :year");
                $reponse->bindValue("year", 0000);
                $reponse->execute();

                while ($donnees = $reponse->fetch()) {
                    echo '<tr>';
                    echo '<td><strong>' . $donnees['title'] . '</td>';
                    echo '<td>' . $donnees['author'] . '</td>';
                    echo '<td>' . $donnees['year'] . '</td>';
                    echo '<td>' . $donnees['duration'] . '</td>';
                    if ($_SESSION['currentUser'] === 'admin') {
                        ?>
                    <td><a href="supress.php?id=<?php echo $donnees['id'] ?>">Remove</a></td>
                    <td><a href="edit.php?id=<?php echo $donnees['id'] ?>">Edit</a></td> 

    <?php
    }
    echo '</tr>';
}
?>

        </tbody>
    </table>
    <?php
    if ($_SESSION['currentUser'] === 'admin') {
        echo '<a href="accueil.php">Back to formular</a>';
    }
        ?>
    <a  href="logon.php">Back to homepage</a>
</body>
</html>



