import { Router } from 'express';

export abstract class BaseRoute {

    private readonly _registeredMethodEnding = 'Action';
    router: Router;

    constructor() {
        this.router = Router();
    }

    public getRoutes(): Router {
        return this.router
    }
}

