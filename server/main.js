var express = require('express');
var app = express();
var server = require('http').Server(app);
var io =  require('socket.io')(server);
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
io.on('connection',function(socket){
    socket.on("cone",function(){
        console.log("user disconect"+socket.id);
    });
    socket.on('ubication',function(data){        
        console.log(data);
        obj=JSON.parse(data);
        io.emit("ubication",{"latitud":obj.lat,"longitud":obj.lon,"user":obj.user});
        
    });
    
    socket.on("disconnect",function(){
        console.log("user disconect"+socket.id);
    });

});
server.listen(3000, function(){
    console.log("server in htttp:localhost");
});
