/**
 * Using path module
 */
// const path = require('path');
// const pathObj = path.parse(__dirname);

// console.log(pathObj.dir);
//============================//

/** 
 * Using os modules
*/
// const os = require('os');

// const currentUser = os.userInfo();
// const freeMemory = os.freemem();
// const totalMemory = os.totalmem();
// console.log(currentUser);
// console.log(freeMemory);
// console.log(totalMemory);
//============================//

/** 
 * Using file system module
*/
// const fs = require('fs');

// // Synchronous
// const file = fs.readdirSync('./');
// // console.log(file);

// //Asynchronous
// fs.readdir('./', (err, fileArray) => {
// 	if (err) {
// 		console.log(err);
// 	}

// 	console.log(fileArray);
// });
//============================//

/**
 * Using EventEmitter basics
 */
// // require EventEmitter
// const EventEmitter = require('events');

// // Instantiate new EventEmitter object
// const emitter = new EventEmitter();

// // Register listener
// emitter.on('messageLogged', () => {
// 	console.log('poooo');
// });

// // Raise an event
// emitter.emit('messageLogged');
