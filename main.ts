namespace SpriteKind {
    export const point = SpriteKind.create()
    export const SortHul = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.SortHul, function () {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite) {
    sprites.destroy(Øl)
    game.setGameOverMessage(true, "VICTORY!")
    game.gameOver(true)
    for (let index = 0; index < 10; index++) {
        music.play(music.stringPlayable("C5 B A B C5 B B C5 ", 4000), music.PlaybackMode.UntilDone)
    }
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
function lavpoint () {
    point = sprites.create(img`
        9 9 9 9 9 5 5 5 5 5 5 5 9 9 9 9 
        9 9 9 9 5 5 5 5 5 5 5 5 5 9 9 9 
        9 9 9 9 5 5 5 5 5 5 5 5 5 9 9 9 
        9 9 9 5 5 5 5 5 5 1 5 5 5 5 9 9 
        9 9 9 5 5 5 5 5 5 5 1 5 5 5 9 9 
        9 9 9 5 5 5 5 5 5 5 1 5 5 5 9 9 
        9 9 5 5 5 5 5 1 5 5 5 1 5 5 5 9 
        9 9 5 5 5 5 1 5 1 5 5 1 5 5 5 9 
        9 9 5 5 5 5 1 5 1 5 5 1 5 5 5 9 
        9 9 5 5 5 5 1 5 1 5 5 1 5 5 5 9 
        9 9 5 5 5 5 5 1 5 5 5 1 5 5 5 9 
        9 9 9 5 5 5 5 5 5 5 1 5 5 5 9 9 
        9 9 9 5 5 5 5 5 5 1 5 5 5 5 9 9 
        9 9 9 5 5 5 5 5 5 5 5 5 5 5 9 9 
        9 9 9 9 5 5 5 5 5 5 5 5 5 9 9 9 
        9 9 9 9 9 9 5 5 5 5 5 9 9 9 9 9 
        `, SpriteKind.point)
    point.setPosition(randint(2, 90), randint(30, 90))
}
info.onScore(10, function () {
    info.changeLifeBy(1)
    info.setScore(0)
    if (info.life() > 2) {
        info.setLife(2)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.stringPlayable("C5 - - - - - - - ", 4000), music.PlaybackMode.UntilDone)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.point, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    lavpoint()
    music.play(music.stringPlayable("- - - - - A B C5 ", 500), music.PlaybackMode.UntilDone)
})
let projectile: Sprite = null
let SortHul: Sprite = null
let Choice = 0
let point: Sprite = null
let Øl: Sprite = null
let mySprite: Sprite = null
info.startCountdown(60)
info.setLife(2)
info.setScore(0)
mySprite = sprites.create(img`
    .....11111111.......
    ...66666666666666...
    ...eeeedddd77d......
    ...ddeddddd77dd.....
    ...ddeedddddddd.....
    ...ddeedddddddd.....
    .....dddddddddd.....
    .....ddddddddd......
    ...111811181111.....
    ..1111888881111.....
    ..1111888881111.....
    .11111f888f111111...
    .dd11888888881ddd...
    .dddd88888888dddd...
    .dd88888888888ddd...
    .dd88888888888ddd...
    ...8888...8888......
    ..eeeee...eeeee.....
    .eeeeee...eeeeeee...
    ....................
    `, SpriteKind.Player)
mySprite.ay = 250
controller.moveSprite(mySprite, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
timer.after(45 * 1000, function () {
    Øl = sprites.create(img`
        9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 
        9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 
        9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 
        9 9 9 9 9 9 7 7 7 9 9 9 9 9 9 9 
        9 9 9 9 9 7 7 7 7 7 9 9 9 9 9 9 
        9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 9 
        9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 9 
        9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 9 
        9 9 9 9 6 6 6 6 6 6 6 9 9 9 9 9 
        9 9 9 9 6 6 f f f 6 6 9 9 9 9 9 
        9 9 9 9 6 6 f f f 6 6 9 9 9 9 9 
        9 9 9 9 6 6 f f f 6 6 9 9 9 9 9 
        9 9 9 9 6 6 6 6 6 6 6 9 9 9 9 9 
        9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 9 
        9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 9 
        9 9 9 9 7 7 7 7 7 7 7 9 9 9 9 9 
        `, SpriteKind.Food)
    tiles.placeOnTile(Øl, tiles.getTileLocation(9, 5))
})
for (let index = 0; index < 2; index++) {
    lavpoint()
}
game.onUpdateInterval(2000, function () {
    Choice = randint(6, 4)
    if (Choice == 6) {
        SortHul = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f f f f f f 3 3 3 a 6 3 a f f f 
            f f f a 6 a f f f f f 3 3 a f f 
            f f a 3 3 f f f f f f f f f f f 
            f f a f f f f f f f f f f f f f 
            f f 3 f f f f f a 6 a a f f f f 
            f f 6 f f f f a a f f 3 a f f f 
            f f a f f f f 6 3 f f f 3 3 f f 
            f f a 3 f f f a 3 6 6 f f 3 a f 
            f f f 3 3 f f f a 6 6 f f f 6 a 
            f f f a 6 f f f f 6 3 f f f f a 
            f f f f a a f f f f f f f f f 6 
            f f f f f a 6 3 f f f f f f 3 3 
            f f f f f f a 3 3 f f f f a 3 f 
            f f f f f f f f 3 a a 6 a 3 3 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.SortHul)
        SortHul.setPosition(150, 90)
        SortHul.setVelocity(-50, 0)
    } else if (Choice == 5) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, -50, 0)
        projectile.y = 90
    } else if (Choice == 4) {
        projectile = sprites.createProjectileFromSide(img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c c . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f c 3 b c 3 b c f b b c c c . 
            f c b b b b b b c f b c b c c . 
            c c 1 b b b 1 b c b b c b b c . 
            c b b b b b b b b b c c c b c . 
            c b 1 f f 1 c b b c c c c c . . 
            c f 1 f f 1 f b b b b f c . . . 
            f f f f f f f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 2 b b b c f . . . . 
            . . f 2 2 2 b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, -50, 0)
        projectile.y = randint(30, 110)
    }
})
