const express = require('express')
const http = require('http');
const { exit } = require('process');

const app = express();
const port = 3000;

app.use(express.static('.'));

app.get('/:turn', async (req, res) => {
    console.log("Get response");
    
    console.log(req.params.turn);

    http.get(`http://192.168.0.154/relay/0?turn=` +req.params.turn, (res) => {
        if (res.statusCode !== 200) {
          console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
          res.resume();
          return;
        }
      
        let data = '';
      
        res.on('data', (chunk) => {
          data += chunk;
        });
      
        res.on('close', () => {
          console.log('Retrieved all data');
          console.log(JSON.parse(data));
        });
      });
      res.sendStatus(200);
  //res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



