const http=require('http');
const fs=require('fs');
http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type': 'text/html'})
    if(req.url==='/register' || req.url==='/') {
        let data=fs.readFileSync('Static/register.html');
        res.write(data);
    }
    else if(req.url==='/about') {
        let data=fs.readFileSync('Static/about.html');
        res.write(data);
    }
    else if(req.url==='/home') {
        let data=fs.readFileSync('Static/home.html');
        res.write(data);
    }
    else if(req.url==='/product') {
        let data=fs.readFileSync('Static/product.html');
        res.write(data);
    }
    else if(req.url==='/logout') {
        let data=fs.readFileSync('Static/logout.html');
        res.write(data);
    }
    
    else {
        let data=fs.readFileSync('Static/home.html');
        res.write(data);
    }

res.end();
    }).listen(8080, () => {console.log('server started ta 8080')});
