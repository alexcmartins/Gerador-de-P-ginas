const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
  user: "admin",
  host: "192.168.0.26",
  database: "generator_page_app",
  password: "Al253900",
  port: 32768,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota de login
/*
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "E-mail ou senha incorretos" });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, "secretKey", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
});*/

//V2
/*
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    console.log("Tentativa de login:", email, password);
  
    try {
      const result = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      const user = result.rows[0];
      console.log("Usuário encontrado no banco:", user);
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        console.log("Autenticação falhou");
        return res.status(401).json({ message: "E-mail ou senha incorretos" });
      }
  
      const token = jwt.sign({ id: user.id, email: user.email }, "secretKey", {
        expiresIn: "1h",
      });
      console.log("Autenticação bem-sucedida. Token gerado:", token);
  
      res.json({ token });
    } catch (err) {
      console.error("Erro no servidor:", err.message);
      res.status(500).json({ message: "Erro no servidor", error: err.message });
    }
  });*/
  
  //V3
  //const bcrypt = require("bcrypt");

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busque o usuário no banco de dados
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];

    if (!user) {
      console.log("Usuário não encontrado");
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    console.log("Usuário encontrado no banco:", user);

    // Compare a senha fornecida com o hash armazenado
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Senha incorreta");
      return res.status(401).json({ message: "Senha incorreta" });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    console.log("Autenticação bem-sucedida. Token gerado:", token);

    //res.json({ token });
    // Retorna token e dados do usuário
  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  });
  } catch (err) {
    console.error("Erro no servidor:", err.message);
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
});


// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
