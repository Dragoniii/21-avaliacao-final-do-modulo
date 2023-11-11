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

import express from "express";
const app = express();
app.use(express.json());

const usuarios = [
    {
      identificador: 0,
      nome: "Exemplo",
      email: "exemplo@exemplo.com",
      senha: "12345",
    },
  ];
  const recados = [{ identificador: 0, titulo: "Exemplo", descricao: "exemplo" }];

app.get("/usuario", (request, response) => {
  return response.json("OK");
});


app.listen(8080, () => console.log("Servidor iniciado"));
