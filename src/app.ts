import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';  
import swaggerUI from 'swagger-ui-express';
import docs from './api/docs';
import Controller from 'api/interfaces/controller.interface';

class App {
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();
        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

   

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller: Controller) => {
            this.app.use('/api', controller.router);
        });
    }

    private connectToTheDatabase(): void {
        console.log('connected')
        mongoose.connect(`${process.env.MONGO_URI}`, (err) => {
            if (err) throw (console.log('MongoDB not Connected', err));
        });
    }
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
       
      }
      public getServer() {
        return this.app;
      }
}

export default App;
