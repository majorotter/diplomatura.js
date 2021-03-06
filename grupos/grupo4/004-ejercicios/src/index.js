import express from 'express';
import moment from 'moment';
import os from 'os';

const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import usersRoutes from './controllers/users';

const PORT = 8080;
const FORMAT_DATE = 'MMMM Do YYYY h:mm:ss a';
moment.locale('es');

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);
app.use('/users', usersRoutes);

// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {
  const now = new Date().getTime();

  const result = {
    serverCurrentTime: moment().format(FORMAT_DATE),
    serverStartUpTime: moment(now - os.uptime()).format(FORMAT_DATE),
    serverUpTime: moment(now).fromNow(),

    status: {
      freemem: os.freemem(),
      totalmem: os.totalmem(),
      uptime: os.uptime(),
      hostname: os.hostname(),
      platform: os.platform(),
    },
  };
  res.json(result);
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);
