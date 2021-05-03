const express = require('express');

const Entity = require('../models/entitys');

const router = express.Router();

router.get('/', async (req,res)=>{
    try {
        const entitys = await Entity.find();
        res.json(entitys)
    } catch (error) {
        res.json({message:error})
    }
});
router.post('/',(req,res)=>{    
    const entitys = new Entity({
        column : req.body.column,
        columnN : req.body.columnN,
        x : req.body.x,
        row : req.body.row,
        y : req.body.y,
        color : req.body.color,
        type : req.body.type
});

    entitys.save()
    .then(data=>{
        res.json(data);
        console.log("Posted data")
    })
    .catch(err => {
        res.json({message:err})
    })
});
router.delete('/:entityId',async(req,res)=>{
    try {
        const removedEntity = await Entity.remove({_id: req.params.entityId})    
        res.json(removedEntity) 
    } catch (error) {
        res.json(error)
    }
});
router.delete('/',async(req,res)=>{
    try {
        const removedEntity = await Entity.remove()    
        res.json(removedEntity) 
    } catch (error) {
        res.json(error)
    }
});
module.exports=router;