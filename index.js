const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3000;                  //Save the port number where your server will be listening
const path = require('path')
//Idiomatic expression in express to route and respond to a client request

app.use(express.static("public"))
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', { root: __dirname });
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/microdiff', (req, res) => {
    res.sendFile(path.join(__dirname, 'node_modules/microdiff/dist/index.js'))
})



app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});