import  express from 'express';
import db from "../db/conn.mjs";
import { ObjectId } from 'mongodb';
import Grade from '../models/grade.mjs';

const router = express.Router();

//First 50 grades
router.get('/', async (req, res)=>{
let grades = await Grade.find().limit(50);
res.status(200).json({data:grades});

})


// Create a single grade entry
router.post('/', async (req,res) =>{
    let newDocument= req.body;
 await  Grade.create({scores:newDocument.scores,
class_id:newDocument.class_id, learner_id:newDocument.learner_id});   
  res.status(200);
  
  // let collection = await db.collection('grades');
  
  // let newDocument = req.body;

    // let result = await collection.insertOne(newDocument);
    // res.send(result).status(204);
})

// Get a single grade entry
router.get("/:id", async (req, res) => {
  let foundGrade = await Grade.findById(req.params.id);
  res.send("")

    // let collection = await db.collection('grades');
    // let query = {_id: new ObjectId(req.params.id)};
    // let result = await collection.findOne(query);

    // // minor error handling
    // if (!result) res.send("Not found").status(404);
    // else res.send(result).status(200);
})

// Add a score to a grade entry
router.patch("/:id/add", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { _id: ObjectId(req.params.id) };
  
    let result = await collection.updateOne(query, {
      $push: { scores: req.body }
    });
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  })
  
  // Remove a score from a grade entry
  router.patch("/:id/remove", async (req, res) => {
    let collection = await db.collection("grades");
    let query = { _id: ObjectId(req.params.id) };
  
    let result = await collection.updateOne(query, {
      $pull: { scores: req.body }
    })
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });

  // Delete a single grade entry
  router.delete("/:id", async (req, res) => {
  await Grade.findByIdAndDelete(req.params.id);
   
    res.status(204).json({
      data: "Item was deleted"
    })
    
    // let collection = await db.collection("grades");
    // let query = { _id: ObjectId(req.params.id) };
    // let result = await collection.deleteOne(query);
  
    // if (!result) res.send("Not found").status(404);
    // else res.send(result).status(200);
  });

// Student/Learner route for backwards compatibility
router.get("/student/:id", async (req, res) => {
    res.redirect(`../learner/${req.params.id}`)
  })

// Get a learner's grade data
router.get("/learner/:id", async (req, res) => {
let search = {learner_id:Number(req.params.id)};
  let Learner = await Grade.find(search);
  res.status(200).json({
    data: Learner
  })

    // let collection = await db.collection("grades")
    // let query = { learner_id: Number(req.params.id) }
    
    // // Check for class_id parameter
    // if (req.query.class) query.class_id = Number(req.query.class)
  
    // let result = await collection.find(query).toArray()
  
    // if (!result) res.send("Not found").status(404)
    // else res.send(result).status(200)
  })

// Delete a learner's grade data
router.delete("/learner/:id", async (req, res) => {
  let query = { learner_id: Number(req.params.id) }
  await Grade.findOneAndDelete(query);
  res.send("")
  
  // let collection = await db.collection("grades")
  //   let query = { learner_id: Number(req.params.id) }
  
  //   let result = await collection.deleteOne(query)
  
  //   if (!result) res.send("Not found").status(404)
  //   else res.send(result).status(200)
  })

//Get a class's grade data
router.get("/class/:id", async (req,res) => {

  let search = {class_id:Number(req.params.id)};
  let Learner = await Grade.find(search);
  res.status(200).json({
    data: Learner
  })


  //   let collection = await db.collection("grades")
  //   let query = {class_id: Number(req.params.id)}

  //   // Check for learner_id parameter
  // if (req.query.learner) query.learner_id = Number(req.query.learner)

  //   let result = await collection.find(query).toArray()

  //   if (!result) res.send("Not found").status(404)
  //   else res.send(result).status(200)
})

// Update a class id
router.patch("/class/:id", async (req, res) => {
    let collection = await db.collection("grades")
    let query = { class_id: Number(req.params.id) }
  
    let result = await collection.updateMany(query, {
      $set: { class_id: req.body.class_id }
    })
  
    if (!result) res.send("Not found").status(404)
    else res.send(result).status(200)
  })
  
  // Delete a class
  router.delete("/class/:id", async (req, res) => {
    
    let query = { class_id: Number(req.params.id) }
    await Grade.deleteMany(query);
    res.send("")
    
    
    
    
    lass_id: Number(req.params.id) 
  })

export default router