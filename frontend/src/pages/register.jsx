import { useState } from 'react';
import './styles/register.css';
import Input from '../components/inPut';
import Button from '../components/button';
export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('❌ As senhas não coincidem');
      return;
    }
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setMessage('✅ Registro realizado com sucesso!');
      } else {
        setMessage(data.message || '❌ Erro ao registrar');
      }
    } catch (err) {
      setMessage('⚠️ Erro ao conectar com o servidor');
      console.error(err);
    }
  };

  return (
    <div className="Register-box">
      <h2>Cadastre-se</h2>
      <form onSubmit={handleRegister}>
        <Input
          type="text"
          placeholder="Nome de usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          icon="👤"
        />
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
        <Input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          icon="🔒"
        />
        <Button type="submit" message={message || 'Registre-se'} />
      </form>
    </div>
  );
}
