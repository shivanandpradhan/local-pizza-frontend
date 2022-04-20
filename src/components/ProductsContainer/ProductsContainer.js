import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import Loader from '../Loader/Loader'
import ProductItem from '../ProductItem/ProductItem'
import './ProductsContainer.css'

const ProductsContainer = () => {

  const dispatch = useDispatch()
  const { loading, products } = useSelector(state => state.products)

  const [pizzaItems, setPizzaItems] = useState("")
  const [sortActive, setSortActive] = useState("")
  const [pizzaTypeActive, setPizzaTypeActive] = useState("")

  const filterVegProducts = (event) => {
    let vegPizzas = products.filter(product => product.isVeg)

    setPizzaTypeActive("veg")
    setPizzaItems(vegPizzas)
    setSortActive("")
  }

  const filterNonVegProducts = (event) => {
    let nonVegPizzas = products.filter(product => product.isVeg == false)
    
    setPizzaTypeActive("nonVeg")
    setPizzaItems(nonVegPizzas)
    setSortActive("")
  }

  const sortByPrice = (event) => {
    pizzaItems.sort((a, b) => a.price - b.price);

    setSortActive("price")
    setPizzaItems(pizzaItems)
  }

  const sortByRating = (event) => {
    pizzaItems.sort((a, b) => b.rating - a.rating);

    setSortActive("rating")
    setPizzaItems(pizzaItems)
  }

  const sortByPriceAndRating = (event) => {
    pizzaItems.sort((a, b) => {
      if (a.price === b.price){
        return b.rating - a.rating;
      }
      return a.price - b.price;
    });

    setSortActive("both")
    setPizzaItems(pizzaItems)
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect( () => {
    if(products){
      setPizzaItems(products)
    }
  },[products])

  return (
    loading ? <Loader /> : (
      <Fragment>
        <div id="container" className="products-container">
          <h2 className="products-heading">Products</h2>
          <div className='filterbox-products-container'>
            <div className="filter-box">
              <h3>Type</h3>
              <div className="filter-buttons">
                <button onClick={filterVegProducts} className={pizzaTypeActive === "veg" ? "bg-green text-white" : ""}>Veg</button>
                <button onClick={filterNonVegProducts} className={pizzaTypeActive === "nonVeg" ? "bg-crimson text-white": ""}>Non Veg</button>
              </div>
            </div>

            <div className="sort-box">
              <h3>Sort</h3>
              <div className="sort-buttons">
                <button onClick={sortByPrice} className={sortActive === "price" ? "bg-tomato text-white" : ""}>Price</button>
                <button onClick={sortByRating} className={sortActive === "rating" ? "bg-tomato text-white" : ""}>Rating</button>
                <button onClick={sortByPriceAndRating} className={sortActive === "both" ? "bg-tomato text-white" : ""}>Both</button>
              </div>
            </div>
          </div>
          <div className="products">
            {pizzaItems && pizzaItems.map(product => <ProductItem key={product.id} product={product} />)}
          </div>
        </div>
      </Fragment>
    )
  )
}

export default ProductsContainer;