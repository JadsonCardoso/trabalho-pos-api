const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.post('/register', (req, res) => {
    const { username, password, favorecidos } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
    }
    try {
        const user = userService.registerUser({ username, password, favorecidos });
        res.status(201).json({ username: user.username });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
    }
    try {
        const user = userService.authenticateUser(username, password);
        res.json({ username: user.username });
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
});

router.get('/', (req, res) => {
    res.json(userService.listUsers());
});

router.post('/:username/favorecido', (req, res) => {
    const { username } = req.params;
    const { favorecido } = req.body;
    try {
        const user = userService.addFavorecido(username, favorecido);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
