
import BotaoTrocaTema from "../Botton/Botton"
import "./Title.css"

function Title() {
  return (
    <header>
      <div className='titulo-principal'>
        <h1>Social Media Dashboard</h1>
        <h4>Total Followers: 23,004</h4>
      </div>
      <div>
      <BotaoTrocaTema ></BotaoTrocaTema>
      </div>
    </header>
  )
}

export default Title