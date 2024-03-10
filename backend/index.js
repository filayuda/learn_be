import express from 'express';
// import router from './routes/index.js';
import dbConfig from './config/Database.js';
// import Users from './models/UserModel.js';

const app = express();

try {
    await dbConfig.authenticate();
    console.log("Database connected...");
    // await Users.sync();

} catch (error) {
    console.log(error);
}

// app.use(express.json());
// app.use(router);
app.listen(5000, () => console.log("server running on port 5000") );
