const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "frontend" folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Configure Socket.IO to allow cross-origin requests
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins (update in production)
    methods: ['GET', 'POST'], // Allow only specific HTTP methods
  },
});

// Store active users
const users = {};

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Join a server
  socket.on('joinServer', ({ username, serverId }) => {
    // Store the user's username and server
    users[socket.id] = { username, serverId };

    // Join the server room
    socket.join(serverId);

    // Notify others in the server
    socket.to(serverId).emit('message', {
      username: 'System',
      message: `${username} has joined the server.`,
    });

    // Send a welcome message to the user
    socket.emit('message', {
      username: 'System',
      message: `Welcome to the server, ${username}!`,
    });
  });

  // Send message
  socket.on('sendMessage', ({ message }) => {
    const user = users[socket.id];
    if (user) {
      const { username, serverId } = user;

      // Broadcast the message to the server
      io.to(serverId).emit('message', {
        username,
        message,
      });
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    const user = users[socket.id];
    if (user) {
      const { username, serverId } = user;

      // Notify others in the server
      io.to(serverId).emit('message', {
        username: 'System',
        message: `${username} has left the server.`,
      });

      // Remove the user from the active users list
      delete users[socket.id];
    }
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});