const mongoose=require("mongoose")

const BugSchema=mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    source: { type: String, required: true },
    severity: { type: String, enum: ['Critical', 'Major', 'Medium', 'Low'], required: true },
    raised_by: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
   })
     
   const BugModules=mongoose.model("bug",BugSchema)
   
   module.exports={BugModules}