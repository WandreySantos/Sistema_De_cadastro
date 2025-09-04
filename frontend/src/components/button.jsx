import './styles/button.css';
export default function Button({ massage, type }) {
  return <button type={type}>{massage}</button>;
}
