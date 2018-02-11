<!DOCTYPE html>
<html>
    <head>
      <meta name="viewport" content="width=device-width",initial-scale=1.0>
      <title>Laughing Gas</title>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/jquery-ui.min.css">
    </head>
    <body>
    <header>
            <div class="row">
                <label id="score" class="col-md-12">Score :0</label>
            </div>

    </header>
    <div id="mobile">
        <img class="mobile" align="right" src="img/batmobile.png">
        <img class="mobile2" align="right" src="img/ontheway.png">

    </div>
    <div id="content">
       <div>
           <div>
               <img class="bat" src="img/minibatman.png" align="left">
           </div>
       </div>
    </div>


    <audio src="audio/batarang.mp3" class="batarang" preload="none" id="batarang" volume="0.8"></audio>
    <audio src="audio/Batman%20The%20Dark%20Knight%20Theme%20-%20Hans%20Zimmer.mp3" autoplay loop="true" volume="0.5" id="background"></audio>
    <audio src="audio/attack.mp3" id="attack" preload="none" volume="0.8"></audio>
    <audio src="audio/Ta%20Da-SoundBible.com-1884170640.mp3" id="tada" preload="none" volume="0.8"></audio>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/arkham.js"></script>
    </body>
</html>
