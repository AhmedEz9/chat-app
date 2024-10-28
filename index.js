const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Create an Express application
const app = express();

// Create an HTTP server and attach it to the Express app
const server = http.createServer(app);

// Create a new instance of Socket.IO and attach it to the server
const io = new Server(server);

// Serve static files from the "public" folder
app.use(express.static('public'));

// Handle new socket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Join a specific room
    socket.on('join room', (room) => {
        socket.join(room);
        console.log(`User joined room: ${room}`);
    });

    // Listen for chat messages and broadcast them within the room
    socket.on('chat message', ({ room, nickname, message }) => {
        io.to(room).emit('chat message', { nickname, message });
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Use the port provided by Azure or default to 3000 for local development
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
