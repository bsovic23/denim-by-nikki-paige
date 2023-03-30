import React, { useState } from 'react';
import CategoryMenu from '../components/CategoryMenu';

const Home = () => {
    const [currentCategory, setCategory] = useState('');

    return(
        <div>
            <CategoryMenu setCategory={setCategory} />
        </div>
    )
};

export default Home;