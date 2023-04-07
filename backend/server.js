const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const http = require('http');
const {Server} = require('socket.io');

dotenv.config({ path: './config.env' });
const app = require('./app');
// const server = require('./server');

// const server = http.createServer(app);
const io = new Server({ cors: true });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB connection successful');
  });

const ServerDb = mongoose.model('Server', {
  domain: String,
  socketId: String,
});

io.on('connection', (socket) => {
  socket.on('search', async (domain) => {
    await ServerDb.create({ domain, socketId: socket.id });

    const matchingUser = await ServerDb.findOne({
      domain,
      socketId: { $ne: socket.id },
    });
    if (matchingUser) {
      io.to(socket.id).emit('matched', { socketId: matchingUser.socketId });
      io.to(matchingUser.socketId).emit('matched', { socketId: socket.id });
    }
  });
  socket.on('disconnect', async () => {
    await ServerDb.deleteOne({ socketId: socket.id });
  });
});

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

io.listen(5003, () => {
  console.log('Server started on port 5003');
});
