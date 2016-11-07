<?php
session_start();
define('SQL_DSN','mysql:host=localhost;dbname=Test;charset=utf8');
define('SQL_USER','root');
define('SQL_PASSWORD','admin');


    

$pdo = new PDO(SQL_DSN,SQL_USER,SQL_PASSWORD);
$update_track = $pdo->prepare('UPDATE track SET title = :title, author = :author, year = :year, duration = :duration WHERE id = :id');
$update_track->bindValue('id', $_POST['id']);
$update_track->bindValue('author', $_POST['author']);
$update_track->bindValue('year', $_POST['year']);
$update_track->bindValue('title', $_POST['title']);
$update_track->bindValue('duration', $_POST['duration']);
$update_track->execute();
echo 'EDIT OVER </br>';
echo '<a href = "test_SQL.php">Revenir à la liste</a>';

