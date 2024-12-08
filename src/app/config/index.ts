import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.join(process.cwd(),'.env')})

export default {
    db_port : process.env.PORT, 
    db_url : process.env.DB_URL, 
    BycrptsaltRounds : process.env.BycrptsaltRounds, 
    default_password : process.env.defaultPassword
}