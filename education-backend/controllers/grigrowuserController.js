const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const db = require ('../util/database');


//Add Sellers
const addgrigrowUsers = async (req, res, next) => {

  //For learning Purpose Only
    // res.send(JSON.stringify(req.fields));
    // var userData = req.fields
    // const password ='Password1'
    // const hash = await bcrypt.hash(password, 10);
    // const isMatch = await bcrypt.compare("Password1", hash)
    // console.log({password, hash});
    // console.log({isMatch});
    // console.log(req.body);

//This is an example of registering the user with the help of Array
    // const witsusers = [

    // ]

    // const {email, password} = req.body
    // const hash = await bcrypt.hash(password, 13)
    // witsusers.push({
    //   email,
    //   password: hash
    // })

    // console.log(witsusers)
    // res.send('ok')


    db.query(
      `SELECT * FROM register WHERE LOWER(mobilenumber) = LOWER(${db.escape(
        req.body.mobilenumber
      )});`,
      (err, result) => {
        if (result.length) {
          return res.status(409).send({
            msg: 'This user is already in use!'
          });
        } else {
           bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).send({
                msg: err
              });
            } else {
              // has hashed pw => add to database
              db.query(
                `INSERT INTO register (first_name, last_name, email, designation, password, mobilenumber, gender, collegename) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.designation}', ${db.escape(hash)}, '${req.body.mobile}', '${req.body.gender}', '${req.body.collegename}')`,
                (err, result,) => {
                  if (err) {
                    throw err;
                    return res.status(400).send({
                      msg: err
                    });
                  }
                  return res.status(201).send({
                    msg: 'The user has been registerd with us!'
                  });
                }
              );
            }
          });
        }
      }
    );





}




//Get Sellers
const getwitsUser = async (req, res, next) => {
  console.log("User Data Fetched Successfully");
  db.query('SELECT * FROM register', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Org List Fetched Successfully' });
    });
    console.log("This org API is working Fine")
}


//Seller Login

const witsLogin = async (req, res, next) => {
  console.log("EMS Users Login API is working");
  db.query(
      `SELECT * FROM register WHERE email = ${db.escape(req.body.email)};`,
      (err, result) => {
        // user does not exists
        if (err) {
          throw err;
        }
        if (!result.length) {
          return res.status(401).send({
            msg: 'Email or password is incorrect!'
          });
        }
        // check password
        bcrypt.compare(
          req.body.password, result[0]['password'],
          (err, bResult) => {
            // wrong password
            if (err) {
              throw err;
            }
            if (bResult) {
              const token = jwt.sign({id:result[0].id},'the-super-strong-secrect',{ expiresIn: '1h' });
              db.query(
                `UPDATE register SET last_login = now() WHERE id = '${result[0].id}'`
              );
              // console.log(token);
              return res.status(200).send({
                msg: 'Logged in!',
                token: token,
                expiresIn: 3600,
                witsusers: result[0]
              })
            }
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            });
          }
        );
      }
    );

    console.log("EMS Users Login API is working");
  
}



//Add Sellers
const jobapplication = async (req, res, next) => {

    db.query(
            `INSERT INTO jobapplication (first_name, last_name, email, applied_position, contact_number, gender, resume) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.applied_position}', '${req.body.contact_number}', '${req.body.gender}', '${req.body.resume}')`,
            (err, result,) => {
              if (err) {
                throw err;
                return res.status(400).send({
                  msg: err
                });
              }
              return res.status(201).send({
                msg: 'Job Application Submitted Successfully!'
              });
            }
          );
        
        }
 

module.exports = {
    addgrigrowUsers,
    getwitsUser,
    witsLogin,
    jobapplication
}