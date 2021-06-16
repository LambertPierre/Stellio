var player;
var playerMort = false;
var direction = 'right';


var retour = '1';

// ----- Booléen pour l'anim ----- //

var persoAnimSaut = false;
var persoAnimJet = false;
var persoAnimTime = false;

var bouquinAnim = false;

var tourelleAnim = false;
var tourelleTire = false;

var tourelle2Anim = false;
var tourelle2Tire = false;

var tourelle3Anim = false;
var tourelle3Tire = false;

var tourelle4Anim = false;
var tourelle4Tire = false;

// ------------------------------ //

var echap;
var echapOuvert = false;
var continuer;
var retourAuMenu;

var godMode = false;
var godModeCD = true;

var speedrunTimer = 0;
var speedrunMinute = 0;
var textTimer;
var loopTimer;

var cursors;

var iconTime;
var iconPlatform;
var iconBall;

var parametreIG;


var jumpCD = true;

var itemPlatform;

var platforms;
var platform;
var platformCD = true;
var platformActivated = false;
var platformCollected = false;
var platformTouched = false;
var saveVeloY=0;
var saveVeloX=0;

var itemTime;

var timeCD = true;
var timeCollected = false;
var timeActivated = false;

var timeAnim;
var timeFiltre = false;
var time_etoile1;
var time_etoile2;


var itemBall;

var balls;
var ball;
var ballCD = true;
var ballCollected = false;
var ballActivated = false;

var bouquins;
var bouquin;
var bouquin2;
var bouquin3;
var bouquin4;
var bouquin5;
var bouquin6;
var bouquin7;

var tourelles;
var tourelle;
var tourelleRepos = false;
var tourActivated = false;
var tourBalls;
var tourBall;

var tourelle2;
var tourelle2Repos = false;
var tour2Activated = false;
var tour2Ball;

var tourelle3;
var tourelle3Repos = false;
var tour3Activated = false;
var tour3Ball;

var tourelle4;
var tourelle4Repos = false;
var tour4Activated = false;
var tour4Ball;

var grenouille;
var yeux;
var oeil;
var oeilActivated = false;

var gameOver = false;
//ance = false;

// -------------- DECORATION --------------- //

var fondespace;
var fond;
var biblio1P2;

var particule;
var emitter;



var etoile_corrompu;

var fond_oeil;
var musicOeilConfig;

var musicOeilLance = false;
var shakeTimer = true;


class scene3 extends Phaser.Scene{
    constructor(){
        super("scene3");
    }
    init(data){
    }
    preload ()
    {
        this.load.spritesheet('dude', 'assets/perso_capacites/perso_animation_sprite.png', { frameWidth: 64, frameHeight: 96 });

        this.load.audio('fond_oeil', 'assets/music/audio_oeil.mp3');

        this.load.image('tiles','assets/tileset.png');
        this.load.tilemapTiledJSON('map3','assets/s3.json');

        this.load.spritesheet('platform', 'assets/platform_espace.png', { frameWidth: 128, frameHeight: 64 });

        this.load.spritesheet('ball', 'assets/ball.png', { frameWidth: 64, frameHeight: 64 });

        this.load.image('platfvol', 'assets/deco/platform_volante_anim.png', { frameWidth: 84, frameHeight: 53 });

        this.load.image('iconTime', 'assets/UI/iconTime.png', { frameWidth: 96, frameHeight: 96 });
        this.load.image('iconPlatform', 'assets/UI/iconPlatform.png', { frameWidth: 96, frameHeight: 96 });
        this.load.image('iconBall', 'assets/UI/iconBall.png', { frameWidth: 96, frameHeight: 96 });

        this.load.spritesheet('cosmic_cat', 'assets/cosmic_cat.png', { frameWidth: 1080, frameHeight: 1080 });

        this.load.spritesheet('tourelle', 'assets/ennemi/tourelle_sprite.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('tourBall', 'assets/ennemi/tourBall.png', { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('oeil', 'assets/ennemi/oeil_sprite.png', { frameWidth: 384, frameHeight: 384 });
        this.load.spritesheet('particule_oeil', 'assets/ennemi/particule_oeil.png', { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet('grenouille', 'assets/grenouille.png', { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('bouquin', 'assets/deco/bouquin_anim.png', { frameWidth: 96, frameHeight: 64 });

        this.load.spritesheet('livre', 'assets/livre.png', { frameWidth: 64, frameHeight: 32 });

        this.load.spritesheet('echap', 'assets/UI/echap.png', { frameWidth: 896, frameHeight: 448 });

        this.load.spritesheet('continuer', 'assets/UI/continuer.png', { frameWidth: 240, frameHeight: 79 });
        this.load.spritesheet('retourAuMenu', 'assets/UI/retour_au_menu.png', { frameWidth: 337, frameHeight: 83 });

        this.load.spritesheet('parametreIG', 'assets/UI/parametreIG.png', { frameWidth: 99, frameHeight: 101 });

        this.load.spritesheet('parametreIG', 'assets/UI/parametreIG.png', { frameWidth: 99, frameHeight: 101 });

        this.load.spritesheet('livreColl', 'assets/deco/livreColl.png', { frameWidth: 64, frameHeight: 64 });

        // ----------- déco test ------------ //

        this.load.spritesheet('fondespace', 'assets/deco/fondespace.png', { frameWidth: 1920, frameHeight: 960 });

        this.load.spritesheet('fond', 'assets/deco/fond.png', { frameWidth: 1920, frameHeight: 960 });

        this.load.spritesheet('biblio1P2', 'assets/deco/biblio1_plan2.png', { frameWidth: 960, frameHeight: 960 });

        // -------- anim' capacité --------- //
        this.load.spritesheet('time_sprite', 'assets/perso_capacites/time_sprite.png', { frameWidth: 1792, frameHeight: 896 });

        this.load.spritesheet('time_etoile1', 'assets/perso_capacites/time_etoile1.png', { frameWidth: 1792, frameHeight: 896 });
        this.load.spritesheet('time_etoile2', 'assets/perso_capacites/time_etoile2.png', { frameWidth: 1792, frameHeight: 896 });

        // ------------- déco ------------- //

        this.load.spritesheet('particule', 'assets/deco/particule.png', { frameWidth: 16, frameHeight: 16 });


        this.load.spritesheet('etoile_corrompu', 'assets/deco/etoile_corrompu.png', { frameWidth: 489, frameHeight: 484 });


    }

    create ()
    {

        /*const map= this.make.tilemap({ key: 'map1', tileWidth:64, tileHeight:64});
        const tileset = map.addTilesetImage('stellio_jeu_de_tuiles32', 'tiles');*/

        const map3= this.make.tilemap({ key: 'map3', tileWidth:32, tileHeight:32});
        const tileset3 = map3.addTilesetImage('tileset', 'tiles');
        

        // -------------------------------------------------------- DECORATION TEST ------------------------------------------------- //

        fondespace = this.add.sprite(960, 448, 'fondespace').setScrollFactor(0);

        
        const plan1 = map3.createLayer('plan1', tileset3, 0, 0);
        const obstacle = map3.createLayer('plan0', tileset3, 0, 0);
        obstacle.setCollisionByExclusion(-1,true);
        const plan_deco = map3.createLayer('deco', tileset3, 0, 0);
        const violet = map3.createLayer('violet', tileset3, 0, 0);
        violet.setCollisionByExclusion(-1,true);
        
        if (!speedrunMode){
            if (checkpoint < 14 ){
                player = this.physics.add.sprite(304,593, 'dude');
                //player.setCollideWorldBounds(true);
                player.body.height = 62;
                player.body.width = 34;
                player.body.setOffset(15, 34);
            }
            if (checkpoint == 14){
                player = this.physics.add.sprite(864,749, 'dude');
                //player.setCollideWorldBounds(true);
                player.body.height = 62;
                player.body.width = 34;
                player.body.setOffset(15, 34);
                if (oeilActivated){
                    oeil = yeux.create(player.x-400, player.y-300, 'oeil');
                    oeil.body.allowGravity = false;
                }
            }
            if (checkpoint == 15){
                
                player = this.physics.add.sprite(1375,595, 'dude');
                //player.setCollideWorldBounds(true);
                player.body.height = 62;
                player.body.width = 34;
                player.body.setOffset(15, 34);
                if (oeilActivated){
                    oeil = yeux.create(player.x-400, player.y-300, 'oeil');
                    oeil.body.allowGravity = false;
                }
            }
            if (checkpoint == 16){
                
                player = this.physics.add.sprite(2528,488, 'dude');
                //player.setCollideWorldBounds(true);
                player.body.height = 62;
                player.body.width = 34;
                player.body.setOffset(15, 34);
                if (oeilActivated){
                    oeil = yeux.create(player.x-400, player.y-300, 'oeil');
                    oeil.body.allowGravity = false;
                }
            }
            if (checkpoint == 17){
                
                player = this.physics.add.sprite(3953,681, 'dude');
                //player.setCollideWorldBounds(true);
                player.body.height = 62;
                player.body.width = 34;
                player.body.setOffset(15, 34);
                if (oeilActivated){
                    oeil = yeux.create(player.x-400, player.y-300, 'oeil');
                    oeil.body.allowGravity = false;
                }
            }
            if (checkpoint == 18){
                
                player = this.physics.add.sprite(4621,657, 'dude');
                //player.setCollideWorldBounds(true);
                player.body.height = 62;
                player.body.width = 34;
                player.body.setOffset(15, 34);
                if (oeilActivated){
                    oeil = yeux.create(player.x-400, player.y-300, 'oeil');
                    oeil.body.allowGravity = false;
                }
            }



        }
        else  {
            player = this.physics.add.sprite(304,593, 'dude');
                //player.setCollideWorldBounds(true);
                player.body.height = 62;
                player.body.width = 34;
                player.body.setOffset(15, 34);
        }
        
        
        

        this.physics.add.collider(player, obstacle);


        this.cameras.main.fadeIn(1000);
        this.cameras.main.setBounds(0, 0, 6400, 960);
        this.cameras.main.startFollow(player);
        /*this.cameras.main.setZoom(1.3);
        this.cameras.main.fadeIn(1000);*/



        // ------------------ VIOLET --------------------//

        this.physics.add.collider(player, violet, violetPlayer);

        function violetPlayer(){
            if (!playerMort){
                player.setVelocity(0,0);

                playerMort = true

                // ---------------- Reset des capacités ------------------ //

                timeActivated = false;
                timeCD = true;

                if (!platformCD){
                    platform.destroy();
                }
                platformCD = true;

                if (ballActivated){
                    ball.destroy();
                }
                ballActivated = false;
                ballCD = true;

                player.anims.play('persoMort', true);


                setTimeout(function(){
                if (!speedrunMode){
                    if (checkpoint == 13 && playerMort){
                        player.x = 304;
                        player.y = 593;
                        playerMort = false;
                        if (oeilActivated){
                            oeil.alpha = 1;
                            oeil.x = player.x -400;
                            oeil.y = player.y -300;
                        }
                    }
                    if (checkpoint == 14 && playerMort){
                        player.x = 864;
                        player.y = 749;
                        playerMort = false;
                        if (oeilActivated){
                            oeil.alpha = 1;
                            oeil.x = player.x -400;
                            oeil.y = player.y -300;
                        }
                    }
                    if (checkpoint == 15 && playerMort){
                        player.x = 1375;
                        player.y = 595;
                        playerMort = false;
                        if (oeilActivated){
                            oeil.alpha = 1;
                            oeil.x = player.x -400;
                            oeil.y = player.y -300;
                        }
                    }
                    if (checkpoint == 16 && playerMort){
                        player.x = 2528;
                        player.y = 488;
                        playerMort = false;
                        if (oeilActivated){
                            oeil.alpha = 1;
                            oeil.x = player.x -400;
                            oeil.y = player.y -300;
                        }
                    }
                    if (checkpoint == 17 && playerMort){
                        player.x = 3953;
                        player.y = 681;
                        playerMort = false;
                        if (oeilActivated){
                            oeil.alpha = 1;
                            oeil.x = player.x -400;
                            oeil.y = player.y -300;
                        }
                    }
                    if (checkpoint == 18 && playerMort){
                        player.x = 4621;
                        player.y = 627;
                        playerMort = false;
                        if (oeilActivated){
                            oeil.alpha = 1;
                            oeil.x = player.x -400;
                            oeil.y = player.y -300;
                        }
                    }

                }

                else{
                    
    
                    speedrunTimer = 0;
                    speedrunMinute = 0;
    
                    timeCollected = false;
                    platformCollected = false;
                    ballCollected = false;
    
                    this.scene.start('scene1');

                    player.x = 320;
                    player.y = 640;
    

                }
                    // -------------------- Reset des Ennemis ---------------------//

                    
                    if (tourActivated){
                        tourBall.destroy()
                        tourActivated = false;
                    }
        
        
                    if (tour2Activated){
                        tour2Ball.destroy()
                        tour2Activated = false;
                    }

                    if (tour3Activated){
                        tour3Ball.destroy()
                        tour3Activated = false;
                    }

                    if (tour4Activated){
                        tour4Ball.destroy()
                        tour4Activated = false;
                    }



                    if (oeilActivated){
                    oeil.destroy();
                    oeil = yeux.create(player.x-400, player.y-200, 'oeil');
                    oeil.body.allowGravity = false;

                    }


                }, 900);

                

                

            }
        }
            
        // -------------- CHATS COSMICS ------------------//

        /*itemTime = this.physics.add.sprite(1040, 523, 'cosmic_cat').setScale(0.05);
        itemTime.body.allowGravity = false;
        this.physics.add.overlap(itemTime, player, itemTimePlayer);

        function itemTimePlayer(itemTime, player){
            timeCollected = true;
            itemTime.destroy();
        }


        itemPlatform = this.physics.add.sprite(3760, 580, 'cosmic_cat').setScale(0.05);
        itemPlatform.body.allowGravity = false;
        this.physics.add.overlap(itemPlatform, player, itemPlatformPlayer);

        function itemPlatformPlayer(itemPlatform, player){
            platformCollected = true;
            itemPlatform.destroy();
        }*/

        /*itemBall = this.physics.add.sprite(2340, 448, 'cosmic_cat').setScale(0.05);
        itemBall.body.allowGravity = false;
        this.physics.add.overlap(itemBall, player, itemBallPlayer);

        function itemBallPlayer(itemBall, player){
            ballCollected = true;
            itemBall.destroy();
        }*/


        // ----------------- PLATFORMS ------------------ //

        platforms = this.physics.add.group();

        this.physics.add.collider(platforms, player, platformPlayer);

        function platformPlayer(platforms, player){
            if (timeActivated == true){
                platformTouched = true;
            }
        }

        this.physics.add.collider(platforms, obstacle, platformObstacle);

        function platformObstacle(platforms, obstacle){
            emitter.startFollow(platforms);
            setTimeout(function(){emitter.stopFollow(platforms);}, 100);
            platforms.destroy();
            setTimeout(function(){platformCD = true}, 500);
            platformActivated = false;
        }


        // ----------------- BALLS ------------------ //

        balls = this.physics.add.group();

        this.physics.add.collider(balls, obstacle, ballObstacle);

        function ballObstacle(balls, obstacle){
            ballActivated = false;
            ballCreated = false
            emitter.startFollow(balls);
            setTimeout(function(){emitter.stopFollow(balls);}, 100);
            balls.destroy();
            setTimeout(function(){ballCD = true}, 3000);
        }


        // -------------------- BOUQUINS ----------------------//

        bouquins = this.physics.add.group();

        this.physics.add.collider(player, bouquins, playerBouquin);

        function playerBouquin (player, bouquins){
            bouquinAnim = true;
            bouquins.anims.play('bouquinAnimCollide', true);
            setTimeout(function(){bouquinAnim = false}, 100);
            player.setVelocityY(-700);
        }

        bouquin = bouquins.create(1157, 776, 'bouquin');
        bouquin.body.height = 32;
        bouquin.body.setOffset(0, 32);
        bouquin.setImmovable(true);
        bouquin.body.allowGravity = false;

        bouquin2 = bouquins.create(2248, 773, 'bouquin');
        bouquin2.body.height = 32;
        bouquin2.body.setOffset(0, 32);
        bouquin2.setImmovable(true);
        bouquin2.body.allowGravity = false;

        bouquin3 = bouquins.create(4512, 873, 'bouquin');
        bouquin3.body.height = 32;
        bouquin3.body.setOffset(0, 32);
        bouquin3.setImmovable(true);
        bouquin3.body.allowGravity = false;
        
        bouquin4 = bouquins.create(4734, 685, 'bouquin');
        bouquin4.body.height = 32;
        bouquin4.body.setOffset(0, 32);
        bouquin4.setImmovable(true);
        bouquin4.body.allowGravity = false;

        bouquin5 = bouquins.create(5024, 588, 'bouquin');
        bouquin5.body.height = 32;
        bouquin5.body.setOffset(0, 32);
        bouquin5.setImmovable(true);
        bouquin5.body.allowGravity = false;

        bouquin6 = bouquins.create(5344, 425, 'bouquin');
        bouquin6.body.height = 32;
        bouquin6.body.setOffset(0, 32);
        bouquin6.setImmovable(true);
        bouquin6.body.allowGravity = false;

        bouquin7 = bouquins.create(5632, 619, 'bouquin');
        bouquin7.body.height = 32;
        bouquin7.body.setOffset(0, 32);
        bouquin7.setImmovable(true);
        bouquin7.body.allowGravity = false;

        // ------------------- TOURELLES -------------------- //

        tourelles = this.physics.add.group();
        this.physics.add.collider(tourelles, player, violetPlayer);
        
        tourelleRepos = false;
        tourActivated = false;

        tourelle = tourelles.create(1616,465, 'tourelle');
        tourelle.setFlipY(true);
        tourelle.body.allowGravity = false;
        tourelle.setImmovable(true);

        tourelle2Repos = false;
        tour2Activated = false;

        tourelle2 = tourelles.create(1808,784, 'tourelle');
        tourelle2.body.allowGravity = false;
        tourelle2.setImmovable(true);

        tourelle3Repos = false;
        tour3Activated = false;

        tourelle3 = tourelles.create(2032,498, 'tourelle');
        tourelle3.setFlipY(true);
        tourelle3.body.allowGravity = false;
        tourelle3.setImmovable(true);

        tourelle4Repos = false;
        tour4Activated = false;

        tourelle4 = tourelles.create(6000,0, 'tourelle');
        tourelle4.setFlipY(true);
        tourelle4.body.allowGravity = false;
        tourelle4.setImmovable(true);

            // --- TourBalls --- //

        tourBalls = this.physics.add.group();
        this.physics.add.collider(tourBalls, player, violetPlayer);

        this.physics.add.collider(tourBalls, obstacle, tourBallObstacle);
        function tourBallObstacle(tourBalls, obstacle){
            if (tourActivated){
                tourBall.destroy();
                tourActivated = false; 
            }
            if(tour2Activated){
                tour2Ball.destroy();
                tour2Activated = false; 
            }

            if(tour3Activated){
                tour3Ball.destroy();
                tour3Activated = false; 
            }

            if(tour4Activated){
                tour4Ball.destroy();
                tour4Activated = false; 
            }
            
        }

        // ---------------- Grenouille/Oeil ----------------//

        grenouille = this.add.sprite(2928, 528, 'grenouille');

        yeux = this.physics.add.group();
        this.physics.add.overlap(yeux, player, violetPlayer);


        


        // -------------------------------------- UI ------------------------------------------ //

        // ------------------------ InGame ------------------------ //


        iconTime = this.add.image(448,50, 'iconTime').setScale(0.8).setScrollFactor(0);

        iconPlatform = this.add.image(348,50, 'iconPlatform').setScale(0.7).setScrollFactor(0);

        iconBall = this.add.image(548,50, 'iconBall').setScale(0.7).setScrollFactor(0);

        parametreIG = this.add.sprite(60, 50, 'parametreIG').setScale(0.7).setScrollFactor(0).setInteractive({ cursor: 'pointer' });

        parametreIG.on('pointerover', function (event) {

            parametreIG.anims.play('parametreIGYes',true);
        });
    
        parametreIG.on('pointerout', function (event) {
    
            parametreIG.anims.play('parametreIGNo',true);
        });

        parametreIG.on('pointerdown', function(){
            if (!echapOuvert){
               echapOuvert = true;
            echap = this.add.sprite(448,224, 'echap').setScrollFactor(0);

            // ------ Bouton Continuer ------ //

            continuer = this.add.sprite(448, 304, 'continuer').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

            continuer.on('pointerover', function (event) {

                continuer.anims.play('continuerYes',true);
            });
        
            continuer.on('pointerout', function (event) {
        
                continuer.anims.play('continuerNo',true);
            });

            continuer.on('pointerdown', function(){

                echapOuvert = false;
                echap.destroy();

                retourAuMenu.destroy();

                continuer.destroy();

                this.physics.resume();

            }, this);

            // ------ Bouton Retour au menu------ //
            
            retourAuMenu = this.add.sprite(448, 394, 'retourAuMenu').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

            retourAuMenu.on('pointerover', function (event) {

                retourAuMenu.anims.play('retourAuMenuYes',true);
            });
        
            retourAuMenu.on('pointerout', function (event) {
        
                retourAuMenu.anims.play('retourAuMenuNo',true);
            });

            retourAuMenu.on('pointerdown', function(){

                this.physics.resume();
                echapOuvert = false;

                this.scene.start("menu");
                
                
            }, this);
    

            this.physics.pause(); 
            }
        
        }, this);

        // ----------------------- Speedrun UI ----------------------- //

        if (speedrunMode){

            textTimer = this.add.text(32, 128).setScrollFactor(0);

            loopTimer = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

            function onEvent (){
                speedrunTimer += 1;
            }

        }

        // ----------------- CHASSE AUX LIVRES UI --------------------//

        if (chasse){

            textLivres = this.add.text(32, 128).setScrollFactor(0);

        }
        

        // ------------------------------------ FIN UI --------------------------------------- //

        /*mouseCursor = this.add.image(game.input.mousePointer.x, game.input.mousePointer.y, 'souris').setScale(0.3).setScrollFactor(0);
        mouseCursorBarril = this.add.image(game.input.mousePointer.x, game.input.mousePointer.y, 'barril').setScrollFactor(0);
        */

        // ------------------------- Mannette --------------------------------- //
        /*
        if (this.input.gamepad.total === 0){
            this.input.gamepad.once('connected', function (pad, button, index) {
                paddle = pad;
                padConnected = true;
            }); 
        }
        else {
            paddle = this.input.gamepad.pad1;
        }*/

        //----------------------------------------------------------------  ANIMATION  -------------------------------------------------------------------------//
        /*this.anims.create({
            key: 'phbb',
            frames: this.anims.generateFrameNumbers('trululu', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });*/

        this.anims.create({
            key: 'livreBad',
            frames: [ { key: 'livre', frame: 0 } ],
            frameRate: 20
        })
        this.anims.create({
            key: 'livreGood',
            frames: [ { key: 'livre', frame: 1 } ],
            frameRate: 20
        })


        //--------------------------------------------------------------  FIN ANIMATION  ------------------------------------------------------------------------//

        // ----------------------------------------------------- Particule ----------------------------------------------------------- //

        particule_oeil = this.add.particles('particule_oeil');
        emitter_oeil = particule.createEmitter({
            x:-1,
            y:0,
            speed: 100,
            lifespan: 1000,
            frequency: 10,
            quantity: 2,
            scale: { start: 2, end: 0.3 },
            alpha: { start: 1, end: 0},
            //blendMode: 'ADD',
        });

        // -------------------------------------------------- Etoile Corrumpu ------------------------------------------------------- //

        
        etoile_corrompu = this.physics.add.sprite(6080, 480, 'etoile_corrompu').setScale(0.75);
        etoile_corrompu.setImmovable(true);
        etoile_corrompu.body.allowGravity = false;

        this.physics.add.collider(etoile_corrompu, player, fin);

        function fin(){
            this.scene.start('cinematique');
        }

        // ----------------------------------------------------- Musique OEIL ----------------------------------------------------------- //


        fond_oeil = this.sound.add('fond_oeil')
        var musicOeilConfig = {
            mute : false,
            volume : 0.05,
            rate : 1,
            loop : true,
        }

        if (musicOeilLance){
            fond_oeil.mute = false;
        }
        else if (musicLance){
            fond_audio.mute = false;
        }



        // ------------------------------------------------ CHASSE AUX LIVRES ------------------------------------------------------ //

        livresColl = this.physics.add.group();

        this.physics.add.overlap(player, livresColl, playerLivresColl);

        function playerLivresColl(player, livresColl){
            if (livreCollCD){
                livreCollCD = false;
                livresColl.destroy();
                livresCollecte += 1;  
                setTimeout(function(){livreCollCD = true}, 1000);
            }
            
        }

        if (chasse){

            livreColl7 = livresColl.create( 992, 177, 'livreColl');
            livreColl7.body.allowGravity = false;
            emitter.startFollow(livreColl7);


        }


        //  Input Events
        //cursors = this.input.keyboard.createCursorKeys();
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
        if (gameOver)
        {
            return;
        }
        //--------------------- Tombé dans le vide-------------------------- //

        if (player.y > 960){

            player.setVelocity(0,0);

            // ---------------- Reset des capacités ------------------ //

            timeActivated = false;
            timeCD = true;

            if (platformActivated){
                platformActivated = false;
                platform.destroy();
            }
            platformCD = true;

            if (ballActivated){
                ball.destroy();
            }
            ballActivated = false;
            ballCD = true;
            

            // --------------- Reset des Platforms volantes ---------------//
            
           

            if (!speedrunMode){
                if (checkpoint == 13){
                    player.x = 304;
                    player.y = 573;
                    if (oeilActivated){
                        oeil.alpha = 1;
                        oeil.x = player.x -400;
                        oeil.y = player.y -300;
                    }
                }
                if (checkpoint == 14){
                    player.x = 864;
                    player.y = 729;
                    if (oeilActivated){
                        oeil.alpha = 1;
                        oeil.x = player.x -400;
                        oeil.y = player.y -300;
                    }
                }
                if (checkpoint == 15){
                    player.x = 1375;
                    player.y = 575;
                    if (oeilActivated){
                        oeil.alpha = 1;
                        oeil.x = player.x -400;
                        oeil.y = player.y -300;
                    }
                }
                if (checkpoint == 16){
                    player.x = 2528;
                    player.y = 468;
                    if (oeilActivated){
                        oeil.alpha = 1;
                        oeil.x = player.x -400;
                        oeil.y = player.y -300;
                    }
                }
                if (checkpoint == 17){
                    player.x = 3953;
                    player.y = 661;
                    if (oeilActivated){
                        oeil.alpha = 1;
                        oeil.x = player.x -400;
                        oeil.y = player.y -300;
                    }
                }
                if (checkpoint == 18){
                    player.x = 4621;
                    player.y = 607;
                    if (oeilActivated){
                        oeil.alpha = 1;
                        oeil.x = player.x -400;
                        oeil.y = player.y -300;
                    }
                }
            }
            else {
                
                speedrunTimer = 0;
                speedrunMinute = 0;

                timeCollected = false;
                platformCollected = false;
                ballCollected = false;

                this.scene.restart();

                player.x = 320;
                player.y = 640;

            }
            

            // -------------------- Reset des Ennemis ---------------------//

            if (oeilActivated){
                

            }

            if (tourActivated){
                tourBall.destroy();
                tourActivated = false;
            }
            if (tour2Activated){
                tour2Ball.destroy();
                tour2Activated = false;
            }

            if (tour3Activated){
                tour3Ball.destroy();
                tour3Activated = false;
            }

            if (tour4Activated){
                tour4Ball.destroy();
                tour4Activated = false;
            }

        }

        // ------------------------------- Checkpoint ------------------------------------- //

        
            if (player.x > 77 && checkpoint < 13){
                checkpoint = 13;
                console.log(checkpoint);
            }
            if (player.x > 811 && checkpoint < 14){
                checkpoint = 14;
                console.log(checkpoint);
            }
            if (player.x > 1325 && checkpoint < 15){
                checkpoint = 15;
                console.log(checkpoint);
            }
            if (player.x > 2447 && checkpoint < 16){
                checkpoint = 16;
                console.log(checkpoint);
            }
            if (player.x > 4000 && checkpoint < 17){
                checkpoint = 17;
                console.log(checkpoint);
            }
            if (player.x > 4631 && checkpoint < 18){
                checkpoint = 18;
                console.log(checkpoint);
            }
        
        /*if(chasse){
            if (player.x == 77){
                checkpoint = 13;
                console.log(checkpoint);
            }
            if (player.x == 811){
                checkpoint = 14;
                console.log(checkpoint);
            }
            if (player.x == 1325){
                checkpoint = 15;
                console.log(checkpoint);
            }
            if (player.x == 2447){
                checkpoint = 16;
                console.log(checkpoint);
            }
            if (player.x == 4000){
                checkpoint = 17;
                console.log(checkpoint);
            }
            if (player.x == 4631){
                checkpoint = 18;
                console.log(checkpoint);
            }
        }*/
        



        //------------------------------------------------------------------- Déplacement ----------------------------------------------------------------//

        if (cursors.left.isDown && !echapOuvert && !playerMort)
        {
            if (godMode){
                player.setVelocityX(-500);
                //player.anims.play('right', true);
                player.setVelocityY(0);
                direction = 'left';
            }
            else {
                player.setVelocityX(-150);
                direction = 'left';

                player.setFlipX(true);
                if (!persoAnimTime){
                    if (!persoAnimJet){
                        if (player.body.blocked.down){
                            player.anims.play('persoAvance', true);
                        }
                        else {
                            if (player.body.velocity.y<0){
                                player.anims.play('persoSaut', true);
                            }
                            else if (player.body.velocity.y>0){
                                player.anims.play('persoChute', true);
                            }
                        }
                    }
                }
                
                
            }
            
        }
        else if (cursors.right.isDown && !echapOuvert && !playerMort)
        {   
            if (godMode){
                player.setVelocityX(500);
                //player.anims.play('persoAvance', true);
                player.setVelocityY(0);
                direction = 'right';
            }
            else {
               player.setVelocityX(150);
                direction = 'right'; 

                player.setFlipX(false);
                if (!persoAnimTime){
                    if (!persoAnimJet){
                        if (player.body.blocked.down){
                            player.anims.play('persoAvance', true);
                        }
                        else {
                            if (player.body.velocity.y<0){
                                player.anims.play('persoSaut', true);
                            }
                            else if (player.body.velocity.y>0){
                                player.anims.play('persoChute', true);
                            }
                            
                        }
                    }
                }
                
                
            }
            
        }
        else if (cursors.down.isDown && !echapOuvert && !playerMort)
        {
            if (godMode){
                player.setVelocityY(500);
                //player.anims.play('up', true);
                player.setVelocityX(0);
                direction = 'down';
            }
            else {
                if (!persoAnimTime){
                   if (!persoAnimJet){
                        player.setVelocityY(400);
                        player.anims.play('persoDown', true);
                        player.setVelocityX(0);
                        direction = 'down';
                    } 
                }

                
                
            }
            
        }
        else
        {
            if (godMode){
                player.setVelocityX(0);
                player.setVelocityY(0);
            }
            player.setVelocityX(0);

            if (!persoAnimTime && !playerMort){
               if (!persoAnimJet){
                    if (player.body.blocked.down){
                        player.anims.play('persoPause',true);
                    }
                    else if (persoAnimSaut){
                        if (player.body.velocity.y<0){
                            player.anims.play('persoSaut', true);
                        }
                        else if (player.body.velocity.y>0){
                            player.anims.play('persoChute', true);
                        }
                    }
                } 
            }
            
            
        }


        if (cursors.up.isDown && !jumpCD && !godMode && !echapOuvert && !playerMort)
        {

            player.anims.play('persoSaut1', true);
            setTimeout(function(){jumpCD = true;}, 100);
            setTimeout(function(){persoAnimSaut = true}, 100);
            setTimeout(function(){player.setVelocityY(-400)}, 100);
        }
        
        if (player.body.blocked.down){
            jumpCD = false;
        }

        if (cursors.up.isDown && godMode){
            player.setVelocityY(-500);
            //player.anims.play('up', true);
            player.setVelocityX(0);
            
        }

        // ------------------------------------------------- CONTROLE MANETTE ---------------------------------------------------//


        // ------------------------------------------------------ UI --------------------------------------------------------- //

        if (!timeCollected || !timeCD  && !timeActivated){
            iconTime.alpha = 0.25;
        }
        else if (timeActivated){
            iconTime.alpha = 0.5;
        }
        else if ( timeCD && timeCollected){
            iconTime.alpha = 1;
        }

        if (!platformCollected){
            iconPlatform.alpha = 0.25;
        }
        else if (!platformCD && platformCollected){
            iconPlatform.alpha = 0.5;
        }
        else if ( platformCD && platformCollected){
            iconPlatform.alpha = 1;
        }

        if (!ballCollected){
            iconBall.alpha = 0.25;
        }
        else if (!ballCD && ballCollected){
            iconBall.alpha = 0.5;
        }
        else if ( ballCD && ballCollected){
            iconBall.alpha = 1;
        }

        // ------------------------------------------------------ Platform --------------------------------------------------------- //

        const justPlatformInput = Phaser.Input.Keyboard.JustDown(cursors.platformInput);

        if (justPlatformInput && platformCD && platformCollected && !playerMort){

            platformCD = false;

            platformActivated = true;

            platform = platforms.create(player.x, player.y, 'platform').setScale(0.5);
            if (direction == 'right'){
                platform.setVelocityX(200);
                platform.setVelocityY(-200);
            }
            if (direction == 'left'){
                platform.setVelocityX(-200);
                platform.setVelocityY(-200);
            }
            if (direction == 'down'){
                platform.setVelocityY(400);
            }

            persoAnimJet = true;
            if (player.body.blocked.down){
                player.anims.play('persoJet', true);
            }
            else {
                player.anims.play('persoJetChute', true);
            }
            setTimeout(function(){persoAnimJet = false}, 500);

        }

        if (!platformCD){
            if (platform.y > 1920){
                platform.destroy();
                setTimeout(function(){platformCD = true}, 500);
                platformActivated = false;
            }
        }

        // ------------------------------------------------------ Ball --------------------------------------------------------- //


        const justBallInput = Phaser.Input.Keyboard.JustDown(cursors.ballInput);


        if (justBallInput && ballCD && ballCollected && !playerMort){

            ballCD = false;
            setTimeout(function(){ballActivated = true}, 500);

            ball = balls.create(player.x, player.y, 'ball').setScale(1.1);
            if (direction == 'right'){
                ball.setVelocityX(350);
                ball.setVelocityY(-350);
            }
            if (direction == 'left'){
                ball.setVelocityX(-350);
                ball.setVelocityY(-350);
            }
            if (direction == 'down'){
                ball.setVelocityY(600);
            }

            persoAnimJet = true;
            if (player.body.blocked.down){
                player.anims.play('persoJet', true);
            }
            else {
                player.anims.play('persoJetChute', true);
            }
            setTimeout(function(){persoAnimJet = false}, 500);


        }

        if (cursors.ballInput.isDown && ballActivated){

            ballActivated = false;

            player.x = ball.x;
            player.y = ball.y;
            ball.destroy();
            setTimeout(function(){ballCD = true}, 3000);

            emitter.startFollow(player);
            setTimeout(function(){emitter.stopFollow(player);}, 100);

        }

        if(ballActivated){
            if (ball.y > 1920){
                ball.destroy();
            setTimeout(function(){ballCD = true}, 3000);
            }
        }

        // ------------------------------------------------------ Arrêt du temps --------------------------------------------------------- //

        if (cursors.timeInput.isDown && timeCD && timeCollected && !playerMort){

            timeCD = false;
            timeActivated = true;
            setTimeout(function(){timeCD = true}, 5000);
            setTimeout(function(){timeActivated = false}, 3000);

            persoAnimTime = true;
            player.anims.play('persoTime', true);
            setTimeout(function(){persoAnimTime = false}, 500);


            // -------- Déco Time --------- //

            timeAnim = this.add.sprite(player.x, player.y, 'time_sprite').setScale(1);
            timeAnim.anims.play('timeAnim', true);
            setTimeout(function(){timeAnim.anims.play('timeAnim', false)}, 400);
            setTimeout(function(){timeAnim.destroy()}, 400);

            timeFiltre = true;

            time_etoile1 = this.add.sprite(player.x-(player.x)*0.8, player.y, 'time_etoile1').setScrollFactor(0.1).setScale(2);

            time_etoile2 = this.add.sprite(player.x, player.y, 'time_etoile2').setScrollFactor(0.7).setScale(1.7);
            

            if (platformActivated){
                platform.setVelocity(0,0);
                platform.body.allowGravity = false;
                platform.setImmovable(true);
                /*emitter.startFollow(player);
                setTimeout(function(){emitter.stopFollow(player);}, 100);
                setTimeout(function(){platform.destroy()}, 3000);
                setTimeout(function(){platformActivated = false}, 3000);
                setTimeout(function(){platformCD = true}, 3000);*/

                setTimeout(function(){
                    emitter.startFollow(platform);
                    setTimeout(function(){emitter.stopFollow(platform);}, 100);
                    platform.destroy();
                    platformActivated = false;
                    platformCD = true;
                }, 3000);
                
            }

            if (ballActivated){
                ball.setVelocity(0,0);
                ball.body.allowGravity = false;
                /*setTimeout(function(){ball.destroy()}, 3000);
                setTimeout(function(){ballActivated = false}, 3000);
                setTimeout(function(){ballCD = true}, 3000);*/

                setTimeout(function(){
                    emitter.startFollow(ball);
                    setTimeout(function(){emitter.stopFollow(ball);}, 100);
                    ball.destroy();
                    ballActivated = false;
                    ballCD = true;
                }, 3000);
            }

            // ---- Platform ---- //

            // ---- Ennemi ---- //
            if (oeilActivated){
                oeilActivated = false;
                oeil.setVelocity(0,0);
                setTimeout(function(){oeilActivated = true}, 1000);
            }
            

            if (tourActivated){
                tourBall.setVelocity(0,0);
                setTimeout(function(){tourBall.destroy()}, 3000);
                tourActivated = false;
            }


            if (tour2Activated){
                tour2Ball.setVelocity(0,0);
                setTimeout(function(){tour2Ball.destroy()}, 3000);
                tour2Activated = false;
            }

            if (tour3Activated){
                tour3Ball.setVelocity(0,0);
                setTimeout(function(){tour3Ball.destroy()}, 3000);
                tour3Activated = false;
            }

            if (tour4Activated){
                tour4Ball.setVelocity(0,0);
                setTimeout(function(){tour4Ball.destroy()}, 3000);
                tour4Activated = false;
            }

            
        }

        if (!timeActivated & timeFiltre){
            time_etoile1.destroy();
            time_etoile2.destroy();
        }


        // ------------------------------- godMode ------------------------------------- //

        if ( cursors.cheat1Input.isDown && cursors.cheat3Input.isDown && godModeCD){

            
            godModeCD = false;
            setTimeout(function(){godModeCD = true}, 500);


            if (!godMode){
                console.log('godMode Activated');
                godMode = true;
            }
            else if (godMode){
                console.log('godMode Desactivated');
                godMode = false;
                player.body.allowGravity = true;
            }
        }

        if (godMode){
            player.body.allowGravity = false;
        }



        // --------------------------------- BOUQUIN --------------------------------------------//

        if (!timeActivated && !bouquinAnim){
            bouquin.anims.play('bouquinAnim',true);
        }

        if (!timeActivated && !bouquinAnim){
            bouquin2.anims.play('bouquinAnim',true);
        }

        if (!timeActivated && !bouquinAnim){
            bouquin3.anims.play('bouquinAnim',true);
        }

        if (!timeActivated && !bouquinAnim){
            bouquin4.anims.play('bouquinAnim',true);
        }

        if (!timeActivated && !bouquinAnim){
            bouquin5.anims.play('bouquinAnim',true);
        }

        if (!timeActivated && !bouquinAnim){
            bouquin6.anims.play('bouquinAnim',true);
        }

        if (!timeActivated && !bouquinAnim){
            bouquin7.anims.play('bouquinAnim',true);
        }

        // --------------------------------- TOURELLES --------------------------------------------//
        
        if (Math.pow((Math.pow(player.x-tourelle.x,2))+(Math.pow(player.y-tourelle.y,2)),1/2)<=250 && !tourelleRepos && !timeActivated && !echapOuvert){
            if (tourActivated){
                tourBall.destroy();
            }
            
            tourelleRepos = true;

            tourelleAnim = true;
            tourelle.anims.play('tourelleTire', true);
            setTimeout(function(){
                if (!timeActivated){
                    tourActivated = true;
                    tourelleAnim = false;
                    tourelleTire = true;
                }
                else{
                    setTimeout(function(){tourelleRepos = false}, 2000);
                }
            }, 700);

            
        }

        if (tourelleTire){
            tourBall = tourBalls.create(tourelle.x,tourelle.y, 'tourBall');
            tourBall.body.allowGravity = false;
            setTimeout(function(){tourelleRepos = false}, 2000);
            this.physics.moveTo(tourBall, player.x, player.y, 300);
            tourelleTire = false;
        }

        else {
            if(!tourelleAnim && !timeActivated){
                tourelle.anims.play('tourelleRepos', true);
            }
            if(timeActivated){
                tourelle.anims.play('tourelleRepos', false);
            }
            
        }



        if (Math.pow((Math.pow(player.x-tourelle2.x,2))+(Math.pow(player.y-tourelle2.y,2)),1/2)<=250 && !tourelle2Repos && !timeActivated && !echapOuvert){
            if (tour2Activated){
                tour2Ball.destroy();
            }
            tourelle2Repos = true;

            tourelle2Anim = true;
            tourelle2.anims.play('tourelleTire', true);
            setTimeout(function(){
                if (!timeActivated){
                    tour2Activated = true;
                    tourelle2Anim = false;
                    tourelle2Tire = true;
                }
                else{
                    setTimeout(function(){tourelle2Repos = false}, 2000);
                }
            }, 700);

            
        }

        if (tourelle2Tire){
            tour2Ball = tourBalls.create(tourelle2.x,tourelle2.y, 'tourBall');
            tour2Ball.body.allowGravity = false;
            setTimeout(function(){tourelle2Repos = false}, 2000);
            this.physics.moveTo(tour2Ball, player.x, player.y, 300);
            tourelle2Tire = false;
        }

        else {
            if(!tourelle2Anim && !timeActivated){
                tourelle2.anims.play('tourelleRepos', true);
            }
            if(timeActivated){
                tourelle2.anims.play('tourelleRepos', false);
            }
            
        }


        if (Math.pow((Math.pow(player.x-tourelle3.x,2))+(Math.pow(player.y-tourelle3.y,2)),1/2)<=250 && !tourelle3Repos && !timeActivated && !echapOuvert){
            if (tour3Activated){
                tour3Ball.destroy();
            }
            tourelle3Repos = true;

            tourelle3Anim = true;
            tourelle3.anims.play('tourelleTire', true);
            setTimeout(function(){
                if (!timeActivated){
                    tour3Activated = true;
                    tourelle3Anim = false;
                    tourelle3Tire = true;
                }
                else{
                    setTimeout(function(){tourelle3Repos = false}, 2000);
                }
            }, 700);

            
        }

        if (tourelle3Tire){
            tour3Ball = tourBalls.create(tourelle3.x,tourelle3.y, 'tourBall');
            tour3Ball.body.allowGravity = false;
            setTimeout(function(){tourelle3Repos = false}, 2000);
            this.physics.moveTo(tour3Ball, player.x, player.y, 300);
            tourelle3Tire = false;
        }

        else {
            if(!tourelle3Anim && !timeActivated){
                tourelle3.anims.play('tourelleRepos', true);
            }
            if(timeActivated){
                tourelle3.anims.play('tourelleRepos', false);
            }
            
        }


        if (Math.pow((Math.pow(player.x-tourelle4.x,2))+(Math.pow(player.y-tourelle4.y,2)),1/2)<=250 && !tourelle4Repos && !timeActivated && !echapOuvert){
            if (tour4Activated){
                tour4Ball.destroy();
            }
            tourelle4Repos = true;

            tourelle4Anim = true;
            tourelle4.anims.play('tourelleTire', true);
            setTimeout(function(){
                if (!timeActivated){
                    tour4Activated = true;
                    tourelle4Anim = false;
                    tourelle4Tire = true;
                }
                else{
                    setTimeout(function(){tourelle4Repos = false}, 2000);
                }
            }, 700);

            
        }

        if (tourelle4Tire){
            tour4Ball = tourBalls.create(tourelle4.x,tourelle4.y, 'tourBall');
            tour4Ball.body.allowGravity = false;
            setTimeout(function(){tourelle4Repos = false}, 2000);
            this.physics.moveTo(tour4Ball, player.x, player.y, 300);
            tourelle4Tire = false;
        }

        else {
            if(!tourelle4Anim && !timeActivated){
                tourelle4.anims.play('tourelleRepos', true);
            }
            if(timeActivated){
                tourelle4.anims.play('tourelleRepos', false);
            }
            
        }

        // ----------------------------- GRENOUILLE / OEIL ----------------------------------------//
         /*La Grenouile n'est pas l'ennemie ici. Quand le joueur approche est se détruit et appellle le vri ennemi: L'Oeil.
        Ce dernier poursuit le joeur jusqu'à se que ce dernier finisse le niveau. Cet ennemi est unique car il est le plus pessant et le plus difficle.*/
        
        if (Math.pow((Math.pow(player.x-grenouille.x,2))+(Math.pow(player.y-grenouille.y,2)),1/2) <= 64 && !oeilActivated){
            grenouille.destroy();
            oeil = yeux.create(player.x-400, player.y-200, 'oeil');
            oeil.body.allowGravity = false;

            oeilActivated = true;
            

            fond_oeil.play(musicOeilConfig);
            musicOeilLance = true;

            fond_audio.mute = true;
            
        }

        if (oeilActivated && !echapOuvert && !playerMort){
            oeil.setVelocityX(player.x-oeil.x);
            oeil.setVelocityY(player.y-oeil.y);
            oeil.setMaxVelocity(130);

            oeil.anims.play('oeilAnim', true);

            emitter_oeil.startFollow(oeil);

            this.cameras.main.shake(20, 0.006);

            /*if (shakeTimer){
                shakeTimer = false;
                this.cameras.main.shake(100, 0.05);
                setTimeout(function(){shakeTimer = true;}, 200);
            }*/
            
        }



        // ----------------------------- Menu Echap ---------------------------------- //

        const justEchapInput = Phaser.Input.Keyboard.JustDown(cursors.echapInput);

        if (justEchapInput && !echapOuvert){
            echapOuvert = true;
            echap = this.add.sprite(448,224, 'echap').setScrollFactor(0);

            // ------ Bouton Continuer ------ //

            continuer = this.add.sprite(448, 304, 'continuer').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

            continuer.on('pointerover', function (event) {

                continuer.anims.play('continuerYes',true);
            });
        
            continuer.on('pointerout', function (event) {
        
                continuer.anims.play('continuerNo',true);
            });

            continuer.on('pointerdown', function(){

                echapOuvert = false;
                echap.destroy();

                retourAuMenu.destroy();

                continuer.destroy();

                this.physics.resume();

            }, this);

            // ------ Bouton Retour au menu------ //
            
            retourAuMenu = this.add.sprite(448, 394, 'retourAuMenu').setScrollFactor(0).setInteractive({ cursor: 'pointer' });;

            retourAuMenu.on('pointerover', function (event) {

                retourAuMenu.anims.play('retourAuMenuYes',true);
            });
        
            retourAuMenu.on('pointerout', function (event) {
        
                retourAuMenu.anims.play('retourAuMenuNo',true);
            });

            retourAuMenu.on('pointerdown', function(){

                this.physics.resume();
                echapOuvert = false;

                if (musicLance){
                    fond_audio.mute = true;
                }

                if (musicOeilLance){
                    fond_oeil.mute = true;
                }

                this.scene.start("menu");
                
                
            }, this);
    

            this.physics.pause();
        }
        else if (justEchapInput && echapOuvert){
            echapOuvert = false;
            echap.destroy();

            retourAuMenu.destroy();

            continuer.destroy();

            this.physics.resume();
        }

        // ------------------------------------------------- Speedrun Mode ---------------------------------------------------------- //
        if (speedrunMode){
            textTimer.setText('Timer: '+ speedrunMinute + ':' + speedrunTimer);
        }
        if (speedrunTimer === 60){
            speedrunTimer = 0;
            speedrunMinute += 1;
        }
        
        // ---------------------------------------------- Passage de scène ----------------------------------------------------------//

        if (player.x > 6330){
            this.scene.start("scene2");
            retour = 1;

            timeActivated = false;
            timeCD = true;
            ballActivated = false;
            ballCD = true;
            platformActivated = false;
            platformCD = true;

            tourActivated = false;
            tour2Activated = false;
        }

        if (player.x < 32){
            this.scene.start("cinematique");

            timeActivated = false;
            timeCD = true;
            ballActivated = false;
            ballCD = true;
            platformActivated = false;
            platformCD = true;

            tourActivated = false;
            tour2Activated = false;
        }

        
    }
}