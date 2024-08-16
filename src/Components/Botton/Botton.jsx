import  { useContext } from 'react'
import { ThemeContext } from "../Darkmode/Darkmode"
import './Botton.css';

function Botton() {

  const context = useContext(ThemeContext);

  return (
    <div className="toggle">
      Dark Mode
      <input className="toggle" id="modedark" type="checkbox" onClick={context.toggleThemeMode} />
      <label htmlFor="modedark"></label>
    </div>

  )
}

export default Botton