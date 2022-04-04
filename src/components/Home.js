import React from 'react'
import { CartState } from '../context/Context'

const Home = () => {
    const {state:{products}}=CartState()
    return (
      <div className="home">
        <Filters />
        <div className="productContainer">
          {transformProducts().map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    );
}

export default Home
