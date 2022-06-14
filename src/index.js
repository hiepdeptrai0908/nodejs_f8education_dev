const express = require('express');
var methodOverride = require('method-override')
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const db = require('../src/config/db')

app.use(methodOverride('_method'))

app.use(express.json());
app.use(express.urlencoded());

// connect DB
db.connect()

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); // đường dẫn file tĩnh static

app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,  // Tăng giá trị templates engine + 1
        } 
    }),
); // Định nghĩa engine
app.set('view engine', 'hbs'); // Set engine to 'handlebars' đã định nghĩa
app.set('views', path.join(__dirname, 'resources', 'views')); // set views folder

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
