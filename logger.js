var url = 'http://mylogger.io/log'
const EventEmitter = require('events');


class Logger extends EventEmitter{
    log(message) {
        this.emit('messageLogged', { id: 1, url: url, message: message })
    }
}


module.exports = Logger;
