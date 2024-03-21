const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bd_porsche', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}).then(
  () => console.log("Se conecto a mongo")
)

//Creacion de modelo de esquema.
const Schema = mongoose.Schema;
const miSchema = new Schema({
    name: {
        type: String,
        length: 30,
    },
    lastName: {
        type: String,
        length: 30,
    },
    email: {
        type: String,
        length: 30,
    },
    password: {
        type: String,
        length: 30,
    },
});
const MiModelo = mongoose.model('users', miSchema);

app.use(cors())

app.get('/datos', async (req, res) => {
  try {
    const datos = await MiModelo.find();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.post('/register', async (req, res) => {
    let nombre = req.body.name
    let apellido = req.body.lastName
    let correo = req.body.email
    let contrasena = req.body.password

    console.log( nombre, apellido, correo, contrasena)

    let coso = new MiModelo({name: nombre, lastName: apellido, email: correo, password: contrasena })

    coso.save().then(
      () => res.send({mensaje: "Registro Exitoso"}),
      (err) => {
        console.log(err)
        res.send("error")
      }
    )
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const foundUser = await MiModelo.findOne({ email: email });
  const foundUserP = await MiModelo.findOne({ password: password });
  console.log(foundUser);

  if (foundUser !== null && foundUserP !== null) {
    res.send({ mensaje: "entro", status: 200 });
  } else {
    res.send({ mensaje: "no entro", status: 404 });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

