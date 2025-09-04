import './styles/input.css';
export default function Input({
  type,
  placeholder,
  value,
  onChange,
  required,
  icon,
}) {
  return (
    <div className="input-wrapper">
      {icon && <span className="input-icon">{icon}</span>}
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
