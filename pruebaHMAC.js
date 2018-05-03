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
var key = ""
console.log("hexadecimal message: ")
console.log(toHex(message))

//console.log("hexadecimal hex to bits key: ")
//var bitsKey = sjcl.codec.hex.toBits(key)
//console.log(bitsKey)
//console.log("hash sha 256: ")
//console.log(sjcl.hash.sha256)

console.log("hmac key: ")
var hmac = new sjcl.misc.hmac(sjcl.codec.hex.toBits(key), sjcl.hash.sha256);
console.log(hmac)

console.log(sign(message, key))


//console.log(toHex("hola mundo"))