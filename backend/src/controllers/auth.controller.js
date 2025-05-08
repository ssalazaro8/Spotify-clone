import { User } from "../models/user.model.js";

export const authCallback = async(req, res, next) => {
    try{
      const {id, firstName, lastName, imageUrl} = req.body;
      // Check if the user already exists in the database
      const user = await User.findOne({ clerkId: id });
  
      if (!user) {
      //sign up
       await User.create({
          clerkId: id,
          fullname: `${firstName} ${lastName}`,
          imageUrl
        });
        res.status(200).json({success: true});
      }
    }
    catch(error){
      console.log("error in auth callback", error);
      next(error);
    }
  }