

var http = require('http');
var fs = require('fs');


function handle_request(req, res) {
// Get http://118..24.126.217:8001/api/who?name=777;
    // 客户端对服务器的请求，说白了就是对相关文件内容的请求。
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(get_file_content(__dirname + '\\'  + '\\' + 'index.html'));

}


function get_file_content(filepath) {
    return fs.readFileSync(filepath);
}

var server = http.createServer(handle_request);

server.listen(8000);