const express = require('express');
const http = require('http');
const connectDB = require("./config/db");
const dotenv = require('dotenv');
const { chats } = require("./data/data");
const colors = require('colors');
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const {notFound, errorHandler} = require('./middlewares/errorMiddleware');
dotenv.config();

connectDB();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
})
app.use("/api/user", userRoutes);
app.use('/api/chat', chatRoutes);

app.get('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server Started at PORT ${PORT}`.yellow.bold))