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

import { randomUUID } from "node:crypto";
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
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json("User with specified ID not found!");
  }

  return res.status(200).json(user);
});

app.get("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json("Note with specified ID not found!");
  }

  return res.status(200).json(note);
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
    user: infoNewNote.user,
    title: infoNewNote.title,
    description: infoNewNote.description,
  };

  notes.push(newnote);
  return res.status(201).json(newnote);
});

app.put("/updateuser/:id", (req, res) => {
  const infoUpdateUser = req.body;
  const params = req.params;

  const userToUpdate = users.findIndex((user) => user.id === params.id);

  const userUpdated = {
    id: infoUpdateUser.id,
    name: infoUpdateUser.name,
    email: infoUpdateUser.email,
    password: infoUpdateUser.password,
  };

  users[userToUpdate] = userUpdated;
  return res.status(201).json(userUpdated);
});

app.put("/updatenote/:id", (req, res) => {
  const infoUpdateNote = req.body;
  const params = req.params;

  const noteToUpdate = notes.findIndex((note) => note.id === params.id);

  const noteUpdated = {
    id: infoUpdateNote.id,
    user: infoUpdateNote.user,
    title: infoUpdateNote.title,
    description: infoUpdateNote.description,
  };

  notes[noteToUpdate] = noteUpdated;
  return res.status(201).json(noteUpdated);
});

app.delete("/deleteuser/:id", (req, res) => {
  const params = req.params;
  const userToDelete = users.findIndex((user) => user.id === params.id);

  users.splice(userToDelete, 1);
  return res.status(201).json("User deleted successfully");
});

app.delete("/deletenote/:id", (req, res) => {
  const params = req.params;
  const noteToDelete = notes.findIndex((note) => notes.id === note.id);
  
  notes.splice(noteToDelete, 1);
  return res.status(201).json("User deleted successfully");
});

app.listen(8080, () => console.log("Server Started"));
