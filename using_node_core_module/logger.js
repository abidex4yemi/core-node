const EventEmitter = require('events');

function Logger() {
	EventEmitter.call(this);
}

Logger.prototype = Object.create(EventEmitter.prototype);

Logger.prototype.log = function(message) {
	if (message) {
		this.emit('message', message);
	}

	this.emit('error', { error: 'Method argument missing' });
};

module.exports = Logger;
