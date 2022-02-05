// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001000010101010303030101010103010301030303030303010101010101010101030303010101010103030103010301010301010103010303030303030301010101010303030303010103010301030301020103010301010101010101010303030301010101010303010301010301010103010301030303030303010101010301030303030303010301030303010301010301010101010101030303010301030303010101010301010103010301030303030303030301010103010301010101010303030301030303010301030101010101010101050101010301030103030303030101010101010301030103030303030303010103030301030103010101030103030303030301030103010101010101030303010101030103010301010103010101010101030101010303030301010301010303030103010301030303010303030303030303030301010101010101030301010103010301010101010301010101010101010101030303030303030301030103010301030303030301030303030303030301010103010101010101010103010301030101010101030101010301030301030101010303030303030303010301030103030303030103010301030301030103010101010101010101010301030101010101010103010101010101030403`, img`
....222....2.2.222222.........
222.....22.2.2..2...2.2222222.
....22222..2.2.22...2.2.......
.2222.....22.2..2...2.2.222222
....2.222222.2.222.2..2.......
222.2.222....2...2.2.22222222.
..2.2.....2222.222.2.2........
....2.2.22222......2.2.2222222
..222.2.2...2.222222.2.2......
222...2.2.2...2......2...2222.
.2..222.2.2.222.2222222222....
...22...2.2.....2..........222
22222.2.2.2.22222.22222222...2
........2.2.2.....2...2.22.2..
.22222222.2.2.22222.2.2.22.2.2
..........2.2.......2......2.2
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
