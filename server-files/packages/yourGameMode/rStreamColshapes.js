let rStreamColshape = mp.colshapes.newSphere(-410, 1179, 325, 10, 0);

//fix by Loxitation, thanks to him

function playerEnterColshapeHandler(player, shape) {
    if(shape == rStreamColshape) {
        player.notify(`Radio stream started`);
        player.call("rStreamStart", []);
    }
}
mp.events.add("playerEnterColshape", playerEnterColshapeHandler);

function playerExitColshapeHandler(player, shape) {
    if(shape == rStreamColshape) {
        player.notify(`Radio stream stopped`);
        player.call("rStreamStop", []);
    }
}
mp.events.add("playerExitColshape", playerExitColshapeHandler); 


//optional
mp.markers.new(0, new mp.Vector3(-410, 1179, 327), 2.0,{
	"color": [255, 255, 0, 150],
	"direction": 0,
	"dimension": 0,
	"visible": true
});
