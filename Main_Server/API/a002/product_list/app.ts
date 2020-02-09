import * as express from 'express';
//const bodyParser = require('body-parser');
import * as bodyParser from 'body-parser';
import * as request from 'request';

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('https://m.joongna.com/search-list', function(req, res) {
    console.log(req.body);
 });
 
 function getData(){
    let options = {
        url: 'https://m.joongna.com/search-list',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:{
          key:'value'
        },
        json:true
    };

    return new Promise(function(resolve, reject){
        let responseData;
        let req = request.post(options,(err, res, body) => {
            if (err){
                console.log(err);
                reject(err);
            } else {
                console.log("Response Data", JSON.parse(body));
                responseData = body;
                resolve(responseData);
            }
        })
    })
 }
 