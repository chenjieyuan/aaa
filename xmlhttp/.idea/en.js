var fs=require("fs");
var path=require("path");
var mime=require("./mime").types;


var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    fs.exists(pathname, function(exists){
        if(!exists){
            res.writeHead("404",{"content-type":"text/plain"});
            res.write("404,not found!");
            res.end();
        }else{
            fs.readFile(pathname,function(err,data){
                if(err){
                    res.writeHead(500,{"content-type":"text/plain"});
                    res.end(err);
                }else{
                    var ext=path.extname(pathname);
                    var contenttype=mime[ext]||"text/plain";
                    res.writeHead(200,{"content-type":contenttype});
                    res.write(data);
                    res.end();
                }
            });
        }
    });
});
server.listen(8001);