/*
Aplicação Lista de Recados
● Vamos criar um back-end que contém
as seguintes funcionalidades:
○ Criação de conta
○ Login
○ CRUD* de recados

● Dados de um usuário:
○ Identificador
○ Nome
○ E-mail
○ Senha

● Dados de um recado:
○ Identificador
○ Título
○ Descrição

Regras
● Não pode ter mais de um usuário com o mesmo e-mail.
● O login deve ser feito com e-mail e senha.
● Cada recado deve ser de um único usuário.
*/

import { randomUUID } from 'node:crypto';
import express from "express";
const app = express();
app.use(express.json());

const users = [];
const notes = [];

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/notes", (req, res) => {
  return res.json(notes);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => Number(user.id) === Number(id));

  if (!user) {
    return res.status(404).json("User with specified ID not found!");
  }

  return res.status(200).json(car);
});

app.get("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => Number(note.id) === Number(id));

  if (!note) {
    return res.status(404).json("Note with specified ID not found!");
  }

  return res.status(200).json(car);
});

app.post("/newuser", (req, res) => {
  const infoNewUser = req.body;

  const newuser = {
    id: randomUUID(),
    name: infoNewUser.name,
    email: infoNewUser.email,
    password: infoNewUser.password,
  };

  users.push(newuser);
  return res.status(201).json(newuser);
});

app.post("/newnote", (req, res) => {
  const infoNewNote = req.body;

  const newnote = {
    id: randomUUID(),
    title: infoNewNote.title,
    description: infoNewNote.description,
  };

  notes.push(newnote);
  return res.status(201).json(newnote);
});

/*
app.put("/updatecar/:id", (req, res) => {
  const infoUpdateCar = req.body;
  const params = req.params;

  const carToUpdate = cars.findIndex((car) => car.id === Number(params.id));

  const carUpdated = {
    id: Number(params.id),
    model: infoUpdateCar.model,
    brand: infoUpdateCar.brand,
    color: infoUpdateCar.color,
    year: infoUpdateCar.year,
    price: infoUpdateCar.price,
  };

  cars[carToUpdate] = carUpdated;
  return res.status(201).json(carUpdated);
});
*/

app.listen(8080, () => console.log("Server Started"));
