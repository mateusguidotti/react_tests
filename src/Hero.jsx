import './Hero.css'

function Hero(){

     return(
          <div className="hero">
               <div className="left-hero">
                    <h1 className='hero-title'>
                         <span className='color-1'>Sabor</span>
                         <span className='color-2'>Old School</span>
                    </h1>

                    <h2 className="hero-description">
                         Pizzas artesanais feitas com ingredientes selecionados e muito amor. Uma tradição que você sente em cada fatia.
                    </h2>
                    
                    <div className="hero-buttons">
                         <a href="#" className='button button-1'>
                              Ver Cardápio
                         </a>

                         <a href="https://www.instagram.com/oldschool.pizzas/" target='_blank' className="button button-2">
                              Siga no Instagram
                         </a>
                    </div>

                    <div className="hero-info">
                         <div className="info">
                              <div className="info-content">
                                   <span className='info-title'>50+</span>
                                   <span className="info-subtitle">Sabores</span>
                              </div>
                         </div>

                         <div className="info">
                              <div className="info-content">
                                   <span className='info-title'>100%</span>
                                   <span className="info-subtitle">Artesanal</span>
                              </div>
                         </div>

                         <div className="info">
                              <div className="info-content">
                                   <span className='info-title'>4,7</span>
                                   <span className="info-subtitle">Avaliação</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Hero;