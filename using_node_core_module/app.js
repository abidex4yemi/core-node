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

// const EventEmitter = require('events');

// // basic event syntax
// const emitter = new EventEmitter();

// emitter.on('messageLogged', data => {
// 	console.log(data);
// });

// emitter.emit('messageLogged', { id: 1, message: 'Welcome' });

// // using event within a function

// emitter.on('hello', name => {
// 	console.log(name);
// });

// emitter.on('helloError', error => {
// 	console.log(error.message);
// });

// const logHello = name => {
// 	if (name) {
// 		return emitter.emit('hello', name);
// 	}

// 	return emitter.emit('helloError', { message: 'Function argument is missing' });
// };

// logHello();
