const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');

const errorController = require('../controllers/error');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        res.setHeader("Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS"
        );
    next();
});



require('../util/database');

/*************Routes Section**************/


//Gri Grow USER Routes
const registerRoutes = require('../routes/grigrowuserRoutes');

//Gri Grow Govern & Copliance Routes

const grigrowuserRoutes = require('../routes/grigrowuserRoutes');


//Office Routes
// const taskRoutes = require('../routes/officeRoutes/taskRoutes');

/*************End Of Routes Section**************/

// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/*************CORS Section**************/

//CORS - Cross Origin Resource Sharing Header
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header(
        "Access-Control-Allow-Header", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
     );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});



/*************End Of CORS Section**************/







/*************Handling Routes Section**************/

//Handling Routes - Seller Routes
app.use(grigrowuserRoutes);


//Handling Routes - Office
// app.use(taskRoutes);

/*************End Of Handling Routes Section**************/

/*************Error Section**************/

app.use(errorController.get404);
app.use(errorController.get500);

/*************Error Section End**************/

module.exports = app;