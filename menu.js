var fond;

var parametre;
var jouer;
var iconModes;
var quitter;

var speedrunMode = false;

var chasse = false;

var boogie;
var boogieAllume = true;

class menu extends Phaser.Scene{
    constructor(){
        super("menu");
    }
    init(data){
    }
    preload ()
    {
        this.load.spritesheet('menu', 'assets/UI/menu.png', { frameWidth: 896, frameHeight: 448 });

        this.load.spritesheet('parametre', 'assets/UI/parametre.png', { frameWidth: 150, frameHeight: 150 });
        this.load.spritesheet('quitter', 'assets/UI/quitter.png', { frameWidth: 268, frameHeight: 132 });
        this.load.spritesheet('jouer', 'assets/UI/jouer.png', { frameWidth: 282, frameHeight: 140 });
        this.load.spritesheet('iconModes', 'assets/UI/iconModes.png', { frameWidth: 244, frameHeight: 132 });

        this.load.spritesheet('boogie', 'assets/UI/lumiere_boogie.png', { frameWidth: 896, frameHeight: 448 });
        

        this.load.spritesheet('parametreIG', 'assets/UI/parametreIG.png', { frameWidth: 99, frameHeight: 101 });


        this.load.spritesheet('continuer', 'assets/UI/continuer.png', { frameWidth: 240, frameHeight: 79 });
        this.load.spritesheet('retourAuMenu', 'assets/UI/retour_au_menu.png', { frameWidth: 337, frameHeight: 83 });


        this.load.spritesheet('dude', 'assets/perso_capacites/perso_animation_sprite.png', { frameWidth: 64, frameHeight: 96 });

        this.load.spritesheet('bouquin', 'assets/deco/bouquin_anim.png', { frameWidth: 96, frameHeight: 64 });

        this.load.spritesheet('tourelle', 'assets/ennemi/tourelle_sprite.png', { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('platform_volante', 'assets/deco/platform_volante_anim.png', { frameWidth: 84, frameHeight: 53 });

        this.load.spritesheet('time_sprite', 'assets/perso_capacites/time_sprite.png', { frameWidth: 1792, frameHeight: 896 });

        this.load.spritesheet('oeil', 'assets/ennemi/oeil_sprite.png', { frameWidth: 384, frameHeight: 384 });

        
    }

    create ()
    {

        fond = this.add.sprite(448,224, 'menu').setScrollFactor(0);


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
                key: 'quitterNo',
                frames: [ { key: 'quitter', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'quitterYes',
                frames: [ { key: 'quitter', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'jouerNo',
                frames: [ { key: 'jouer', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'jouerYes',
                frames: [ { key: 'jouer', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'iconModesNo',
                frames: [ { key: 'iconModes', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'iconModesYes',
                frames: [ { key: 'iconModes', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'boogieAnim',
                frames: this.anims.generateFrameNumbers('boogie', { start: 0, end: 8 }),
                frameRate: 5,
                repeat: -1
            });

            // -------- Animation Echap --------- //

            this.anims.create({
                key: 'continuerNo',
                frames: [ { key: 'continuer', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'continuerYes',
                frames: [ { key: 'continuer', frame: 1 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'retourAuMenuNo',
                frames: [ { key: 'retourAuMenu', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'retourAuMenuYes',
                frames: [ { key: 'retourAuMenu', frame: 1 } ],
                frameRate: 20
            })

            // ------------ In Game ------------- //

            this.anims.create({
                key: 'parametreIGNo',
                frames: [ { key: 'parametreIG', frame: 0 } ],
                frameRate: 20
            })
            this.anims.create({
                key: 'parametreIGYes',
                frames: [ { key: 'parametreIG', frame: 1 } ],
                frameRate: 20
            })

            // ------------ Animation perso ------------- //

            this.anims.create({
                key: 'persoPause',
                frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
                frameRate: 5,
                repeat: -1
            });

            this.anims.create({
                key: 'persoAvance',
                frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 6 }),
                frameRate: 7,
                repeat: -1
            });

            this.anims.create({
                key: 'persoDown',
                frames: [ { key: 'dude', frame: 17 } ],
                frameRate: 20
            })

            this.anims.create({
                key: 'persoSaut1',
                frames: [ { key: 'dude', frame: 7 } ],
                frameRate: 100
            })

            this.anims.create({
                key: 'persoSaut',
                frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 9 }),
                frameRate: 7,
                repeat: -1
            });
            this.anims.create({
                key: 'persoChute',
                frames: this.anims.generateFrameNumbers('dude', { start: 10, end: 11 }),
                frameRate: 7,
                repeat: -1
            });

            this.anims.create({
                key: 'persoJet',
                frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 14 }),
                frameRate: 6,
                repeat: -1
            });

            this.anims.create({
                key: 'persoJetChute',
                frames: this.anims.generateFrameNumbers('dude', { start: 15, end: 16 }),
                frameRate: 10,
                repeat: 1
            });

            this.anims.create({
                key: 'persoTime',
                frames: this.anims.generateFrameNumbers('dude', { start: 17, end: 19 }),
                frameRate: 5,
                repeat: 1
            });

            this.anims.create({
                key: 'persoMort',
                frames: this.anims.generateFrameNumbers('dude', { start: 20, end: 25 }),
                frameRate: 7,
                repeat: 1
            });


            this.anims.create({
                key: 'timeAnim',
                frames: this.anims.generateFrameNumbers('time_sprite', { start: 0, end: 2 }),
                frameRate: 7,
                repeat: 1
            });

            // ------------ Animation Bouquin -------------- //

            this.anims.create({
                key: 'bouquinAnim',
                frames: this.anims.generateFrameNumbers('bouquin', { start: 0, end: 3 }),
                frameRate: 7,
                repeat: -1
            });

            this.anims.create({
                key: 'bouquinAnimCollide',
                frames: this.anims.generateFrameNumbers('bouquin', { start: 0, end: 3 }),
                frameRate: 30,
                repeat: -1
            });

            // ----------- Animation TOURELLE -------------- //

            this.anims.create({
                key: 'tourelleRepos',
                frames: this.anims.generateFrameNumbers('tourelle', { start: 0, end: 1 }),
                frameRate: 7,
                repeat: -1
            });

            this.anims.create({
                key: 'tourelleTire',
                frames: this.anims.generateFrameNumbers('tourelle', { start: 2, end: 4 }),
                frameRate: 5,
                repeat: -1
            });

             // ----------- Animation PLATFORM VOLANTE -------------- //

             this.anims.create({
                key: 'platformVolanteAnim',
                frames: this.anims.generateFrameNumbers('platform_volante', { start: 0, end: 3 }),
                frameRate: 5,
                repeat: -1
            });

            // ----------- Animation PLATFORM VOLANTE -------------- //

            this.anims.create({
                key: 'oeilAnim',
                frames: this.anims.generateFrameNumbers('oeil', { start: 0, end: 4 }),
                frameRate: 5,
                repeat: -1
            });






        
        // ------------------------- Bouton Paramètre --------------------------------- //

        parametre = this.add.sprite(823,105, 'parametre').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        parametre.on('pointerover', function (event) {

            parametre.anims.play('paraYes',true);
            
    
        });
    
        parametre.on('pointerout', function (event) {
    
            parametre.anims.play('paraNo',true);
    
        });

        // ------------------------- Bouton Quitter --------------------------------- //

        quitter = this.add.sprite(440,340, 'quitter').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        quitter.on('pointerover', function (event) {

            quitter.anims.play('quitterYes',true);
            
    
        });
    
        quitter.on('pointerout', function (event) {
    
            quitter.anims.play('quitterNo',true);
    
        });

        quitter.on('pointerdown', function(){

            game.destroy(true, false);

        }, this);

        // ------------------------- Bouton Jouer --------------------------------- //

        jouer = this.add.sprite(540,102, 'jouer').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        jouer.on('pointerover', function (event) {

            jouer.anims.play('jouerYes',true);
            
    
        });
    
        jouer.on('pointerout', function (event) {
    
            jouer.anims.play('jouerNo',true);
    
        });

        jouer.on('pointerdown', function(){

            speedrunMode = false;
            this.scene.start("cinematique");

        }, this);

        // ------------------------- Bouton iconModes --------------------------------- //

        iconModes = this.add.sprite(710,250, 'iconModes').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

        iconModes.on('pointerover', function (event) {

            iconModes.anims.play('iconModesYes',true);
            
    
        });
    
        iconModes.on('pointerout', function (event) {
    
            iconModes.anims.play('iconModesNo',true);
    
        });

        iconModes.on('pointerdown', function(){

            this.scene.start("modes");

        }, this);

        // ------------------------ Lumière de boogie ------------------------------- //
        

        boogie = this.add.sprite(448,224, 'iconModes');


        


    }
    
    update ()
    {
        if (boogieAllume){

            boogie.anims.play('boogieAnim', true);

        }
    }
}