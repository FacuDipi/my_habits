
import mongoose from "mongoose";

//interface CustomNodeJsProcess extends NodeJS.Process{
//  connectDB: MongooseOptions;
//}

//declare const process (se deberia hacer un middleware con una interface?)
declare const process : {
  env: {
    NODE_ENV: string
    DATABASE_URL: string
  }
}


export const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB conectada!!!!!: ${conn.connection.host}`);
};
