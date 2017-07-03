# TwitterClone
It is an app developed using mean stack.

1. server.js. This includes mongodb setup using mongoose, localhost setup.This file is also responsible for all GET and POST requests.
2. index.html.
    1. This is what is seen when app is loaded.
    2. This includes all html , external nodemodules refernences (scripts), angular stuff.
    3. A user may login or signup.
    4. If he is already loggedin before, his info is retreived from localStorage. In this case he is directed to his Profile.
    5. Now the role of angular comes. When user clickes on some standard reference(sref), it goes to app.js. whrer ui router dependency help to route it to correct html along with its corresponding controller.
    6. Controller now makes a POST request which is listened by server.js.
    7. The request is then served by server controllers which modifies datasets and return the response.
