var request = require('request');
const wol = require('wol');

var rokuTVMAC = 'xx:xx:xx:xx:xx:xx';

module.exports = {
    turnOn: function () {
        wol.wake(rokuTVMAC);
        request.post('http://rokutv:8060/keypress/PowerOn', {form:{}})
    },
    goto: function(channel) {
        this.turnOn();
        request.post('http://rokuTV:8060/launch/tvinput.dtv?ch=' + channel, {form:{}});
    },
    powerToggle : function () {
        wol.wake(rokuTVMAC);
        request.post('http://rokutv:8060/keypress/Power', {form:{}})
    }
}