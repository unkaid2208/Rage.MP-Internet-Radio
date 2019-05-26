# Rage.MP-Internet-Radio

Internet radio over colshapes using CEF.

Scope of application: custom clubs, interiors.

Default location is the Galileo Observatory (behind the monument).

Default radio station - Wacken Radio (DE).


Installation:

I. Put server files to: ```server-files\packages\yourGameMode```

II. Add ```require('./rStreamColshapes');``` to your server's ```index.js```

III. Put client files to: ```client_packages``` then edit your client's ```index.js``` and add ```require('./rStream');```

To change radio stream url, edit ```index.html``` here: ```client_packages\cef\rStream\index.html```
