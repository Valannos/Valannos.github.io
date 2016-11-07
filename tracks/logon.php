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



<html>
    <head>
        <title>title</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="../master.css"/>

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
                <legend>Please login...</legend>
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
                <legend>...or register</legend>
                <div class="form-group">
                    <label  for="username">Username</label>
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
</nav>





            <?php
            /* STRATING FROM THIS POINT, ALL FIELDS, BUTTONS ETC... WILL BE DISPLAYED ONLY 
             * IF A VALID USER IS LOGGED
             */
        } else {

            echo '<h3>Your are currently logged as ' . $_SESSION['currentUser'] . ' .</h3>';
            if ($_SESSION['currentUser'] === 'admin') {
                echo '<a href="accueil.php">Access formular</a>';
            }
            ?>

        <a class="btn btn-info" href="test_SQL.php">Access tracklist</a>
            <a class="btn btn-success" href="playlist_list.php">Access playlist</a>
            <a class="btn btn-warning" href="create_playlist.php">Create playlist</a>
            <?php
        }




        if (isset($_SESSION['currentUser'])) {
            echo '<div class="col-lg-4">';
            echo '<a class = "btn btn-danger" href="logout.php">Click here to disconnect</a>';
            echo '</div> ';
        }
        ?>



    </body>
</html>
