import './ProductSection.css'
import Card from './Card'

function ProductSection() {

     const listaDePizzas = [
          { id: 1, name: "Calabresa", description: "Mussarela e calabresa", price: 43.23},
          { id: 2, name: "Quatro Queijos", description: "Mussarela, provolone, parmesão e gorgonzola", price: 20.10},
          { id: 3, name: "Marguerita", description: "Mussarela, tomate e manjericão", price: 79.00}
     ];
     
     return (
          <div className='products-section'>
               <div className='section-header'>
                    <h2>CARDÁPIO</h2>
               </div>

               <div className="cards-container">
                    {listaDePizzas.map((pizza) =>(
                         <Card
                              key={pizza.id}
                              name={pizza.name}
                              description={pizza.description}
                              price={pizza.price}
                         />
                    ))}
               </div>
          </div>
     )
}

export default ProductSection;