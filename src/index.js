
require('dotenv').config()

const server = require('./server/index');

server.listen(process.env.PORT || 3456);
