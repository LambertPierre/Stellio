var fondModes;

var retour;
var speedrun;
var chasseBouton;

var modeSpeedrun = false;


class modes extends Phaser.Scene{
    constructor(){
        super("modes");
    }
    init(data){
    }
    preload ()
    {
        this.load.spritesheet('modes', 'assets/UI/modes.png', { frameWidth: 896, frameHeight: 448 });

        this.load.spritesheet('parametre', 'assets/UI/parametre.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('retour', 'assets/UI/retour.png', { frameWidth: 154, frameHeight: 83 });
        this.load.spritesheet('speedrun', 'assets/UI/speedrun.png', { frameWidth: 325, frameHeight: 147 });
        this.load.spritesheet('chasse', 'assets/UI/chasse_aux_livres.png', { frameWidth: 474, frameHeight: 95 });
        

        
    }

    create ()
    {

        fondModes = this.add.sprite(448,224, 'modes').setScrollFactor(0);


        // ----------------- Animation --------------------- //

            this.anims.create({
                key: 'paraNo',
                frames: [ { key: 'parametre', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'paraYes',
                frames: [ { key: 'parametre', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'retourNo',
                frames: [ { key: 'retour', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'retourYes',
                frames: [ { key: 'retour', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'speedrunNo',
                frames: [ { key: 'speedrun', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'speedrunYes',
                frames: [ { key: 'speedrun', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'chasseNo',
                frames: [ { key: 'chasse', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'chasseYes',
                frames: [ { key: 'chasse', frame: 1 } ],
                frameRate: 20
            })


        
        // ------------------------- Bouton Paramètre --------------------------------- //

        //parametre = this.add.sprite(823,105, 'parametre').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        parametre.on('pointerover', function (event) {

            parametre.anims.play('paraYes',true);
            
    
        });
    
        parametre.on('pointerout', function (event) {
    
            parametre.anims.play('paraNo',true);
    
        });

        // ------------------------- Bouton Retour --------------------------------- //

        retour = this.add.sprite(760,335, 'retour').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        retour.on('pointerover', function (event) {

            retour.anims.play('retourYes',true);
            
    
        });
    
        retour.on('pointerout', function (event) {
    
            retour.anims.play('retourNo',true);
    
        });

        retour.on('pointerdown', function(){

            this.scene.start("menu");

        }, this)

        // ------------------------- Bouton Speedrun --------------------------------- //
        
        speedrun = this.add.sprite(370,315, 'speedrun').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        speedrun.on('pointerover', function (event) {

            speedrun.anims.play('speedrunYes',true);
            
    
        });
    
        speedrun.on('pointerout', function (event) {
    
            speedrun.anims.play('speedrunNo',true);
    
        });

        speedrun.on('pointerdown', function(){

            speedrunMode = true;
            this.scene.start("scene1");

        }, this);

        // ------------------------- Bouton Chasse aux livres --------------------------------- //
        
        chasseBouton = this.add.sprite(440,135, 'chasse').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        chasseBouton.on('pointerover', function (event) {

            chasseBouton.anims.play('chasseYes',true);
            
    
        });
    
        chasseBouton.on('pointerout', function (event) {
    
            chasseBouton.anims.play('chasseNo',true);
    
        });

        chasseBouton.on('pointerdown', function(){

            chasse = true;
            this.scene.start("scene1");

        }, this);

        

        

        


    }
    
    update ()
    {
        
    }
}