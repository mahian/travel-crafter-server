const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/post.route');
const packageRotes = require('./routes/package.route');
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

app.listen(5000, () => console.log('Server listening on port 5000'));