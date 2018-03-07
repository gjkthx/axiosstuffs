// 72C
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , path = require('path')


    const{CONNECTION_STRING,SERVER_PORT} = process.env;
    // 74C
    const app = express();
    app.use(bodyParser.json());
    // 74E
    app.use(express.static(path.join(__dirname, 'public')));
    // 70C
    massive(CONNECTION_STRING).then((db) => {
        app.set('db', db);
    })

    app.get(`/api/test/getUserOrders`,function(req,res){
        const db = app.get('db')
        db.getuserorders([1]).then(response =>{
            console.log("look here",response)
            res.status(200).send(response)
        }).catch(error =>{
            console.log(error)
        })
    })
    app.get(`/api/test/getUser`,function(req,res){
        const db = app.get('db')
        db.getauser([
            1
        ]).then( response => {
            res.status(200).send(response)
        }).catch(error =>{
            console.log(error)
        })
    })
    
        

    app.get('/api/testy', (req, res)=>{
        console.log('test')
    })


    // nothing below
console.log("---== :D :O :D I Are Working Good :O :D :O ==---")
const port = 3001;
app.listen(port, () => {
console.log(`Server is up and running on port ${port}`)
})