import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';

export class testnewController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/testnew/delete/:id', this.GpDelete);
this.router.post('/testnew/save', this.GpCreate);
this.router.put('/testnew/update', this.GpUpdate);
    }

public GpDelete(req: Request, res: Response) {
        new ApiAdaptar().delete(Constant.TESTFEATUREURL + `/testnew/delete/req.params.id` ).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
        new ApiAdaptar().post(Constant.TESTFEATUREURL + `/testnew/save` , req.body).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
        new ApiAdaptar().put(Constant.TESTFEATUREURL + `/testnew/update` , req.body).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
        }).catch(err => {
            res.send(err);
        });
    }

}
