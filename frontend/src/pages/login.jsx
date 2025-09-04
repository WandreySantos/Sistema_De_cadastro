import { useState } from 'react';
import './styles/login.css';
import Input from '../components/inPut';
import Button from '../components/button';
import Modal from '../components/modal';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nwpassword, setNewpassword] = useState(''); // senha temporária
  const [message, setMessage] = useState('');
  const [messageModal, setNmessegeModal] = useState(''); // senha temporária
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
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
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_URL}/setPassword`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail, password: nwpassword }), // senha temporária
      });
      console.log('Reset password for:', resetEmail);
      setNmessegeModal('🔗 Link de redefinição enviado!');
    } catch (err) {
      setNmessegeModal('⚠️ Erro ao conectar com o servidor');
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
        <Button type="submit" message={message || 'Logar'} />

        <div className="forget">
          <a href="#!" onClick={() => setIsModalOpen(true)}>
            Esqueci minha senha
          </a>
        </div>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Resetar Senha</h3>
        <p>Insira seu email para receber o link de redefinição de senha.</p>
        <form onSubmit={handleResetPassword}>
          <Input
            type="email"
            placeholder="Seu email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
            icon="📧"
          />
          <Button type="submit" message={messageModal || 'Enviar link'} />
        </form>
      </Modal>
    </div>
  );
}
