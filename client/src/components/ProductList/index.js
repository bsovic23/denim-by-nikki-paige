import React from 'react';
import { useQuery } from '@apollo/client';

import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';

function ProductList({ currentCategory }) {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];

    function filterProducts() {
      if (!currentCategory) {
        return products;
      }
  
      return products.filter(
        (product) => product.category._id === currentCategory
      );
    }
  
    return (
      <div>
        <h2>Our Products:</h2>
        {products.length ? (
          <div>
            {filterProducts().map((product) => (
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )}
        {loading ? <h1>"loading"</h1> : null}
      </div>
    );
  }
  
  export default ProductList;