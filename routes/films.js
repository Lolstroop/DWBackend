const express = require('express');
const router = express.Router();
const Film = require('../models/Film');

router.get('/', (req, res) => {
    res.send('We are on films');
});

router.post('/', (req,res) => {
    console.log(req.body);
}); 


module.exports = router;