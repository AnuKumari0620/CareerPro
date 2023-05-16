const bcrypt = require('bcryptjs');

const db = require ('../util/database');

module.exports = class Users {
    constructor(id, orgname, fullname, email, password, contact, address) {
        this.id = id;
        this.name = orgname;
        this.businessname = fullname;
        this.email = email;
        this.password = password;
        this.contact = contact;
        this.categories = address;
    }

    // static addSeller(data) {
    //     console.log('This is Test')
    //     db.query('INSERT INTO sellers SET ?', data, (error,result)=>{
    //     if(error) error;
    //     resp.send(result)
    // })
    // }

    static getSeller() {
        return db.execute('SELECT * FROM witsusers');
        
    }
};


const addwitsUsers = (req, res) => {
    var {
        orgname,
        fullname,
        email,
        password,
        contact,
        address,


    } = req.body;

    var message = {};

    if(isEmpty(username)) {
        message.username = "Please Fill in the username";
    }
    if(isEmpty(password)) {
        message,password = "Please fill in Password";
    } else if(password.length < 4 || password.length > 24) {
        message.password ="Password must be between 4-24 characters";
    }

    if (object.keys(message).length > 0){
        res.json({
            error: true,
            message: message
        })
    }else{
        passowrd = bcrypt.hash(password,10);
        res.send(password)
        
        var sqlInsert = "INSERT INTO witsusers (witsclientid, witsorgid, fullname, email, password, contact, address) VALUES (?,?,?,?)"
        db.query(sqlInsert,[req.body.witsclientid, req.body.witsorgid, req.body.fullname, req.body.email, req.body.password, req.body.contact, req.body.address], (err,result)=> {
            if(!err){
                res.json({
                    message : "Seller Register Successfully!"
                })
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }
}



