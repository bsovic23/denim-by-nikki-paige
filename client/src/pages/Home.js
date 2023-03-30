import React, { useState } from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from "../components/ProductList";

const Home = () => {
    const [currentCategory, setCategory] = useState('');

    return(
        <div>
            <CategoryMenu setCategory={setCategory} />
            <ProductList currentCategory={currentCategory} />
        </div>
    )
};

export default Home;