<?php
define('SQL_DSN', 'mysql:host=localhost;dbname=Test;charset=utf8');
define('SQL_USER', 'root');
define('SQL_PASSWORD', 'admin');
session_start();

if (!isset($_SESSION['usr_not_found'])) {
    $_SESSION['usr_not_found'] = false;
}

if (!(isset($_SESSION['usr_not_valid']))) {
    $_SESSION['usr_not_valid'] = false;
}
if (!(isset($_SESSION['empty_username']))) {
    $_SESSION['empty_username'] = false;
}
if (!(isset($_SESSION['empty_password']))) {
    $_SESSION['empty_password'] = false;
}
if (!(isset($_SESSION['wrongPassword']))) {
    $_SESSION['wrongPassword'] = false;
}

$pdo = new PDO(SQL_DSN, SQL_USER, SQL_PASSWORD);
?>


<!DOCTYPE html>
<html>
    <head>
        <title>title</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="../master.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" > 

    </head>
    <body>
        <nav class ="container">

            <div class="row">

                <div class="col-lg-12 text-capitalize"><h1>Welcome to tracklist !</h1></div>

            </div>


            <?php
            /* STRATING FROM THIS POINT, ALL FIELDS, BUTTONS ETC... WILL BE DISPLAYED ONLY 
             * IF !!!NO!!!! VALID USER IS LOGGED
             */


            if (!isset($_SESSION['currentUser'])) {
                $_SESSION['userLogged'] = false;
                echo '<h3 class = "row">Your are currently not logged</h3>';
                ?>
                <!--LOGIN FORMULAR-->

                <form class="col-lg-4 well" action="login_confirm.php" method="post">
                    <legend><i class="fa fa-user" aria-hidden="true"></i> Please login...</legend>
                    <div    class="form-group">
                        <label  for="username">Username</label>
                        <input class="form-control" type="text" id="username" name="username" </input>
                    </div>
                    <div class="form-group">
                        <label for="pass">Password</label>
                        <input class="form-control" type="password" id="pass" name="pass" </input>
                    </div>


                    <button class="btn btn-primary" type="submit">Connect</button>
                    <button class="btn btn-default" type="reset">Reset</button>

                    <?php
                    if ($_SESSION['usr_not_found'] == true) {

                        $_SESSION['usr_not_found'] = false;

                        echo '<div class = "error" >USER DOESN\'T EXIST</div>';
                    }
                    if ($_SESSION['wrongPassword'] == true) {

                        $_SESSION['wrongPassword'] = false;
                        echo '<div class = "error" >USERNAME AND PASSWORD DON\'T MATCH.</div>';
                    }
                    ?>

                </form>

                <!--REGISTER FORMULAR-->

                <form class="col-lg-offset-2 col-lg-4 well" action="reg_confirm.php" method="post">
                    <legend><i class="fa fa-user-plus" aria-hidden="true"></i> ...or register</legend>
                    <div class="form-group">
                        <label  for="username"> Username</label>
                        <input class="form-control" type="text" id="username" name="username" required</input>
                    </div>
                    <div class="form-group">
                        <label for="pass">Password</label>
                        <input class="form-control" type="password" id="pass" name="pass" required</input>
                    </div>

                    <button class="btn btn-primary" type="submit">Register</button>
                    <button class="btn btn-default" type="reset">Reset</button>

                    <?php
                    if ($_SESSION['usr_not_valid'] == true) {

                        $_SESSION['usr_not_valid'] = false;

                        echo '<div class = "error" >USERNAME ALREADY USED</div>';
                    }

                    if ($_SESSION['empty_username'] == true) {

                        $_SESSION['empty_username'] = false;
                        echo '<div class = "error" >USERNAME FIELD IS EMPTY</div>';
                    }



                    if ($_SESSION['empty_password'] == true) {

                        $_SESSION['empty_password'] = false;


                        echo '<div class = "error" >PASSWORD FIELD IS EMPTY</div>';
                    }
                    ?>

                </form>

                <?php
                /* STRATING FROM THIS POINT, ALL FIELDS, BUTTONS ETC... WILL BE DISPLAYED ONLY 
                 * IF A VALID USER IS LOGGED
                 */
            } else {

                echo '<div class="row"><h3>Your are currently logged as ' . $_SESSION['currentUser'] . '.</h3></div>'
                . '<div class="row">';

                if ($_SESSION['currentUser'] === 'admin') {
                    ?>
                    <div class="col-md-5">
                        <div class="btn-group btn-group-justified">
                            <a class="btn btn-primary" href="accueil.php"> <i class="fa fa-user-md" aria-hidden="true"></i> Add track</a>
                            <a class="btn btn-primary" href="accueil_author.php"> <i class="fa fa-user" aria-hidden="true"></i> Add author</a>
                            <a class="btn btn-primary" href=""> <i class="fa fa-user-md" aria-hidden="true"></i> Manage users</a>
                        </div>
                    </div>
                    <?php
                }
                ?>                    
                <div class="col-md-7">
                    <div class="btn-group  btn-group-justified">
                        <a class="btn btn-primary" href="author_list.php"><i class="fa fa-users" aria-hidden="true"></i> Access authorlist</a>
                        <a class="btn btn-info" href="test_SQL.php"><i class="fa fa-music" aria-hidden="true"></i> Access tracklist</a>
                        <a class="btn btn-success" href="playlist_list.php"><i class="fa fa-headphones" aria-hidden="true"></i> Access playlist</a>
                        <a class="btn btn-warning" href="create_playlist.php"><i class="fa fa-headphones" aria-hidden="true"></i> Create playlist</a>
                    </div>
                </div>
                <?php
                echo '</div>';
            }
            ?>
            <div class="row">
                <?php
                if (isset($_SESSION['currentUser'])) {
                    echo '<br><div class="col-md-12">';
                    echo '<a class = "btn btn-danger btn-block" href="logout.php"><i class="fa fa-user-times" aria-hidden="true"></i> Click here to disconnect</a>';
                    echo '</div> ';
                }
                ?>
            </div>
        </nav>

    </body>
</html>
