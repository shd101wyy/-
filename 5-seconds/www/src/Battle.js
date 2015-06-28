BasicGame.Battle = function(game) {
};

BasicGame.Battle.prototype = {
    create: function() {
        this.game.stage.backgroundColor = 0xa3b98b;

        var small_slime1 = this.add.sprite(150, 100, 'smallSlime');
        //small_slime1.scale.x *= 2;
        //small_slime1.scale.y *= 2;

        var small_slime2 = this.add.sprite(250, 100, 'smallSlime');
        //small_slime2.scale.x *= 2;
        //small_slime2.scale.y *= 2;

        var small_slime3 = this.add.sprite(350, 100, 'smallSlime');
        //small_slime3.scale.x *= 2;
        //small_slime3.scale.y *= 2;

        var small_slime4 = this.add.sprite(450, 100, 'smallSlime');
        //small_slime4.scale.x *= 2;
        //small_slime4.scale.y *= 2;

        var small_slime5 = this.add.sprite(550, 100, 'smallSlime');
        //small_slime5.scale.x *= 2;
        //small_slime5.scale.y *= 2;
        //
        this.battle_music = this.add.audio('battleMusic');
        this.battle_music.play();
    },
    update: function() {
    }
};
