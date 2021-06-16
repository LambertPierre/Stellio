

var cine1;
var cine2;
var cine3;
var cine4;

var deroulement = 1;
var ready = true;

class cinematique extends Phaser.Scene{
    constructor(){
        super("cinematique");
    }
    init(data){
    }
    preload ()
    {

        this.load.spritesheet('cine1', 'assets/UI/cinematique1.png', { frameWidth: 896, frameHeight: 448 });
        this.load.spritesheet('cine2', 'assets/UI/cinematique2.png', { frameWidth: 896, frameHeight: 448 });
        this.load.spritesheet('cine3', 'assets/UI/cinematique3sprite.png', { frameWidth: 896, frameHeight: 448 });
        this.load.spritesheet('cine4', 'assets/UI/cinematique4.png', { frameWidth: 896, frameHeight: 448 });

        
    }

    create ()
    {
        deroulement = 1;
        ready = true;

        cine4 = this.add.sprite(448,224, 'cine4');
        cine3 = this.add.sprite(448,224, 'cine3');
        cine2 = this.add.sprite(448,224, 'cine2');
        cine1 = this.add.sprite(448,224, 'cine1');
        
        
        this.anims.create({
            key: 'cine3Anim',
            frames: this.anims.generateFrameNumbers('cine3', { start: 0, end: 2 }),
            frameRate: 1,
            repeat: 0
        });


        cursors = this.input.keyboard.addKeys(
            {up:Phaser.Input.Keyboard.KeyCodes.Z,
            down:Phaser.Input.Keyboard.KeyCodes.S,
            left:Phaser.Input.Keyboard.KeyCodes.Q,
            right:Phaser.Input.Keyboard.KeyCodes.D,

            timeInput:Phaser.Input.Keyboard.KeyCodes.SPACE,
            platformInput:Phaser.Input.Keyboard.KeyCodes.SHIFT,
            ballInput:Phaser.Input.Keyboard.KeyCodes.E,

            cheat1Input:Phaser.Input.Keyboard.KeyCodes.G,
            cheat3Input:Phaser.Input.Keyboard.KeyCodes.B,

            echapInput:Phaser.Input.Keyboard.KeyCodes.ESC,
        
            });


    }
    
    update ()
    {
        if (deroulement === 1 && ready){
            ready = false
            deroulement = 2;

            this.cameras.main.fadeIn(1000);
            this.cameras.main.zoomTo(1.25, 3000);

            setTimeout(function(){ ready = true }, 3000);

        }
        if (deroulement === 2 && ready){
            ready = false

            cine1.destroy();
            this.cameras.main.fadeIn(500);
            this.cameras.main.setZoom(1);
            this.cameras.main.zoomTo(1.25, 2800);

            deroulement = 3;
            setTimeout(function(){ ready = true }, 2800);

        }
        if (deroulement === 3 && ready){
            ready = false

            cine2.destroy();
            cine3.anims.play('cine3Anim',true);
            //setTimeout(function(){ cine3.anims.play('cine3Anim',false);}, 1500);
            this.cameras.main.fadeIn(500);
            this.cameras.main.setZoom(1);
            this.cameras.main.zoomTo(1.25, 4000);
            
            

            deroulement = 4;
            setTimeout(function(){ ready = true }, 4000);

        }
        if (deroulement === 4 && ready){
            ready = false
            
            cine3.destroy();
            this.cameras.main.setBounds(0, 0, 896, 448);
            this.cameras.main.fadeIn(500);
            this.cameras.main.pan(42, 184, 0, 'Power2');
            this.cameras.main.setZoom(2);
            //this.cameras.main.pan(448, 224, 2000, 'Power2');
            this.cameras.main.zoomTo(1, 3000);
            

            deroulement = 5 ;
            setTimeout(function(){ ready = true }, 4000);

        }

        if (deroulement === 5 && ready){
            this.scene.start("scene1");
        }

        if (cursors.echapInput.isDown){
            this.scene.start("scene1");
        }
    }
}