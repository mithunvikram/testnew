import { Request, Response, NextFunction } from "express";
import { testnewController } from '../controller/testnewController';


export class Routes {
    private testnew: testnewController = new testnewController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/testnew/delete/:id').delete(this.testnew.GpDelete);
app.route('/testnew/save').post(this.testnew.GpCreate);
app.route('/testnew/update').put(this.testnew.GpUpdate);
     }

}