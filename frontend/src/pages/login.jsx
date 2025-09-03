import { useState } from "react";
import "../styles/login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const requisição_login = await fetch(`${API_URL}` + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await requisição_login.json();
      console.log(data);
      
      if (requisição_login.ok) {
        setMessage("Login realizado com sucesso!");
        // aqui você poderia salvar token ou redirecionar
      } else {
        setMessage(data.message || "Erro ao logar");
      }
    } catch (err) {
      setMessage("Erro ao conectar com o servidor");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
