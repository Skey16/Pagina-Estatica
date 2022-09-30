import '../assets/style/body.css'
import body from '../assets/img/HARRYPOTTER.jfif'
import Personajes from './Personajes';


function Body() {

    return (
        <div className="container">
             <img src={body}></img>
             <button className='ver' name='button'>VER MÁS</button> 
        </div>

    );
  }
  

  export default Body;
