let rStream = null;

mp.events.add('playerEnterColshape', (rStreamColshape) => {
    rStream = mp.browsers.new('package://cef/rStream/index.html');
});
mp.events.add('playerExitColshape', (rStreamColshape) => {
    rStream.destroy();
});