import logo from '../assets/img/HP.png'
import '../assets/style/header.css'

function Header() {
  return (
    <header>
      <div> 
        <img src={logo}></img>
        <button className='inicio' >INICIO</button>
        <button className='personajes'>PERSONAJES</button>  
        <button className='peliculas'>PELÍCULAS</button>    
        <button className='casas'>CASAS</button>    
        <button className='novedades'>NOVEDADES</button>     
        </div>
    </header>
  );
}
export default Header;
