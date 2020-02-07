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
        this.port = 3000;
        App.set('port', this.port);
        this.createServer();
    }

    private createServer() {
        this.server = http.createServer(App);
        this.server.listen(this.port);
        
        this.server.on('listening', () => {
            let address = this.server.address();
            console.log("Server is running at localhost " + `port ${address.port}`);
        });

        this.server.on('error', (error: NodeJS.ErrnoException) => {
            if (error.syscall !== 'listen') throw error;
            console.error(error);
            process.exit(1);
        });
    }
}

export const server = Server.bootstrap();