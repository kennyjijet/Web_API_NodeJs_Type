

//const express = require( "express" );
//const app = express();
//const port = 3000;

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

import * as http from 'http';
import App  from './app';

class Server {

    private static serverInstance: Server;
    private server: any;
    private port: number;

    public static bootstrap(): Server {
        if (!this.serverInstance) {
            this.serverInstance = new Server();
            return this.serverInstance;
        } else {
            return  this.serverInstance;
        }

    }

    public constructor() {
        this.runServer();
    }

    private runServer(): void {
        //this.port = this.normalizePort(process.env.PORT || 3500);
        this.port = 3000;
        App.set('port', this.port);
        this.createServer();
    }

    private createServer() {
        this.server = http.createServer(App);
        this.server.listen(this.port);
        
        this.server.on('listening', () => {
            let address = this.server.address();
            //let bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
            console.log("Server is running at " + `port ${address.port}`);
        });

        this.server.on('error', (error: NodeJS.ErrnoException) => {
            if (error.syscall !== 'listen') throw error;
            console.error(error);
            process.exit(1);
        });
    }
}

export const server = Server.bootstrap();