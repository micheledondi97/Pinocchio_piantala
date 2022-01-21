
function preload() {



    game.load.image('tavola1', 'Assets/tavola1.png');
    game.load.image('tavola2', 'Assets/tavola2.png');
    game.load.image('tavola3', 'Assets/tavola3.png');
    game.load.image('tavola4', 'Assets/tavola4.png');


    //LIVELLO 2
    game.load.image('mattoni', 'Assets/mattoni.png');
    game.load.image('continua', 'Assets/continua.png');
    game.load.image('menu', 'Assets/menu.png');
    game.load.image('home', 'Assets/home.png');

    game.load.image('contapunti', 'Assets/contaPunti.png');
    game.load.image('contapunti1', 'Assets/contaPunti1.png');
    game.load.image('contapunti2', 'Assets/contaPunti2.png');
    game.load.image('contapunti3', 'Assets/contaPunti3.png');
    game.load.image('contapunti4', 'Assets/contaPunti4.png');
    game.load.image('contapunti5', 'Assets/contaPunti5.png');
    game.load.image('contapunti6', 'Assets/contaPunti6.png');

    game.load.image('check', 'Assets/check.png');

    game.load.image('sfondo3', 'Assets/sfondo3.png');
    game.load.image('sfondolivello1', 'Assets/sfondolivello1.png');
    game.load.image('sfondolivello3', 'Assets/sfondolivello3.png');
    game.load.image('sfondo', 'Assets/sfondo_2.png');


    game.load.image('messaggio01', 'Assets/messaggio01.png');
    game.load.image('messaggio02', 'Assets/messaggio02.png');
    game.load.image('messaggio02bis', 'Assets/messaggio02bis.png');
    game.load.image('messaggio03', 'Assets/messaggio03.png');
    game.load.image('messaggio04', 'Assets/messaggio04.png');
    game.load.image('messaggio05', 'Assets/messaggio05.png');
    game.load.image('messaggio0', 'Assets/messaggio0.png');

    game.load.image('volta', 'Assets/volta.png');
    game.load.image('volta2', 'Assets/volta2.png');

    game.load.spritesheet('player', 'Assets/PINOCCHIO_DEF.png', 78.3649, 120);
    game.load.spritesheet('fata', 'Assets/fata1.png', 139.5, 160);
    game.load.spritesheet('fata1', 'Assets/fata1.png', 139.5, 160);
    game.load.spritesheet('fata2', 'Assets/fata1.png', 139.5, 160);

    game.load.spritesheet('enemy', 'Assets/mov_marionetta.png', 300, 2400);
    game.load.image('enemyA', 'Assets/marionetta3.png');

    game.load.image('platform2', 'Assets/piattaforma.png');
    game.load.image('pavimento', 'Assets/piattaforma1.png');
    game.load.image('pavimento_corto', 'Assets/pavimento_corto.png');
    game.load.image('pavimento2', 'Assets/pavimento2.png');
    game.load.image('pavimento3', 'Assets/pavimento3.png');
    game.load.image('pavimento5', 'Assets/pavimento5.png');
    game.load.image('pilastro', 'Assets/pilastro.png');

    game.load.image('ponte', 'Assets/ponte.png');

    game.load.spritesheet('lava', 'Assets/lava1.png', 500, 700);
    game.load.image('lava1', 'Assets/lava.png');

    game.load.image('colonna', 'Assets/colonna.png');
    game.load.image('colonna2', 'Assets/colonna2.png');

    game.load.image('scalino', 'Assets/scalino.png');
    game.load.image('base', 'Assets/base.png');
    game.load.image('botola2', 'Assets/botola3.png');

    game.load.image('leva', 'Assets/leva.png');
    game.load.image('leva2', 'Assets/leva2.png');

    game.load.image('star', 'Assets/star.png');

    game.load.spritesheet('player', 'Assets/PROVA.png', 78.3649, 120);

    game.load.image('confine', 'Assets/confine.png');
    game.load.image('fine', 'Assets/fine.png');
    game.load.image('fine2', 'Assets/fine.png');


    //LIVELLO 1
    game.load.image('platform1', 'Assets/piattaformaferma.png');
    game.load.image('mobileplatform', 'Assets/piattaformamobile.png');
    game.load.image('cloudplatform', 'Assets/cloudplatform1.png');
    game.load.image('moneta', 'Assets/moneta.png')
    game.load.spritesheet('nemicouccello', 'Assets/nemicouccello.png', 128, 60)
    game.load.image('contapunti10', 'Assets/contapunti10.png');
    game.load.image('contapunti11', 'Assets/contapunti11.png');
    game.load.image('contapunti12', 'Assets/contapunti12.png');
    game.load.image('contapunti13', 'Assets/contapunti13.png');
    game.load.image('contapunti14', 'Assets/contapunti14.png');
    game.load.image('contapunti15', 'Assets/contapunti15.png');
    game.load.image('contapunti16', 'Assets/contapunti16.png');
    game.load.image('balcone', 'Assets/balcone.png');


    //LIVELLO 3
    game.load.image('pav_teatro', 'Assets/pav_teatro.png')
    game.load.image('spuntoni', 'Assets/spuntoni.png')
    game.load.image('float_teatro', 'Assets/float_teatro.png')
    game.load.image('float1_teatro', 'Assets/float_teatro.png')
    game.load.image('pav2_teatro', 'Assets/pav2_teatro.png')
    game.load.image('ponte_teatro', 'Assets/ponte_teatro.png')
    game.load.image('plat_teatro', 'Assets/plat_teatro.png')
    game.load.image('scala_teatro', 'Assets/scala_teatro.png')
    game.load.image('pil_teatro', 'Assets/pil_teatro.png')
    game.load.image('sopra_teatro', 'Assets/sopra_teatro.png')
    game.load.image('col_teatro', 'Assets/col_teatro.png')
    game.load.image('finale1', 'Assets/finale1.png')
    game.load.image('finale2', 'Assets/finale2.png')
    game.load.image('finale3', 'Assets/finale3.png')
    game.load.image('corda', 'Assets/corda.png')
    game.load.image('fondamenta', 'Assets/fondamenta.png')
    game.load.spritesheet('chiave', 'Assets/chiave.png', 82, 65)
    game.load.spritesheet('chiave1', 'Assets/chiave.png', 82, 65)
    game.load.spritesheet('chiave2', 'Assets/chiave.png', 82, 65)
    game.load.spritesheet('chiave3', 'Assets/chiave.png', 82, 65)
    game.load.spritesheet('chiave4', 'Assets/chiave.png', 82, 65)
    game.load.spritesheet('chiave5', 'Assets/chiave.png', 82, 65)
    game.load.image('div_teatro', 'Assets/div_teatro.png')
    game.load.image('mangiafuoco1', 'Assets/Mangiafuoco.png')
    game.load.image('bracciodx', 'Assets/bracciodx.png')
    game.load.image('bracciosx', 'Assets/bracciosx.png')
    game.load.image('leva3', 'Assets/leva3.png');
    game.load.image('leva3b', 'Assets/leva3b.png');
    game.load.image('gabbia', 'Assets/gabbia.png');
    game.load.image('casse', 'Assets/casse.png');
    game.load.image('contapunti20', 'Assets/contapunti20.png');
    game.load.image('contapunti21', 'Assets/contapunti21.png');
    game.load.image('contapunti22', 'Assets/contapunti22.png');
    game.load.image('contapunti23', 'Assets/contapunti23.png');
    game.load.image('contapunti24', 'Assets/contapunti24.png');
    game.load.image('contapunti25', 'Assets/contapunti25.png');
    game.load.image('contapunti26', 'Assets/contapunti26.png');
    game.load.image('legno', 'Assets/legno.png');

    game.load.image('terra', 'Assets/terra.png');

    game.load.crossOrigin = 'anonymous';

}
