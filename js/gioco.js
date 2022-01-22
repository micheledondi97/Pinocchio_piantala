/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/aoVXOmqx
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'phaser-container', {
    preload: preload, create: create, update: update, render: render
});


var h;

var ESC
let isGamePaused = false

function togglePause() {
    console.log("toglging");

    isGamePaused = !isGamePaused;

    menu.visible = isGamePaused
    continua.visible = isGamePaused
    home.visible = isGamePaused

}

let messaggio01Mostrato = 0;
let messaggio02Mostrato = 0;
let messaggio02bisMostrato = 0;
let messaggio03Mostrato = 0;
let messaggio04Mostrato = 0;
let messaggio05Mostrato = 0;
let messaggio06Mostrato = 0;
let messaggio0Mostrato = 0;


let direzione = 1
function takeStar0() {
    star0.kill();
    contapunti1.visible = true;
}

function takeStar() {
    star.kill();
    contapunti2.visible = true;
}

function takeStar2() {
    star2.kill();
    contapunti3.visible = true;
}

function takeStar3() {
    star3.kill();
    contapunti4.visible = true;
}

function takeStar4() {
    star4.kill();
    contapunti5.visible = true;
}

function takeStar5() {
    star5.kill();
    contapunti6.visible = true;
}

function takeMoneta() {
    moneta.kill();
    contapunti11.visible = true;
}
function takeMoneta1() {
    moneta1.kill();
    contapunti12.visible = true;
}
function takeMoneta2() {
    moneta2.kill();
    contapunti13.visible = true;
}
function takeMoneta3() {
    moneta3.kill();
    contapunti14.visible = true;
}
function takeMoneta4() {
    moneta4.kill();
    contapunti15.visible = true;
}
function takeMoneta5() {
    moneta5.kill();
    contapunti16.visible = true;
    messaggio02.alpha = 1;
    game.time.events.add(3000, function () {
        messaggio02.alpha = 0;
        messaggio02Mostrato = 1;
    })
}

function takeChiave() {
    chiave.kill();
    contapunti21.visible = true;
}
function takeChiave1() {
    chiave1.kill();
    contapunti22.visible = true;
}
function takeChiave2() {
    chiave2.kill();
    contapunti23.visible = true;
}
function takeChiave3() {
    chiave3.kill();
    contapunti24.visible = true;
}
function takeChiave4() {
    chiave4.kill();
    contapunti25.visible = true;
}
function takeChiave5() {
    chiave5.kill();
    contapunti26.visible = true;
}

function hitCloudPlatform(player, platform) {

    if (platform.body.touching.up) {

        platformShake = true;
        game.time.events.add(Phaser.Timer.SECOND * 1, function () {
            platform.kill();

            game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                platform.revive()
                platformShake = false;
                platform.body.velocity.x = 0

            })
        }, this);

    }
}

function hitEnemy(player, enemy) {

    if (actionButton.isDown) {
        enemy.animations.play("cade", 10)
        game.camera.flash(0xFFFFFF, 400)
        game.time.events.add(700, function () {
            enemy.destroy()
        })

    } else {

        game.camera.shake(0.005, 100)
        game.camera.flash(0x73120D, 400)
        game.time.events.add(100, function () {
            respawn(player)
        })

    }
}

function hitEnemyA() {
    game.camera.shake(0.005, 100)
    game.camera.flash(0x73120D, 400)
    game.time.events.add(100, function () {
        respawn(player)
    })
}

function respawn(player) {
    player.x = spawn_x;
    player.y = spawn_y;

}

function checkpoint1() {
    spawn_x = check1.x;
    spawn_y = check1.y;
}

function checkpoint2() {
    spawn_x = check2.x;
    spawn_y = check2.y;
}

function checkpoint3() {
    spawn_x = check3.x;
    spawn_y = check3.y;
}

function checkpoint4() {
    spawn_x = check1_3.x;
    spawn_y = check1_3.y;
}

function checkpoint5() {
    spawn_x = check2_3.x;
    spawn_y = check2_3.y;
}

function checkpoint6() {
    spawn_x = check3_3.x;
    spawn_y = check3_3.y;
}

function checkpoint7() {
    spawn_x = check1_1.x;
    spawn_y = check1_1.y;
}

function checkpoint8() {
    spawn_x = check2_1.x;
    spawn_y = check2_1.y;
}

function checkpoint9() {
    spawn_x = check3_1.x;
    spawn_y = check3_1.y;
}

function hitLava() {
    respawn(player)
    game.camera.flash(0x73113D, 400)
}

function abbassaLeva2() {
    leva.kill()
    leva2.visible = true;
    botola2.y = 295
}

function abbassaLeva3() {
    leva3.kill()
    leva3b.visible = true;
    ponte_teatro.y = -50
}
function abbassaLeva() {
    levaA.kill()
    levaB.visible = true;
    botola.x = 140
}




function render() {

}
