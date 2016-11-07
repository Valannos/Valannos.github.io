<?php
session_start();


if (!isset($_SESSION['id'])) {
    $_SESSION['id'] = 1;
    $_SESSION['filled'] = true;
}

if ($_SESSION['id'] == 1) {
    $_SESSION['trackList'] = array();
}
if (!(isset($_SESSION['addOK']))) {
    $_SESSION['addOK'] = false;
}
?>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="../master.css"/>
        <title>title</title>
        

    </head>
    <body>

        <form action="add_track.php" method="post">

            <fieldset>
                <div class="formular">
                    <legend>Track data formular</legend>
                    <div class="labelfield"> 
                        <label  for="title" >Title track</label>
                        <input type="text" id="title" name="title" placeholder="Ex. Fear of the Dark" name="title">
                    </div>
                    <div class="labelfield">
                        <label  for="year">Year</label> 
                        <input type="number" id="year" name="year" placeholder="Ex. 2001">
                    </div>
                    <div class="labelfield">
                        <label  for="duration">Duration in seconds</label>
                        <input  id="duration" type="number" name="duration" placeholder="Ex. 120">
                    </div>
                    <div class="labelfield">
                        <label for="artiste" >Artiste Name</label>
                        <input  type="text" id="author" name="author" placeholder="Ex. Iron Maiden">
                    </div>
                    <div>
                        <input  type="text" value="true" name="form_yes" hidden>

                        <input  type="submit" value="Submit track to database">
                    </div>  
                </div>
            </fieldset>         
        </form>

        <footer>
            <a href="logout.php">Logout</a>
            <a  href="test_SQL.php">Access tracklist</a>
            <a  href="logon.php">Back to homepage</a>

<?php
if (!($_SESSION['filled'])) {
    echo '<div class = "error" >SOME FIELDS ARE EMPTY</div>';
    $_SESSION['filled'] = true;
}
if ($_SESSION['addOK'] == true) {
    echo '<div class = "success">NEW TRACK SUCCESSFULY ADD</div>';
    $_SESSION['addOK'] = false;
}
?>
        </footer>
    </body>
</html>