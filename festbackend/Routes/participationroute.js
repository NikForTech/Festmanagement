const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const particpants = require('../pizzamodel/participationmodel.js');

// Function to send email
//const sendSuccessEmail = async (email) => {
//  // Create a nodemailer transporter
//  const transporter = nodemailer.createTransport({
//    // Configure the email provider details
//    service: 'Gmail',
//    auth: {
//      user: 'mandalnikhil.20.cs@iite.indusuni.ac.in',
//      pass: 'ezygbzxckmzmqzbn',
//    },
//  });
//
//  // Prepare the email options
//  const mailOptions = {
//    from: 'mandalnikhil.20.cs@iite.indusuni.ac.in',
//    to: email,
//    subject: 'Registration Successful',
//    text: 'you are sucessfully registred to the fest',
//  };
//
//  // Send the email
//   transporter.sendMail(mailOptions,(error,info )=>{
//     if(error){
//      console.log("Error",error)
//     }else{
//      console.log("Email sent"+info.response)
//      res.status(201).json({status:201,info})
//     }
//  });
//};
//
router.post('/register', async (req, res) => {
  const { name, iuno, semester, email,phone,departement } = req.body;
  const newUser = new particpants({ name, iuno, semester, email,phone ,departement});

  try {
    await newUser.save();
    // Send success email to the user
    //await sendSuccessEmail(email);

    res.status(200).json({
      success: true,
      message: 'Registered Successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});



////Login
//router.post('/login',async(req,res)=>{
//    const {email,password} = req.body
//    try{
//        const user = await User.find({email,password})
//        if(user.length>0){
//            const currentUser ={
//                name:user[0].name,
//                phone:user[0].phone,
//                email:user[0].email,
//                isAdmin:user[0].isAdmin,
//                _id:user[0].id
//            }
//            res.status(200).send(currentUser)
//        }else{
//            res.status(400).json({
//                message:'login failed'
//            })
//        }
//    } catch(error){
//        res.status(404).json({
//            message:'something went wrong'
//        })
//    }
//})
//
//router.get('/getalluser', async(req,res)=>{
//  try{
//    const users = await User.find({})// sabhi chiaye
//  res.status(200).send(users)
//
//  }catch(error){
//     res.status(404).json({message:error.stack});
//  }
//
//});
//
//router.post('/deleteuser',async(req,res)=>{
//  const userid = req.body.userid
//  try{
//       await User.findOneAndDelete({_id:userid})
//       res.status(200).send("user Deleted")
//  }
//  catch(error){
//       res.status(404).json({message:error.stack})
//  }
//})
//
//
module.exports = router;
