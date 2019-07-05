import * as mongoose from 'mongoose';
import testnewModel from '../models/testnew';


export class testnewDao {
    private testnew = testnewModel;
    constructor() { }
    
    public GpDelete(testnewId, callback){

this.testnew.findByIdAndRemove(testnewId).then((result)	=>	{
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(testnewData, callback){
let temp = new testnewModel(testnewData);
temp.save().then((result)	=>	{
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(testnewData, callback){

this.testnew.findOneAndUpdate({ _id: testnewData._id }, testnewData, { new: true }).then((result)	=>	{
callback(result);
}).catch((error)=>{
callback(error);
});}


}