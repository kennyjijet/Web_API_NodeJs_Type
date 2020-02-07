"use strict";
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
        this.port = 3000;
        app_1.default.set('port', this.port);
        this.createServer();
    }
    createServer() {
        this.server = http.createServer(app_1.default);
        this.server.listen(this.port);
        this.server.on('listening', () => {
            let address = this.server.address();
            console.log("Server is running at localhost " + `port ${address.port}`);
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