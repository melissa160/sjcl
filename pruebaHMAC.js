var sjcl = require('./sjcl.js')

function toHex (message) {
    var str = '', c;
    for (var i = 0; i < message.length; i++) {
        c = message.charCodeAt(i);
        str += c.toString(16) ;
    }
    return str;
}

function sign(originalMessage, key){
    var message =toHex(originalMessage);
    var signature, hmac;    
    hmac = new sjcl.misc.hmac(sjcl.codec.hex.toBits(key), sjcl.hash.sha256);
    signature = sjcl.codec.hex.fromBits(hmac.encrypt(sjcl.codec.hex.toBits(message)));
    return signature;
}
var message = ""
var message_hex = toHex(message);
var key = "1"

console.log(sign(message, key))
hmac = new sjcl.misc.hmac(sjcl.codec.hex.toBits(key), sjcl.hash.sha256);
console.log(sjcl.codec.hex.toBits(message_hex))
console.log(sjcl.codec.hex.fromBits(hmac.encrypt(sjcl.codec.hex.toBits(message_hex))))