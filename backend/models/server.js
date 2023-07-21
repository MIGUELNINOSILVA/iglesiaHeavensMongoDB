import express from "express";
import cors from "cors";
import creyenteRouter from "../routes/creyente.routes.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT,
        /* PATHS */
        this.creyentePath = "/api/creyentes";
        /* Middlewares */
        this.middlewares();
        /* Routing */
        this.routes();
    }

    middlewares() {
        /* Public direction */
        this.app.use(express.static('public'));
        /* Cors */
        this.app.use(cors());
        /* Express Json */
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server runing on port ${this.port}`);
        });
    }

    routes(){
        this.app.use(this.creyentePath, creyenteRouter);
    }

};

export default Server;