import { useState } from 'react';
import './styles/login.css';
import Input from '../components/inPut';
import Button from '../components/button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setMessage('✅ Login realizado com sucesso!');
      } else {
        setMessage(data.message || '❌ Erro ao logar');
      }
    } catch (err) {
      setMessage('⚠️ Erro ao conectar com o servidor');
      console.error(err);
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          icon="📧"
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          icon="🔒"
        />
        <Button type="submit" massage={message || 'Logar'} />
      </form>
    </div>
  );
}
