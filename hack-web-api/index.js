const express = require('express');
const app = express()
const port = 3000
const hacksRoutes = require('./routes/hacksRoutes');
const {connectDB} = require('./config/db');

app.use('/api/hacks', hacksRoutes);
app.use(express.json());
connectDB();





app.listen(port, () => {
    console.log(`App running on port http://localhost/${port}`)
})

