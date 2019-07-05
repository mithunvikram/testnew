import { Request, Response } from 'express';
import {testnewDao} from '../dao/testnewDao';
let testnew = new testnewDao();

export class testnewService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
     const  testnewId = req.params.id
     testnew.GpDelete(testnewId,(response)=>{
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
     const  testnewData = req.body
     testnew.GpCreate(testnewData,(response)=>{
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
     const  testnewData = req.body
     testnew.GpUpdate(testnewData,(response)=>{
         callback(response);
         });
    }


}