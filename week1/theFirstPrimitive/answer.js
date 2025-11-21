const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    // console.log(utf8ToBytes(hash)==sha256(COLORS[0]))
    for (let a = 0; a < COLORS.length;a++){
        color = COLORS[a]
        // console.log(color)
        colorBytes = utf8ToBytes(color)
        // console.log(colorBytes)
        colorHash = sha256 (colorBytes)
        // console.log(colorHash)
        colorHex = toHex(colorHash)
        // console.log(toHex)

        hashHex = toHex(hash)

        if (colorHex===hashHex){
            return color
        }
        //toHex(sha256(utf8ToBytes(COLORS[a])))==toHex(sha256(hash)
        // console.log(COLORS[a])

        // if (toHex(sha256(utf8ToBytes(COLORS[a])))==toHex(sha256(hash)))
        // {
        //     console.log(COLORS[a])
        //     return COLORS[a]
        // }
    }
 
}

module.exports = findColor;