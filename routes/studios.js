const express = require('express');


const router = express.Router();
const Studio = require('../models/Studio');



router.get('/', (req, res) => {
    res.send('We are on studios');
});

router.post('/', (req,res) => {
    console.log(req.body);
});  


/*
router.get('/specific', (req,res) => {
    res.send('Specific studio');
});
*/


module.exports = router;
