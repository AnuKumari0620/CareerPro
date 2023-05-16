const db = require ('../util/database');

module.exports = class Clients {
    constructor(id, name, businessname, email, password, contact, categories, gstin, businessaddress) {
        this.id = id;
        this.name = name;
        this.businessname = businessname;
        this.email = email;
        this.password = password;
        this.contact = contact;
        this.categories = categories;
        this.gstin = gstin;
        this.businessaddress = businessaddress;
    }

    // static addSeller(data) {
    //     console.log('This is Test')
    //     db.query('INSERT INTO sellers SET ?', data, (error,result)=>{
    //     if(error) error;
    //     resp.send(result)
    // })
    // }

    static getwitsClients() {
        return db.execute('SELECT * FROM sellers');
        
    }
};


const addwitsClients = (req, res) => {
    
}



