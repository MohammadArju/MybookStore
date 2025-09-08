const User = require("../models/userModel");



exports.register = async (req, res) => {
   const { name, email, password } = req.body;
  try {
   
    const user = await User.findOne({ email });
    if(user){
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered" , user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
   const { email, password } = req.body; 
   try{
    const user = await User.findOne({email}) 
    if(!user) {
     return res.status(404).json({message: "user note found"})
    }
    if(user.password != password) {
      return res.status(401).json({message: "password Invalid"})
    }
     
    res.status(200).json({message:"user login sucssfully"});
   } catch (err) {
     return res.status(500).json({error: err.message})
   }
}
