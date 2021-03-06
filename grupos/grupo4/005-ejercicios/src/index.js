import express from 'express';
import bodyParser from 'body-parser';
import alumnosRoutes from './controllers/alumnos';
import profesoresRoutes from './controllers/profesores';

const PORT = 3000; //hash
const app = express();
app.use(bodyParser.json());

app.use('/alumnos', alumnosRoutes);
app.use('/profesores', profesoresRoutes);

app.get('/', function (req, res) {
  res.json({ mensaje: 'Bienvenido al servidor de la Universidad' });
});

//app.listen(PORT);
//console.log(`Express started on port ${PORT}`);

app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
});
