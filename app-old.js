const http = require('http');

http.createServer((req, res) => {

    //console.log(req);

    //res.writeHead(404)

    //res.writeHead(200, { 'Content-Type': 'application/json' });
    //res.writeHead( 'Content-disposition', 'attachment; filename=lista.csv' );
    //res.writeHead( 200, { 'Content-Type': 'application/scv' });

    res.write('Hola mundo');
    res.end();

})
.listen( 8080 );

console.log('Escuchado el puerto', 8080);