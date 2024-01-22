import mongoose,{Schema} from "mongoose"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema=Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true //if you want to searchable this field then it will be searchable in db.
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true //if you want to searchable this field then it will be searchable in db.
    },
    avatar:{
        type:String,//cloudinary url
        required:true,
    
    },
    covarimage:{
        type:String,
        require:true,
      
    },
    watchhistory:{
        type:Schema.Types.ObjectId,
        ref:"video"
        
    },
password :
     { 
        type:String,
        require:[true,"password is required"],
        },
        refreshToken:{
            type:String
        },

},{timestamps:true})


userSchema.pre("save",async function(next){//we cant user here arrow func as a callback bcz this doesnt keep context in arrow.

    // its encrypting our password before save the data into db
    if(!this.isModified("password")){//it will check password is modified or not.isModified is standar
    return next()
    }
            //but here the problem is whenever data will be save every time this hook will be run but we dont need when password is not changed or update again
    this.password=await bcrypt.hash(this.password,10);


    next();

})//pre is a hook or middleware of mongoose & save is event means it will execute before user data save.
userSchema.methods.isPasswordCorrect=async function(password ){
    return await bcrypt.compare(password,this.password)//its cryptography so it will be take time to execute bcz computation power will be required 
//it will return result true if incoming password is matched with db password. compare(plain text password,encrypted password)
}//to design custom method

userSchema.methods.generateAccessToken= function(){ //remove again async
    return jwt.sign({
        _id:this._id,
        username:this.username,
        fullName:this.fullName,
        email:this.email
    },process.env.Access_token_secret,
    {
        expiresIn:process.env.Access_token_Expiry
    })
}
userSchema.methods.generateRefreshToken= function(){ //error:- remove async 
    return jwt.sign({
        _id:this._id,
       //doesnt need pending data like access token bcz refresh token will be changed again and again
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY //error:-i have wrote REFRESH_TOKEN_EXPIRY instead of REFRESH_TOKEN_SECRET and REFRESH_TOKEN_SECRET istead of  REFRESH_TOKEN_EXPIRY.
    })
}

// jwt.sign()
 const User=mongoose.model("User",userSchema);
 export {User}