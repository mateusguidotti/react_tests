import './Navbar.css'
import logo from '/logo.webp'
import instagramIcon from './assets/instagram.svg'
import { useState } from 'react'

function Navbar() {
     const [menuAberto, setMenuAberto] = useState(false);

     const alterarMenu = () => {
          setMenuAberto(!menuAberto);
     }

     const instagramLink = "https://www.instagram.com/oldschool.pizzas/"

     const direcionaInstagram = () => {
          window.open(instagramLink)
     }

     return (
          <div className="nav">
               <img src={logo} alt="Minha logo Pica" className='logo' />

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

               <div className="cta-section">
                    <img src={instagramIcon} alt="logo" className='cta-image' onClick={direcionaInstagram}/>
                    <button className='cta-button'>Compre Agora</button>

               </div>

               <div className="burguer-menu" onClick={alterarMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
               </div>

               <div className={`modal-mobile ${menuAberto ? "aberto" : ""}`}>
                    <ul>
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

                    <span></span>

                    <div className="cta-section-mobile">
                         <img src={instagramIcon} alt="logo" className='cta-image' onClick={direcionaInstagram}/>
                         <button className='cta-button'>Compre Agora</button>
                    </div>
               </div>
          </div>
     )
}

export default Navbar;