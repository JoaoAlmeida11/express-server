const express = require('express');

const router = express.Router();

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
];

router.get('/users', (req, res) => {
    // https://stackoverflow.com/questions/19041837/difference-between-res-send-and-res-json-in-express-js
    // res.json calls res.send internally and sets the content-type to application/json and allows to change the default formatting
    res.json(users);
});

router.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});

router.post('/users', (req, res) => {
    const user = {
        id: users[users.length - 1].id + 1,
        name: req.body.name,
    };
    users.push(user);
    res.json(user);
});

router.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    user.name = req.body.name;
    res.json(user);
});

router.delete('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.json(user); // its sending the object that was deleted
});

module.exports = router;