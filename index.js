const dash_button = require('node-dash-button');
const roku = require('./roku.js');

const dashButtons = {
    'xx:xx:xx:xx:xx:xx': { name:'armhammer' , action : roku.powerToggle},
    'zz:zz:xx:xx:xx:zz': { name:'charmin' , channel : '54.4'}, //pbs
};

var macArray = Object.keys(dashButtons);

var dash = dash_button(Object.values(macArray), null, 1000, 'udp'); //address from step above

var handleAction = (dash_id) => {
    console.log('Found ' + dashButtons[dash_id].name)
    switch (true) {
        case dashButtons[dash_id].hasOwnProperty('channel'):
            roku.goto(dashButtons[dash_id].channel);
            break;
        case dashButtons[dash_id].hasOwnProperty('action'):
            dashButtons[dash_id].action();
            break;
        default:
            console.log("Found unmapped " + dash_id);
    }
};

dash.on("detected", function (dash_id) {
    handleAction(dash_id);
});   

