// Button.jsx
import './styles/button.css';

export default function Button({ message, type, onClick, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {message}
    </button>
  );
}
