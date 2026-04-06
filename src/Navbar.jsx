import './Navbar.css'
import logo from './assets/react.svg'

function Navbar(){
     return(
          <div className="nav">
               <img src={logo} alt="Minha logo Pica" className='logo'/>

               <ul className='nav-list'>
                    <li>
                         <a href="#">Início</a>
                    </li>
                    <li>
                         <a href="#">Cardápio</a>
                    </li>
                    <li>
                         <a href="#">Sobre</a>
                    </li>
                    <li>
                         <a href="#">Contato</a>
                    </li>
               </ul>
               
               <button className='cta-button'>Compre Agora</button>
          </div>
     )
}

export default Navbar;