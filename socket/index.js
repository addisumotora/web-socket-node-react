import { Server } from "socket.io";

const io = new Server({ 
    cors:{
        origin:"http://localhost:3000"
    }
 });
 let onlineUsers = [];

 const addNewUser = (username, socketId) => {
    onlineUsers.some((user) => user.username !== username && onlineUsers.push({username, socketId}))
 }
io.on("connection", (socket) => {
   io.emit('FirstEvent', "hello this is first event")
  socket.on('disconnect', () => {
    console.log('user has left')
  })
});

io.listen(5000);