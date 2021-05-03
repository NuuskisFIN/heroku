const express = require('express');

const Post = require('../models/posts');

const router = express.Router();

//get all posts
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.json({message:error})
    }
});

//submit post
router.post('/',(req,res)=>{    
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        res.json({message:err})
    })
});
//get specific post
router.get('/:postId', async(req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
        
    } catch (error) {
        res.json(error)
    }
})
//delete post
router.delete('/:postId',async(req,res)=>{
    try {
        const removedPost = await Post.remove({_id: req.params.postId})    
        res.json(removedPost) 
    } catch (error) {
        res.json(error)
    }
});

router.patch('/:postId',async(req,res)=>{
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set:{title:req.body.title} }
            )    
        res.json(updatedPost) 
    } catch (error) {
        res.json(error)
    }
});

module.exports = router;