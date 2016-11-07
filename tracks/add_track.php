<?php

session_start();
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Driver definition for SQL request */

define('SQL_DSN', 'mysql:host=localhost;dbname=Test;charset=utf8');
define('SQL_USER', 'root');
define('SQL_PASSWORD', 'admin');

$pdo = new PDO(SQL_DSN, SQL_USER, SQL_PASSWORD);

/* Error message in case of empty field */



if (empty($_POST['title']) || empty($_POST['year']) || empty($_POST['author']) || empty($_POST['duration'])) {
    $_SESSION['filled'] = false;
    header('location:accueil.php');
} else {
    $insert_track = $pdo->prepare('INSERT INTO track (title, author, year, duration) VALUES (:title, :author, :year, :duration)');
    $insert_track->bindValue('title', $_POST['title']);
    $insert_track->bindValue('author', $_POST['author']);
    $insert_track->bindValue('year', $_POST['year']);
    $insert_track->bindValue('duration', $_POST['duration']);
    $insert_track->execute();
    $_SESSION['addOk'] = true;
    header('Location:' . $_SERVER['PHP_SELF']);
}



header('location:accueil.php');
?>