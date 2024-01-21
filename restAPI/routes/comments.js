const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

router
  .route("/")
  .get((req, res) => {
    res.json(comments);
  }).post((req,res)=>{
    if(req.body.userId&&req.body.body&&req.body.postId){
        const comment = {id:comments.length , userId: req.body.userId , postId:req.body.postId , body:req.body.body , };
        comments.push(comment);
        res.json(comments);
    }else res.json({ error: "Insufficient Data" });

  });

  router.route('/:id').get((req, res)=>{
    const id = req.params.id;
    const isThere = comments.findIndex(c =>c.id);
    if(isThere>=0){
        comments.forEach(comment=>{
            if(comment.id==id){
                res.json(comment);
            }
        })
    }else res.json({error: "Comment does not exist"});
  }).patch((req,res)=>{//used patch because we are updating and not replacing the entire comment. Otherwise I would have used put
    const id = req.params.id;
    const isThere = comments.findIndex(c =>c.id);
    if(isThere>=0){
        comments.forEach(comment=>{
            if(comment.id==id){
                comment.body=req.body.body;
                res.json(comment);
            }
        })
    }
  }).delete((req,res)=>{
    const id = req.params.id;
    const isThere = comments.findIndex(c =>c.id);
    if(isThere>=0){
        comments.forEach(comment=>{
            if(comment.id==id){
                comment.body=req.body.body;
                res.json(comment);
            }
        })
    }

  })

  module.exports = router;