import { Request, Response } from 'express';
import { testnewService } from '../service/testnewService';
let testnew = new testnewService();

export class testnewController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
testnew.GpDelete(req, (response) => {
     res.status(200);
     res.json(response);
    })}
public GpCreate(req: Request, res: Response) {
testnew.GpCreate(req, (response) => {
     res.status(200);
     res.json(response);
    })}
public GpUpdate(req: Request, res: Response) {
testnew.GpUpdate(req, (response) => {
     res.status(200);
     res.json(response);
    })}


}