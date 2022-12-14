import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import userCarRoute from './routes/userCar';
import adminCarRoute from './routes/adminCar';
import allCodeRoute from './routes/allCode';
import cityRoute from './routes/city';
import tripRoute from './routes/trip';
dotenv.config();

const app = express();

app.use(cors());
// Add headers before the routes are defined
// app.use(function (req, res, next) {
// 	// Website you wish to allow to connect
// 	res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

// 	// Request methods you wish to allow
// 	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// 	// Request headers you wish to allow
// 	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// 	// Set to true if you need the website to include cookies in the requests sent
// 	// to the API (e.g. in case you use sessions)
// 	res.setHeader('Access-Control-Allow-Credentials', true);

// 	// Pass to next layer of middleware
// 	next();
// });

app.use(cookieParser());
app.use(express.json());

app.use('/v1/auth', authRoute);
app.use('/v1/user', userRoute);
app.use('/v1/user-car', userCarRoute);
app.use('/v1/admin-car', adminCarRoute);
app.use('/v1/all-code', allCodeRoute);
app.use('/v1/trip', tripRoute);
app.use('/v1/', cityRoute);

connectDB();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on: http:localhost:${process.env.PORT}`);
});
