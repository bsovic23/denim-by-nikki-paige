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
            image: 'blanket.PNG',
            category: categories[0]._id,
            price: 50.00,
            quantity: 10
        },
        {
            name: 'Clemson Throw Blanket',
            description: 'clemson blanket for bed',
            image: 'blanket.PNG',
            category: categories[0]._id,
            price: 51.00,
            quantity: 11
        },
        {
            name: 'BAMA Throw Blanket',
            description: 'Bama blanket for bed',
            image: 'blanket.PNG',
            category: categories[0]._id,
            price: 52.00,
            quantity: 11
        },
        {
            name: 'Pillow',
            description: 'bama pillow for bed',
            image: 'pillow.PNG',
            category: categories[1]._id,
            price: 29.00,
            quantity: 14
        },
        {
            name: 'Pillow 2',
            description: 'pillow 2',
            image: 'pillow.PNG',
            category: categories[1]._id,
            price: 30.00,
            quantity: 15
        },
        {
            name: 'Pillow 3',
            description: 'pillow 3',
            image: 'pillow.PNG',
            category: categories[1]._id,
            price: 31.00,
            quantity: 16
        },
        {
            name: 'jacket',
            description: 'jacket 1',
            image: 'jacket.PNG',
            category: categories[2]._id,
            price: 42.00,
            quantity: 20
        },
        {
            name: 'jacket 2',
            description: 'jacket 2 description',
            image: 'jacket.PNG',
            category: categories[2]._id,
            price: 43.00,
            quantity: 21
        },
        {
            name: 'jacket3',
            description: 'jacket 3 descpriton',
            image: 'jacket.PNG',
            category: categories[2]._id,
            price: 44.00,
            quantity: 22
        },
        {
            name: 'candle',
            description: 'candle 1 descritpion',
            image: 'candle.PNG',
            category: categories[3]._id,
            price: 12.00,
            quantity: 06
        },
        {
            name: 'CANDLE 2',
            description: 'candle 2 description',
            image: 'candle.PNG',
            category: categories[3]._id,
            price: 13.00,
            quantity: 07
        },
        {
            name: 'CANDLE 3',
            description: 'candle 3 descripton',
            image: 'candle.PNG',
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

