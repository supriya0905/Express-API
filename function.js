const elasticsearch = require('elasticsearch');
const express = require('express');
const router = express.Router();
// const operations = require('./connection');
const { Client } = require('@elastic/elasticsearch')



exports.fetchdetails = function (req,res) {
    // console.log(req.params.id);

    console.log(req);

//     const url = 'http://'+ req.body.url;
//     console.log('hit');

    
//     // res.send('hello world')
//     //   const client = "bdfelastic.rxcorp.com";
//     const client = new Client({ node: url })
//       console.log(client);
//       client.cluster.health({format:"JSON"},function(err,resp){
            
//         if(err){
//             res.send(err);
//         }
        
//         else{
//                 res.send(resp);
//             }

    
//  });

}