import {Connection, connect} from 'mongoose'
 
export const connectToDatabase = async ()=>{
    try {
        connect(process.env.MONGO_URI!)
          .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
          });
        
    } catch (error) {
        console.log(error) 
    }
}

