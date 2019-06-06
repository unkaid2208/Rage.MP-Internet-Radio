let rStream = null;

//fix by Loxitation, thanks to him
mp.events.add(
{
    "rStreamStart" : () => {
        rStream = mp.browsers.new('package://cef/rStream/index.html');
    },
    
    "rStreamStop" : (lang, inject) => {
         rStream.destroy();
    },

});
