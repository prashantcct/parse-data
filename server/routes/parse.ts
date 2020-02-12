import {Request, Response, NextFunction} from "express";
import { ParseTextController } from "../controllers/parseTextController";

export class Routes { 
    
    public parseTextController: ParseTextController = new ParseTextController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

		// Parse
        app.route('/parse').get(this.parseTextController.parseText) 
        
        app.route('/name-count/:name')
        .get(this.parseTextController.getNameCount)

    }
}