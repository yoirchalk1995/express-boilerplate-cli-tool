
    const express = require('express');
    const router = express.Router();

    router.get('/', (req, res) => {  
      //add logic to get data
      res.send(as)
    })
    
    router.post('/', (req, res) => {  
      //add logic to add data
      res.send(a)
    })
   
    router.get('/:id', (req, res) => {
      const aId = req.params.id
      //add logic to get data
      res.send(a)
    })
    
    router.delete('/:id', (req, res) => {
      const aId = req.params.id
      //add logic to delete data
      res.send(a)
    })
    
    router.patch('/:id', (req, res) => {
      const aId = req.params.id
      //add logic to update data
      res.send(a)
    })
      
    module.exports = router;
    