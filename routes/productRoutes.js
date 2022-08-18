const express = require('express');

const router = express.Router();

const products = [
    { id: 1, name: 'product1' },
    { id: 2, name: 'product2' },
    { id: 3, name: 'product3' },
];

router.get('/products', (req, res) => {
    res.json(products);
});

module.exports = router;