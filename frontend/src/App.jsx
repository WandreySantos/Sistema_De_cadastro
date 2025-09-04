import './pages/styles/App.css';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
      <div className="container">
        <Login />
        <Register />
      </div>
    </>
  );
}

export default App;
