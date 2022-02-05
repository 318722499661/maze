scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . f 5 5 f . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . 5 f f 5 . . . . . . . 
    . . . 6 6 6 6 6 6 6 6 . . . . . 
    . . . 5 6 6 6 6 6 6 5 . . . . . 
    . . . 5 6 6 6 6 6 6 5 . . . . . 
    . . . 5 6 6 6 6 6 6 5 . . . . . 
    . . . 5 6 6 6 6 6 6 5 . . . . . 
    . . . . 6 6 6 6 6 6 . . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 . . . . . . 
    . . . 5 5 5 . . 5 5 5 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
