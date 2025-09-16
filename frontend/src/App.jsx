import './pages/styles/App.css';
import { useState } from 'react';
import Login from './pages/login';
import Register from './pages/register';
import Banner from './components/banner';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin); // alterna entre Login e Register
  };

  return (
    <div className="container">
      <Banner
        h1="Bem-vindo"
        setManssage={showLogin ? 'Entre na sua conta' : 'Crie sua conta agora'}
        button={showLogin ? 'Ir para Registro' : 'Ir para Login'}
        onClick={toggleForm}
      />
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;
