import './styles/button.css';
export default function Button({ message, type }) {
  return <button type={type}>{message}</button>;
}
