
function create() {



    spazioPremuto = false;

    game.world.setBounds(0, 0, 23700, 8000);

    this.add.image(0, 0, 'sfondolivello1');
    this.add.image(1028, 0, 'sfondo');
    this.add.image(11128, 0, 'sfondolivello3');
    this.add.image(21300, 0, 'sfondo3');

    mangiafuoco1 = game.add.sprite(13800, -400, 'mangiafuoco1');
    mangiafuoco1.alpha = 0;

    bracciodx = game.add.sprite(14600, 0, 'bracciodx');
    bracciodx.alpha = 0;

    bracciosx = game.add.sprite(13750, 0, 'bracciosx');
    bracciosx.alpha = 0;

    mangiafuoco2 = game.add.sprite(21800, -400, 'mangiafuoco1');
    mangiafuoco2.alpha = 1;

    bracciodx2 = game.add.sprite(22600, -200, 'bracciodx');
    bracciodx2.alpha = 0;

    bracciosx2 = game.add.sprite(21750, 0, 'bracciosx');
    bracciosx2.alpha = 0;

    game.physics.arcade.enable(bracciodx);

    game.physics.arcade.enable(bracciodx2);
    game.physics.arcade.enable(bracciosx2);

    confine = game.add.physicsGroup();

    confine.create(1020, 0, 'confine');
    confine.alpha = 0;
    confine.setAll('body.immovable', true);

    player = game.add.sprite(10, 7910, 'player');

    player.animations.add("fermodx", [0, 1, 2, 3, 4, 5, 6], true)
    player.animations.add("fermosx", [7, 8, 9, 10, 11, 12, 13], true)
    player.animations.add('right', [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);
    player.animations.add('left', [41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28]);
    player.animations.add('jumpdx', [42, 43, 44, 45], 5, true)
    player.animations.add('jumpsx', [46, 47, 48, 49], 5, true)

    game.physics.arcade.enable(player);
    game.camera.follow(player);
    game.camera.deadzone = new Phaser.Rectangle(1024, 400, 10, 10);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 600;
    game.physics.p2.friction = 5;

    fata = game.add.sprite(10500, 500, 'fata1');
    fata.animations.add("ferma1", [0, 1, 2, 3, 4, 5, 6], true)
    fata.alpha = 0;

    fata2 = game.add.sprite(23300, 200, 'fata1');
    fata2.animations.add("ferma1", [0, 1, 2, 3, 4, 5, 6], true)
    fata2.alpha = 1;

    // LIVELLO 1

    platform1 = game.add.physicsGroup();
    mobileplatform = game.add.physicsGroup();

    fine = game.add.physicsGroup();
    fine2 = game.add.physicsGroup();

    fata1 = game.add.sprite(810, 150, 'fata1');
    fata1.animations.add("ferma1", [0, 1, 2, 3, 4, 5, 6], true)
    balcone = game.add.physicsGroup();

    balcone.create(950, 346, 'balcone');
    balcone.scale.x = 0.8;
    balcone.scale.y = 0.8;

    balcone.setAll('body.immovable', true);

    fine.create(700, 250, 'fine');
    fine.alpha = 0;

    platform1.create(500, 500, 'platform1');
    platform1.create(426, 7815, 'platform1');
    mobileplatform.create(300, 7670, 'mobileplatform');
    platform1.create(212, 7605, 'platform1');
    platform1.create(825, 7265, 'platform1');
    platform1.create(408, 7419, 'platform1');
    platform1.create(581, 7300, 'platform1');
    platform1.create(111, 7227, 'platform1');
    mobileplatform.create(500, 7052, 'mobileplatform');
    platform1.create(625, 6870, 'platform1');
    platform1.create(218, 6690, 'platform1');
    platform1.create(17, 6548, 'platform1');
    platform1.create(530, 6385, 'platform1');
    platform1.create(124, 6200, 'platform1');
    mobileplatform.create(424, 6127, 'mobileplatform');
    platform1.create(722, 6006, 'platform1');
    platform1.create(422, 5873, 'platform1');
    platform1.create(109, 5685, 'platform1');
    mobileplatform.create(389, 5565, 'mobileplatform');
    platform1.create(700, 5373, 'platform1');
    platform1.create(297, 5244, 'platform1');
    platform1.create(191, 5068, 'platform1');
    platform1.create(80, 4880, 'platform1');
    platform1.create(328, 4714, 'platform1');
    platform1.create(501, 4589, 'platform1');
    platform1.create(674, 4425, 'platform1');
    platform1.create(450, 4262, 'platform1');
    platform1.create(839, 4090, 'platform1');
    platform1.create(549, 3900, 'platform1');
    platform1.create(170, 3720, 'platform1');

    cloudplatform = game.add.sprite(508, 3540, 'cloudplatform');
    platform1.create(140, 3350, 'platform1');
    cloudplatform2 = game.add.sprite(598, 3165, 'cloudplatform');
    cloudplatform3 = game.add.sprite(253, 3010, 'cloudplatform');
    cloudplatform4 = game.add.sprite(600, 2835, 'cloudplatform');
    cloudplatform5 = game.add.sprite(269, 2659, 'cloudplatform');
    cloudplatform6 = game.add.sprite(0, 2516, 'cloudplatform');
    cloudplatform7 = game.add.sprite(616, 1920, 'cloudplatform');
    cloudplatform8 = game.add.sprite(659, 1569, 'cloudplatform');
    cloudplatform9 = game.add.sprite(239, 1740, 'cloudplatform');


    platform1.create(400, 650, 'platform1');
    platform1.create(620, 401, 'platform1');
    platform1.create(500, 2409, 'platform1');
    platform1.create(700, 2240, 'platform1');
    platform1.create(420, 2100, 'platform1');
    platform1.create(0, 1600, 'platform1');
    platform1.create(295, 1418, 'platform1');
    platform1.create(514, 1293, 'platform1');
    platform1.create(800, 1153, 'platform1');
    platform1.create(292, 990, 'platform1');
    platform1.create(0, 800, 'platform1');

    game.physics.arcade.enable(cloudplatform);
    game.physics.arcade.enable(cloudplatform2);
    game.physics.arcade.enable(cloudplatform3);
    game.physics.arcade.enable(cloudplatform4);
    game.physics.arcade.enable(cloudplatform5);
    game.physics.arcade.enable(cloudplatform6);
    game.physics.arcade.enable(cloudplatform7);
    game.physics.arcade.enable(cloudplatform8);
    game.physics.arcade.enable(cloudplatform9);

    cloudplatform.body.immovable = true;
    cloudplatform2.body.immovable = true;
    cloudplatform3.body.immovable = true;
    cloudplatform4.body.immovable = true;
    cloudplatform5.body.immovable = true;
    cloudplatform6.body.immovable = true;
    cloudplatform7.body.immovable = true;
    cloudplatform8.body.immovable = true;
    cloudplatform9.body.immovable = true;


    check3_1 = game.add.sprite(30, 1550, 'check');
    game.physics.arcade.enable(check3_1);
    check3_1.alpha = 0;

    platform1.setAll('body.immovable', true);
    mobileplatform.setAll('body.immovable', true);

    //CHECKPOINT1 
    check1_1 = game.add.sprite(270, 6560, 'check');
    game.physics.arcade.enable(check1_1);
    check1_1.alpha = 0;
    check2_1 = game.add.sprite(674, 4380, 'check');
    game.physics.arcade.enable(check2_1);
    check2_1.alpha = 0;

    //NEMICI1
    nemicouccello1 = game.add.sprite(800, 5800, 'nemicouccello');
    nemicouccello1.animations.add("volo", [0, 1, 2, 3, 4, 5, 6, 7], true)
    nemicouccello1.animations.add("volodx", [8, 9, 10, 11, 12, 13, 14, 15], true)
    game.physics.arcade.enable(nemicouccello1);

    nemicouccello2 = game.add.sprite(50, 5000, 'nemicouccello');
    nemicouccello2.animations.add("volo", [0, 1, 2, 3, 4, 5, 6, 7], true)
    nemicouccello2.animations.add("volodx", [8, 9, 10, 11, 12, 13, 14, 15], true)
    game.physics.arcade.enable(nemicouccello2);

    nemicouccello = game.add.sprite(30, 3500, 'nemicouccello');
    nemicouccello.animations.add("volo", [0, 1, 2, 3, 4, 5, 6, 7], true)
    nemicouccello.animations.add("volodx", [8, 9, 10, 11, 12, 13, 14, 15], true)
    game.physics.arcade.enable(nemicouccello);

    //LIVELLO 3

    //CORDE
    this.add.image(11460, -355, 'corda');
    this.add.image(11860, -355, 'corda');
    this.add.image(12280, -355, 'corda');
    this.add.image(12580, -355, 'corda');
    this.add.image(12815, -355, 'corda');
    this.add.image(13115, -355, 'corda');
    this.add.image(12815, 300, 'corda');
    this.add.image(13115, 300, 'corda');
    this.add.image(13345, -695, 'corda');
    this.add.image(13645, -695, 'corda');

    this.add.image(15135, -230, 'corda');
    this.add.image(15935, -150, 'corda');
    this.add.image(16490, -160, 'corda');
    this.add.image(16730, -160, 'corda');
    this.add.image(16997, -300, 'corda');
    this.add.image(17237, -300, 'corda');
    this.add.image(17505, -20, 'corda');
    this.add.image(17745, -20, 'corda');

    pav_teatro = game.add.physicsGroup();
    float_teatro = game.add.physicsGroup();
    float1_teatro = game.add.physicsGroup();
    pav2_teatro = game.add.physicsGroup();
    ponte_teatro = game.add.physicsGroup();
    plat_teatro = game.add.physicsGroup();
    scala_teatro = game.add.physicsGroup();
    pil_teatro = game.add.physicsGroup();
    col_teatro = game.add.physicsGroup();
    sopra_teatro = game.add.physicsGroup();
    div_teatro = game.add.physicsGroup();
    finale2 = game.add.physicsGroup();
    finale3 = game.add.physicsGroup();
    finale1 = game.add.physicsGroup();
    fondamenta = game.add.physicsGroup();
    casse = game.add.physicsGroup();
    spuntoni = game.add.physicsGroup();

    fondamenta.create(11024, 1300, 'fondamenta');
    spuntoni.create(11024, 1150, 'spuntoni');
    spuntoni.create(13914.46, 1150, 'spuntoni');
    spuntoni.create(16804.92, 1150, 'spuntoni');
    spuntoni.create(19695.38, 1150, 'spuntoni');
    spuntoni.create(22585.84, 1150, 'spuntoni');

    pav_teatro.create(11024, 657, 'pav_teatro');
    casse.create(11250, 260, 'casse');

    float_teatro.create(12275, 657, 'float_teatro');

    chiave = game.add.sprite(12400, 590, 'chiave');
    game.physics.arcade.enable(chiave);
    chiave.animations.add("oggetto", [0, 1, 2, 3, 4, 5, 6, 7], true)

    chiave1 = game.add.sprite(13430, 260, 'chiave');
    game.physics.arcade.enable(chiave1);
    chiave1.animations.add("oggetto", [0, 1, 2, 3, 4, 5, 6, 7], true)

    chiave3 = game.add.sprite(18250, 700, 'chiave');
    game.physics.arcade.enable(chiave3);
    chiave3.animations.add("oggetto", [0, 1, 2, 3, 4, 5, 6, 7], true)

    chiave4 = game.add.sprite(19950, 800, 'chiave');
    game.physics.arcade.enable(chiave4);
    chiave4.animations.add("oggetto", [0, 1, 2, 3, 4, 5, 6, 7], true)

    chiave5 = game.add.sprite(21550, 750, 'chiave');
    game.physics.arcade.enable(chiave5);
    chiave5.animations.add("oggetto", [0, 1, 2, 3, 4, 5, 6, 7], true)

    //SCROLLING
    float1_teatro.create(12800, 150, 'float_teatro');
    float1_teatro.create(12800, 450, 'float_teatro');
    float1_teatro.create(12800, 750, 'float_teatro');
    float1_teatro.create(12800, 1050, 'float_teatro');
    float1_teatro.create(12800, 1350, 'float_teatro');
    float1_teatro.create(12800, 1650, 'float_teatro');

    float_teatro.create(13330, 317, 'float_teatro');

    pav2_teatro.create(13598, 718, 'pav2_teatro');
    pav2_teatro.create(13598, 860, 'pav2_teatro');
    pav2_teatro.create(13598, 1010, 'pav2_teatro');

    ponte_teatro.create(15000, 660, 'ponte_teatro');

    plat_teatro.create(16455, 800, 'plat_teatro');

    leva3b = game.add.sprite(16650, 720, 'leva3b');
    game.physics.arcade.enable(leva3b);
    leva3b.visible = false;

    leva3 = game.add.sprite(16650, 720, 'leva3');
    game.physics.arcade.enable(leva3);

    plat_teatro.create(16455, 420, 'plat_teatro');

    chiave2 = game.add.sprite(16650, 340, 'chiave');
    game.physics.arcade.enable(chiave2);
    chiave2.animations.add("oggetto", [0, 1, 2, 3, 4, 5, 6, 7], true)

    plat_teatro.create(16962, 720, 'plat_teatro');
    plat_teatro.create(17470, 582, 'plat_teatro');

    float_teatro.create(17469, 1000, 'float_teatro');

    scala_teatro.create(18100, 500, 'scala_teatro');
    scala_teatro.create(18100, 750, 'scala_teatro'); //sotto
    scala_teatro.create(18200, 550, 'scala_teatro');
    scala_teatro.create(18300, 600, 'scala_teatro');
    scala_teatro.create(18400, 650, 'scala_teatro');
    scala_teatro.create(18500, 700, 'scala_teatro');
    scala_teatro.create(18600, 750, 'scala_teatro');
    scala_teatro.create(18700, 800, 'scala_teatro');
    scala_teatro.create(18800, 850, 'scala_teatro');
    scala_teatro.create(18900, 900, 'scala_teatro');

    pil_teatro.create(18300, 600, 'pil_teatro');
    pil_teatro.create(18800, 900, 'pil_teatro');

    sopra_teatro.create(19500, 850, 'sopra_teatro');

    col_teatro.create(19500, 874, 'col_teatro');
    col_teatro.create(19650, 874, 'col_teatro');
    col_teatro.create(19800, 874, 'col_teatro');
    col_teatro.create(19950, 874, 'col_teatro');
    col_teatro.create(20100, 874, 'col_teatro');
    col_teatro.create(20250, 874, 'col_teatro');
    col_teatro.create(20400, 874, 'col_teatro');
    col_teatro.create(20550, 874, 'col_teatro');
    col_teatro.create(20700, 874, 'col_teatro');

    finale1.create(21000, 950, 'finale1');
    div_teatro.create(21200, -400, 'div_teatro');

    finale2.create(21600, 850, 'finale2');
    finale2.create(21850, 850, 'finale2');
    finale3.create(21550, 800, 'finale3');

    finale2.create(22100, 700, 'finale2');
    finale2.create(22350, 700, 'finale2');
    finale3.create(22050, 650, 'finale3');

    finale2.create(22600, 550, 'finale2');
    finale2.create(22850, 550, 'finale2');
    finale3.create(22550, 500, 'finale3');

    finale2.create(23100, 400, 'finale2');
    finale2.create(23350, 400, 'finale2');
    finale3.create(23050, 350, 'finale3');

    gabbia = game.add.sprite(23250, 125, 'gabbia');
    game.physics.arcade.enable(gabbia);
    gabbia.body.immovable = true;

    div_teatro.create(23500, 0, 'div_teatro');

    //MARIONETTE 

    enemy10 = game.add.sprite(12160, 0, 'enemy');
    game.physics.arcade.enable(enemy10);
    enemy10.scale.x = 0.3;
    enemy10.scale.y = 0.3;
    enemy10.animations.add("fermo", [0])
    enemy10.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    enemy11 = game.add.sprite(12650, 0, 'enemy');
    game.physics.arcade.enable(enemy11);
    enemy11.scale.x = 0.3;
    enemy11.scale.y = 0.3;
    enemy11.animations.add("fermo", [0])
    enemy11.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    enemy12 = game.add.sprite(17000, 300, 'enemyA');
    game.physics.arcade.enable(enemy12);
    enemy12.scale.x = 0.3;
    enemy12.scale.y = 0.3;

    enemy13 = game.add.sprite(17500, 0, 'enemyA');
    game.physics.arcade.enable(enemy13);
    enemy13.scale.x = 0.3;
    enemy13.scale.y = 0.3;

    enemy14 = game.add.sprite(19600, 400, 'enemy');
    game.physics.arcade.enable(enemy14);
    enemy14.scale.x = 0.3;
    enemy14.scale.y = 0.3;
    enemy14.animations.add("fermo", [0])
    enemy14.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    enemy15 = game.add.sprite(20000, 400, 'enemy');
    game.physics.arcade.enable(enemy15);
    enemy15.scale.x = 0.3;
    enemy15.scale.y = 0.3;
    enemy15.animations.add("fermo", [0])
    enemy15.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    enemy16 = game.add.sprite(20400, 400, 'enemy');
    game.physics.arcade.enable(enemy16);
    enemy16.scale.x = 0.3;
    enemy16.scale.y = 0.3;
    enemy16.animations.add("fermo", [0])
    enemy16.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    //CHECKPOINT 3
    check1_3 = game.add.sprite(12400, 520, 'check');
    game.physics.arcade.enable(check1_3);
    check1_3.alpha = 0;

    check2_3 = game.add.sprite(18100, 480, 'check');
    game.physics.arcade.enable(check2_3);
    check2_3.alpha = 0;
    check2_3.scale.x = 4;

    check3_3 = game.add.sprite(21550, 760, 'check');
    game.physics.arcade.enable(check3_3);
    check3_3.alpha = 0;
    check3_3.scale.x = 4;

    casse.setAll('body.immovable', true);
    pav_teatro.setAll('body.immovable', true);
    float_teatro.setAll('body.immovable', true);
    float1_teatro.setAll('body.immovable', true);
    pav2_teatro.setAll('body.immovable', true);
    ponte_teatro.setAll('body.immovable', true);
    plat_teatro.setAll('body.immovable', true);
    fondamenta.setAll('body.immovable', true);
    scala_teatro.setAll('body.immovable', true);
    pil_teatro.setAll('body.immovable', true);
    sopra_teatro.setAll('body.immovable', true);
    div_teatro.setAll('body.immovable', true);

    finale1.setAll('body.immovable', true);
    finale2.setAll('body.immovable', true);
    finale3.setAll('body.immovable', true);

    //LIVELLO 2

    levaB = game.add.sprite(3128, 202, 'leva2');
    game.physics.arcade.enable(levaB);
    levaB.visible = false;

    levaA = game.add.sprite(3128, 202, 'leva');
    game.physics.arcade.enable(levaA);

    leva2 = game.add.sprite(7728, 566, 'leva2');
    game.physics.arcade.enable(leva2);
    leva2.visible = false;

    leva = game.add.sprite(7728, 566, 'leva');
    game.physics.arcade.enable(leva);


    //PLATFORMS

    pilastro = game.add.physicsGroup();
    pilastro2 = game.add.physicsGroup();
    pilastro1 = game.add.physicsGroup();
    lava = game.add.physicsGroup();
    lava1 = game.add.physicsGroup();
    platforms = game.add.physicsGroup();
    colonna = game.add.physicsGroup();

    lava1.create(2028, 900, 'lava1');
    lava1.create(3668, 900, 'lava1');

    lava = game.add.sprite(2028, 600, 'lava');
    lava.animations.add("lava", [0, 1, 2, 3, 4, 5, 6]);
    lava.animations.play("lava", 8, true);
    lava.scale.x = 1.8

    lava = game.add.sprite(3628, 600, 'lava');
    lava.animations.add("lava", [0, 1, 2, 3, 4, 5, 6]);
    lava.animations.play("lava", 8, true);
    lava.scale.x = 1.8

    lava = game.add.sprite(7428, 400, 'lava');
    lava.animations.add("lava", [0, 1, 2, 3, 4, 5, 6]);
    lava.animations.play("lava", 8, true);
    lava.scale.x = 6

    lava = game.add.sprite(7468, 700, 'lava');
    lava.animations.add("lava", [0, 1, 2, 3, 4, 5, 6]);
    lava.animations.play("lava", 8, true);
    lava.scale.x = 6

    lava = game.add.sprite(10028, 800, 'lava');
    lava.animations.add("lava", [0, 1, 2, 3, 4, 5, 6]);
    lava.animations.play("lava", 8, true);
    lava.scale.x = 2

    lava = game.add.sprite(10028, 500, 'lava');
    lava.animations.add("lava", [0, 1, 2, 3, 4, 5, 6]);
    lava.animations.play("lava", 8, true);
    lava.scale.x = 2

    colonna2 = game.add.physicsGroup();
    pavimento = game.add.physicsGroup();
    botola = game.add.physicsGroup();
    scalino = game.add.physicsGroup();
    pavimento2 = game.add.physicsGroup();
    pavimento_corto = game.add.physicsGroup();
    base = game.add.physicsGroup();
    pavimento3 = game.add.physicsGroup();
    ponte = game.add.physicsGroup();
    volta = game.add.physicsGroup();
    volta2 = game.add.physicsGroup();
    pavimento5 = game.add.physicsGroup();
    botola2 = game.add.physicsGroup();
    terra = game.add.physicsGroup();

    //pavimento

    colonna.create(1450, -17, 'colonna');

    pavimento.create(1028, 650, 'pavimento');

    colonna.create(2378, 800, 'colonna');

    botola.create(3008, 830, 'scalino'); //fare come botola premere un pulsante//
    scalino.create(2746, 1020, 'scalino');
    scalino.create(2776, 1070, 'scalino');
    scalino.create(2826, 1120, 'scalino');

    pavimento2.create(2726, 650, 'pavimento2');

    pavimento_corto.create(3271, 650, 'pavimento_corto');

    base.create(3046, 1170, 'base');

    colonna2.create(3603, 897, 'colonna2');

    colonna.create(3978, 800, 'colonna');

    pavimento.create(4328, 650, 'pavimento');

    platforms.create(5028, 600, 'scalino');

    //piattaforme in aria
    platforms.create(2458, 150, 'platform2');
    platforms.create(3028, 285, 'platform2');
    platforms.create(2628, 460, 'platform2');

    //scala
    platforms.create(5428, 550, 'scalino');
    platforms.create(5428, 520, 'scalino');
    platforms.create(5438, 450, 'scalino');
    platforms.create(5628, 400, 'scalino');
    platforms.create(5728, 350, 'scalino');
    platforms.create(5828, 300, 'scalino');
    platforms.create(5928, 250, 'scalino');
    platforms.create(6028, 200, 'scalino');

    pavimento3.create(6021, 194, 'pavimento3');

    volta.create(5428, 450, 'volta');

    botola2.create(7176, 350, 'botola2');

    ponte.create(7178, 645, 'ponte');

    lava1.create(8028, 700, 'lava1');
    lava1.create(8828, 700, 'lava1');
    lava1.create(9628, 700, 'lava1');
    lava1.create(9800, 700, 'lava1');

    //scala sotto
    platforms.create(7228, 700, 'scalino');
    platforms.create(7128, 750, 'scalino');
    platforms.create(7028, 800, 'scalino');
    platforms.create(6928, 850, 'scalino');
    platforms.create(6828, 900, 'scalino');
    platforms.create(6728, 950, 'scalino');
    platforms.create(6628, 1000, 'scalino');
    platforms.create(6528, 1050, 'scalino');
    platforms.create(6428, 1100, 'scalino');
    platforms.create(6328, 1150, 'scalino');
    platforms.create(6228, 1200, 'scalino');
    platforms.create(6128, 1250, 'scalino');
    platforms.create(6028, 1300, 'scalino');
    platforms.create(5828, 1300, 'scalino');
    platforms.create(5428, 1300, 'scalino');

    //seconda parte
    platforms.create(7628, 160, 'platform2');
    platforms.create(7978, 300, 'platform2');
    platforms.create(9028, 200, 'platform2');

    pilastro.create(8328, 650, 'pilastro')
    pilastro1.create(8828, 610, 'pilastro')
    pilastro2.create(9428, 660, 'pilastro')

    volta2.create(10028, 650, 'volta2');

    fine2.create(10528, 600, 'fine');
    fine2.create(10470, 600, 'fine');
    fine2.create(10470, 500, 'fine');
    fine2.create(10470, 400, 'fine');
    fine2.create(10528, 500, 'fine');
    fine2.create(10528, 400, 'fine');

    fine2.alpha = 0;

    pavimento2.create(10740, -17, 'pavimento2');
    colonna.create(10900, -17, 'colonna');
    colonna.create(10900, 300, 'colonna');
    terra.create(-20, 7960, 'terra');

    terra.setAll('body.immovable', true);

    platforms.setAll('body.immovable', true);
    pavimento.setAll('body.immovable', true)
    pavimento3.setAll('body.immovable', true)
    colonna.setAll('body.immovable', true)
    colonna2.setAll('body.immovable', true)
    pavimento2.setAll('body.immovable', true)
    scalino.setAll('body.immovable', true)
    pavimento_corto.setAll('body.immovable', true)
    base.setAll('body.immovable', true)
    ponte.setAll('body.immovable', true)
    pilastro.setAll('body.immovable', true);
    pilastro1.setAll('body.immovable', true);
    pilastro2.setAll('body.immovable', true);
    volta2.setAll('body.immovable', true);
    botola.setAll('body.immovable', true);
    botola2.setAll('body.immovable', true);
    lava1.setAll('body.immovable', true);
    spuntoni.setAll('body.immovable', true);

    //CHECKPOINT 2
    check1 = game.add.sprite(1600, 520, 'check'); //corrisponde alla prima star
    game.physics.arcade.enable(check1);
    check1.alpha = 0;

    check2 = game.add.sprite(4338, 520, 'check'); //prima delle marionette dall'alto
    game.physics.arcade.enable(check2);
    check2.alpha = 0;

    check3 = game.add.sprite(7828, 520, 'check'); //prima dei pilastri
    game.physics.arcade.enable(check3);
    check3.alpha = 0;

    //FORBICI
    star0 = game.add.sprite(1700, 550, 'star');
    game.physics.arcade.enable(star0);

    star = game.add.sprite(2528, 95, 'star');
    game.physics.arcade.enable(star);

    star2 = game.add.sprite(3528, 1100, 'star');
    game.physics.arcade.enable(star2);

    star3 = game.add.sprite(5428, 1100, 'star');
    game.physics.arcade.enable(star3);

    star4 = game.add.sprite(7718, 120, 'star');
    game.physics.arcade.enable(star4);

    star5 = game.add.sprite(9028, 90, 'star');
    game.physics.arcade.enable(star5);

    //MONETE
    moneta = game.add.sprite(250, 7505, 'moneta');
    game.physics.arcade.enable(moneta);
    moneta.scale.x = 0.8
    moneta.scale.y = 0.8

    moneta1 = game.add.sprite(609, 6320, 'moneta');
    game.physics.arcade.enable(moneta1);
    moneta1.scale.x = 0.8
    moneta1.scale.y = 0.8

    moneta2 = game.add.sprite(272, 5033, 'moneta');
    game.physics.arcade.enable(moneta2);
    moneta2.scale.x = 0.8
    moneta2.scale.y = 0.8

    moneta3 = game.add.sprite(520, 2840, 'moneta');
    game.physics.arcade.enable(moneta3);
    moneta3.scale.x = 0.8
    moneta3.scale.y = 0.8

    moneta4 = game.add.sprite(704, 2158, 'moneta');
    game.physics.arcade.enable(moneta4);
    moneta4.scale.x = 0.8
    moneta4.scale.y = 0.8

    moneta5 = game.add.sprite(273, 1111, 'moneta');
    game.physics.arcade.enable(moneta5);
    moneta5.scale.x = 0.8
    moneta5.scale.y = 0.8

    //NEMICI
    enemy = game.add.sprite(2000, 0, 'enemy');
    game.physics.arcade.enable(enemy);
    enemy.scale.x = 0.3;
    enemy.scale.y = 0.3;
    enemy.animations.add("fermo", [0])
    enemy.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    enemy1 = game.add.sprite(3028, 15000, 'enemyA');
    game.physics.arcade.enable(enemy1);
    enemy1.scale.x = 0.3;
    enemy1.scale.y = 0.3;

    enemy2 = game.add.sprite(4528, 0, 'enemy');
    game.physics.arcade.enable(enemy2);
    enemy2.scale.x = 0.3;
    enemy2.scale.y = 0.3;
    enemy2.y = 3500;
    enemy2.animations.add("fermo", [0])
    enemy2.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    enemy3 = game.add.sprite(4728, 0, 'enemyA');
    game.physics.arcade.enable(enemy3);
    enemy3.scale.x = 0.3;
    enemy3.scale.y = 0.3;
    enemy3.y = 3700;

    enemy4 = game.add.sprite(4928, 0, 'enemy');
    game.physics.arcade.enable(enemy4);
    enemy4.scale.x = 0.3;
    enemy4.scale.y = 0.3;
    enemy4.y = 3900;
    enemy4.animations.add("fermo", [0])
    enemy4.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    enemy5 = game.add.sprite(6128, 0, 'enemyA');
    game.physics.arcade.enable(enemy5);
    enemy5.scale.x = 0.3;
    enemy5.scale.y = 0.3;
    enemy5.y = 5100;

    enemy6 = game.add.sprite(6328, 0, 'enemy');
    game.physics.arcade.enable(enemy6);
    enemy6.scale.x = 0.3;
    enemy6.scale.y = 0.3;
    enemy6.y = 5300;
    enemy6.animations.add("fermo", [0])
    enemy6.animations.add("cade", [1, 2, 3, 4, 5, 6, 7, 8], true)

    enemy7 = game.add.sprite(6528, 0, 'enemyA');
    game.physics.arcade.enable(enemy7);
    enemy7.scale.x = 0.3;
    enemy7.scale.y = 0.3;
    enemy7.y = 5500;

    enemy8 = game.add.sprite(9028, 15000, 'enemyA');
    game.physics.arcade.enable(enemy8);
    enemy8.scale.x = 0.3;
    enemy8.scale.y = 0.3;

    enemy9 = game.add.sprite(10528, -1000, 'enemyA');
    game.physics.arcade.enable(enemy9);
    enemy9.scale.x = 0.8;
    enemy9.scale.y = 0.8;

    contapunti = game.add.sprite(10, 10, 'contapunti');
    contapunti.visible = false;
    contapunti1 = game.add.sprite(10, 10, 'contapunti1');
    contapunti1.visible = false;
    contapunti2 = game.add.sprite(10, 10, 'contapunti2');
    contapunti2.visible = false;
    contapunti3 = game.add.sprite(10, 10, 'contapunti3');
    contapunti3.visible = false;
    contapunti4 = game.add.sprite(10, 10, 'contapunti4');
    contapunti4.visible = false;
    contapunti5 = game.add.sprite(10, 10, 'contapunti5');
    contapunti5.visible = false;
    contapunti6 = game.add.sprite(10, 10, 'contapunti6');
    contapunti6.visible = false;

    contapunti10 = game.add.sprite(10, 10, 'contapunti10');
    contapunti10.visible = true;

    contapunti11 = game.add.sprite(10, 10, 'contapunti11');
    contapunti11.visible = false;

    contapunti12 = game.add.sprite(10, 10, 'contapunti12');
    contapunti12.visible = false;

    contapunti13 = game.add.sprite(10, 10, 'contapunti13');
    contapunti13.visible = false;

    contapunti14 = game.add.sprite(10, 10, 'contapunti14');
    contapunti14.visible = false;

    contapunti15 = game.add.sprite(10, 10, 'contapunti15');
    contapunti15.visible = false;

    contapunti16 = game.add.sprite(10, 10, 'contapunti16');
    contapunti16.visible = false;

    contapunti20 = game.add.sprite(10, 10, 'contapunti20');
    contapunti20.visible = false;
    contapunti21 = game.add.sprite(10, 10, 'contapunti21');
    contapunti21.visible = false;
    contapunti22 = game.add.sprite(10, 10, 'contapunti22');
    contapunti22.visible = false;
    contapunti23 = game.add.sprite(10, 10, 'contapunti23');
    contapunti23.visible = false;
    contapunti24 = game.add.sprite(10, 10, 'contapunti24');
    contapunti24.visible = false;
    contapunti25 = game.add.sprite(10, 10, 'contapunti25');
    contapunti25.visible = false;
    contapunti26 = game.add.sprite(10, 10, 'contapunti26');
    contapunti26.visible = false;

    contapunti.fixedToCamera = true
    contapunti1.fixedToCamera = true
    contapunti2.fixedToCamera = true
    contapunti3.fixedToCamera = true
    contapunti4.fixedToCamera = true
    contapunti5.fixedToCamera = true
    contapunti6.fixedToCamera = true
    contapunti10.fixedToCamera = true
    contapunti11.fixedToCamera = true
    contapunti12.fixedToCamera = true
    contapunti13.fixedToCamera = true
    contapunti14.fixedToCamera = true
    contapunti15.fixedToCamera = true
    contapunti16.fixedToCamera = true
    contapunti20.fixedToCamera = true
    contapunti21.fixedToCamera = true
    contapunti22.fixedToCamera = true
    contapunti23.fixedToCamera = true
    contapunti24.fixedToCamera = true
    contapunti25.fixedToCamera = true
    contapunti26.fixedToCamera = true


    messaggio01 = game.add.sprite(0, 0, 'messaggio01');
    messaggio01.fixedToCamera = true
    messaggio01.alpha = 0;

    messaggio02 = game.add.sprite(0, 0, 'messaggio02');
    messaggio02.fixedToCamera = true
    messaggio02.alpha = 0;

    messaggio02bis = game.add.sprite(0, 0, 'messaggio02bis');
    messaggio02bis.fixedToCamera = true
    messaggio02bis.alpha = 0;

    messaggio03 = game.add.sprite(0, 0, 'messaggio03');
    messaggio03.fixedToCamera = true
    messaggio03.alpha = 0;

    messaggio04 = game.add.sprite(0, 0, 'messaggio04');
    messaggio04.fixedToCamera = true
    messaggio04.alpha = 0;

    messaggio05 = game.add.sprite(0, 0, 'messaggio05');
    messaggio05.fixedToCamera = true
    messaggio05.alpha = 0;

    messaggio0 = game.add.sprite(0, 0, 'messaggio0');
    messaggio0.fixedToCamera = true
    messaggio0.alpha = 0;

    //TAVOLE
    tavola1 = game.add.sprite(0, 0, 'tavola1');
    tavola1.fixedToCamera = true
    tavola1.alpha = 0;

    tavola2 = game.add.sprite(0, 0, 'tavola2');
    tavola2.fixedToCamera = true
    tavola2.alpha = 0;

    tavola3 = game.add.sprite(0, 0, 'tavola3');
    tavola3.fixedToCamera = true
    tavola3.alpha = 0;

    tavola4 = game.add.sprite(0, 0, 'tavola4');
    tavola4.fixedToCamera = true
    tavola4.alpha = 0;

    this.add.image(1028, 1300, 'mattoni')
    this.add.image(10000, 1298, 'legno')

    //CURSORI
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    actionButton = game.input.keyboard.addKey(Phaser.Keyboard.C);
    ESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC)

    ESC.onDown.add(togglePause)

    menu = game.add.sprite(0, 0, 'menu');
    menu.visible = false;
    menu.fixedToCamera = true;

    continua = game.add.button(312, 309, 'continua', togglePause);
    continua.visible = false;

    continua.fixedToCamera = true;

    home = game.add.button(359, 418, 'home', function () { window.location = 'index.html' });
    home.visible = false;
    home.inputEnabled = true;
    home.fixedToCamera = true;


    setTimeout(function () {
        var preloadingDiv = document.getElementById('preloading');
        preloadingDiv.style.display = 'none';

        var container = document.getElementById('phaser-container');
        container.style.display = 'flex'
    }, 1000)

}