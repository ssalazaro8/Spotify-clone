import express from 'express';
import dotenv from 'dotenv';
import {clerkMiddleware} from '@clerk/express';
import fileupload from 'express-fileupload';
import path from 'path';
import cors from 'cors';

import userRoutes from './routes/user.route.js';
import adminRoutes from './routes/admin.route.js';
import authRoutes from './routes/auth.route.js';
import songRoutes from './routes/song.route.js';
import albumRoutes from './routes/album.route.js';
import statsRoutes from './routes/stat.route.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(cors(
   {
    origin: "http://localhost:3000",
    credentials: true,
   }
));

app.use(express.json()); // to parse req.body as json
app.use(clerkMiddleware()); // this will add the user object to the req object
app.use(fileupload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, "temp"),
  createParentPath: true,
  limits: { fileSize: 10 * 1024 * 1024 }, //10MB max file size
}))


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/song", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);

// error handler middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message });
});


app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
  connectDB();
});

//todo: socket.io
