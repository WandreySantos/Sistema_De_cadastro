import '../pages/styles/loginpage.css';
import Button from './button';

export default function Banner({ h1, setManssage, button, onClick }) {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>{h1}</h1>
        <p>{setManssage}</p>
        <Button type="button" message={button} onClick={onClick} />
      </div>
    </div>
  );
}
