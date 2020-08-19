const mongoose = require("mongoose")
const validator = require("validator")
const studentSchema = new mongoose.Schema(
    {
        //country: String,
        The_country: 
        {
            type: String,
            trim: true,
            lowercase: true,
            
        },
        The_fname: 
        {
            type:String,
            validator(value){
                if(!validator.isAlpha(value)){
                    throw new Error('name is not valid!')
                }
            },
        },
        The_lname: 
        {
            type:String,
            validator(value){
                if(!validator.isAlpha(value)){
                    throw new Error('name is not valid!')
                }
            }  
        },
        The_email: 
        {
            type: String,
            trim: true,
            lowercase: true,
            validator(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is not valid!')
                }
            }
        },
        The_password: 
        {
            required: true,
            type: String,
            validator(value){
                if(!validator.isLength(value,{min:8,max: undefined})){
                    throw new Error('password is not valid!')
                }
            }
            
        },
        The_confirm_password: 
        {
            type: String,
            trim: true,
            lowercase: true, 
        },
        The_city: 
        {
            type: String,
            trim: true,
            lowercase: true, 
        },
        The_mpn:
        {
            type: String,
            trim: true,
            lowercase: true, 
        },
        The_state: 
        {
            type: String,
            trim: true,
            lowercase: true, 
        },
        The_address: 
        {
            type: String,
            trim: true,
            lowercase: true, 
        },
        The_ZIP: 
        {
            type: String,
            trim: true,
            lowercase: true, 
        },
        
    }
)
module.exports = mongoose.model("Student", studentSchema)