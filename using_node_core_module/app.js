/**
 * Using path module
 */
// const path = require('path');
// const pathObj = path.parse(__dirname);

// console.log(pathObj.dir);
//============================//

const os = require('os');

const currentUser = os.userInfo();
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
console.log(currentUser);
console.log(freeMemory);
console.log(totalMemory);
