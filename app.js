const path = require('path');

const express = require('express');

const bodyparser = require('body-parser');
const errorController = require('./controllers/error');
//const expressHbs = require('express-handlebars');

const db = require('./util/database');

const app = express();

//app.engine('pug', expressHbs());
app.set('view engine', 'ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// TESTING CODE.....
// db.execute('SELECT* FROM products')
// .then(result => {
//     console.log(result[0], result[1]);
// })
// .catch(err => {
//     console.log(err);
// });

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);