import https from "https";
import fs from "fs";
import express from "express"


var aap = express();

var privateKey  = fs.readFileSync('C:/Users/asano/PhpstormProjects/server_btc/new/ssl/localhost_5001-privateKey.key');
var certificate = fs.readFileSync('C:/Users/asano/PhpstormProjects/server_btc/new/ssl/localhost_5001.crt');
var credentials = {key: privateKey, cert: certificate};



aap.all('/', (req, res) => res.send('Hi there!'));

var server = https.createServer(credentials,aap);

async function start(){
    try{
        // await mongoose.connect(db_url, {useUnifiedTopology: true, useNewUrlParser: true});
        server.listen(5001,() => console.log('SERVER STARTED ON PORT ' + 5001));
    }catch (e) {
        console.log(e)
    }
}
start()