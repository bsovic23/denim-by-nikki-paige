const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'blankets'},
        { name: 'pillows'},
        { name: 'jackets'},
        { name: 'candles'}
    ]);

    console.log('categories are seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'URI Throw Blanket',
            description: 'URI blanked for bed party decorating',
            image: '',
            category: categories[0]._id,
            price: 50.00,
            quantity: 10
        },
        {
            name: 'Clemson Throw Blanket',
            description: '',
            image: '',
            category: categories[0]._id,
            price: 51.00,
            quantity: 11
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[0]._id,
            price: 52.00,
            quantity: 11
        },
        {
            name: 'Pillow',
            description: '',
            image: '',
            category: categories[1]._id,
            price: 29.00,
            quantity: 14
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[1]._id,
            price: 30.00,
            quantity: 15
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[1]._id,
            price: 31.00,
            quantity: 16
        },
        {
            name: 'jacket',
            description: '',
            image: '',
            category: categories[2]._id,
            price: 42.00,
            quantity: 20
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[2]._id,
            price: 43.00,
            quantity: 21
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[2]._id,
            price: 44.00,
            quantity: 22
        },
        {
            name: 'candle',
            description: '',
            image: '',
            category: categories[3]._id,
            price: 12.00,
            quantity: 06
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[3]._id,
            price: 13.00,
            quantity: 07
        },
        {
            name: '',
            description: '',
            image: '',
            category: categories[3]._id,
            price: 14.00,
            quantity: 08
        }
    ]);

    console.log('Products are seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
          {
            products: [products[0]._id, products[0]._id, products[1]._id]
          }
        ]
      });
    
      await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
      });
    
      console.log('users seeded');
    
      process.exit();
});

