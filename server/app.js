const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

const io = require('socket.io')(server, {
    cors: {
        origin :"http://localhost:3000",
        credentials :true
    }
});

app.get('/', (req, res) => {
    return res.send({ok: true });
});

const getDataFromDB = () => {
    return [];
};

const chats = getDataFromDB();
io.on('connection', (socket) => {
    socket.on('load', () => {
        io.emit('load', chats);
    });

    socket.on('message', (message) => {
        console.log(message)
        chats.push(message);
        io.emit('message', (message));
    });
}); 

module.exports = server;