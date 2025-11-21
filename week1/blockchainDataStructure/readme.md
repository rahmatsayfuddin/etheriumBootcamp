
🏁 Your Goal: Return a Hash
In your Block.js file, we have a class Block. Using the SHA256 function from the Crypto JS Library, return a valid hash in the toHash function.

For now, there's no need to hash anything in particular since the block contains none of the components we mentioned above.

🏁 Your Goal: Hash the Data
When creating a new block, data will be passed to its constructor:

const block = new Block("Alice sent Bob 1 BTC");

console.log( block.data ); // Alice sent Bob 1 BTC
☝️ As shown above, let's add a data property to the Block.

Add a constructor to our Block class that takes one argument data and assigns it to this.data
Once you have added data to the block, use this data to calculate the block's hash in the toHash function!

🏁 Your Goal: Add the Genesis Block
The Blockchain.js file contains the Blockchain class with a chain array. Let's add the Genesis Block to this array.

Create a new Block in the Blockchain constructor then add it to the chain array.

🏁 Your Goal: Create an addBlock Function
Let's create an addBlock function on our Blockchain class.

This function should take in a new block and add it to the chain array:

const blockchain = new Blockchain();
const block = new Block("Charlie sent Dave 2 BTC");

blockchain.addBlock(block);

console.log(blockchain.chain.length); // 2
☝️ Remember we should have both the genesis block and the new block now.


🏁 Your Goal: Link Blocks
To link the blocks you have to accomplish two things:

Add a previousHash property to each block. The value of this property should be the hash of the block before it in the chain.
Use this previousHash property in the calculation of the block's hash.
💡 Hints
A good spot to add the previousHash property on the block would be in the addBlock function, where a block is placed on the chain.
So far, the Block class in your Block.js file does not yet contain a previousHash property and currently only hashes this.data of a block - you must also include the block's this.previousHash property in the toHash function!
You are importing Block.js into Blockchain.js; this import includes the toHash() function!
You can add multiple inputs to the SHA256 function by using the + operator, for example:
const hash = SHA256("dog" + "cat"); // hash of dog and cat together

🏁 Your Goal: Create an isValid Function
Create a function called isValid on our Blockchain that will return true or false if a block is valid or invalid respectively
isValid should check the integrity of every block in its chain by looking at each block's previousHash field and making sure that it is equal to the hash of the block before it
💡 Hint
To compare the output of the SHA256 function you will need to convert it into a string (.toString) before comparing. Example:

const hash1 = SHA256("a");
const hash2 = SHA256("a");

console.log(hash1 === hash2); // false
console.log(hash1.toString() === hash2.toString()); // true
👀 Notice that first one is false! These two are objects and are compared by reference which is why we need to convert it to a string!