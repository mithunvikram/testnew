
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testnewSchema = new Schema({
   Enter_Name: String,
   Enter_Name: String
})

const testnewModel = mongoose.model('testnew', testnewSchema, 'testnew');
export default testnewModel;
