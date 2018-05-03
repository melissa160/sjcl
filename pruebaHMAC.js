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
var key = "135"

//console.log(sign(message, key))
hmac = new sjcl.misc.hmac(sjcl.codec.hex.toBits(key), sjcl.hash.sha256);
//console.log(hmac)
//console.log(sjcl.codec.hex.toBits(key))

function toBits(str) {
    var i, out=[], len;
    //encuentra los espacios y los quita
    str = str.replace(/\s|0x/g, "");
    console.log(str)
    len = str.length;
    console.log(len)
    str = str + "00000000";
    console.log(str)
    for (i=0; i<str.length; i+=8) {
      out.push(parseInt(str.substr(i,8),16)^0);
      console.log(parseInt(str.substr(i,8),16)^0)
      console.log("13500000000".substr)
    }
    return sjcl.bitArray.clamp(out, len*4);
  }

  console.log(toBits(key))

