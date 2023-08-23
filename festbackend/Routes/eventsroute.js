const express = require('express');
const router = express.Router();/// This Router object of express with the help of that we can create different route

const festmodel = require('../pizzamodel/festmodel');
const participationmodel = require('../pizzamodel/participationmodel')

//GET ALL PIZZA || GET REQUEST

router.get('/getallevent',async(req,res)=>{
        try{
           const event = await festmodel.find();
           //console.log(event);
          // console.log("yaha tak kaam kar raha h");
           //res.send("this is nikhil")
           
           res.send(event);
        }

        
        catch(error){
            res.json({message:error})
        }
})

router.get('/getallparticipant',async(req,res)=>{
    try{
        const participant = await participationmodel.find();
        res.send(participant)   


    }catch(error){
        res.json({message:error})

    }
})

//router.post('/addpizza',async(req,res)=>{
//    //res.send("this is nikhil");
//    const pizza = req.body.pizza
//    try{
//      
//      const newPizza = new pizzamodel({
//        name:pizza.name,
//        image: pizza.image,
//        varients:['small','medium','large'] ,
//       
//        sauce:pizza.sauce,
//        cheese:pizza.cheese,
//        veggies:pizza.veggies,
//        stocks:pizza.stocks,// the stock change
//        description:pizza.description,
//        prices:pizza.prices
//
//      })
//      await newPizza.save()
//       res.status(201).send('New pizza Added')
//       
//    }
//
//    
//    catch(error){
//        res.json({message:error})
//    }
//})
//
//router.post('/getpizzabyid',async(req,res)=>{
//   const pizzaId=req.body.pizzaId
//  try{
//     const pizzas = await pizzamodel.findOne({_id:pizzaId});
//     res.send(pizzas)
//    
//     
//  }
//
//  
//  catch(error){
//      res.json({message:error})
//  }
//})
//
//router.post('/updatepizza', async(req,res)=>{
//  const updatedpizza = req.body.updatedpizza
//  try{
//   const pizza= await pizzamodel.findOne({_id:updatedpizza._id})   
//   pizza.name=updatedpizza.name
////        pizza.image= updatedpizza.image
////       
//       
//        pizza.sauce=updatedpizza.sauce
//        pizza.cheese=updatedpizza.cheese
//        pizza.veggies=updatedpizza.veggies
//        pizza.stocks= updatedpizza.stocks// the change
//        pizza.description=updatedpizza.description
//        pizza.prices=[updatedpizza.prices]
//        await pizza.save()
//        res.status(200).send('pizza updated')
//
//
//     
//  }
//  catch(error){
//    res.status(400).json({message:error})
//
//  }
//})
//
//router.post('/deletepizza',async(req,res)=>{
//      const pizzaId = req.body.pizzaId    
//      try{
//        await pizzamodel.findOneAndDelete({_id:pizzaId})
//        res.status(200).send('pizza Deleted')
//      } catch(error){
//            res.status(404).json({message:error})
//      }
//  
//
//
//})





module.exports= router;