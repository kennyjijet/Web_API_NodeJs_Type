import express, {Request, Response} from 'express';
import routers from './routes';

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.routes();
    }
    private routes(): void {
        this.express.use('/test', routers);
        this.express.use('/', (req : Request, res: Response) => {
            res.status(404).send({ error: `path doesn't exist`});
        });
    }
}

export default new App().express;
