var http = require('http');
var url = require('url');
var topic = require('./lib/topic');
var author = require('./lib/author');

var app = http.createServer(function(request,response){
  // url에서 path, queryString 받아오기.  
  var _url = request.url;
  var pathname = url.parse(_url, true).pathname;
  var queryData = url.parse(_url, true).query;
  
  // 글 READ
  if(pathname === '/'){
    if(queryData.id === undefined){
      topic.home(request, response);
    } else {
      topic.page(request, response);
    }
  // 글 CREATE
  } else if(pathname === '/create'){
    topic.create(request, response);
  } else if(pathname === '/create_process'){
    topic.create_process(request, response);
  // 글 UPDATE    
  } else if(pathname === '/update'){
    topic.update(request, response);
  } else if(pathname === '/update_process'){
    topic.update_process(request, response);
  // 글 DELETE
  } else if(pathname === '/delete_process'){
    topic.delete_process(request, response);
  // 저자 READ
  } else if(pathname === '/author'){
    author.home(request, response);
  // 저자 CREATE
  } else if(pathname === '/author/create_process'){
    author.create_process(request, response);
  // 저자 UPDATE
  } else if(pathname === '/author/update'){
    author.update(request, response);
  } else if(pathname === '/author/update_process'){
    author.update_process(request, response);
  // 저자 DELETE
  } else if(pathname === '/author/delete_process'){
    author.delete_process(request, response);
  // 404 ERROR  
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);
