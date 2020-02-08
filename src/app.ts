import express, {Request, Response} from 'express';
import routers from './routes';
import mongoose from 'mongoose';


class App {
    public express : express.Application;
    constructor () {
        this.express = express();
        this.routes();
        this.database();
    }
    private routes () : void {
        this.express.use('/test', routers);
        this.express.use('/', (req : Request, res: Response) => {
            res.status(404).send({ error: `path doesn't exist`});
        });
    }

    private database(): void {
        mongoose.connect("mongodb://localhost:27017/mydb");
        mongoose.connection.on('error', () => {
            console.log('MongoDB connection error. Please make sure MongoDB is running.');
            process.exit();
        });
    }

}

export default new App().express;
