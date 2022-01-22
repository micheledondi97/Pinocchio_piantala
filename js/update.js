
function update() {

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, pavimento);
    game.physics.arcade.collide(player, pavimento2);
    game.physics.arcade.collide(player, pavimento3);
    game.physics.arcade.collide(player, ponte);
    game.physics.arcade.collide(player, pilastro);
    game.physics.arcade.collide(player, pilastro1);
    game.physics.arcade.collide(player, pilastro2);
    game.physics.arcade.collide(player, volta2);
    game.physics.arcade.collide(player, scalino);
    game.physics.arcade.collide(player, colonna);
    game.physics.arcade.collide(player, colonna2);
    game.physics.arcade.collide(player, base);
    game.physics.arcade.collide(player, pavimento_corto);

    game.physics.arcade.collide(player, botola);
    game.physics.arcade.collide(player, botola2);
    game.physics.arcade.collide(player, levaA, abbassaLeva);
    game.physics.arcade.collide(player, leva, abbassaLeva2);
    game.physics.arcade.collide(player, leva3, abbassaLeva3);

    game.physics.arcade.collide(player, star, takeStar);
    game.physics.arcade.collide(player, star2, takeStar2);
    game.physics.arcade.collide(player, star3, takeStar3);
    game.physics.arcade.collide(player, star4, takeStar4);
    game.physics.arcade.collide(player, star5, takeStar5);
    game.physics.arcade.collide(player, star0, takeStar0);

    game.physics.arcade.overlap(player, enemy, hitEnemy);
    game.physics.arcade.collide(player, enemy1, hitEnemyA);
    game.physics.arcade.overlap(player, enemy2, hitEnemy);
    game.physics.arcade.overlap(player, enemy3, hitEnemyA);
    game.physics.arcade.overlap(player, enemy4, hitEnemy);
    game.physics.arcade.overlap(player, enemy5, hitEnemyA);
    game.physics.arcade.overlap(player, enemy6, hitEnemy);
    game.physics.arcade.overlap(player, enemy7, hitEnemyA);
    game.physics.arcade.collide(player, enemy8, hitEnemyA);
    game.physics.arcade.collide(player, enemy9, hitEnemyA);
    game.physics.arcade.overlap(player, enemy10, hitEnemy);
    game.physics.arcade.overlap(player, enemy11, hitEnemy);
    game.physics.arcade.overlap(player, enemy12, hitEnemyA);
    game.physics.arcade.overlap(player, enemy13, hitEnemyA);
    game.physics.arcade.overlap(player, enemy14, hitEnemy);
    game.physics.arcade.overlap(player, enemy15, hitEnemy);
    game.physics.arcade.overlap(player, enemy16, hitEnemy);
    game.physics.arcade.overlap(player, nemicouccello, hitEnemy);
    game.physics.arcade.overlap(player, nemicouccello1, hitEnemy);
    game.physics.arcade.overlap(player, nemicouccello2, hitEnemy);
    game.physics.arcade.overlap(player, nemicouccello3, hitEnemy);

    game.physics.arcade.overlap(player, bracciodx, hitEnemy);
    game.physics.arcade.overlap(player, bracciosx, hitEnemy);
    game.physics.arcade.overlap(player, bracciodx2, hitEnemy);
    game.physics.arcade.overlap(player, bracciosx2, hitEnemy);

    game.physics.arcade.collide(player, lava1, hitLava);
    game.physics.arcade.collide(player, spuntoni, hitLava);


    game.physics.arcade.overlap(player, check1, checkpoint1);
    game.physics.arcade.overlap(player, check2, checkpoint2);
    game.physics.arcade.overlap(player, check3, checkpoint3);
    game.physics.arcade.overlap(player, check1_3, checkpoint4);
    game.physics.arcade.overlap(player, check2_3, checkpoint5);
    game.physics.arcade.overlap(player, check3_3, checkpoint6);
    game.physics.arcade.overlap(player, check1_1, checkpoint7);
    game.physics.arcade.overlap(player, check2_1, checkpoint8);
    game.physics.arcade.overlap(player, check3_1, checkpoint9);

    game.physics.arcade.collide(player, platform1);
    game.physics.arcade.collide(player, cloudplatform, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform1, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform2, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform3, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform4, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform5, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform6, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform7, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform8, hitCloudPlatform);
    game.physics.arcade.collide(player, cloudplatform9, hitCloudPlatform);

    game.physics.arcade.collide(player, mobileplatform);
    game.physics.arcade.collide(player, pav_teatro);
    game.physics.arcade.collide(player, float_teatro);
    game.physics.arcade.collide(player, float1_teatro);
    game.physics.arcade.collide(player, pav2_teatro);
    game.physics.arcade.collide(player, ponte_teatro);
    game.physics.arcade.collide(player, plat_teatro);
    game.physics.arcade.collide(player, scala_teatro);
    game.physics.arcade.collide(player, sopra_teatro);
    game.physics.arcade.collide(player, col_teatro);
    game.physics.arcade.collide(player, finale1);
    game.physics.arcade.collide(player, finale3);
    game.physics.arcade.collide(player, confine);
    game.physics.arcade.collide(player, fondamenta);
    game.physics.arcade.collide(player, terra);

    game.physics.arcade.collide(player, moneta, takeMoneta);
    game.physics.arcade.collide(player, moneta1, takeMoneta1);
    game.physics.arcade.collide(player, moneta2, takeMoneta2);
    game.physics.arcade.collide(player, moneta3, takeMoneta3);
    game.physics.arcade.collide(player, moneta4, takeMoneta4);
    game.physics.arcade.collide(player, moneta5, takeMoneta5);


    game.physics.arcade.collide(player, chiave, takeChiave);
    game.physics.arcade.collide(player, chiave1, takeChiave1);
    game.physics.arcade.collide(player, chiave2, takeChiave2);
    game.physics.arcade.collide(player, chiave3, takeChiave3);
    game.physics.arcade.collide(player, chiave4, takeChiave4);
    game.physics.arcade.collide(player, chiave5, takeChiave5);


    game.physics.arcade.overlap(player, fine, fine1);
    game.physics.arcade.overlap(player, fine2, fine_2);
    game.physics.arcade.collide(player, gabbia, fine_3);
    game.physics.arcade.collide(player, casse);




    player.body.velocity.x = 0;





    if (player.x > 10200 && contapunti6.visible == true && contapunti4.visible == true && contapunti3.visible == true && contapunti2.visible == true && contapunti1.visible == true && contapunti.visible == true) {
        enemy9.kill()
        fata.alpha = 1
    }
    else if (player.x > 10528) {
        game.time.events.add(100, function () {
            respawn2(player)
        })
    }

    function respawn2(player) {
        player.x = check1.x;
        player.y = check1.y;
        game.camera.shake(0.005, 100)
        game.camera.flash(0x73120D, 400)
    }

    if (player.x > 14000 && player.x < 15050) {
        game.camera.shake(0.005, 100)
        game.camera.flash(0x000000, 400)
        game.time.events.add(100, function () {
            mangiafuoco1.alpha = 1;
            bracciodx.alpha = 1;
            bracciosx.alpha = 1;

        })
    }
    else {
        game.time.events.add(1000, function () {
            mangiafuoco1.alpha = 0;
            bracciodx.alpha = 0;
            bracciosx.alpha = 0;
        })
    }

    if (player.x > 21000 && (mangiafuoco2.visible == true)) {
        game.camera.shake(0.005, 100)
        game.camera.flash(0x000000, 400)
        game.time.events.add(100, function () {
            mangiafuoco2.alpha = 1;
            bracciodx2.alpha = 1;
            bracciosx2.alpha = 1;

        })
    }

    bracciodx.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2.3) * 200
    bracciosx.y = -250 + Math.sin(game.time.totalElapsedSeconds() * 1.5) * 200

    bracciodx2.y = -360 + Math.sin(game.time.totalElapsedSeconds() * 2.3) * 200
    bracciosx2.y = -280 + Math.sin(game.time.totalElapsedSeconds() * 1.5) * 200

    enemy.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2) * 200

    enemy1.x = 3000 + Math.sin(game.time.totalElapsedSeconds()) * 400;
    enemy1.y = -300 + Math.cos(game.time.totalElapsedSeconds()) * 150;

    enemy2.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2) * 200
    enemy3.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2.2) * 210
    enemy4.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2) * 210
    enemy5.y = -500 + Math.sin(game.time.totalElapsedSeconds() * 2.1) * 210
    enemy6.y = -500 + Math.sin(game.time.totalElapsedSeconds() * 1.7) * 210
    enemy7.y = -500 + Math.sin(game.time.totalElapsedSeconds() * 2) * 210

    enemy8.x = 9000 + Math.sin(game.time.totalElapsedSeconds()) * 400;
    enemy8.y = -300 + Math.cos(game.time.totalElapsedSeconds()) * 150;

    pilastro.y = -100 + Math.sin(game.time.totalElapsedSeconds() * 0.7) * 200
    pilastro2.y = -150 + Math.sin(game.time.totalElapsedSeconds() * 0.8) * 200

    mobileplatform.x = Math.sin(game.time.totalElapsedSeconds() * 0.4) * 600

    float1_teatro.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 0.5) * 400

    enemy10.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2) * 200
    enemy11.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2.3) * 200
    enemy12.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2.5) * 200
    enemy13.y = -200 + Math.sin(game.time.totalElapsedSeconds() * 2.3) * 200
    enemy14.y = -100 + Math.sin(game.time.totalElapsedSeconds() * 2.1) * 270
    enemy15.y = -100 + Math.sin(game.time.totalElapsedSeconds() * 2.3) * 260
    enemy16.y = -100 + Math.sin(game.time.totalElapsedSeconds() * 1.8) * 250

    nemicouccello.animations.play(Math.cos(game.time.totalElapsedSeconds() * 2.3) > 0 ? 'volodx' : 'volo', 20, true)
    nemicouccello.x = 200 + Math.sin(game.time.totalElapsedSeconds() * 2.3) * 250

    nemicouccello1.animations.play(Math.cos(game.time.totalElapsedSeconds() * 2) > 0 ? 'volodx' : 'volo', 20, true)
    nemicouccello1.x = 200 + Math.sin(game.time.totalElapsedSeconds() * 2) * 300

    nemicouccello2.animations.play(Math.cos(game.time.totalElapsedSeconds() * 2.3) > 0 ? 'volodx' : 'volo', 20, true)
    nemicouccello2.x = 200 + Math.sin(game.time.totalElapsedSeconds() * 2.3) * 250

    fata2.animations.play('ferma1', 3)
    fata1.animations.play('ferma1', 3)
    fata.animations.play('ferma1', 3)

    chiave.animations.play('oggetto', 7)
    chiave1.animations.play('oggetto', 7)
    chiave2.animations.play('oggetto', 7)
    chiave3.animations.play('oggetto', 7)
    chiave4.animations.play('oggetto', 7)
    chiave5.animations.play('oggetto', 7)


    function fine1() {
        messaggio03.alpha = 1;
        game.time.events.add(3000, function () {
            messaggio03.alpha = 0;
        })
        game.time.events.add(4000, function () {
            tavola1.alpha = 1;
            contapunti10.visible = false;
            contapunti11.visible = false;
            contapunti12.visible = false;
            contapunti13.visible = false;
            contapunti14.visible = false;
            contapunti15.visible = false;
            contapunti16.visible = false;
            contapunti.visible = true;

            player.x = 1620
            game.camera.follow(player);
        })
        game.time.events.add(10000, function () {
            tavola1.alpha = 0;

        })
    }


    function fine_2() {
        game.time.events.add(1000, function () {
            tavola2.alpha = 1;
            contapunti.alpha = 0;
            contapunti1.alpha = 0;
            contapunti2.alpha = 0;
            contapunti3.alpha = 0;
            contapunti4.alpha = 0;
            contapunti5.alpha = 0;
            contapunti6.alpha = 0;
            contapunti20.visible = true;
            player.x = 11700
        })
        game.time.events.add(5000, function () {
            tavola2.alpha = 0;

        })
    }

    function fine_3() {
        if (contapunti26.visible == true && contapunti24.visible == true && contapunti23.visible == true && contapunti22.visible == true && contapunti21.visible == true && contapunti.visible25 == true) {
            game.time.events.add(1000, function () {
                mangiafuoco2.destroy()
                bracciodx2.destroy()
                bracciosx2.destroy()
                gabbia.alpha = 0
                tavola4.alpha = 1;
            })
            game.time.events.add(4000, function () {
                menu.visible = true;
                home.visible = true;
            })
        }

        else {
            game.time.events.add(2000, function () {
                tavola3.alpha = 1;
                mangiafuoco2.destroy()
                bracciodx2.destroy()
                bracciosx2.destroy()
                game.time.events.add(4000, function () {
                    menu.visible = true;
                    home.visible = true;
                })
            })
        }
    }



    //POP-UP

    if (player.x > 100 && player.x < 200 && messaggio01Mostrato == 0) {
        messaggio01.alpha = 1;

    }
    else if (player.x > 200) {
        messaggio01.alpha = 0;
        messaggio01Mostrato = 1;
    }

    if (player.y < 900 && player.y > 800 && messaggio02bisMostrato == 0 && (contapunti16.visible == false)) {
        messaggio02bis.alpha = 1;

    }
    else if (player.y < 700 && player.y > 650) {
        messaggio02bis.alpha = 0;
        messaggio02bisMostrato = 1;
    }


    if (player.y < 650 && player.y > 550 && messaggio03Mostrato == 0) {
        messaggio03.alpha = 1;

    }
    else if (player.y > 450 && player.y > 400) {
        messaggio03.alpha = 0;
        messaggio03Mostrato = 1;
    }

    if (player.x > 1650 && player.x < 1800 && messaggio04Mostrato == 0) {
        messaggio04.alpha = 1;

    }
    else if (player.x > 1700) {
        messaggio04.alpha = 0;
        messaggio04Mostrato = 1;
    }

    if (player.x > 11800 && player.x < 11900 && messaggio05Mostrato == 0) {
        messaggio05.alpha = 1;

    }
    else if (player.x > 11900) {
        messaggio05.alpha = 0;
        messaggio05Mostrato = 1;
    }


    if (player.x > 14030 && player.x < 14130 && messaggio0Mostrato == 0) {
        messaggio0.alpha = 1;

    }
    else if (player.x > 14130) {
        messaggio0.alpha = 0;
        messaggio0Mostrato = 1;
    }

    player.body.velocity.x = 0;

    if (isGamePaused) return;

    //MOVIMENTI

    var salto = !(player.body.onFloor() || player.body.touching.down)

    if (cursors.left.isDown) {
        player.body.velocity.x = -300;
        if (!salto)
            player.animations.play('left', 17, false);
        direzione = 0;
    }

    else if (cursors.right.isDown) {
        player.body.velocity.x = 300;
        if (!salto)
            player.animations.play('right', 17, false);
        direzione = 1;
    }

    if (!cursors.right.isDown && (!cursors.left.isDown && (direzione == 0)) && (player.body.onFloor() || player.body.touching.down)) {
        player.animations.play('fermosx', 5);
    }

    if (!cursors.right.isDown && (!cursors.left.isDown && (direzione == 1)) && (player.body.onFloor() || player.body.touching.down)) {
        player.animations.play('fermodx', 5);
    }

    if (jumpButton.isDown && (direzione == 1)) {
        player.animations.play('jumpdx', 5);
    }

    if (jumpButton.isDown && (direzione == 0)) {
        player.animations.play('jumpsx', 5);
    }

    if (jumpButton.isDown && player.body.touching.down || player.body.onFloor()) {

        player.body.velocity.y = -480;
    }

    if (salto) {
        if (cursors.right.isDown)
            player.animations.play('jumpdx')
        if (cursors.left.isDown)
            player.animations.play('jumpsx')
    }

}