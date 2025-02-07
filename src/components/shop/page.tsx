
import React from 'react'
import FeaturesSection from './FeaturesSection'
import ProductGrid from './ProductGrid'
import ShopHero from './shopHero'
import FilterSortBar from './FilterSortBar'
// import ProductPage from '../singleProducts/productpage'

export  const Shop = () => {
  return (
    <div>
       <ShopHero/>
       <FilterSortBar/>
       <ProductGrid/>
        <FeaturesSection/>
        {/* <ProductPage /> */}
       
        
      
    </div>
  )
}


