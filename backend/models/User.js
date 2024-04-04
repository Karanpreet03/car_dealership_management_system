const mongoose =require('mongoose')

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:['admin','salePerson'],
        default:"salePerson"
    }
})

const User =new mongoose.model('User',schema)

module.exports = User