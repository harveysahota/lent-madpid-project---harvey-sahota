controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .....22.........
        .....242........
        ......242.......
        .......242......
        .......244......
        .......2444.....
        ......44454.....
        .....454452.....
        ....45555242....
        ....45454242....
        ....25452242....
        ....25452442....
        ....25455442....
        ....2554542.....
        .....25452......
        ......2542......
        `, mySprite, 0, -100)
    projectile.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    myEnemy.destroy()
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let myFuel: Sprite = null
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 8 1 8 1 . . . . . . 
    . . . . . 1 8 8 8 1 . . . . . . 
    . . . . 1 1 8 1 8 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 8 8 8 1 1 1 . . . . 
    . . . 1 1 1 8 1 1 1 1 1 . . . . 
    . . 1 1 1 1 8 8 8 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 8 1 1 1 1 . . . 
    . . 1 1 1 1 8 8 8 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 2 2 . . . 2 2 . . 2 2 . . . 
    . . 2 2 . . . 2 2 . . 2 2 . . . 
    . . 2 . . . . 2 . . . . 2 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite, -25, 0)
game.onUpdateInterval(5000, function () {
    myFuel = sprites.createProjectileFromSide(img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 3 3 3 3 a a . 
        . . b d d 3 3 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
})
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.createProjectileFromSide(img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb4444b5b44444b44444444b....
        ...ebb44444b4444444444b444446...
        ..eb6bb444444444bb444b5b444446..
        ..e6bb5b44444444b5b444b44bb44e..
        .e66b4b4444444444b4444444b5b44e.
        .e6bb444444444444444444444bb44e.
        eb66b44444bb444444444444444444be
        eb66bb444b5b44444444bb44444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .efbb66666bb4444444444444444bfe.
        .86fcbb66666bbb44444444444bcc688
        8772effcbbbbbbbbbbbbbbbbcfc22778
        87722222cccccccccccccccc22226678
        f866622222222222222222222276686f
        fef866677766667777776667777fffef
        fbff877768f86777777666776fffffbf
        fbeffeefffeff7766688effeeeefeb6f
        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
        f66ddfffffeeeffeffeeeeeffeedb46e
        .c66ddd4effffffeeeeeffff4ddb46e.
        .fc6b4dddddddddddddddddddb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(300, function () {
    statusbar.value += -1
})
