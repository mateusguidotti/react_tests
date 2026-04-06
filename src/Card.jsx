import './Card.css'

function Card({name, description, price}){
     return(
          <div className="card">
               <h3 className="product-name">{name}</h3>
               <p className="description">{description}</p>
               <div className="card-footer">
                    <span className="price">R$ {price}</span>
                    <button className="buy-button">Comprar</button>
               </div>
          </div>
     )
}

export default Card;