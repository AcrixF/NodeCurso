/**
 * Created by root on 21/06/17.
 */

const http = require('http');

const server = http.createServer( (req, res) => {
    let body = '';

    req.setEncoding('utf8');

    req.on('data', chunck => { body += chunck });

    req.on('end', () => {
        try{
            const data = JSON.parse( body );
            res.write(typeof  data);
            res.end();
        }catch (err){
            res.statusCode = 400;
            return res.end(`Error: ${ err.message }`);
            console.log('\n')
        }
    })
});

server.listen(1337)