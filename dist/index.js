"use strict";
//const express = require( "express" );
//const app = express();
//const port = 3000;
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const api = express.Router();
/*
app.get('/', (req, res) => {
    res.json()
});
*/
//var routes = require('./routes/question'); //importing route
//routes(app);
/*
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
*/
/*
const express = require( "express" );
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

///https://developer.okta.com/blog/2018/11/15/node-express-typescript
*/
const http = __importStar(require("http"));
const app_1 = __importDefault(require("./app"));
class Server {
    constructor() {
        this.runServer();
    }
    static bootstrap() {
        if (!this.serverInstance) {
            this.serverInstance = new Server();
            return this.serverInstance;
        }
        else {
            return this.serverInstance;
        }
    }
    runServer() {
        //this.port = this.normalizePort(process.env.PORT || 3500);
        this.port = 3000;
        app_1.default.set('port', this.port);
        this.createServer();
    }
    createServer() {
        this.server = http.createServer(app_1.default);
        this.server.listen(this.port);
        this.server.on('listening', () => {
            let address = this.server.address();
            //let bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
            console.log("Server is running at " + `port ${address.port}`);
        });
        this.server.on('error', (error) => {
            if (error.syscall !== 'listen')
                throw error;
            console.error(error);
            process.exit(1);
        });
    }
}
exports.server = Server.bootstrap();
//# sourceMappingURL=index.js.map