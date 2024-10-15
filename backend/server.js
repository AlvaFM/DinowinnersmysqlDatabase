const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dinowinners'
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar:', err);
    return;
  }
  console.log('Conectado');
});


// metodo para extraer usuarios de la base de datos 
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
      console.log
    }
    res.json(results);
  });
});


/// metodo consulta para insertar usuarios a la base de datos 

app.post('/api/usuarios',(req,res) =>{
  const {nombre, email, password, tipo_usuario } = req.body
  if (!nombre || !email || !password  || !tipo_usuario) {
    return res.status(400).json({erros: 'Todos los campos son obligatorios'})
  }
  if (! ['emprendedor', 'cliente'].includes(tipo_usuario)) {
    return res.status(400).json({erros: 'El tipo de usuario debe ser "emprendedor o cliente'})
  }
  const query = 'INSERT INTO usuarios SET ?';
  const datosUsuario = { nombre, email, password, tipo_usuario };
  db.query(query, datosUsuario, (err, result) => {
    if (err) {
      console.error('Error al insertar el usuario:', err);
      return res.status(500).json({ error: 'No se pudo insertar el usuario' });
    }
    res.status(201).json({ message: 'Usuario creado', id: result.insertId });
  });
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


 


