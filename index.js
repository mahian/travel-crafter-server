const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/post.route');
const packageRotes = require('./routes/package.route');
const userRotes = require('./routes/user.route');
const bookingRotes = require('./routes/booking.route');
const getTest = require('./controllers/test.controller');
require('dotenv').config()
const connectDB = require('./models/db');
const app = express();
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('app is running')
})

app.use(postRoutes);
app.use(packageRotes);
app.use('/user', userRotes);
app.use('/booking', bookingRotes);

app.listen(5000, () => console.log('Server listening on port 5000'));