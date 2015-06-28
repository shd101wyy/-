var GameState = function(game) {
};

// Load images and sounds
GameState.prototype.preload = function() {
    this.game.load.image('discovered_place', './assets/discovered_place.png');
};

// create
GameState.prototype.create = function() {
     /*
      * How the following modes take affect.
      *
      * On a laptop (Linux, Chromium browser):
      *   FS Scale  Reg Scale Reg Result  FS Result
      *   On        On        Fills       Fills
      *   On        Off       Unscaled    Fills
      *   Off       On        Fills       Unscaled
      *   Off       Off       Unscaled    Unscaled
      *
      * On a phone (Galaxy S3, Chrome browser):
      *   FS Scale  Reg Scale N Result    FS Result
      *   On        On        Fills       Fills
      *   On        Off       Too big     Unscaled
      *   Off       On        Fills       Unscaled; buggy
      *   Off       Off       Too big     Exact fit
      *
      */
     //game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
     //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

     // Properly centers game in windowed mode, but aligning
     // horizontally makes it off-centered in fullscreen mode.
     //game.scale.pageAlignHorizontally = true;
     //game.scale.pageAlignVertically = true;

     // Docs say this is necessary, but it doesn't seem to change behavior?
     //game.scale.setScreenSize(true);

     // This is necessary to scale before waiting for window changes.
     //game.scale.refresh();

     //game.input.onDown.add(gofull, this);



     // My Code goes here
     game.stage.backgroundColor = 0xa3b98b;

     var discovered_place = this.game.add.sprite(this.game.width/2, this.game.height/2, 'discovered_place');

};

function gofull() {
  if (game.scale.isFullScreen) {
    game.scale.stopFullScreen();
  } else {
    game.scale.startFullScreen(false);
  }
}


var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
